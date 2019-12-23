
// 第二路由班级
import request from '@/utils/request'

// 添加班级
export const addClassRoom =(data)=>request.post('/manger/room',data) 

// 获取教室接口
export const getAllClassRoom=()=>request.get('/manger/room')

// 删除教室
export const deleteClassRoom=(id)=>request.delete('/manger/room/delete',{data:{room_id:id}})