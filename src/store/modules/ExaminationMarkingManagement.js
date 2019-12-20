// 考试阅卷管理
import {getMarking} from '@/api/ExaminationMarkingManagement'
const state = {
  examList:[]
}

const mutations = {
  getExamList(state,payload){
    state.examList = payload;
  }
}

const actions = {
  async getMarking({commit}){
    let res = await getMarking();
    console.log('res',res);
    commit('getExamList')
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }