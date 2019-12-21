// 学生、班级、教室管理

import { getIfClassRoom,deleteClassRoom,getAllClassRoom,getsubject } from '@/api/StudentClassClassroomManagement'

const state = {
    classRoomList:[], //全部班级数据
    AllClassRoom:[] ,//全部教师数据
    Allsubject:[],//全部科目
}

const mutations = {
    setClassRoomList(state,palody){
       // 获取全部数据
        state.classRoomList=palody
    },
    setAllClassRoom(state,palody){
      // 全部教室
      state.AllClassRoom=palody
    },
    setAllsubject(state,palody){
      state.Allsubject=palody
    }
}

const actions = {
  async getIfClassRoom({commit}){
    // 获取全部数据
    let res = await getIfClassRoom()
    if(res.code === 1){
       commit("setClassRoomList",res.data)
    }
  },
  async deleteClassRoom({commit},palody){
    // 删除班级
    let res = await deleteClassRoom({data:{grade_id:palody}})
    console.log(res);
  },
  async getAllClassRoom({commit},palody){
    // 获取全部班级
    let res = await getAllClassRoom()
    if(res.code===1){
      commit("setAllClassRoom",res.data)
    }
  },
  async getsubject({commit}){
      let res = await getsubject()
      if(res.code===1){
        commit("setAllsubject",res.data)
      }    
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }