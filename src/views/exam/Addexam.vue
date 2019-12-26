<template>
  <div class="box">
    <h2>添加考试</h2>
    <div class="con">
      <div class="name">
        <p>
          <span>*</span>
          <span>试卷名称</span>
        </p>
        <el-input v-model="title"></el-input>
      </div>
      <div>
        <p>
          <span>*</span>
          <span>选择考试类型:</span>
        </p>
        <el-select v-model="exam_id" placeholder=" ">
          <el-option
            v-for="(item, index) in typeList"
            :key="index"
            :label="item.exam_name"
            :value="item.exam_id"
          ></el-option>
        </el-select>
      </div>
      <div>
        <p>
          <span>*</span>
          <span>选择课题:</span>
        </p>
        <el-select v-model="subject_id">
          <el-option
            v-for="(item, index) in subjectList"
            :key="index"
            :label="item.subject_text"
            :value="item.subject_id"
          ></el-option>
        </el-select>
      </div>
      <div>
        <p>
          <span>*</span>
          <span>设置题量</span>
        </p>
        <el-input-number ref="ipt" v-model="number" controls-position="right" :min="1" :max="10"></el-input-number>
      </div>
      <div class="time">
        <p>考试时间</p>
        <div class="time_con">
          <div class="block">
            <el-date-picker
              v-model="start_time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          <span style="margin-right:10px;margin-top:3px;">-</span>
          <div class="block">
            <el-date-picker
              v-model="end_time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </div>
      </div>
      <el-button type="primary" @click="submit">创建考试</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      subject_id: "",
      exam_id: "",
      title: "",
      number: 3,
      start_time: "",
      end_time: ""
    };
  },
  computed: {
    ...mapState({
      typeList: state => state.ExaminationPaperManagement.typeList,
      subjectList: state => state.ExaminationPaperManagement.subjectList,
      addList: state => state.ExaminationPaperManagement.addList
    })
  },
  methods: {
    ...mapActions({
      getexamType: "ExaminationPaperManagement/getexamType",
      getSubject: "ExaminationPaperManagement/getSubject",
      addExaminationPaperManagement:"ExaminationPaperManagement/addExaminationPaperManagement"
    }),
    submit() {
      // console.log(this.form.start_time=+this.form.start_time,this.form.end_time=+this.form.end_time);
      let form = {
        subject_id: this.subject_id,
        exam_id: this.exam_id,
        title: this.title,
        number: this.number,
        start_time: this.start_time * 1,
        end_time: this.end_time * 1
      };
        this.addExaminationPaperManagement(form);
        this.$router.push("/Addexam/Addedit"); 
    }
  },
  created() {
    this.getexamType(), 
    this.getSubject();
    
  },
  mounted(){
    
  }
};
</script>
<style lang="scss" scoped>
/deep/ .is-controls-right {
  width: 100px;
}
/deep/ .ipt {
  width: 100px;
}
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
h2 {
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 21px;
}
.box {
  background: #f0f2f5;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0px 24px 24px;
}
.con {
  margin: 0 0 24px;
  padding: 24px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
/deep/ .el-select {
  width: 120px;
  height: 32px;
  border-radius: 2px;
}
.el-input__inner {
  width: 120px;
  height: 32px;
  padding: 0;
  // text-indent: .5em;
}
//  .el-input__inner:last-child {
//   text-indent: 0em;
// }

.name /deep/ .el-input__inner:nth-child(1) {
  width: 435px;
}
.time /deep/ .el-input__inner:nth-child(1) {
  width: 205px;
}
.el-select {
  display: block;
}
/deep/ .el-input-number__increase,
/deep/ .el-input-number__decrease {
  width: 21px;
  height: 15px !important;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.45);
  background: #fff;
}
/deep/ .el-input-number__increase {
  margin-top: 3px;
}
/deep/ .el-input-number__decrease {
  margin-bottom: 3px;
}
.time_con {
  display: flex;
  flex-direction: row;
}
.time /deep/ .el-input__prefix {
  width: 30px;
  margin-left: 170px;
}
button {
  width: 136px;
  height: 32px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
  padding: 0 40px !important;
  border-radius: 4px !important;
  border: 0 !important;
  font-size: 14px !important;
  color: #fff !important;
  margin-top: 35px;
  margin-bottom: 25px;
}
p {
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 14px;
}
p span:nth-child(1) {
  color: red;
  margin-right: 5px;
}
/deep/ .qq {
  width: 435px;
}
</style>