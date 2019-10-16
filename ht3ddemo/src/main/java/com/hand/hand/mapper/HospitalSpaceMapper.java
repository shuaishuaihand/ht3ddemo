package com.hand.hand.mapper;

import com.hand.hand.domain.HospitalSpace;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 空间位置 数据层
 * 
 * @author ruoyi
 * @date 2019-08-01
 */
public interface HospitalSpaceMapper 
{

    /**
     * 查看子空间数量
     * @param id
     * @return
     */
    public int selectSonSpaceCount(Long pid);

	/**
	 * 查询空间位置列表
	 *
	 * @param hospitalSpace 空间位置信息
	 * @return 空间位置集合
	 */
	public List<HospitalSpace> selectHospitalSpaceList(HospitalSpace hospitalSpace);
}