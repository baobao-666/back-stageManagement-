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
    <!-- 用户数据 -->
    <NameList v-if="name" />
    <!-- 身份数据 -->
    <Shenfen v-if="shenfen" />
    <!-- api接口权限 -->
    <Apitoken v-if="api" />
    <!-- 身份和api接口关系 -->
    <Identity v-if="identity" />
    <!-- 视图接口权限 -->
    <ViewList v-if="viewList" />
    <!-- 身份和视图权限关系 -->
    <ViewToken v-if="viewToken" />
  </div>
</template>
<script>
import NameList from "./exhibition/nameList";
import Shenfen from "./exhibition/shenfen";
import Apitoken from "./exhibition/apitoken";
import Identity from "./exhibition/identity";
import ViewList from "./exhibition/viewlist";
import ViewToken from "./exhibition/viewtoken";
export default {
  props: {},
  components: {
    NameList,
    Shenfen,
    Apitoken,
    Identity,
    ViewList,
    ViewToken
  },
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
      name: true,
      shenfen: false,
      api: false,
      identity: false,
      viewList: false,
      viewToken: false
    };
  },
  computed: {},
  methods: {
    Tab(index) {
      this.curren = index;
      if (this.curren === 0) {
        this.name = true,
          this.shenfen = false,
          this.api = false,
          this.identity = false,
          this.viewList = false,
          this.viewToken = false
      } 
      if (this.curren === 1) {
        this.shenfen = true
         this.name = false
       
      } 
      if (this.curren === 2) {
        this.api = true
        this.shenfen = false
       
      } 
      if (this.curren === 3) {
        this.identity = true
          this.api = false
      } 
      if (this.curren === 4) {
        this.viewList =true,
        this.identity=false
      }
      if(this.curren===5){
        this.viewToken=true,
        this.viewList=false

      }
    }
  },
  created() {}
};
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
  margin-top: 20px;
}
</style>