// 考试试卷管理
import { getexamType,getSubject,getQuestionsType, addExaminationPaperManagement, getExaminationPaperManagement } from '@/api/ExaminationPaperManagement'

const state = {
  typeList: [],//所有考试类型
  subjectList:[],//所有课程
  questTypeList:[],//所有试题类型
  paperList: [],

}

const mutations = {
  getType(state, payload) {
    state.typeList = payload
  },

  getSubject(state,payload){
    state.subjectList=payload
  },

  getQuest(state,payload){
    state.questTypeList=payload
  },  
  // getPaperList(state,payload){
  //   state.paperList=playload
  // },
}

const actions = {

  // 获取所有的考试类型
  async getexamType({ commit },payload) {
    let res = await getexamType()
    console.log("****",res)
    commit('getType',res.data)
  },
  // 获取所有的课程
  async getSubject({ commit },payload) {
    let res = await getSubject()
    console.log("****",res)
    commit('getSubject',res.data)
  },
  //获取所有的试题类型
  async getQuestionsType({ commit },payload) {
    let res = await getQuestionsType()
    console.log("****",res)
    commit('getQuest',res.data)
  }
  
  
  // 创建试卷
  //async addExaminationPaperManagement({commit},{subject_id,exam_id,title,start_time,end_time}){
  // console.log(subject_id,exam_id,title,start_time,end_time,"=====")
  // let res = await addExaminationPaperManagement({subject_id,exam_id,title,start_time,end_time})
  // console.log(res,11111)
  // commit('getPaperList',res)
  //},

  // async getExaminationPaperManagement({commit}){
  //   let res = await getExaminationPaperManagement()
  //   console.log('sssss',res)
  //   commit('getAdd',res)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}