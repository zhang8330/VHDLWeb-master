<template >
  <div   @contextmenu="showPopup" @click="hidePopup" style="margin:20px;padding: 5px;" id="contentBox" v-loading="isReady">
    <p style="text-align: center;margin: 2px;"><el-tag style="font-size: 25px;">Module</el-tag></p>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    <div v-show="isPopupVisible" :style="{ left: popupPosition.x + 'px', top: popupPosition.y + 'px' }" class="popup">
      <ul>
        <li @click="getName">Show the model</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getModule} from "@/api/get";

export default {
  props:["devicename","path"],
  name: "getSimulationStructure",
  data(){
    return {
      // test:{
      //   "module": {
      //     "AD18_0": [
      //       "AD18_0U0"
      //     ],
      //     "AD18_0U0": [
      //       "Attitude_Determination",
      //       "Attitude_Determination_Computing_Component"
      //     ],
      //     "Attitude_Determination": [],
      //     "Attitude_Determination_Computing_Component": [],
      //     "Control_Computing_Component": [],
      //     "Controller": [],
      //     "DA14_0": [
      //       "DA14_0U0"
      //     ],
      //     "DA14_0U0": [
      //       "DA14_i"
      //     ],
      //     "DA14_i": [
      //       "DA14controler_0",
      //       "GDA15_0",
      //       "SSDA16_0",
      //       "TDA17_0"
      //     ],
      //     "DA14controler_0": [
      //       "DA14controler_0U0"
      //     ],
      //     "DA14controler_0U0": [],
      //     "GCO5_0": [
      //       "GCO5_0U0"
      //     ],
      //     "GCO5_0U0": [
      //       "Gyro_Control_Output",
      //       "Gyro_Control_Output_Componet"
      //     ],
      //     "GDA15_0": [
      //       "GDA15_0U0"
      //     ],
      //     "GDA15_0U0": [
      //       "Gyro_Data_Acquisition",
      //       "Gyro_Data_Computing_Componet"
      //     ],
      //     "GI3_0": [
      //       "GI3_0U0"
      //     ],
      //     "GI3_0U0": [
      //       "GI3_i"
      //     ],
      //     "GI3_i": [
      //       "GCO5_0",
      //       "GI3controler_0",
      //       "SGPoI4_0"
      //     ],
      //     "GI3controler_0": [
      //       "GI3controler_0U0"
      //     ],
      //     "GI3controler_0U0": [],
      //     "GI_0": [
      //       "GI_0U0"
      //     ],
      //     "GI_0U0": [],
      //     "Gyro_0": [
      //       "Gyro_0U0"
      //     ],
      //     "Gyro_0U0": [],
      //     "Gyro_1": [
      //       "Gyro_1U0"
      //     ],
      //     "Gyro_1U0": [],
      //     "Gyro_2": [
      //       "Gyro_2U0"
      //     ],
      //     "Gyro_2U0": [],
      //     "Gyro_Control_Output": [],
      //     "Gyro_Control_Output_Componet": [],
      //     "Gyro_Data_Acquisition": [],
      //     "Gyro_Data_Computing_Componet": [],
      //     "I1controler_0": [
      //       "I1controler_0U0"
      //     ],
      //     "I1controler_0U0": [],
      //     "ITI2_0": [
      //       "ITI2_0U0"
      //     ],
      //     "ITI2_0U0": [
      //       "fengping"
      //     ],
      //     "InterruptComputing": [],
      //     "InterruptServiceControl": [],
      //     "MComputing_Component": [],
      //     "MI12_0": [
      //       "MI12_0U0"
      //     ],
      //     "MI12_0U0": [],
      //     "MSM19_0": [
      //       "MSM19_0U0"
      //     ],
      //     "MSM19_0U0": [
      //       "Mode_Switching_Management",
      //       "MComputing_Component"
      //     ],
      //     "MSMCC_0": [
      //       "MSMCC_0U0"
      //     ],
      //     "MSMCC_0U0": [],
      //     "MasterControl_0": [
      //       "MasterControl_0U0"
      //     ],
      //     "MasterControl_0U0": [],
      //     "Mode_Switching_Management": [],
      //     "SGPoI4_0": [
      //       "SGPoI4_0U0"
      //     ],
      //     "SGPoI4_0U0": [],
      //     "SSCO": [],
      //     "SSCO8_0": [
      //       "SSCO8_0U0"
      //     ],
      //     "SSCO8_0U0": [
      //       "SSCO",
      //       "SSCOCC"
      //     ],
      //     "SSCOCC": [],
      //     "SSDA16_0": [
      //       "SSDA16_0U0"
      //     ],
      //     "SSDA16_0U0": [],
      //     "SSI6_0": [
      //       "SSI6_0U0"
      //     ],
      //     "SSI6_0U0": [
      //       "SSI6_i"
      //     ],
      //     "SSI6_i": [
      //       "SSCO8_0",
      //       "SSI6controler_0",
      //       "SSSPoI7_0"
      //     ],
      //     "SSI6controler_0": [
      //       "SSI6controler_0U0"
      //     ],
      //     "SSI6controler_0U0": [],
      //     "SSI_0": [
      //       "SSI_0U0"
      //     ],
      //     "SSI_0U0": [],
      //     "SSSPoI7_0": [
      //       "SSSPoI7_0U0"
      //     ],
      //     "SSSPoI7_0U0": [],
      //     "STPoI10_0": [
      //       "STPoI10_0U0"
      //     ],
      //     "STPoI10_0U0": [],
      //     "TCC20_0": [
      //       "TCC20_0U0"
      //     ],
      //     "TCC20_0U0": [
      //       "Controller",
      //       "Control_Computing_Component"
      //     ],
      //     "TDA17_0": [
      //       "TDA17_0U0"
      //     ],
      //     "TDA17_0U0": [],
      //     "TDT": [],
      //     "TDTCC": [],
      //     "TI9_0": [
      //       "TI9_0U0"
      //     ],
      //     "TI9_0U0": [
      //       "TI9_i"
      //     ],
      //     "TI9_i": [
      //       "STPoI10_0",
      //       "TI9controler_0",
      //       "TPCO11_0"
      //     ],
      //     "TI9controler_0": [
      //       "TI9controler_0U0"
      //     ],
      //     "TI9controler_0U0": [],
      //     "TIP13_0": [
      //       "TIP13_0U0"
      //     ],
      //     "TIP13_0U0": [
      //       "TIR",
      //       "TIRCC"
      //     ],
      //     "TIR": [],
      //     "TIRCC": [],
      //     "TP21_0": [
      //       "TP21_0U0"
      //     ],
      //     "TP21_0U0": [
      //       "TDT",
      //       "TDTCC"
      //     ],
      //     "TPCO11_0": [
      //       "TPCO11_0U0"
      //     ],
      //     "TPCO11_0U0": [
      //       "thruster_control",
      //       "thruster_Control_Output_Componet"
      //     ],
      //     "TPI_0": [
      //       "TPI_0U0"
      //     ],
      //     "TPI_0U0": [],
      //     "TTC22_0": [
      //       "TTC22_0U0"
      //     ],
      //     "TTC22_0U0": [
      //       "TTC34_i"
      //     ],
      //     "TTC23_0": [
      //       "TTC23_0U0"
      //     ],
      //     "TTC23_0U0": [
      //       "InterruptServiceControl",
      //       "InterruptComputing"
      //     ],
      //     "TTC34_i": [
      //       "TTC23_0",
      //       "TTC34controler_0",
      //       "TTCO24_0"
      //     ],
      //     "TTC34controler_0": [
      //       "TTC34controler_0U0"
      //     ],
      //     "TTC34controler_0U0": [],
      //     "TTCO24_0": [
      //       "TTCO24_0U0"
      //     ],
      //     "TTCO24_0U0": [
      //       "Thruster_Traixial_Control_Output",
      //       "TTCOCC"
      //     ],
      //     "TTCOCC": [],
      //     "Thruster_0": [
      //       "Thruster_0U0"
      //     ],
      //     "Thruster_0U0": [],
      //     "Thruster_1": [
      //       "Thruster_1U0"
      //     ],
      //     "Thruster_1U0": [],
      //     "Thruster_2": [
      //       "Thruster_2U0"
      //     ],
      //     "Thruster_2U0": [],
      //     "Thruster_Traixial_Control_Output": [],
      //     "fengping": [],
      //     "gyroall_0": [
      //       "gyroall_0U0"
      //     ],
      //     "gyroall_0U0": [],
      //     "i1_0": [
      //       "i1_0U0"
      //     ],
      //     "i1_0U0": [
      //       "i1_i"
      //     ],
      //     "i1_i": [
      //       "GI3_0",
      //       "I1controler_0",
      //       "ITI2_0",
      //       "MI12_0",
      //       "SSI6_0",
      //       "TI9_0"
      //     ],
      //     "sunsenor_0": [
      //       "sunsenor_0U0"
      //     ],
      //     "sunsenor_0U0": [],
      //     "tb_test": [
      //       "testsun"
      //     ],
      //     "testsun": [
      //       "AD18_0",
      //       "DA14_0",
      //       "GI_0",
      //       "Gyro_0",
      //       "Gyro_1",
      //       "Gyro_2",
      //       "MSM19_0",
      //       "MSMCC_0",
      //       "MasterControl_0",
      //       "SSI_0",
      //       "TCC20_0",
      //       "TIP13_0",
      //       "TP21_0",
      //       "TPI_0",
      //       "TTC22_0",
      //       "Thruster_0",
      //       "Thruster_1",
      //       "Thruster_2",
      //       "gyroall_0",
      //       "i1_0",
      //       "sunsenor_0"
      //     ],
      //     "thruster_Control_Output_Componet": [],
      //     "thruster_control": []
      //   }
      // },
      test:{},
      ans:[],
      data:[],
      isReady:true,
      isPopupVisible: false,
      popupPosition: { x: 0, y: 0 },
      devicename:"",
      path:""
    }
  },
  methods: {
    showPopup(event) {
      event.preventDefault();
      this.isPopupVisible = true;
      this.popupPosition = { x: event.clientX, y: event.clientY };
       this.devicename = event.target.innerText;
    },

    hidePopup() {
      this.isPopupVisible = false;
    },
    findLabel(arr, targetLabel, parentLabels = []) {
      for (let obj of arr) {
        if (obj.label === targetLabel) {
          return [...parentLabels, obj.label].join('.');
        }

        if (obj.children) {
          const result = this.findLabel(obj.children, targetLabel, [...parentLabels, obj.label]);
          if (result) {
            return result;
          }
        }
      }

      return null;
    },
    getName() {

      this.$emit("data-update",this.path, this.devicename);
      this.hidePopup();
    }
  },
  watch:{
    devicename(newV,oldV){
      // let arr = this.findLabel(this.data, newV).split(".");
      // arr.pop();
      // this.path = arr.join(".");
      // console.log(382,this.path);
      this.path = this.findLabel(this.data, newV);
      }
  },
  mounted() {
    // 监听全局点击事件
    getModule().then( res=>{
      // console.log(res.data);
      this.data.push(res.data);
      this.isReady = false;
      ElMessage.success("acquire success");
    }).catch(error=>{
      this.isReady = false;
      ElMessage.warning("fail to get");
      console.log(error);
    })
    document.addEventListener('click', this.hidePopup);
  },
  created() {

  },
  beforeUnmount() {
    // 移除全局点击事件监听
    document.removeEventListener('click', this.hidePopup);
  },
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#contentBox{
  border:5px outset;
  border-radius: 10px;
  box-shadow: 0 0 0 10px rgb(147,169,253);
}
ul{
  list-style-type: none;
}
.popup {
  position: absolute;
  background-color: #fff;
  padding: 10px;
  border:2px outset;
  border-radius: 10px;
  box-shadow: 0 0 0 2px rgb(131, 148, 213);
}
li:hover{
  background-color: #ccc;
}
</style>