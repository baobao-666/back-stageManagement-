// 考试阅卷管理
import {getIfClassRoom} from '@/api/StudentClassClassroomManagement'
const state = {
  examList:[]
}

const mutations = {
  getExamList(state,payload){
    state.examList = payload;
  }
}

const actions = {
  async getIfClassRoom({commit}){
    // 获取全部教室数据
    let res = await getIfClassRoom();
    console.log('res132',res);
       commit("getExamList",res.data)
  },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }