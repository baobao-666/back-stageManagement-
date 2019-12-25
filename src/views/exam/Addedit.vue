<template>
  <el-container>
    <el-header>
      <h2>创建试题</h2>
    </el-header>
    <el-main>
      <el-button>添加新题</el-button>
      <div class="style-edit">
        <h3>{{this.title}}</h3>
        <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        <div class="edit-cont">
          <!-- 容器 -->
          <div class="item" v-for="(item,index) in dataList" :key="index">
            <h4>{{item.title}}</h4>
            <p>{{item.questions_answer}}</p>
            <div>{{item.questions_stem}}</div>
            <a href="">删除</a>
          </div>
        </div>
        <el-button type="primary">创建试题</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      dataList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    let infoList = JSON.parse(localStorage.getItem("info"));
    this.name = infoList.title;
    this.dataList = infoList.questions;
    console.log(this.dataList);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.el-header {
  background-color: #eee;
  color: #333;
  text-align: left;
}
.el-main {
  background-color: #fff;
  color: #333;
  // height: 400px;
  border-radius: 20px;
  flex: auto;
  min-height: 0;
}
.style-edit {
  min-height: 980px;
  margin:0 auto;
  padding:40px;
  // text-align: center;
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.style-edit>p{
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  width: 100%;
  background: #f3f3f3;
  border: 1px solid #ccc;
  margin-bottom: 2px;
  display: flex;
  padding:10px;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
}
.item> a{
  position: absolute;
  top:20px;
  right:30px;
}
</style>