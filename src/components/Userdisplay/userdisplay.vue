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
      <p>
        <span>用户名</span>
        <span>密码</span>
        <span>身份</span>
      </p>
      <ul>
        <li>zhaoxiaoru</li>
        <li>10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718</li>
        <li>出题者</li>
      </ul>
       <ul>
        <li>zhaoxiaoru</li>
        <li>10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718</li>
        <li>出题者</li>
      </ul>
     
    </div>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000"
  class="page"
  >
</el-pagination>
  </div>
</template>
<script>

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
      curren: 0
    };
  },
  computed: {
   
  },
  methods: {
    Tab(index) {
      this.curren = index;
    },
   
  },
  created(){
    
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
 
}
.token p {
  width: 100%;
  height: 50px;
  background: #fafafa;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.token p span {
border: none;
line-height: 50px;
margin: 0 10px;
background: none;

}
.token p span:nth-child(2){
   margin-right: 230px;
}
.token p span:first-child{
    margin-left: 50px;
}
.token ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
   height: 50px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    color: #595959;
    line-height: 50px
}

.token ul li:first-child{
 margin:0 60px 0 0;
}
.page{
    position: absolute;
    right: 0;
  
   
}
</style>