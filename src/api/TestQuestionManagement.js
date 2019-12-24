// 试题管理接口文档

import request from '@/utils/request'

// 添加试题
export const addTestQuestions=(params)=>request.post('/exam/questions',{questions_type_id:params.questions_type_id,subject_id:params.subject_id,questions_stem:params.questions_stem,exam_id:params.exam_id,user_id:params.user_id,questions_answer:params.questions_answer,title:params.title}) 

// 获取所有的试题
export const getTestQuestions=()=>request.get('/exam/questions/new') 

// 更新试题
export const UpdateTestQuestions=(params)=>request.put('/exam/questions/update',{questions_type_id:params.questions_type_id,subject_id:params.subject_id,questions_stem:params.questions_stem,exam_id:params.exam_id,user_id:params.user_id,questions_answer:params.questions_answer,title:params.title}) 

// 获取所有的考试类型
export const getTestQuestionsType=(params)=>request.get('/exam/examType',{params}) 

// 获取所有的课程
export const getCourseType=()=>request.get('/exam/subject') 

// 删除指定的试题类型
export const deleteOneTestQuestionsType=(params)=>request.post('/exam/delQuestionsType',{id:params.id}) 

// 添加试题类型
export const addTestQuestionsType = (params) => request.get('/exam/insertQuestionsType',{params})

// 获取所有的试题类型
export const getTopicQuestionsType = () => request.get('/exam/getQuestionsType')

// 按条件获取试题
export const getSearchTestQuestions = (params) => request.get('/exam/questions/condition',{params})
