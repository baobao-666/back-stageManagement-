// 学生数据
import request from '@/utils/request'

// 获取全部学生
export const getStatude =()=>request.get('/manger/student') 

// 删除学生
export const deleteStatude =(statue_id)=>request.delete('/manger/student/:id=>student_id',{params:{id:statue_id}}) 
