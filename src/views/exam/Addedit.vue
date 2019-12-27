<template>
  <el-container>
    <el-header>
      <h2>创建试题</h2>
    </el-header>
    <el-main>
      <el-button @click="Dot">添加新题</el-button>
      <div class="style-edit" v-if="dataList.questions.length">
        <h3>{{dataList.title}}</h3>
        <p>考试时间：1小时30分钟 监考人:{{dataList.questions[0].user_name}} 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        <div class="edit-cont">
          <!-- 容器 -->
          <div class="item" v-for="(item,index) in dataList.questions" :key="index">
            <h4>{{item.title}}</h4>
            <p>{{item.questions_answer}}</p>
            <p>{{item.questions_stem}}</p>
            <span @click="remove">删除</span>
          </div>
        </div>
        <el-button type="primary" @click="jump(dataList)">创建试题</el-button>
      </div>
      <div v-else>where no three!!!</div>
    </el-main>
    <div v-show="HiddenBox" class="box">
         <p>study hard and make progress every day</p>
         <p>study hard and make progress every day</p>
    </div>
  </el-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "",
      dataList: [],
      HiddenBox: false
    };
  },
  computed: {},
  methods: {
    Dot() {
      this.HiddenBox = !this.HiddenBox;
    },
    ...mapActions({
      updateExaminationPaperManagement:
        "ExaminationPaperManagement/updateExaminationPaperManagement"
    }),
    ...mapMutations({
      delePaper: "ExaminationPaperManagement/delePaper"
    }),
    remove(e) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    },
    jump(vl) {
      let Sum = vl.questions.map((item,index)=>{
        return item.questions_id
      })
      let canshu = {
        arr : Sum,
        data_id:vl.exam_exam_id
      }
      this.updateExaminationPaperManagement(canshu);
      this.$router.push('/Listexam')
    }
  },
  created() {
    this.dataList = JSON.parse(sessionStorage.getItem("res")).data;
  }
};
</script>
<style scoped lang="scss">
el-container {
  width: 100%;
  height: 100%;
 
}
 .box {
    width: 500px;
    height: 100%;
    background:#f4f4f4;
    position: absolute;
    top: 0;
    right:0;
    line-height: 30px;
  }
el-header {
  background-color: #eee;
  color: #333;
  text-align: left;
}
el-main {
  background-color: #fff;
  color: #333;
  // height: 400px;
  border-radius: 20px;
  flex: auto;
  min-height: 0;
  position: relative;
}
.style-edit {
  min-height: 980px;
  margin: 0 auto;
  padding: 40px;
  // text-align: center;
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.style-edit > h3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.style-edit > p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  width: 100%;
 background:#fff;
  border: 1px solid #ccc;
  margin-bottom: 2px;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  line-height: 30px;
}
.item > span {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 50px;
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  color: red;
}
.item > p {
  flex-wrap: wrap;
}
.item > p:last-child{
   background: #ccc;
}
.cv {
  text-align: center;
  margin-top: 50px;
  font-weight: 900;
}
</style>