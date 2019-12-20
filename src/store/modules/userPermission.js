// 用户权限接口文档
import {getuser} from '@/api/user'
const state = {
user:[]

}

const mutations = {
getuserList(state,payload){
  state.user=payload

}
}

const actions = {
async getuser({commit},payload){
let res=await getuser(payload)

commit('getuserList',res)
}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }