import { useCallback,useEffect,useRef} from 'react'
/**
 * @description: 防抖hooks
 * @param {*} fn 执行函数
 * @param {*} delay 延迟执行
 * @param {*} deps  更新依赖
 * @return {*}
 */
export function useThrottle(fn, delay,deps){
    const { current } = useRef({ fn, timer: null });
    useEffect(function () {
        current.fn = fn
    }, [fn])
  
    return useCallback(function f(...args) {
        if (current.timer) {
            clearTimeout(current.timer)
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args)
        }, delay)
    },deps)
}