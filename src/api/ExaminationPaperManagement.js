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
export const addExaminationPaperManagement = ({params}) => request.post('/exam/new', console.log(params) )
// export function addExaminationPaperManagement({data}) {
//   console.log(data, 111111111111)
//   return request({
//     url: '/exam/exam',
//     method: 'post',
//     data
//   })
// }


//  更新试卷接口
export const updateExaminationPaperManagement = (params) => request.put('/exam/exam/w5tcy-g2dts', { subject_id: params.subject_id, exam_id: params.exam_id, title: params.title, start_time: params.start_time, end_time: params.end_time, number: params.number, })

//  获取试卷列表接口
export const getExaminationPaperManagement = (params) => request.get('/exam/exam', { params })


//  获取试卷详情（教师端）接口
export const getExaminationPaperManagementTeacher = () => request.get('/exam/exam/w5tcy-g2dts')

//  删除接口
export const deleteExaminationPaperManagementTeacher = () => request.delete('/exam/exam/w5tcy-g2dts')

