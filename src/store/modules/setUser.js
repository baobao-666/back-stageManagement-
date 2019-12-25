import {getuser } from '@/api/userList'

const state={

}

const mutations={

}

const actions={
   async getuser({commit} ,palody){
       console.log('====================================');
       console.log(palody);
       console.log('====================================');
       let res = await getuser(palody)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }