'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useInView } from '@/hooks/useInView';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactUs() {
  useScrollToTop();
  const router = useRouter();

  // 动画相关的hooks
  const [heroRef, isHeroInView] = useInView({ threshold: 0.3 });
  const [contactRef, isContactInView] = useInView({ threshold: 0.2 });
  const [formRef, isFormInView] = useInView({ threshold: 0.2 });
  const [mapRef, isMapInView] = useInView({ threshold: 0.2 });

  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // 联系方式数据
  const contactInfo = [
    {
      title: '联系电话',
      content: '400-810-0504',
      subContent: '工作日 9:00-18:00',
      icon: '📞',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '邮箱地址',
      content: 'service@h3c.com',
      subContent: '24小时内回复',
      icon: '📧',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: '公司地址',
      content: '北京市海淀区中关村',
      subContent: '欢迎预约到访',
      icon: '📍',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: '技术支持',
      content: '7×24小时',
      subContent: '全天候技术支持',
      icon: '🛠️',
      color: 'from-red-500 to-pink-500'
    }
  ];

  // 服务类型选项
  const serviceOptions = [
    '应用服务',
    '数据服务',
    '模型服务',
    '运维服务',
    '技术咨询',
    '其他'
  ];

  // 办公地点数据
  const offices = [
    {
      city: '北京总部',
      address: '北京市海淀区中关村软件园',
      phone: '010-82776666',
      email: 'beijing@h3c.com'
    },
    {
      city: '上海分公司',
      address: '上海市浦东新区张江高科技园区',
      phone: '021-58998888',
      email: 'shanghai@h3c.com'
    },
    {
      city: '深圳分公司',
      address: '深圳市南山区科技园南区',
      phone: '0755-26551188',
      email: 'shenzhen@h3c.com'
    }
  ];

  // 表单处理
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('感谢您的留言！我们将在24小时内联系您。');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // 3秒后清除提示信息
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* 联系方式信息 */}
      <section
        ref={contactRef}
        className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
          isContactInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              多种联系方式
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              选择最适合您的方式与我们取得联系，我们将竭诚为您服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg text-gray-700 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-gray-500 text-sm">{info.subContent}</p>
              </div>
            ))}
          </div>

          {/* 办公地点 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              全国办公地点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="text-center p-6 border-2 border-gray-100 rounded-xl hover:border-red-200 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {office.city}
                  </h4>
                  <p className="text-gray-600 mb-2">{office.address}</p>
                  <p className="text-gray-600 mb-2">电话：{office.phone}</p>
                  <p className="text-gray-600">邮箱：{office.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单 */}
      <section
        id="contact-form"
        ref={formRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          isFormInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              在线咨询表单
            </h2>
            <p className="text-xl text-gray-600">
              填写下方表单，我们的专家将在24小时内与您联系
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="请输入公司名称"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    邮箱地址 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="请输入邮箱地址"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    联系电话 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="请输入联系电话"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  感兴趣的服务
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">请选择服务类型</option>
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  详细需求 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="请详细描述您的需求..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? '提交中...' : '提交咨询'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 地图区域 */}
      <section
        ref={mapRef}
        className={`py-20 bg-gray-100 transition-all duration-1000 ${
          isMapInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">找到我们</h2>
            <p className="text-xl text-gray-600">
              欢迎到访我们的办公室，与专家面对面交流
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* 地图占位符 */}
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  北京总部
                </h3>
                <p className="text-gray-600">北京市海淀区中关村软件园</p>
                <p className="text-sm text-gray-500 mt-4">
                  *实际地图将显示准确位置
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">还有疑问？</h2>
          <p className="text-xl mb-8 opacity-90">
            查看我们的常见问题解答，或了解更多服务详情
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/about-us')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              了解更多
            </button>
            <button
              onClick={() => router.push('/pro-services/data-service')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              查看服务
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
