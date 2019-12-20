// 考试试卷管理
import { addExaminationPaperManagement,getExaminationPaperManagement } from '@/api/ExaminationPaperManagement'

const state = {
    paperList:[],  //总
    add:[]
}

const mutations = {
    getPaperList(state,payload){
      state.paperList=playload
    },
    getAdd(state,payload){
      state.add=payload
    }
}

const actions = {
  async addExaminationPaperManagement({commit},{subject_id,exam_id,title,start_time,end_time}){
    let res = await addExaminationPaperManagement({subject_id,exam_id,title,start_time,end_time})
    console.log(res,'--------')
  },

  async getExaminationPaperManagement({commit}){
    let res = await getExaminationPaperManagement()
    console.log('sssss',res)
    commit('getAdd',res)
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }