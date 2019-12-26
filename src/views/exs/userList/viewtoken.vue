<template>
  <div class="addUser">
    <div class="addUser1">
      <div class="title">
        <span>添加视口接口权限</span>
      </div>
      <div class="list">
        <!-- xiala -->
        <div>
          <el-select v-model="data" placeholder="请选择已有视口"  >
            <el-option
              v-for="(item,index) in getview"
              :key="index"
              :label="item.view_authority_text"
              :value="[item.view_authority_id,item.view_authority_text]"
            ></el-option>
          </el-select>
        </div>
        <!-- 按钮 -->
        <div class="addUser_input">
          <button @click="submit" class="bun">确定</button>
          <button @click="reset" class="reset">重置</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { log } from 'util';
export default {
  props: {},
  components: {},
  data() {
    return {
      data: ""
    };
  },
  computed: {
    ...mapState({
      getview: state => state.userPermission.views
    })
  },
  methods: {
    ...mapActions({
      getviews: "userPermission/getviews",
      addViewId:"setUser/addViewId"
    }),
    submit(){
        this.addViewId({
         view_authority_text:this.data[1],
         view_id:this.data[0]
        })
    },
    reset(){
      this.data = ""
    }
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