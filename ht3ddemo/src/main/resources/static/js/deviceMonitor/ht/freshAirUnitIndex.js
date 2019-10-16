var dm = new ht.DataModel();
var g3d = new ht.graph3d.Graph3dView(dm);
function init() {
    g3d.getView().style.background = 'url("js/deviceMonitor/ht/img/DEMO系统界面.png") no-repeat center';
    g3d.getView().style.backgroundSize = 'cover';
    g3d.addToDOM();
    //设置场景移动速度
    g3d.setMoveStep(100);
    //设置鼠标右键为场景平移
    var mapInteractor = new ht.graph3d.MapInteractor(g3d);
    g3d.setInteractors([ mapInteractor ]);
    // 修改最大仰角为 2 PI，可选项
    mapInteractor.maxPhi = Math.PI * 2 ;
    // 切换左右键习惯，右键进行 pan 手抓图
    mapInteractor.panButton = 'right';

    //加载楼层场景json文件
    ht.Default.xhrLoad('js/deviceMonitor/ht/freshAirUnit/scenes/新风机组.json', function(text) {
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

       // dm.deserialize(text);

        //声明动画调度任务
        var task= [];
        //蜗牛_叶轮模型
        var yelun=dm.getDataByTag('yelun');
        //左侧箭头
        var left_arrow=dm.getDataByTag('left_arrow1');
        //右侧箭头
        var right_arrow=dm.getDataByTag('right_arrow1');

        //蜗牛-叶片转动
        // 创建一个动画调度任务
        task.yelunTask = {
            interval: 100,// 动画持续时间
            action: function(data) {// 动画内容

                if (data !== yelun) return;
                // 设置 yelun 节点的 z 轴旋转为当前 z 轴旋转值再加上 Math.PI/12
                yelun.setRotationZ(yelun.getRotationZ() + Math.PI/12);
            }
        }
        dm.addScheduleTask(task.yelunTask);// 将调度任务添加到数据容器中


        // 空气动画
       task.arrowTask = {
            interval: 300,
            action: function(data) {
                if (!(data === left_arrow||data === right_arrow)) return;
                if(data.s('front.image') === 'js/deviceMonitor/ht/freshAirUnit/symbols/basic/水流/水流 2.json') {
                    var offsetX = data.s('front.uv.offset')[0];
                    offsetX = (offsetX - 0.1) % 1;
                    data.s('front.uv.offset', [offsetX, 0]);
                }

            }

        };
        dm.addScheduleTask(task.arrowTask);

        //页面交互事件
        g3d.mi(function(e) {
        });


    });
}
window.onload = init;