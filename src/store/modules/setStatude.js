import { getStatude,deleteStatude } from '@/api/setStatude'

const state = {
    AllStatude:[] ,//全部学生数据
    Page:1,
    pageSize:10,
    pageList:[]
}

const mutations = {
   setAllStatude(state,palody){
       // 全部教室
       state.AllStatude= palody
       state.pageList= palody.slice(state.Page - 1, state.pageSize)
   },
  setPage(state,palody){
       state.Page=palody
       state.pageList =state.AllStatude.slice((state.Page - 1) * state.pageSize , state.Page * state.pageSize)
  },
  setPageSize(state,palody){
      state.pageSize= palody
      state.pageList =state.AllStatude.slice( (state.Page - 1 )* state.pageSize ,state.Page * state.pageSize)
  }
}

const actions = {

 async getStatude({commit},palody){
    // 获取全部教室
    let res = await getStatude()
    if(res.code===1){
      commit("setAllStatude",res.data)
    }
},
async deleteStatude({commit},id){
   let res = await deleteStatude(id)
   console.log(res);
   
}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }