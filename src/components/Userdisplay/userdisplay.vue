<template>
  <div class="useradd">
    <div class="tab">
      <span 
        v-for="(item,index) in list"
        :key="index"
        :class="{active:curren==index}"
        @click="Tab(index)"
      >{{item}}</span>
    </div>
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
  props: {},
  components: {},
  data() {
    return {
      list: [
        "用户数据",
        "身份数据",
        "api接口数据",
        "身份和api接口关系",
        "视图接口权限",
        "身份和视图权限关系"
      ],
      curren: 0,
    
    };
  },
  computed: {
   ...mapState({
     userlist:state=>state.userPermission.userList
   })
  },
  methods: {
    Tab(index) {
      this.curren = index;
    },
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
.useradd {
  width: 95%;
 flex: auto;
  min-height: 0;
  position: relative;
}
.tab {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
  span {
  padding: 0 15px;
  font-size: 15px;
  color: #595959;
  display: inline-block;
  height: 30px;
  background: #fff;
  line-height: 30px;
  border: 1px solid #dbdbdb;
}
.active {
  color: #5339fd;
  border: 1px solid #5339fd;
}
.h1 {
  width: 100%;
  height: 30px;
  font-size: 30px;
}
.token {
  width: 100%;
  margin-top: 20px
 
}


</style>