<template>
  <div class="count">
    <div class="wrap">
      <!-- 添加用户 -->
      <div class="addUser">
        <div class="title">
          <span
            :class="{active:index==cur}"
            v-for="(item,index) in list"
            :key="index"
            @click="tab(index)"
          >{{item}}</span>
        </div>
        <!-- 添加用户 -->
        <Add v-if="showlist"/>
        <!-- 更新用户 -->
        <Update v-if="show"/>
      </div>
      <!-- 添加身份 -->
      <AddList />
      <!-- 添加api接口权限 -->
      <ApiList />
      <!-- 添加视图接口权限 -->
       <Viewtoken />
      <!-- 身份设置api接口权限 -->
     <Userapi />
      <!-- 身份设置视图权限 -->
      <ViewList />
    </div>
  </div>
</template>
<script>

import AddList from "@/views/exs/userList/addList";
import ApiList from "@/views/exs/userList/apiList";
import Userapi from "@/views/exs/userList/userapi";
import ViewList from "@/views/exs/userList/viewList";
import Viewtoken from "@/views/exs/userList/viewtoken";
import Update from "./update";
import Add from "./Add";
export default {
  props: {},
  components: {
    Update,
    Add,
    AddList,
    ApiList,
    Userapi,
    ViewList,
    Viewtoken
  },
  data() {
    return {
      list: ["添加用户", "更新用户"],
      cur: 0,
      show: false,
      showlist: true,
      
      
    };
  },
  computed: {
   
  },
  methods: {
    tab(index) {
      this.cur = index;
      if (this.cur === 0) {
        this.show = false;
        this.showlist = true;
      } else {
        this.show = true;
        this.showlist = false;
      }
    },
    
    
  },
  created() {
   
   
   
  }
};
</script>
<style scoped lang="scss">
.count {
  width: 95%;
  flex: auto;
  min-height: 0;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
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
.active {
  color: #5339fd;
  border: 1px solid #5339fd;
}
.list {
  margin-top: 20px;
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
  border: 1px solid #ccc;
}
.el {
  margin-top: 20px;
}
</style>