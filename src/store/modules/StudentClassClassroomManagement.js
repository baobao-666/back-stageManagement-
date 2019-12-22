// 学生、班级、教室管理

import { getIfClassRoom,deleteClassRoom,getAllClassRoom,getsubject,addClass,getStudent } from '@/api/StudentClassClassroomManagement'

const state = {
    classRoomList:[], //全部班级数据
    AllClassRoom:[] ,//全部教师数据
    Allsubject:[],//全部科目
    Allstudent:[],//全部学生
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
    },
    setAllstudent(state,palody){
      // 全部学生
      state.Allstudent=palody
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
    console.log(palody);
    
    let res = await deleteClassRoom(palody)
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
  },
  async addClass({commit},paylody){
    // 添加班级
    let res = await addClass(paylody)
    if(res.code===1){
      console.log(res.msg);
    }
  },
  async getStudent({commit}){
    // 获取未分班人数据
    let res = await getStudent()
    console.log(res);
    // if(res.code===1){
    // commit("setAllstudent",res.data)
    // }
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }