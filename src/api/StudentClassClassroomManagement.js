// 学生、班级、教室管理

import request from '@/utils/request'


// 删除班级接口
export const deleteClass=(id)=>request.delete('/manger/grade/delete', {data:{grade_id:id}})

// 更新班级信息接口
export const UpdateClass =(data)=>request.put('/manger/grade/update',data) 

// 添加班级接口
export const addClass=(data)=>request.post('/manger/grade',data)  

// 获取已经分配教室的班级的接口
export const getIfClassRoom = ()=>request.get('/manger/grade') 

//获取全部科目
export const getsubject=()=>request.get('/exam/subject') 



