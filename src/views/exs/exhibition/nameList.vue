<template>
    <div>
<div class="h1">
      <p>用户数据</p>
    </div>
    <div class="token">
      <!-- <p>
        <span>用户名</span>
        <span>密码</span>
        <span>身份</span>
      </p> -->
      <el-table
    :data='userlist'
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="user_pwd"
        label="密码"
        width="700">
      </el-table-column>
      <el-table-column
        prop="identity_text"
        label="身份"
       >
      </el-table-column>
    </el-table>
     
    </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
...mapState({ 
     userlist:state=>state.userPermission.userList
   })
    },
    methods:{
...mapActions({
      getList:'userPermission/getList'
    })
    },
    created(){
this.getList()
    },
  
}
</script>
<style scoped lang="scss">
.h1 {
  width: 100%;
  height: 30px;
  font-size: 30px;
}
.token {
  width: 100%;
  margin-top: 20px;
}
</style>