<template>
  <div class="list-page">
    <el-container>
      <el-header>试卷管理</el-header>
      <el-main>
        <div class="count">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="考试类型">
              <el-select v-model="formInline.region">
                <el-option label="周考一" value="周考一"></el-option>
                <el-option label="周考二" value="周考二"></el-option>
                <el-option label="周考三" value="周考三"></el-option>
                <el-option label="月考" value="月考"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课程">
              <el-select v-model="formInline.course">
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
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="zdm">
          <div class="header">
            <div class="leftList">试卷列表</div>
            <div class="rightList">
              <el-button class="line">全部</el-button>
              <el-button class="line">进行中</el-button>
              <el-button class="line">已结束</el-button>
            </div>
          </div>
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column label="试卷信息" prop="date"></el-table-column>
            <el-table-column label="班级" prop="name"></el-table-column>
            <el-table-column label="创建人" prop="date"></el-table-column>
            <el-table-column label="开始时间" prop="name"></el-table-column>
            <el-table-column label="结束时间" prop="date"></el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
    {{list}}
  </div>
</template>
<script>
import{ mapState,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        course: ""
      },

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  },
    computed:{
        ...mapState({
             list:state=>state.ExaminationPaperManagement.add
        })
    },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    ...mapActions({getExaminationPaperManagement:'ExaminationPaperManagement/getExaminationPaperManagement'})
  },
  created() {
    this.getExaminationPaperManagement()
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
  background:#fff;
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