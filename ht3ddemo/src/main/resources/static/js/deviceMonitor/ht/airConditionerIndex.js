var dm = new ht.DataModel();
var g3d = new ht.graph3d.Graph3dView(dm);
//事件派发器
var notifier=new ht.Notifier();
function init() {
    g3d.getView().style.background = 'url("js/deviceMonitor/ht/img/DEMO系统界面.png") no-repeat center';
    g3d.getView().style.backgroundSize = 'cover';
    g3d.addToDOM();
    //设置场景移动速度
    g3d.setMoveStep(100);
    //设置鼠标右键为场景平移
    var mapInteractor = new ht.graph3d.MapInteractor(g3d);
    g3d.setInteractors([ mapInteractor ]);
    // 切换左右键习惯，右键进行 pan 手抓图
    mapInteractor.panButton = 'right';
    //设置相机参数
    g3d.setEye([291.29205,
        1267.77386,
        2084.20695]);//相机位置
    g3d.setCenter([  328.49294,
        -5,
        -195.43251]);//视角中心
    //g3d.setUp([0,1,-1e-7]);//相机正面
    g3d.setNear(100);
    g3d.setFar(10000);


    //加载楼层场景json文件
    ht.Default.xhrLoad('js/deviceMonitor/ht/airConditioner/scenes/空调机组.json', function(text) {
        dm.deserialize(text);

        //声明动画调度任务
        var task= [];
        //水管1
        var pipe1= dm.getDataByTag('pipe1');
        //水管2
        var pipe2= dm.getDataByTag('pipe2');
        //水管3
        var pipe3= dm.getDataByTag('pipe3');

        //1号测量仪
        var detector1 = dm.getDataByTag('detector1');
        //2号测量仪
        var detector2 = dm.getDataByTag('detector2');
        //3号测量仪
        var detector3 = dm.getDataByTag('detector3');
        //4号测量仪
        var detector4 = dm.getDataByTag('detector4');

        //测量仪标签1
        var detector1_lable = dm.getDataByTag('detector1_lable');
        //测量仪标签2
        var detector2_lable = dm.getDataByTag('detector2_lable');
        //测量仪标签3
        var detector3_lable = dm.getDataByTag('detector3_lable');
        //测量仪标签4
        var detector4_lable = dm.getDataByTag('detector4_lable');
        //测量仪标签中温度text标签
        //var temperature_text1 = dm.getDataByTag('temperature1');

        //设备告警
        //冷水主机A
        //var  codeWaterHostA=dm.getDataByTag('codeWaterHostA');
        //冷水主机B
        //var  codeWaterHostB=dm.getDataByTag('codeWaterHostB');
        //冷水主机C
        //var  codeWaterHostC=dm.getDataByTag('codeWaterHostC');
        //冷水主机D
        var  codeWaterHostD=dm.getDataByTag('codeWaterHostD');

        //冷水主机D设备参数标签
        var  codeWaterHostD_lable=dm.getDataByTag('codeWaterHostD_lable');

        //分水器
        //var fsq = dm.getDataByTag('fsq');
        //集水器
        //var jsq = dm.getDataByTag('jsq');

        //冷却塔A
        var  coolingTowerA = dm.getDataByTag('coolingTowerA');
        //冷却塔B
        var  coolingTowerB = dm.getDataByTag('coolingTowerB');
        //冷却塔A设备参数标签
        var coolingTowerA_lable=dm.getDataByTag('coolingTowerA_lable');


        //大屏标签数据
        var  bigScreenTag = dm.getDataByTag('bigscreen');


        g3d.mi(function(e) {
            // 模型单击事件
            if(e.kind === 'clickData') {
                var data = e.data;
                //冷却塔A模型
               if (data === coolingTowerA) {
                  if(coolingTowerA_lable.s('3d.visible')==false) {
                       coolingTowerA_lable.s('3d.visible', true);
                   }else {
                       coolingTowerA_lable.s('3d.visible', false);
                   }
                }

                //冷水主机 D 模型
                if (data === codeWaterHostD) {
                    if(codeWaterHostD_lable.s('3d.visible')==false) {
                        codeWaterHostD_lable.s('3d.visible', true);
                    }else {
                        codeWaterHostD_lable.s('3d.visible', false);
                    }
                }
            }

            // 鼠标悬停图元事件
            //if(e.kind === 'hover') {
            if(e.kind === 'onHover') {
                var data = e.data;
                //1号检测仪模型
                if (data === detector1) {
                    if(detector1_lable.s('3d.visible')==false) {
                        detector1_lable.s('3d.visible', true);
                    }
                }
                //2号检测仪模型
                if (data === detector2) {
                    if(detector2_lable.s('3d.visible')==false) {
                        detector2_lable.s('3d.visible', true);
                    }
                }

                //3号检测仪模型
                if (data === detector3) {
                    if(detector3_lable.s('3d.visible')==false) {
                        detector3_lable.s('3d.visible', true);
                    }
                }

                //4号检测仪模型
                if (data === detector4) {
                    if(detector4_lable.s('3d.visible')==false) {
                        detector4_lable.s('3d.visible', true);
                    }
                }
            }

            //鼠标离开图元事件
            if(e.kind === 'onLeave'){
                var data = e.data;
                //1号检测仪模型
                if (data === detector1) {
                    if(detector1_lable.s('3d.visible')==true) {
                        detector1_lable.s('3d.visible', false);
                    }
                }

                //2号检测仪模型
                if (data === detector2) {
                    if(detector2_lable.s('3d.visible')==true) {
                        detector2_lable.s('3d.visible', false);
                    }
                }

                //3号检测仪模型
                if (data === detector3) {
                    if(detector3_lable.s('3d.visible')==true) {
                        detector3_lable.s('3d.visible', false);
                    }
                }
                //4号检测仪模型
                if (data === detector4) {
                    if(detector4_lable.s('3d.visible')==true) {
                        detector4_lable.s('3d.visible', false);
                    }
                }
            }

            // 鼠标双击事件
            if(e.kind === 'onDoubleClick') {
                var data = e.data;
                //冷却塔A模型
                if (data === coolingTowerA) {
                    //靠近方大，设备
                    g3d.flyTo(coolingTowerA,{animation:!0});
                }

                //冷水主机 D 模型
                if (data === codeWaterHostD) {
                    //靠近方大，设备
                    g3d.flyTo(codeWaterHostD,{animation:!0});
                }
            }
        });

        //动态生成测量仪标签内的动态数据
        //温度 压强 流量 每3秒刷新一次
        setInterval(changeDetectorLabelData,3000);

        //动态生成设备（冷却塔，冷却主机）数据
        //每3秒刷新一次
        //setInterval(changeDeviceLabelData,3000);

        //测试动态生成设备温度数据-若温度大于50度，设备告警（冷水主机D）
        setInterval(changeDeviceTemData,500);

        //测试动态大屏数据
        setInterval(changeScreenData,3000);


        //动态赋值测量仪标签数据
        function changeDetectorLabelData(){
            var detector_lable_list= getAirConditionerData();
            //遍历后台数组数据，并赋值
            for (var i=0;i<detector_lable_list.length;i++){
                //标签tagid
                var temp_detector1_lable = dm.getDataByTag(detector_lable_list[i].tag);
                //温度
                temp_detector1_lable.a('temperature',detector_lable_list[i].temperature);
                //压强
                temp_detector1_lable.a('pressure',detector_lable_list[i].pressure);
                //流量
                temp_detector1_lable.a('flow',detector_lable_list[i].flow);
            }
        }

        //动态赋值设备标签数据
        function changeDeviceLabelData(){
            var device_lable_list= getAirConditionerDeviceData();
            var coolingTowerList=device_lable_list.coolingTower;
            var codeWaterHostList=device_lable_list.codeWaterHost;
            //遍历后台数组数据，并赋值冷却塔数据
            for (var i=0;i<coolingTowerList.length;i++){
                //标签tagid
                var coolingTowerA_lable = dm.getDataByTag(coolingTowerList[i].tag);
                coolingTowerA_lable.a('valveStatus',coolingTowerList[i].valveStatus);
                coolingTowerA_lable.a('handStatus',coolingTowerList[i].handStatus);
                coolingTowerA_lable.a('alarmStatus',coolingTowerList[i].alarmStatus);
                coolingTowerA_lable.a('runningStatus',coolingTowerList[i].runningStatus);
                coolingTowerA_lable.a('alarmStatus',coolingTowerList[i].alarmStatus);

            }

            //遍历后台数组数据，并赋值冷水主机设备
            for (var i=0;i<codeWaterHostList.length;i++){
                //标签tagid
                var codeWaterHostD_lable = dm.getDataByTag(codeWaterHostList[i].tag);
                codeWaterHostD_lable.a('handStatus',codeWaterHostList[i].handStatus);
                codeWaterHostD_lable.a('alarmStatus',codeWaterHostList[i].alarmStatus);
                codeWaterHostD_lable.a('runningStatus',codeWaterHostList[i].runningStatus);
                codeWaterHostD_lable.a('startAndStopNum',codeWaterHostList[i].startAndStopNum);


            }
        }

        //调用后台生成测量仪温度，压强，流量等数据
        function getAirConditionerData() {
            var result=[];
            //调用后台接口
            $.ajax({
                url:prefix+"/getAirConditionerData",
                type:'get',
                dataType:'json',
                async:false,
                data:{},
                success:function (data) {
                  result=data;
                }
            });
            return result;
        }

        //调用后台生成设备数据（冷却塔，冷水主机等）
        function getAirConditionerDeviceData() {
            var result=[];
            //调用后台接口
            $.ajax({
                url:prefix+"/getAirConditionerDeviceData",
                type:'get',
                dataType:'json',
                async:false,
                data:{},
                success:function (data) {
                    result=data;
                }
            });
            return result;
        }

        //动态设备温度数据-温度大于50度，设备告警
        var T1=0;//暂时报警闪烁
        function changeDeviceTemData(){
            //var T1= random(0,100);
            //设备告警变红
            //冷水主机D
            if(T1===0) {
                codeWaterHostD.s({
                    'shape3d.blend': 'red'
                });
                T1=1;
            }else {
                codeWaterHostD.s({
                    'shape3d.blend': undefined
                });
                T1=0;
            }
        }

        //动态大屏数据
        function changeScreenData(){
            //标签属性
            //集水器压力
            bigScreenTag.a('jsq_pressure',random(0,100));
            //分水器压力
            bigScreenTag.a('fsq_pressure',random(0,100));
            //冷冻水流量
            bigScreenTag.a('lds_flow',random(0,100));
            //冷却水流量
            bigScreenTag.a('lqs_flow',random(0,100));
            //冷冻水总供水温度
            bigScreenTag.a('ldsprovide_temperature',random(0,100));
            //冷冻水总回水温度
            bigScreenTag.a('ldsreturn_temperature',random(0,100));
            //冷却水总供水温度
            bigScreenTag.a('lqsprovide_temperature',random(0,100));
            //冷却水总回水温度
            bigScreenTag.a('lqsreturn_temperature',random(0,100));
        }


        //Math.random()生成一个0-1之间的随机数,保留小数点后两位数
        function random(min,max) {
            //return Math.floor(Math.random()*(max-min))+min;
             return (Math.floor(Math.random()*(max-min)*100)+min*100)/100;
        }



        // 水管流动动画(顺时针)
        task.pipeTaskClockwise = {
            interval: 300,
            action: function(data) {
                if (!(data === pipe1||data === pipe2)) return;
                if(data.s('shape3d.image') === 'js/deviceMonitor/ht/airConditioner/assets/贴图/管道贴图.png') {
                    var offsetX = data.s('shape3d.uv.offset')[0];
                    offsetX = (offsetX - 0.1) % 1;
                    data.s('shape3d.uv.offset', [offsetX, 0]);
                }
            }
        };
        dm.addScheduleTask(task.pipeTaskClockwise);

        // 水管流动动画(逆时针)
        task.pipeTaskAnticlockwise = {
            interval: 300,
            action: function(data) {
                if (!(data === pipe3)) return;
                if(data.s('shape3d.image') === 'js/deviceMonitor/ht/airConditioner/assets/贴图/管道贴图.png') {
                    var offsetX = data.s('shape3d.uv.offset')[0];
                    offsetX = (offsetX + 0.1) % 1;
                    data.s('shape3d.uv.offset', [offsetX, 0]);
                }
            }
        };
        dm.addScheduleTask(task.pipeTaskAnticlockwise);

    });


    //事件监听
    notifier.add(function (e) {
        //冷水主机D事件监听
        if(e.eventname==='codeWaterHostDLableSwitch'){
            //调用switch开关
            controlSwitchApi(0);
        }
        //告警故障button按钮事件监听
        if(e.eventname==='dealAlarm'){
            //处理告警方法
            dealAlarmEvent();
        }
    });

    //处理告警方法
    function dealAlarmEvent() {
        window.parent.refreshLeft(2101);
        //标签对应的设备id传入到index.js页面，作为参数传入告警管理页面
        window.parent.getOtherParam({did:3});
    }



    //开关请求后台switch接口（冷却塔A,冷水主机 D）
    function controlSwitchApi(switchflag) {
        var result;
        //调用后台接口
        $.ajax({
            url:prefix+"/controlSwitchApi",
            type:'post',
            dataType:'json',
            data:{switchflag:switchflag},
            success:function (data) {
                console.log(data.result);
                result=data.result;
            },
            error: function (xhr, ajaxOptions, thrownError) {

            }
        });
        return result;
    }
}
window.onload = init;