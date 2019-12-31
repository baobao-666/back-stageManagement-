<template>
  <div class="test">
    <el-form ref="form" :model="form" label-width="80px">
      <p style="margin-left:15px">题目信息</p>
      <p style="margin-left:15px">题干</p>
      <el-input
        v-model="form.name"
        style="width:500px;margin-left:15px"
        placeholder="请输入题目标题,不超过20个字"
      />
      <p style="margin-left:15px">题目主题</p>
      <el-input
        style="margin-left:15px;width:1000px;"
        rows="10"
        type="textarea"
        v-model="form.desc"
        placeholder="请输入内容..."
      ></el-input>
      <!-- 考试类型数据 -->
      <p style="margin-left:15px">请选择考试类型:</p>
      <el-select v-model="form.exam" style="margin-left:15px">
        <el-option
          v-for="(item,index) in examList"
          :key="index"
          :label="item.exam_name"
          :value="item.exam_id"
        ></el-option>
      </el-select>
      <!-- 课程数据 -->
      <p style="margin-left:15px">请选择课程类型:</p>
      <el-select v-model="form.subject" style="margin-left:15px">
        <el-option
          v-for="(item,index) in courseList"
          :key="index"
          :label="item.subject_text"
          :value="item.subject_id"
        ></el-option>
      </el-select>
      <!-- 题目数据 -->
      <p style="margin-left:15px">请选择题目类型：</p>
      <el-select v-model="form.topic" style="margin-left:15px">
        <el-option
          v-for="(item,index) in topicList"
          :key="index"
          :label="item.questions_type_text"
          :value="item.questions_type_id"
        ></el-option>
      </el-select>

      <p style="margin-left:15px">答案信息</p>
      <el-input
        style="margin-left:15px;width:1000px;"
        rows="10"
        type="textarea"
        v-model="form.answer"
        placeholder="请输入内容..."
      ></el-input>

      <p style="margin-left:15px">
        <el-button class="btn" @click="submit">提交</el-button>
      </p>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      form: {
        name: "", //题干
        desc: "", // 主题
        exam: "", // 考试类型
        subject: "", //课程类型
        topic: "", //题目类型
        answer: "" ,// 答案信息
      },
      questions_id:this.$route.query.id  // 试题ID
    };
  },
  computed: {
    ...mapState({
      // 考试类型总数居
      examList: state => state.TestQuestionManagement.examList,
      // 所有的课程类型数据
      courseList: state => state.TestQuestionManagement.courseList,
      // 题目类型的数据
      topicList: state => state.TestQuestionManagement.topicList,
      // 所有试题
      testQuestionsList:state =>state.TestQuestionManagement.testQuestionsList,
    })
  },
  methods: {
    ...mapActions({
      // 调用考试类型接口
      getTestQuestionsType: "TestQuestionManagement/getTestQuestionsType",
      //调用课程类型接口
      getCourseType: "TestQuestionManagement/getCourseType",
      // 调用题目类型接口
      getTopicQuestionsType: "TestQuestionManagement/getTopicQuestionsType",
      //更新试题
      UpdateTestQuestions: "TestQuestionManagement/UpdateTestQuestions",
    }),
    submit() {
      // 要修改的类型数据  所需试题信息
      let title = this.form.name, //题干
          questions_stem = this.form.desc, // 主题
          exam_id = this.form.exam, // 考试类型
          subject_id = this.form.subject, //课程类型
          questions_type_id = this.form.topic, //题目类型
          questions_answer = this.form.answer, // 答案信息
          questions_id=this.questions_id      //试题ID
      if (
        // questions_id &&
        questions_type_id &&
        questions_stem &&
        subject_id &&
        exam_id &&
        questions_answer &&
        title
      ) {
        this.$confirm("你确定要修改这道试题吗文, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
            // 更新试题接口
            let data ={
              questions_id,
              questions_type_id,
              questions_stem,
              subject_id,
              exam_id,
              questions_answer,
              title
            }
            this.UpdateTestQuestions(data);
            this.$message({
              type: "success",
              message: "修改成功!"
            });
            this.$router.push('/test-questions/examine')
          }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消修改"
            });
          });
      } else {
        alert("请完整填写要修改的信息！");
      }
    }
  },
  created() {
    //调用考试类型接口
    this.getTestQuestionsType();
    //调用课程类型接口
    this.getCourseType();
    // 调用题目类型接口
    this.getTopicQuestionsType();
  },
  mounted() {
    let item = this.testQuestionsList.find((item,index)=>item.questions_id===this.questions_id);
    console.log(item.title,'title')
    this.form.name = item.title;
    this.form.desc= item.questions_stem;
    this.form.exam = item.exam_id;
    this.form.subject = item.subject_id;
    this.form.topic = item.questions_type_id;
    this.form.answer = item.questions_answer;
  }
};
</script>
<style scoped lang="scss">
.test {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.btn {
  width: 111px;
  background: rgb(28, 28, 236);
  color: #fff;
}
</style>