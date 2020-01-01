<template>
  <div>
    <input type="file" @change="handFileChange" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  
  methods: {
    handFileChange() {
      var ele = document.querySelector("input");
      ele.onchange = function(e) {
        console.log("e...", e);
        let files = e.target.files;
        // 创建一个formData
        let form = new FormData();
        for (let i = 0, len = files.length; i < len; i++) {
          console.log(files[i].name);
          form.append(files[i].name, files[i]);
        }
        console.log(1)
        axios({
          method: "post",
          url: "http://123.206.55.50:11000/upload",
          data: form
        })
          .then(body => {
            //   成功
            console.log("body...", body);
          })
          .catch(e => {
            //   失败
            console.log("e..", e);
          });
      };
    }
  }
};
</script>

<style>
</style>