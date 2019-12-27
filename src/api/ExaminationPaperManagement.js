// 考试试卷管理

import request from '@/utils/request'

//获取所有的考试类型 
export function getexamType() {
  return request({
    url: '/exam/examType',
    method: 'get'
  })
}
// 获取所有的课程
export function getSubject() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}

// 创建试卷接口
export function addExaminationPaperManagement(payload) {
  return request({
    url: '/exam/exam',
    method: 'post',
    data:payload
  })
}
//  获取试卷列表接口
export const getExaminationPaperManagement = (params) => request.get('/exam/exam', { params })

//  更新试卷接口
export function updateExaminationPaperManagement(params) {
  const {arr,data_id} = params;
  console.log(JSON.stringify(arr),'params')
  return request({
    url: `/exam/exam/${data_id}`,
    method: 'put',
    data:{question_ids:JSON.stringify(arr)}
  })
}

//  获取试卷详情（教师端）接口
export const getExaminationPaperManagementTeacher = (id) => request.get(`/exam/exam/${id}`)

//  删除接口
export const deleteExaminationPaperManagementTeacher = () => request.delete('/exam/exam/w5tcy-g2dts')

