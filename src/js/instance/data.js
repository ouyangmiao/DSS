
/**
 * 一些全局数据，统一放在这里
 * 外部引用通过 global_data
 */

export default {

    // 页面完整数据，会提给后端
    wholeData: {
        data: []
    },

    // view区创建出来的所有数据，会被存到本地存储中
    store: {
        // 一键生成导航的数据
        nav: {
            id: '',     // 导航的id view-xxxxxxxx
            data: []    // 每个模块对应的导航数据
        },
        html: '',
        data: {}
    },


    // view区是否为空，默认为空
    // 为空时显示占位字符"请拖动左侧模块至此区域"
    isViewEmpty: true,

    // view区dom元素是否更新：新增、上移、下移、删除
    isDomUpdate: false,

    // 模块是否被成功拖拽到右侧view区，默认未被成功拖拽
    isDragSuccess: false,

    // 是否显示设置面板区，默认不显示
    isSettingPanelShow: false,

    // 色板配置
    colorPicker: {
        preferredFormat: "hex",
        showPalette: true,
        togglePaletteOnly: true,
        togglePaletteMoreText: '展开',
        togglePaletteLessText: '收起',
        color: '#333',
        palette: [
            ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
            ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
        ]
    }

}