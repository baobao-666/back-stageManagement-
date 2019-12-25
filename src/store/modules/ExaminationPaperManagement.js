// 考试试卷管理
import { getexamType, getSubject, addExaminationPaperManagement, getExaminationPaperManagement } from '@/api/ExaminationPaperManagement'

const state = {
  typeList: [],//所有考试类型
  subjectList: [],//所有课程
  addList: [],//创建
  paperList: [],//所有试卷
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
    console.log(res.data, "....res")
    commit('getAddList', res.data)
  },
  // 获取所有试卷列表
  async getExaminationPaperManagement({ commit }) {
    let res = await getExaminationPaperManagement()
    console.log('sssss', res)
    commit('getPaper', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}