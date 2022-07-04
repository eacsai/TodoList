import { useEffect, useCallback, useRef } from 'react';

export default function useEventCallback(fn: any) {
  const ref = useRef(fn);

  useEffect(() => {
    // 每次re-render都会执行这里（逻辑简不影响性能），保证fn永远是最新的
    ref.current = fn;
  }, []);

  return useCallback(() => {
    ref.current?.(); // 通过ref.current访问最新的回调函数
  }, []);
}
