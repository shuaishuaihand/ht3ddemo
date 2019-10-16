package com.hand.hand.service;

import com.hand.hand.domain.HospitalSpace;
import com.hand.hand.util.Ztree;
import java.util.List;

/**
 * 空间位置 服务层
 * 
 * @author ruoyi
 * @date 2019-08-01
 */
public interface IHospitalSpaceService 
{
	/**
     * 查询空间位置管理树
     * 
     * @param spave 空间位置信息
     * @return 所有空间位置
     */
    public List<Ztree> selectSpaceTree(HospitalSpace space);

    

}
