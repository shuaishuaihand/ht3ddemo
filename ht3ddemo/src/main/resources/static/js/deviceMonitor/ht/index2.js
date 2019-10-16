var dm = new ht.DataModel();
var g3d = new ht.graph3d.Graph3dView(dm);
function init() {
    g3d.getView().style.background = 'url("js/deviceMonitor/ht/img/DEMO系统界面.png") no-repeat center';

    //g3d.getView().style.background="#EEF3F6";
    g3d.getView().style.backgroundSize = 'cover';
    g3d.addToDOM();
    //设置场景移动速度
    g3d.setMoveStep(100);
    //设置鼠标右键为场景平移
    var mapInteractor = new ht.graph3d.MapInteractor(g3d);
    g3d.setInteractors([ mapInteractor ]);
    // 切换左右键习惯，右键进行 pan 手抓图
    mapInteractor.panButton = 'right';

    //页面首次加载楼层2场景json文件
    ht.Default.xhrLoad('js/deviceMonitor/ht/floor2/scenes/floor.json', function(text) {
        var json=ht.Default.parse(text);
        dm.deserialize(json);
        //json文件中获取相机参数
        if(json.scene.eye){
            g3d.setEye(json.scene.eye);
        }
        if(json.scene.center){
            g3d.setCenter(json.scene.center);
        }
        g3d.setNear(json.scene.near);
        g3d.setFar(json.scene.far);

        //dm.deserialize(text);
    });


    //楼层一
    //事件监听
    g3d.mi(function(e) {
        // 模型单击 隐藏/显示属性标签
        if(e.kind === 'clickData') {
            var data = e.data;
            //单击标签弹出事件
            var displayName=data.getDisplayName();
            if (displayName ===  "标签") {
                $.modal.openFullWithoutBtn("新风机组", ctx+"intelligentmonitor/ht/freshairunit");
            }
        }
    });

}
window.onload = init;


//楼层二
//楼层二场景相关事件函数
var server;
var xiaofang;
var etag;
var xtag;
var airConditioner;
var airConditionerTag;

function floor2function () {
    //服务器
    server = dm.getDataByTag('server');
    //消防设备
    xiaofang = dm.getDataByTag('xiaofang');
    //服务器标签
    etag = dm.getDataByTag('etag');
    //消防标签
    xtag = dm.getDataByTag('xtag');

    //空调机组设备
    airConditioner = dm.getDataByTag('airConditioner1');
    //空调机组设备标签
    airConditionerTag = dm.getDataByTag('airConditionerTag');

    // 故障展示 闪烁 可以将这个“故障.json”换成 感叹号的 json
    var alarm = dm.getDataByTag('alarm');
    setInterval(function () {
        var random = Math.floor(Math.random() * 5);
        if (random === 1) {
            etag.a('serverstatus', '故障');
            //etag.a('serverstatus','#00FFFF');
            //etag.a('serverstatus','故障');
            alarm.s('shape3d.image', 'js/deviceMonitor/ht/floor/symbols/电信/故障 2.json');

        } else {
            etag.a('serverstatus', '正常');
            alarm.s('shape3d.image', 'js/deviceMonitor/ht/floor/symbols/电信/正常 2.json');
        }
    }, 1000);

}

//楼层二
//交互事件
g3d.mi(function (e) {
    // 模型单击 隐藏/显示属性标签
    if (e.kind === 'clickData') {
        var data = e.data;
        //服务器模型
        if (data === server) {
            if (etag.s('3d.visible') == false) {
                etag.s('3d.visible', true);
            } else {
                etag.s('3d.visible', false);
            }
        }
        //消防模型
        if (data === xiaofang) {
            if (xtag.s('3d.visible') == false) {
                xtag.s('3d.visible', true);
            } else {
                xtag.s('3d.visible', false);
            }
        }
        //单击空调机组，显示svg图
        var displayName = data.getDisplayName();
        if (displayName === "空调") {
            if (airConditionerTag.s('3d.visible') == false) {
                //显示标签
                airConditionerTag.s('3d.visible', true);
                //将svg放到标签里
                airConditionerTag.s('shape3d.image', 'js/deviceMonitor/ht/floor/img/airConditioner.png');

            } else {
                airConditionerTag.s('3d.visible', false);
            }
        }
    }

    // 模型双击 放大聚焦双击设备
    if (e.kind === 'doubleClickData') {
        var data = e.data;
        //服务器模型
        if (data === server) {
            //靠近方大，设备
            g3d.flyTo(server,{animation:!0});
        }

    }
});

