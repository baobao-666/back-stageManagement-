// 考试试卷管理
import { getexamType, getSubject, addExaminationPaperManagement, getExaminationPaperManagement, deleteExaminationPaperManagementTeacher,updateExaminationPaperManagement } from '@/api/ExaminationPaperManagement'

const state = {
  typeList: [],//所有考试类型
  subjectList: [],//所有课程
  addList: [],//创建
  paperList: [],//所有试卷
  deleList: [],//删除之后的
  pageNum:1,
  limit:3
}

const mutations = {
  getType(state, payload) {
    state.typeList = payload
  },

  getSubject(state, payload) {
    state.subjectList = payload
  },
  getAddList(state, payload) {
    state.addList = payload
    console.log(state.addList, "...addlist")
  },
  getPaper(state, payload) {
    state.paperList = payload
  },
  delePaper(state, payload) {
    state.deleList = payload
  },
  deleteOne(state, payload){
    let list = state.addList.questions
    list.splice(payload,1)
  }
}

const actions = {

  // 获取所有的考试类型
  async getexamType({ commit }, payload) { 
    let res = await getexamType()
    commit('getType', res.data)
  },
  // 获取所有的课程
  async getSubject({ commit }, payload) {
    let res = await getSubject()
    commit('getSubject', res.data)
  },
  //创建试卷
  async addExaminationPaperManagement({ commit }, payload) {
    let res = await addExaminationPaperManagement(payload)
    sessionStorage.setItem('res',JSON.stringify(res))
    console.log(res,'....res.data')
    commit('getAddList', res.data)
  },
  // 获取所有试卷列表
  async getExaminationPaperManagement({ commit }) {
    let res = await getExaminationPaperManagement()
    commit('getPaper', res)
  },
  // 删除试卷列表
  async deleteExaminationPaperManagementTeacher({ commit }) {
    let res = await deleteExaminationPaperManagementTeacher();
    commit('delePaper',res.data)
  },
  // 更新试卷
  async updateExaminationPaperManagement({commit},payload){
    let res = await updateExaminationPaperManagement(payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}