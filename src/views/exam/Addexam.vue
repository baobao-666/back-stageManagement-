<template>
  <div class="add-page">
    <h2>添加考试</h2>
    <div class="content">
        <el-form ref="form" :model="form" label-width="110px">
          <el-form-item label="*试卷名称*">
            <el-input v-model="form.name" width="110px"></el-input>
        </el-form-item>
        <el-form-item label="*选择考试类型*">
          <el-select v-model="form.region">
            <el-option value="周考一"></el-option>
            <el-option value="周考二"></el-option>
            <el-option value="周考三"></el-option>
            <el-option value="月考"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="* 选择课程:">
          <el-select v-model="form.coursec">
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
          <el-select v-model="form.amount"> 
          </el-select>
        </el-form-item>

        <el-form-item label="考试时间:">
          <el-col :span="5">
            <el-date-picker
              type="date"
              placeholder="开始时间"
              v-model="form.date1"
            ></el-date-picker>
          </el-col>
          <el-col :span="3">-</el-col>
          <el-col :span="5">
            <el-time-picker placeholder="结束时间" v-model="form.date2"></el-time-picker>
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
import { mapState,mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",//试卷标题
        region: "",//试卷类型id
        date1: "",//开始时间
        date2: "", //结束时间
        coursec:"",//学科
        amount:""//试卷题量,默认4 可传可不传
      }
    };
  },
  methods: {
    ...mapActions({addExaminationPaperManagement:"ExaminationPaperManagement/addExaminationPaperManagement"}),

    onSubmit() {
          console.log(this.form)
      this.addExaminationPaperManagement({subject_id:this.form.coursec,exam_id:this.form.region,title:this.form.name,start_time:this.form.date1,end_time:this.form.date2});
    }
  },
  created() {

  },
};
</script>
<style scoped lang="scss">
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
  .el-form-item--medium .el-form-item__content{
    display: flex;
    flex-direction: column;
  }
}

</style>