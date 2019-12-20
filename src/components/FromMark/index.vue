<template>
   <div class="wrap_mark">
      <div class="mark_from">
           <div class="from-header">
             <div>添加班级</div>
             <div>x</div>
           </div>
           <div class="from-main"></div>
           <div class="from-footer"></div>
      </div>
   </div>
</template>

<script>

export default {
    data(){
        return {
        ruleForm: {
          name: ''
        }
        }
    }
}
</script>
<style scoped  lang="scss">
.wrap_mark{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
  padding: 15% 30% 0;
  background: rgba($color: #000000, $alpha: .5)
  }
  .mark_from{
   width: 100%;
   background: #fff;
   padding: 24px;
   justify-content: space-between;
  }
  .from-header{
    display: flex;
    margin-bottom: 20px;
    div{
       
    }
  }
</style>