// 用户权限接口文档
import {getuser,getList} from '@/api/user'
const state = {
user:[],
userList:[]


}

const mutations = {
getuserList(state,payload){
  state.user=payload

},
getuser(state,payload){
  state.userList=payload
 

}
}

const actions = {
async getuser({commit},payload){
let res=await getuser(payload)

commit('getuserList',res)
},
async getList({commit},payload){
let res=await getList(payload)
console.log(res.data)
commit ('getuser',res.data)
}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }