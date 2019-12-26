<template>
  <el-container>
    <el-header>
      <h2>创建试题</h2>
    </el-header>
    <el-main>
      <el-button>添加新题</el-button>
      <div class="style-edit">
        <h3>{{dataList.title}}</h3>
        <p>考试时间：1小时30分钟 监考人:{{this.dataList.questions[0].user_name}} 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        <div class="edit-cont">
          <!-- 容器 -->
          <div class="item" v-for="(item,index) in dataList.questions" :key="index">
            <h4>{{item.title}}</h4>
            <p>{{item.questions_answer}}</p>
            <div>{{item.questions_stem}}</div>
            <a href @click="delet(index)">删除</a>
          </div>
        </div>
        <el-button type="primary" @click="jump(dataList)">创建试题</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "",
      dataList: []
    };
  },
  computed: {
    ...mapState({
      delePaper: state => state.ExaminationPaperManagement.delePaper,
      // addList:state=>state.ExaminationPaperManagement.addList
    })
  },
  methods: {
    ...mapActions({
      deleteExaminationPaperManagementTeacher:"ExaminationPaperManagement/deleteExaminationPaperManagementTeacher",
      updateExaminationPaperManagement:"ExaminationPaperManagement/updateExaminationPaperManagement"
    }),
    ...mapMutations({
      deleteOne:"ExaminationPaperManagement/deleteOne",
    }),
    delet(index) {
      // this.deleteExaminationPaperManagementTeacher(index);
      this.deleteOne(index)
    },
    jump(vl){
      let ids = vl.exam_exam_id;
      let a = JSON.stringify(ids)
      this.updateExaminationPaperManagement(a)
      this.$router.push('/Listexam')
    }
  },
  created() {
      this.dataList = JSON.parse(sessionStorage.getItem("res")).data
  }
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
  background: #f3f3f3;
  border: 1px solid #ccc;
  margin-bottom: 2px;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
}
.item > a {
  position: absolute;
  top: 20px;
  right: 30px;
}
.cv{
  text-align: center;
  margin-top:50px;
  font-weight: 900;
}
</style>