<template>
  <el-container>
    <el-header>
      <h2>创建试题</h2>
    </el-header>
    <el-main>
      <el-button>添加新题</el-button>
      <div class="style-edit">
        <h3>{{this.name}}</h3>
        <p></p>
        <div class="edit-cont">
          <!-- 容器 -->
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
        name:""
    };
  },
  computed: {
    // ...mapState({paperList: state => state.ExaminationPaperManagement.getPaperList})
  },
  methods: {
    // ...mapActions({addExaminationPaperManagement:"ExaminationPaperManagement/addExaminationPaperManagement"})
    
  },
  created() {
    // this.addExaminationPaperManagement();
    // console.log(this.paperList);
    let infoList= JSON.parse(localStorage.getItem("info"))
    this.name=infoList.title
    console.log(this.name)
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
  margin: auto;
  padding: 40px;
  text-align: center;
  position: relative;
  background: red;
}
</style>