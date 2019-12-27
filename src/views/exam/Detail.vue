<template>
  <div class="detail-page">
    <div class="left">
        <div class="item" v-for="(item,index) in TeacherList.questions" :key="index">
          <h5>{{item.title}}</h5>
          <p>{{item.questions_stem}}</p>
          <p>{{item.questions_answer}}</p>
        </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      TeacherList: state => state.ExaminationPaperManagement.TeacherList
    })
  },

  methods: {
    ...mapActions({
      getExaminationPaperManagementTeacher:
        "ExaminationPaperManagement/getExaminationPaperManagementTeacher"
    })
  },
  created() {
    this.getExaminationPaperManagementTeacher(this.$route.query.id);
  }
};
</script>

<style scoped lang="scss">
.detail-page {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 30px;
  display: flex;
  background: #f3f3f3;
}
.left {
  flex: 7;
  margin-right:10px;
  .item {
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    display: flex;
    padding: 20px;
    justify-content: flex-start;
    flex-direction: column;
    border-radius:5px;
    line-height: 25px;
    & p:last-child{
      background:#f3f3f3;
      padding:5px 3px;
    }
    .item h4{
      font-weight: 100;
    }
  }
  .cv {
    text-align: center;
    margin-top: 50px;
    font-weight: 900;
  }
}
.right {
  flex: 3;
  background: #fff;
  border: 1px solid #ccc;
}
</style>