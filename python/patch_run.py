#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量启动当前目录下的所有Python文件
"""

import os
import sys
import subprocess
import time
from pathlib import Path
import threading
import signal

class BatchPythonRunner:
    def __init__(self):
        self.processes = []
        self.running = True
        
    def find_python_files(self, directory=".", target_files=None):
        """查找指定的Python文件或当前目录下的所有.py文件"""
        if target_files:
            # 使用指定的文件列表
            python_files = []
            for file_name in target_files:
                if not file_name.endswith('.py'):
                    file_name += '.py'
                file_path = os.path.join(directory, file_name)
                if os.path.exists(file_path):
                    python_files.append(file_path)
                else:
                    print(f"警告: 文件 {file_name} 不存在")
            return python_files
        else:
            # 查找当前目录下的所有.py文件
            python_files = []
            for file in os.listdir(directory):
                if file.endswith('.py') and file != os.path.basename(__file__):
                    python_files.append(os.path.join(directory, file))
            return python_files
    
    def run_python_file(self, file_path):
        """运行单个Python文件"""
        try:
            print(f"正在启动: {file_path}")
            process = subprocess.Popen(
                [sys.executable, file_path],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                bufsize=1,
                universal_newlines=True
            )
            self.processes.append(process)
            
            # 实时输出进程的stdout和stderr
            def output_reader(pipe, prefix):
                for line in pipe:
                    if self.running:
                        print(f"[{prefix}] {line.rstrip()}")
            
            stdout_thread = threading.Thread(
                target=output_reader, 
                args=(process.stdout, f"{os.path.basename(file_path)}-OUT")
            )
            stderr_thread = threading.Thread(
                target=output_reader, 
                args=(process.stderr, f"{os.path.basename(file_path)}-ERR")
            )
            
            stdout_thread.daemon = True
            stderr_thread.daemon = True
            stdout_thread.start()
            stderr_thread.start()
            
            return process
        except Exception as e:
            print(f"启动 {file_path} 时出错: {e}")
            return None
    
    def run_all_python_files(self, target_files=None):
        """批量运行指定的Python文件"""
        python_files = self.find_python_files(target_files=target_files)
        
        if not python_files:
            print("当前目录下没有找到Python文件")
            return
        
        print(f"找到 {len(python_files)} 个Python文件:")
        for file in python_files:
            print(f"  - {file}")
        
        print("\n开始批量启动...")
        
        # 启动所有Python文件
        for file_path in python_files:
            self.run_python_file(file_path)
            time.sleep(0.5)  # 稍微延迟，避免同时启动太多进程
        
        print(f"\n已启动 {len(self.processes)} 个进程")
        print("按 Ctrl+C 停止所有进程")
        
        try:
            # 等待所有进程完成
            while self.processes and any(p.poll() is None for p in self.processes):
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n收到中断信号，正在停止所有进程...")
            self.stop_all_processes()
    
    def stop_all_processes(self):
        """停止所有进程"""
        self.running = False
        for process in self.processes:
            try:
                if process.poll() is None:  # 进程还在运行
                    process.terminate()
                    print(f"已终止进程: {process.args[1]}")
            except Exception as e:
                print(f"终止进程时出错: {e}")
        
        # 等待进程完全终止
        for process in self.processes:
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                print(f"强制终止进程: {process.args[1]}")
        
        print("所有进程已停止")

def main():
    """主函数"""
    # 在这里指定要启动的Python文件列表
    # 可以只写文件名（不需要.py后缀），也可以写完整路径
    target_files = [
        "demo_wenben1",  # 会自动添加.py后缀
        "demo_wenben2",          # 会自动添加.py后缀
        "demo_wenben3"          # 会自动添加.py后缀
        # "other_script",  # 可以取消注释添加更多文件
    ]
    
    # 如果target_files为空列表，则会启动当前目录下所有.py文件
    # 如果想启动所有文件，可以设置为 None 或 []
    
    runner = BatchPythonRunner()
    
    # 设置信号处理
    def signal_handler(signum, frame):
        print("\n收到信号，正在停止...")
        runner.stop_all_processes()
        sys.exit(0)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    try:
        runner.run_all_python_files(target_files=target_files)
    except Exception as e:
        print(f"运行时出错: {e}")
        runner.stop_all_processes()

if __name__ == "__main__":
    main()
