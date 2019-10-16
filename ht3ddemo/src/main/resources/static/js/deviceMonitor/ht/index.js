var dm = new ht.DataModel();
var g3d = new ht.graph3d.Graph3dView(dm);
function init() {
    g3d.getView().style.background = 'url("js/deviceMonitor/ht/img/DEMO系统界面.png") no-repeat center';
    g3d.getView().style.backgroundSize = 'cover';
    g3d.addToDOM();
    g3d.setMovableFunc(function() { return false });
    g3d.setEye([-68.76732524508938,2415.2228041245485,1867.9570835779118]);//相机位置
    g3d.setCenter([0,0,0]);//视角中心
    g3d.setUp([0,1,-1e-7]);//相机正面

    //服务器
    var server;
    //消防设备
    var xiaofang;
    //服务器标签
    var etag;
    //消防标签
    var xtag;
    //空调机组设备
    var airConditioner;
    //空调机组设备标签
    var airConditionerTag;
    var alarm;

    ht.Default.xhrLoad('js/deviceMonitor/ht/floor/scenes/楼层.json', function(text) {
        dm.deserialize(text);

        //服务器
         server = dm.getDataByTag('server');
        //消防设备
         xiaofang = dm.getDataByTag('xiaofang');
        //服务器标签
         etag = dm.getDataByTag('etag');
        //消防标签
         xtag = dm.getDataByTag('xtag');

        //空调机组设备
         airConditioner=dm.getDataByTag('airConditioner1');
        //空调机组设备标签
         airConditionerTag=dm.getDataByTag('airConditionerTag');
        // 故障展示 闪烁 可以将这个“故障.json”换成 感叹号的 json
         alarm = dm.getDataByTag('alarm');

        // 故障展示 闪烁 可以将这个“故障.json”换成 感叹号的 json
        setInterval(function() {
            var random = Math.floor(Math.random() * 5);
            if (random === 1) {
                etag.a('serverstatus','故障');
                //etag.a('serverstatus','#00FFFF');
                //etag.a('serverstatus','故障');
                alarm.s('shape3d.image', 'js/deviceMonitor/ht/floor/symbols/电信/故障 2.json');

            }
            else {
                etag.a('serverstatus','正常');
                alarm.s('shape3d.image', 'js/deviceMonitor/ht/floor/symbols/电信/正常 2.json');
            }
        }, 1000);
    });


    //事件监听
    g3d.mi(function(e) {
        // 模型单击 隐藏/显示属性标签
        if(e.kind === 'clickData') {
            var data = e.data;
            //服务器模型
            if (data === server) {
                if(etag.s('3d.visible')==false) {
                    etag.s('3d.visible', true);
                }
                else {
                    etag.s('3d.visible', false);
                }
            }
            //消防模型
            if (data ===  xiaofang) {
                if(xtag.s('3d.visible')==false) {
                    xtag.s('3d.visible', true);
                }
                else {
                    xtag.s('3d.visible', false);
                }
            }
            //单击空调机组，显示svg图
            var displayName=data.getDisplayName();
            if (displayName ===  "空调") {
                if(airConditionerTag.s('3d.visible')==false) {
                    //显示标签
                    airConditionerTag.s('3d.visible', true);
                    //将svg放到标签里
                    airConditionerTag.s('shape3d.image','js/deviceMonitor/ht/floor/img/airConditioner.png');

                }
                else {
                    airConditionerTag.s('3d.visible', false);
                }
            }
        }

        // 模型双击 放大聚焦双击设备
        if(e.kind === 'doubleClickData') {
            var data = e.data;
            //服务器模型
            if (data === server) {
                // g3d.setEye([-68.76732524508938,2415.2228041245485,1867.9570835779118]);
                var v=100;
                var ex=-68.76732524508938;
                var ey=2415.2228041245485;
                var ez=1867.9570835779118;
                var aex=-68.76732524508938-(-1270.704611327542);
                var aey=2415.2228041245485-(413.28712463557594);
                var aez=1867.9570835779118-(-351.1770047663114);
                unitex=aex/v;
                unitey=aey/v;
                unitez=aez/v;
                var interval=setInterval(function() {
                    v=v-1;
                    ex=ex-unitex;
                    ey=ey-unitey;
                    ez=ez-unitez;
                    console.log(v);
                    //g3d.setEye([-1270.704611327542+unitex, 413.28712463557594+unitey, -351.1770047663114+unitez]);
                    g3d.setEye(ex,ey,ez);
                    console.log((ex)+"ux");
                    console.log((ey)+"uy");
                    console.log((ez)+"uz");

                    g3d.setCenter([-1388.9781046543112, 0.0000300326123880786, -616.7117652976789]);
                    g3d.setUp([0, 1, -1e-7]);
                    if(v==1){
                        clearInterval(interval);//终止循环
                    }

                }, 3000/100);
            }

        }
    });
}


window.onload = init;