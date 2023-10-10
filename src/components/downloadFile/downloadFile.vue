<template>
  <el-button
      type="primary"
      @click = "download">
    click to download
  </el-button>
</template>

<script>
import {downloadAtomSystemVHDLCode} from "@/api/download";
// import JSZip from 'jszip';
export default {
  name: "downloadFile",
  methods: {
     download() {
      downloadAtomSystemVHDLCode()
          .then( response => {
            const url = window.URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', "AtomSystemVhdl.zip"); // 设置要保存的文件名
            document.body.appendChild(link);
            setTimeout(function(){
              link.click();
              document.body.removeChild(link);
            },1000)
           })
          .catch(error => {
            console.error('文件下载失败', error);
          });
    }
  }
}
</script>

<style scoped>

</style>