<template>
  <div class="list-page">
    <el-container>
      <el-header>试卷管理</el-header>
      <el-main>
        <div class="count">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="考试类型">
              <el-select v-model="formInline.region">
                <el-option
                  :label="item.exam_name"
                  :value="item.exam_id"
                  v-for="(item,index) in typeList"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课程">
              <el-select v-model="formInline.course">
                <el-option
                  :label="item.subject_text"
                  :value="item.subject_id"
                  v-for="(item,index) in subjectList"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="zdm">
          <div class="header">
            <div class="leftList">试卷列表</div>

            <div class="rightList">
              <el-button @click="exportEXcel">导出Excel</el-button>
              <el-button class="line">全部</el-button>
              <el-button class="line">进行中</el-button>
              <el-button class="line">已结束</el-button>
            </div>
          </div>
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column label="试卷信息" prop="title"></el-table-column>
            <el-table-column label="班级" prop="grade_name"></el-table-column>
            <el-table-column label="创建人" prop="user_name"></el-table-column>
            <el-table-column label="开始时间" prop="start_time"></el-table-column>
            <el-table-column label="结束时间" prop="end_time"></el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">操作</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import XLSX from "xlsx";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        region: "", //考试类型
        course: "" //课程列表
      },
      tableData: [],
      search: ""
    };
  },
  computed: {
    ...mapState({
      typeList: state => state.ExaminationPaperManagement.typeList,
      subjectList: state => state.ExaminationPaperManagement.subjectList,
      // 试题列表
      paperList: state => state.ExaminationPaperManagement.paperList
    })
  },
  watch: {
    paperList(now) {
      this.tableData = now.exam.map(item => {
        return {
          title: item.title,
          grade_name: item.grade_name,
          user_name: item.user_name,
          start_time: item.start_time,
          end_time: item.end_time,
          exam_exam_id: item.exam_exam_id
        };
      });
    }
  },
  methods: {
    ...mapActions({
      getexamType: "ExaminationPaperManagement/getexamType",
      getSubject: "ExaminationPaperManagement/getSubject",
      getExaminationPaperManagement:
        "ExaminationPaperManagement/getExaminationPaperManagement"
    }),
    handleEdit(index, row) {
      this.$router.push(`/detail?id=${row.exam_exam_id}`);
    },
    exportEXcel() {
      var wb = XLSX.utils.book_new();
      // console.log(this.tableData, "keys...", Object.keys(this.tableData[0]));
      var ws = XLSX.utils.json_to_sheet(this.tableData, {header: Object.keys(this.tableData[0])});
      // XLSX.utils.book_append_sheet(wb,ws,'student1')
      // XLSX.utils.book_append_sheet(wb,ws,'student2')
      // XLSX.utils.book_append_sheet(wb,ws,'student2')
      XLSX.utils.book_append_sheet(wb, ws, "student1");
      XLSX.utils.book_append_sheet(wb, ws, "student2");
      XLSX.utils.book_append_sheet(wb, ws, "student3");
      // 生成excel
      XLSX.writeFile(wb, "");
    }
  },
  created() {
    this.getExaminationPaperManagement();
  }
};
</script>
<style scoped lang="scss">
.el-header {
  background-color: #f0f2f5;
  color: #333;
  line-height: 60px;
  font-size: 18px;
}
.el-main {
  background-color: #f0f2f5;
  color: #333;
  // line-height: 160px;
}
.count {
  padding: 15px 20px 50px 20px;
  background: #fff;
  border-radius: 15px;
  margin-bottom: 30px;
}
.zdm {
  border-radius: 15px;
  background: #fff;
  padding: 15px 20px 50px 20px;
  .header {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rightList {
      display: flex;
      .line {
        margin: 0;
      }
    }
  }
}
</style>