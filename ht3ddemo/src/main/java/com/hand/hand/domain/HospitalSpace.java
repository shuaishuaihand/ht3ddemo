package com.hand.hand.domain;
import lombok.Getter;
import lombok.Setter;


/**
 * 空间位置表 hospital_space
 * 
 * @author ruoyi
 * @date 2019-08-01
 */
@Setter
@Getter
public class HospitalSpace extends BaseEntity
{
	private static final long serialVersionUID = 1L;
	
	/**  ID */
	private Long id;
	/** 名称 */
	private String name;
	/** 父ID */
	private Long pid;
	/** 排序名称 */
	private Integer sortno;
	/** 层级 */
	private Integer grade;
	/** 0-正常 1-已删除 */
	private Integer delFlag;
	/** 图标 */
	private String icon;
	 /** 父部门名称 */
    private String pname;
    
}
