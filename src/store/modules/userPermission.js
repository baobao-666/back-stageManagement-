// 用户权限接口文档
import {addUserList} from '@/api/userPermission'
const state = {
addUser:[],
user_name:'',
user_pwd:'',


}

const mutations = {
getaddUserList(state,payload){
  state.addUser=payload
},
getusername(state,payload){
state.user_name=payload
},
getuserpwd(state,payload){
state.user_pwd=payload
}
}

const actions = {
async getaddUserList({commit}){
  let res=await addUserList(params)
  
  console.log(res)
  commit('getaddUserList',res.data)
}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }