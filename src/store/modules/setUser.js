import { getuser,setIdentity_api,setIdentity_view } from '@/api/userList'
import { updateUserMess,addUserApiId,addApiId,addViewId} from '@/api/userPermission'
const state={

}

const mutations={

}

const actions={
   async getuser({commit} ,palody){
    //    添加user
      await getuser(palody)
    },
    async updateUserMess({commit},palody){
        // 更新接口
     let res = await updateUserMess(palody);
       console.log('====================================');
       console.log(res);
       console.log('====================================');
    },
    async addUserApiId({commit},palody){
        // 添加身份
      let res = await addUserApiId(palody)
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    },
    async addApiId({commit},palody){
      //添加api接口权限
      let res = await addApiId(palody)
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    },
    async addViewId({commit},palody){
      // 添加视图权限
      let res = await addViewId(palody)
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    },
    async setIdentity_api({commit},palody){
      let res = await setIdentity_api(palody)
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    },
    async setIdentity_view({commit},palody){
      let res = await setIdentity_view(palody)
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    }
 
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }