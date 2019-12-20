// 学生、班级、教室管理

import { getIfClassRoom,deleteClassRoom } from '@/api/StudentClassClassroomManagement'

const state = {
    classRoomList:[] //全部班级数据
}

const mutations = {
    setClassRoomList(state,palody){
       // 获取全部数据
        state.classRoomList=palody
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
    let res = await deleteClassRoom({data:{grade_id:palody}})
    console.log(res);
    
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }