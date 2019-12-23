<template>
  <div class="list">
    <!-- input -->
    <div class="addUser_input">
      <input type="text" placeholder="请输入用户名" />
    </div>
    <div class="addUser_input">
      <input type="password" placeholder="请输入密码" />
    </div>
    <!-- 下拉框 -->
    <div>
      <el-select v-model="value" placeholder="请选择身份id">
        <el-option
          v-for="item in identity"
          :key="item.identity_id"
          :label="item.identity_text"
          :value="item.identity_text"
        ></el-option>
      </el-select>
    </div>
    <!-- 按钮 -->
    <div class="addUser_input">
      <button class="bun">确定</button>
      <button class="reset">重置</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  computed: {
    ...mapState({
      identity: state => state.userPermission.identity
    })
  },
  methods: {
    ...mapActions({
      getidentity: "userPermission/getidentity"
    })
  },
  created() {
    this.getidentity();
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
  color: #000;
   background: #fff;
  border: 1px solid #ccc;
}
.el {
  margin-top: 20px;
}
</style>