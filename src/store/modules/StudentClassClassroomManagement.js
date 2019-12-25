// 学生、班级、教室管理

import { getIfClassRoom,deleteClass,getsubject,addClass,UpdateClass } from '@/api/StudentClassClassroomManagement'

const state = {
    classRoomList:[], //全部班级数据
    Allsubject:[],//全部科目
}

const mutations = {
    setClassRoomList(state,palody){
       // 获取全部数据
      state.classRoomList=palody
    },
    setAllsubject(state,palody){
      state.Allsubject=palody
    }
}

const actions = {
  async getIfClassRoom({commit}){
    // 获取全部教室数据
    let res = await getIfClassRoom()
       commit("setClassRoomList",res.data)
  },
  async deleteClass({commit},palody){
    // 删除班级
    await deleteClass(palody)
  },
  async getsubject({commit}){
      let res = await getsubject()
      if(res.code===1){
        commit("setAllsubject",res.data)
      }    
  },
  async addClass({commit},paylody){
    // 添加班级
    await addClass(paylody)
  },
  async UpdateClass({commit},palody){
    // 更新教室 3个id
    await UpdateClass(palody)
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }