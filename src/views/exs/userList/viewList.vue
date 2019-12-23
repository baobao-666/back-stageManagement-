<template>
  <div class="addUser">
    <div class="addUser1">
      <div class="title">
        <span>给身份设置视口权限</span>
      </div>
      <div class="list">
        <div class="el-select">
          <el-select v-model="listid" placeholder="请选择身份id">
            <el-option
              v-for="item in identity"
              :key="item.identity_id"
              :label="item.identity_text"
              :name="item.identity_text"
            ></el-option>
          </el-select>
        </div>
        <div class="el">
          <el-select v-model="value" placeholder="请选择视图接口权限">
            <el-option
              v-for="item in getview"
              :key="item.view_authority_id"
              :label="item.view_authority_text"
              :value="item.view_authority_text"
            ></el-option>
          </el-select>
        </div>
        <!-- 按钮 -->
        <div class="addUser_input">
          <button class="bun">确定</button>
          <button class="reset">重置</button>
        </div>
      </div>
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
      value: "",
      listid: ""
    };
  },
  computed: {
    ...mapState({
      getview: state => state.userPermission.views,
      identity: state => state.userPermission.identity
    })
  },
  methods: {
    ...mapActions({
      getviews: "userPermission/getviews"
    })
  },
  created() {
    this.getviews();
  }
};
</script>
<style scoped lang="scss">
.addUser {
  width: 33.3%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
span {
  padding: 0 5px;
  font-size: 15px;
  color: #999;
  display: inline-block;

  height: 30px;
  background: #fff;
  line-height: 30px;
  border: 1px solid #dbdbdb;
}
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
.list {
  margin-top: 20px;
}
</style>