<template>
  <el-alert
      title="ERROR"
      type="error"
      description="Device_name and Device_type cannot be empty!"
      show-icon
      v-show="errorOrNot"
  />
  <div class="form">
  <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="device"
      style="max-width: 460px;padding-top:35px;"
  >
    <el-form-item label="Device_name">
      <el-input v-model.trim="device.name" placeholder="Please enter a device name"/>
    </el-form-item>
    <el-form-item label="Device_type">
      <el-radio-group v-model="device.type">
        <el-radio label="causal_domain" />
        <el-radio label="biddable_domain" />
      </el-radio-group>
    </el-form-item>
    <el-button type="warning" style="margin-left: 150px;" @click="del">delete</el-button>
  </el-form>
  </div>

</template>

<script>
import { reactive, ref } from 'vue'
import {deleteDevice} from "@/api/delete";
const labelPosition = ref('right')
export default {
  name: "deleteDevice",
  data(){
    return {
      device:{
        name: '',
        type: '',
      },
      errorOrNot:false,
    }
  },
  methods:{
    del(){
      // console.log("name",this.device.name);
      // console.log("device_type",this.device.type);
      if(this.device.name && this.device.name){
        this.errorOrNot = false;
        const formData = new FormData();
        formData.append("name",this.device.name);
        formData.append("device_type",this.device.type);
        deleteDevice(formData).then(res=>{
          console.log(res);
          ElMessage.success("Successfully deleted");
        }).catch(error=>{
          console.log(error);
          ElMessage.warning("Deletion failure");
        })
      }else{
        this.errorOrNot = true;
      }
    }
  }

}
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
h1{
  margin-top:80px;
  font-size: 28px;
}
  .form{
    width:400px;
    height:200px;
    margin:80px auto;
    /*background-color: #f5f5f7;*/
  }
</style>