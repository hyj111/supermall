// 防抖函数
export function debouce(fn, wait) {
    var timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}