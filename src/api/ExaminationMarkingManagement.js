// 考试阅卷管理
import request from '@/utils/request'

// 批改试卷
export const BatchMarking = (params) => request.put('/exam/exam/w5tcy-g2dts', { score: params.score })

// 获取学生试卷详情接口
export const getMarking = () => request.get('/exam/student/t27znv-gu7azm-qpq9ai-laaf9m')

// 获取学生试卷列表接口
export const getStudentMarking = () => request.get('/exam/student')

