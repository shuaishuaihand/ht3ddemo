package com.hand.hand.controller;
import com.hand.hand.domain.HospitalSpace;
import com.hand.hand.service.IHospitalSpaceService;
import com.hand.hand.util.Json;
import com.hand.hand.util.Ztree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/intelligentmonitor/ht")
public class IntelligentMonitorController {

    private String prefix = "intelligentmonitor";

    @Autowired
    private IHospitalSpaceService hospitalSpaceService;


    @GetMapping()
    public String intelligentMonitor()
    {
        return prefix + "/htFloorIndex";
    }


    @GetMapping("/floor1")
    public String intelligentMonitor1()
    {
        return prefix + "/htFloorIndex1";
    }

    @GetMapping("/floor2")
    public String intelligentMonitor2()
    {
        return prefix + "/htFloorIndex2";
    }



    @GetMapping("/airconditioner")
    public String airConditionerIndex()
    {
        return prefix + "/airConditionerIndex";
    }


    @GetMapping("/freshairunit")
    public String freshAirUnitIndex()
    {
        return prefix + "/freshAirUnitIndex";
    }


    //空调机组标签数据集合接口（测量仪数据）
    @GetMapping("/getAirConditionerData")
    @ResponseBody
    public List<Map> getAirConditionerData()
    {
        //标签数据集合
        List<Map> list=new ArrayList<>();

        //每个标签tag,对应温度，压强，流量参数值
        Map<String,String> map1=new HashMap<>();
        Map<String,String> map2=new HashMap<>();

        //一号检测仪数据
        map1.put("tag","detector1_lable");
        map1.put("temperature",String.valueOf(random(0,100)));
        map1.put("pressure",String.valueOf(random(0,100)));
        map1.put("flow",String.valueOf(random(0,100)));

        //二号检测仪数据
        map2.put("tag","detector2_lable");
        map2.put("temperature",String.valueOf(random(0,100)));
        map2.put("pressure",String.valueOf(random(0,100)));
        map2.put("flow",String.valueOf(random(0,100)));

        //三号检测仪数据
        map2.put("tag","detector3_lable");
        map2.put("temperature",String.valueOf(random(0,100)));
        map2.put("pressure",String.valueOf(random(0,100)));
        map2.put("flow",String.valueOf(random(0,100)));

        //四号检测仪数据
        map2.put("tag","detector4_lable");
        map2.put("temperature",String.valueOf(random(0,100)));
        map2.put("pressure",String.valueOf(random(0,100)));
        map2.put("flow",String.valueOf(random(0,100)));


        list.add(map1);
        list.add(map2);

        return list;
    }


    //空调机设备数据（冷却塔，冷水组件）
    @RequestMapping("/getAirConditionerDeviceData")
    @ResponseBody
    public Map getAirConditionerDeviceData()
    {
        //冷却塔数据
        List<Map> list1=new ArrayList<>();
        //冷水主机数据
        List<Map> list2=new ArrayList<>();

        //返回值Map
        Map<String,List> map=new HashMap<>();
        //冷却塔A设备数据
        Map<String,String> map1=new HashMap<>();
        //冷水主机D设备数据
        Map<String,String> map2=new HashMap<>();

        //冷却塔A设备数据
        map1.put("tag","coolingTowerA_lable");
        map1.put("valveStatus",random(0,100)>20?"开":"关");
        map1.put("handStatus",random(0,100)>50?"手动":"自动");
        map1.put("alarmStatus",random(0,100)>80?"正常":"异常");
        map1.put("runningStatus",random(0,100)>20?"运行":"停止");
        map1.put("startAndStop",random(0,100)>20?"0":"1");

        //冷水主机D设备数据
        map2.put("tag","codeWaterHostD_lable");
        map2.put("handStatus",random(0,100)>50?"手动":"自动");
        map2.put("alarmStatus",random(0,100)>80?"正常":"异常");
        map2.put("runningStatus",random(0,100)>20?"运行":"停止");
        map2.put("startAndStopNum","20");
        map2.put("startAndStop",random(0,100)>20?"0":"1");

        list1.add(map1);
        list2.add(map2);


        map.put("coolingTower",list1);
        map.put("codeWaterHost",list2);

        return map;
    }


    //空调机设备数据（冷却塔，冷水组件）
   // @RequestMapping("/controlSwitchApi/{switchflag}")
    @RequestMapping("/controlSwitchApi")
    @ResponseBody
    public Json controlSwitchApi(String switchflag) {
        Json json=new Json();
        json.setResult(0);
        json.setMsg("success");
        return json;
    }




    //Math.random()生成一个0-1之间的随机数,保留小数点后两位数
    public double random(double min,double max){
        return (Math.floor(Math.random()*(max-min)*100)+min*100)/100;
    }


    /**
     * 加载空间位置列表树
     */
    @GetMapping("/treeData")
    @ResponseBody
    public List<Ztree> treeData()
    {
        List<Ztree> ztrees = hospitalSpaceService.selectSpaceTree(new HospitalSpace());
        return ztrees;
    }
}
