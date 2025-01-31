module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375,     // 视窗的宽度，对应我们设计稿的宽度
            viewportHeight: 667,    // 视窗的高度，对应我们设计稿的高度（也可以不配置）
            unitPrecision: 5,       // 指定px转换为视窗单位值得小数位置（很多时候无法整除）
            viewportUnit: 'vw',     // 指定需要转换成的视窗单位
            selectorBlackList: ['ignore', 'tab-bar','tab-bar-item'],  // 指定不需要转换的
            minPixelValue: 1,       // 小于或等于1px不转换视窗单位
            mediaQuery: false       // 允许再媒体查询中转换px
        },
    }
}