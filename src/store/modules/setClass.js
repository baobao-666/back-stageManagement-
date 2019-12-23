
import { getAllClassRoom,addClassRoom,deleteClassRoom } from '@/api/setClass'

const state = {
    AllClassRoom:[] ,//全部教室数据
}

const mutations = {
   setAllClassRoom(state,palody){
       // 全部教室
       state.AllClassRoom=palody
   },
}

const actions = {
 async addClassRoom({commit},palody){
     //  添加教室
     await addClassRoom(palody)
 },
 async getAllClassRoom({commit},palody){
    // 获取全部教室
    let res = await getAllClassRoom()
    if(res.code===1){
      commit("setAllClassRoom",res.data)
    }
},
 async deleteClassRoom({commit},palody){
     await deleteClassRoom(palody)
 }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }