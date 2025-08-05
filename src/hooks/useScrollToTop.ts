// hook: 滚动到页面顶端
import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('执行scrolltotop hook');
  }, []);
};
