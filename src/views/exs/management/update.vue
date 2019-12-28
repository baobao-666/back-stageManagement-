<template>
  <div class="list">
    <div>
      <el-select v-model="getuser" placeholder="请选择身份id">
        <el-option
          v-for="(item,index) in userlist"
          :key="index"
          :label="item.user_name"
          :value="item.user_id"
        ></el-option>
      </el-select>
    </div>
    <!-- input -->
    <div class="addUser_input">
      <el-input v-model="userName" type="text" placeholder="请输入用户名" />
    </div>
    <div class="addUser_input">
      <el-input v-model="userPass" type="password" placeholder="请输入密码" />
    </div>
    <!-- 下拉框 -->
    <div>
      <el-select v-model="userId" placeholder="请选择身份id">
        <el-option
          v-for="(item,index) in identity"
          :key="index"
          :label="item.identity_text"
          :value="item.identity_id"
        ></el-option>
      </el-select>
    </div>
    <!-- 按钮 -->
    <div class="addUser_input">
      <button @click="updateUser" class="bun">确定</button>
      <button @click="reslove"  class="reset">重置</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
 data() {
    return {
      getuser:"",
      userName:sessionStorage.getItem("user_name"),
      userPass:sessionStorage.getItem("user_psd"),
      userId:""
    };
  },
  computed: {
    ...mapState({
      identity: state => state.userPermission.identity,
      userlist: state => state.userPermission.userList
    })
  },
  methods: {
    ...mapActions({
      getidentity: "userPermission/getidentity",
      getList: "userPermission/getList",
      updateUserMess:"setUser/updateUserMess"
    }),
    reslove(){
      this.userId="",
      this.getuser= "",
      this.userName="",
      this.userPass="" 
    },
    updateUser(){
      this.updateUserMess({
         user_id:this.getuser,
         user_name:this.userName,
         user_pwd:this.userPass,
         identity_id:this.userId
      })
     window.sessionStorage.removeItem("user_name")
     window.sessionStorage.removeItem("user_psd")
    }
  },
  created() {
    this.getidentity();
    this.getList();
  }
};
</script>
<style scoped lang="scss">
.addUser_input {
  margin-bottom: 20px;
}
.addUser_input input {
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
}
.addUser_input {
  margin-top: 20px;
}
::-webkit-input-placeholder {
  color: #ccc;
  font-size: 14px;
  padding: 0 10px;
}
.addUser_input button {
  height: 30px;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
}
.bun {
  height: 30px;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(-90deg, #4e75ff, #0139fd);
}
.reset {
  height: 30px;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
}
.el {
  margin-top: 20px;
}
</style>