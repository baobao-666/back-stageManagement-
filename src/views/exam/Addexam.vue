<template>
  <div class="add-page">
    <h2>添加考试</h2>
    <div class="content">
      <el-form ref="form" :model="form" label-width="110px">
        <el-form-item label="*试卷名称*">
          <el-input v-model="form.title" width="110px"></el-input>
        </el-form-item>
        <el-form-item label="*选择考试类型*">
          <el-select v-model="form.exam_id">
            <el-option value="周考一"></el-option>
            <el-option value="周考二"></el-option>
            <el-option value="周考三"></el-option>
            <el-option value="月考"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="* 选择课程:">
          <el-select v-model="form.subject_id">
            <el-option label="JS上" value="JS上"></el-option>
            <el-option label="JS下" value="JS下"></el-option>
            <el-option label="模块化开发" value="模块化开发"></el-option>
            <el-option label="移动端开发" value="移动端开发"></el-option>
            <el-option label="node基础" value="node基础"></el-option>
            <el-option label="组件化开发" value="组件化开发"></el-option>
            <el-option label="渐进式开发" value="渐进式开发"></el-option>
            <el-option label="项目实战" value="项目实战"></el-option>
            <el-option label="高级JS" value="高级JS"></el-option>
            <el-option label="Node高级" value="Node高级"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="* 设置题量:">
          <el-select v-model="form.number"></el-select>
        </el-form-item>

        <el-form-item label="考试时间:">
          <el-col :span="5">
            <el-date-picker type="date" placeholder="开始时间" v-model="form.start_time"></el-date-picker>
          </el-col>
          <el-col :span="3">-</el-col>
          <el-col :span="5">
            <el-time-picker placeholder="结束时间" v-model="form.end_time"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">创建试卷</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        subject_id: "", //学科
        exam_id: "", //试卷类型id
        title: "", //试卷标题
        number: "", //试卷题量,默认4 可传可不传
        start_time: "", //开始时间
        end_time: "" //结束时间
      }
    };
  },
  computed: {
    ...mapState({
      typeList: state => state.ExaminationPaperManagement.typeList,
      subjectList:state => state.ExaminationPaperManagement.subjectList,
      questTypeList:state => state.ExaminationPaperManagement.questTypeList
    })
  },
  methods: {
    ...mapActions({ getexamType: "ExaminationPaperManagement/getexamType", getSubject:"ExaminationPaperManagement/getSubject",getQuestionsType:"ExaminationPaperManagement/getQuestionsType"}),

    onSubmit() {
      // console.log(this.form)
      // this.addExaminationPaperManagement({subject_id:this.form.subject_id,exam_id:this.form.exam_id,title:this.form.title,number:this.form.number,start_time:this.form.start_time,end_time:this.form.end_time})
      // this.$router.push('/Addexam/Addedit')
    }
  },
  created() {
    this.getexamType(),
    this.getSubject(),
    this.getQuestionsType()
  }
};
</script>
<style scoped lang="scss">
el-form {
  display: flex;
  flex-direction: column;
}
.add-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
}
h2 {
  margin-top: 10px;
  padding: 20px 0;
}
.count {
  width: 100%;
  height: 100%;
  .el-form-item--medium .el-form-item__content {
    display: flex;
    flex-direction: column;
  }
}
</style>