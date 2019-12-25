// 用户权限接口文档
import {getList,getidentity,getviews,getapi,getidentity_api,getidentity_view} from '@/api/userList'
import { param } from '@/utils'
const state = {

userList:[],//展示用户数据
identity:[],//身份数据
views:[],//视图接口权限
api:[],//api权限数据
identity_api:[],//api和身份权限关系
view_id:[],//身份和视图权限关系


}

const mutations = {
  
//展示用户数据
getuser(state,payload){
  state.userList=payload
 
},
//获取身份ID
getuserID(state,payload){
  state.identity=payload

},
//视图权限
getviewID(state,payload){
  state.views=payload
},
//api权限数据
getapiId(state,payload){
state.api=payload
},
//api和身份权限关系数据
getidentity_api(state,payload){
state.identity_api=payload
},
//身份和视图权限关系
getview_token(state,payload){
state.view_id=payload
}
}

const actions = {

// 
async getList({commit},payload){
let res=await getList(payload)
//console.log(res.data)
commit ('getuser',res.data)
},
// 
async getidentity({commit},payload){
  let res=await getidentity(payload)
  //console.log(res.data)
 commit('getuserID',res.data)
},
//
async getviews({commit},payload){
  let res=await getviews(payload)
  console.log(res.data)
  commit('getviewID',res.data)
},
//
async getapi({commit},payload){
let res=await getapi(payload)
console.log(res.data)
commit('getapiId',res.data)
},
//
async getidentity_api({commit},payload){
  let res=await getidentity_api(payload)
  console.log(res.data)
  commit('getidentity_api',res.data)
},
//
async getidentity_view({commit},payload){
  let res=await getidentity_view(payload)
  console.log(res.data)
  commit('getview_token',res.data)
}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }