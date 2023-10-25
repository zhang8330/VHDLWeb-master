<template>
  <el-alert
      title="ERROR"
      type="error"
      description="Device_name, Device_type and Device_file cannot be empty!"
      show-icon
      v-show="errorOrNot"
  />
  <div class="box" style="margin: 30px">
    <el-form :model="form" label-width="80px">
      <el-form-item label="Device_name">
        <el-input v-model.trim="form.name" placeholder="Please enter a device name"/>
      </el-form-item>
      <el-form-item label="Device_type">
        <el-radio-group v-model="form.type">
          <el-radio label="causal_domain" />
          <el-radio label="biddable_domain" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Port_properties" style="">
        <el-form-item>
          <br>
        </el-form-item>
        <el-form-item label="Port_name" style="width:100%;margin-left: 80px" >
          <el-input v-model="form.key" style="width:50%" placeholder="Please enter a port name"/>
        </el-form-item>
        <el-form-item label="Specification_name"   style="width:100%;margin-left: 80px" >
          <el-input v-model="form.value" style="width:50%"  placeholder="Please enter a specification name"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add" style="margin:5px 300px;">Add</el-button>
        </el-form-item>
      </el-form-item>
      <el-form-item label="Device_file">
        <el-radio-group v-model="form.dev">
          <el-upload
              class="upload-demo"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              accept="*"
              :auto-upload="true"
              :http-request="upload"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
          </el-upload>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="uploadDev" style="margin-left: 225px;" v-if="isloading" loading>Create</el-button>
        <el-button type="success" @click="uploadDev" style="margin-left: 225px;" v-else>Create</el-button>
<!--        <el-button @click="document.getElementById('form').reset()">Cancel</el-button>-->
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import {UploadFilled} from "@element-plus/icons-vue";
import {uploadDevice} from "@/api/upload";
import async from "async";

export default {
  name: "uploadDevice",
  components:{
    UploadFilled
  },
  data(){
    return {
      form: {
        name: "",
        type: "",
        port: {},
        key: "",
        value: ""
      },
      isloading:false,
      errorOrNot:false
    }
  },
  methods:{
    add() {
      this.form.port[this.form.key] = this.form.value;
      ElMessage.success('successfully added')
      this.form.key = "";
      this.form.value = "";
    },
    upload(file){
      this.form["file"]=file.file;
      console.log(this.form["file"])
    },
    uploadDev(){
      if(this.form.name && this.form.type && this.form.file){
        this.isloading = true;
        this.errorOrNot = false;
        const formData = new FormData();
        formData.append("file",this.form.file);
        formData.append("device_type",this.form.type);
        formData.append("port_message",JSON.stringify(this.form.port));
        formData.append("filename",this.form.name);

        uploadDevice(formData).then(res=>{
          ElMessage.success('上传成功');
          this.isloading = false;
        }).catch(error =>{
          console.log(error);
          ElMessage.error('上传失败');
          this.isloading = false;
        })
      }else{
        this.errorOrNot = true;
      }
    }
  }
}
</script>

<style scoped>
el-input{
  magin-left:30px;
}
</style>