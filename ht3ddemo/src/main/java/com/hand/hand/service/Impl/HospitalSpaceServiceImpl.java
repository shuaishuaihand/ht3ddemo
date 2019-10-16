package com.hand.hand.service.Impl;
import com.hand.hand.domain.HospitalSpace;
import com.hand.hand.mapper.HospitalSpaceMapper;
import com.hand.hand.service.IHospitalSpaceService;
import com.hand.hand.util.Ztree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 空间位置 服务层实现
 * 
 * @author ruoyi
 * @date 2019-08-01
 */
@Service
public class HospitalSpaceServiceImpl implements IHospitalSpaceService
{
	@Autowired
	private HospitalSpaceMapper hospitalSpaceMapper;

	
	/**
     * 查询空间位置管理树
     * 
     * @param spave 空间位置信息
     * @return 所有空间位置
     */
    @Override
    public List<Ztree> selectSpaceTree(HospitalSpace space)
    {
        List<HospitalSpace> spaceList = hospitalSpaceMapper.selectHospitalSpaceList(space);
        List<Ztree> ztrees = initZtree(spaceList);
        return ztrees;
    }

    /**
     * 对象转空间位置树
     *
     * @param deptList 部门列表
     * @return 树结构列表
     */
    public List<Ztree> initZtree(List<HospitalSpace> spaceList)
    {
        List<Ztree> ztrees = new ArrayList<Ztree>();
        int result=0;
        for (HospitalSpace space : spaceList)
        {
            Ztree ztree = new Ztree();
            ztree.setId("" + space.getId());
            ztree.setpId("" + space.getPid());
            ztree.setName(space.getName());
            ztree.setTitle(space.getName());
            //判断该节点是否是叶子节点
            result = hospitalSpaceMapper.selectSonSpaceCount(space.getId());
            if (result>0){
                ztree.setLeaf(false);
            }else {
                ztree.setLeaf(true);
            }
            ztrees.add(ztree);
        }
        return ztrees;
    }
    

	
}
