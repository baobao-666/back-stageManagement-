// 学生、班级、教室管理

import request from '@/utils/request'

// 获取没有分配教室的班级
export const getNoneClassType=()=>request.get('/manger/grade/new') 

// 删除班级接口
export function deleteClass(id) {
    return request({
      url: `/manger/grade/delete/?grade_id=${id}`,
      method: 'delete'
    })
  }

// 更新班级信息接口
export const UpdateClass=(params)=>request.put('/manger/grade/update',{grade_id:params.grade_id,grade_name:params.grade_name,subject_id:params.subject_id,room_id:params.room_id}) 

// 添加班级接口
export const addClass=(params)=>request.post('/manger/grade',{grade_name:params.grade_name,room_id:params.room_id,subject_id:params.subject_id}) 

// 删除教室接口
export const deleteClassRoom=(params)=>request.delete('/manger/room/delete',{params}) 

// 更新教室接口
export const updateClassRoom=(params)=>request.put('/manger/room/update',{room_id:params.room_id,room_text:params.room_text}) 

// 添加教室接口
export const addClassRoom=(params)=>request.post('/manger/room',{room_text:params.room_text}) 

// 删除学生接口
export const deleteStudent=(params)=>request.delete('/manger/student/:id=>student_id',{params}) 

// 没有分班学生接口
export const getStudent=()=>request.get('/manger/student/new') 

// 已分班学生接口
export const getManagementStudent=()=>request.get('/manger/student') 

// 获取教室接口
export const getAllClassRoom=()=>request.get('/manger/room') 

// 获取已经分配教室的班级的接口
export const getIfClassRoom=()=>request.get('/manger/grade') 

// 更新学生信息接口
export const updateStudentMess=(params)=>request.put('/manger/student/edit',{student_id:params.student_id,student_name:params.student_name,student_pwd:params.student_pwd,grade_id:params.grade_id}) 

// 添加学生接口
export const addStudentMess=(params)=>request.post('/manger/student',{student_id:params.student_id,student_name:params.student_name,student_pwd:params.student_pwd,grade_id:params.grade_id}) 

//获取全部科目
export const getsubject=()=>request.get('/exam/subject') 


