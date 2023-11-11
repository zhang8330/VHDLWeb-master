<template>
  <div class="container">
    <h1 class="hint" v-show="!whetherNeed && !whetherGenerate">Step 5.1: <br>Generate controller vhdl code.</h1>
    <h1 class="hint" v-show="whetherNeed && !whetherGenerate">Step 5.2: <br>Complete the controller vhdl code.</h1>
    <h1 class="hint" v-show="whetherGenerate && whetherNeed">Step 5.3: <br>Generate controller IP core.</h1>
  </div>
  <div style="margin-left:125px;">
    <h4 style="margin-top: 5px;font-weight: normal">{{this.key}} ({{this.index+"/"+this.length}})</h4>
      <Codemirror
          ref="cm"
          :options="cmOptions"
          :value = "code"
          @input="inputChange"
      >
      </Codemirror>
    </div>
    <!--    <el-button style="" @click="completeComputer">更新</el-button>-->
    <el-button
        style="margin-left:125px;"
        type="primary"
        @click = "generateVhdl">
      click to generate
    </el-button>
    <el-button
        type="warning"
        @click = "complete"
        v-show="whetherNeed">
      complete data
    </el-button>
    <el-button
        type="warning"
        @click = "generate"
        v-show="index === 0 ? whetherGenerate:!(this.length - this.index)"
        v-if="isloading"
        loading>
      click to generate
    </el-button>
  <el-button
      type="warning"
      @click = "generate"
      v-show="index === 0 ? whetherGenerate:!(this.length - this.index)"
      v-else>
    click to generate
  </el-button>
</template>

<script>
import {completeController} from "@/api/complete";
import {generateController,generateControllerIP} from "@/api/generate";
import Codemirror from "codemirror-editor-vue3";

export default {
  name: "controllerVhdl",
  components:{Codemirror},
  data(){
    return {
      whetherNeed:false,
      whetherGenerate:false,
      ipshow:true,
      isloading:false,
      index:0,
      code:'',
      key:'',
      length:0,
      response:{},
      cmOptions: {
        mode: 'text/x-vhdl',
        line: true,
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 4,
      }
    }
  },
  methods:{
    generateVhdl(){
      const data = {
        test:"sad"
      };
      this.whetherNeed = true;
      generateController(data).then(res=>{
            this.response = res.data;
            delete this.response[".gitkeep"];
            //console.log(this.response)
            this.length = Object.keys(this.response).length;
            this.key = Object.keys(this.response)[this.index];
            this.code = this.response[this.key];

    })},//补全
    complete(){
      // const data = [];
      // for (let i = 0; i < Object.keys(this.response).length; i++) {
      //   const filename = Object.keys(this.response)[i];
      //   const txt = this.response[filename];
      //   data.push({ filename, txt });
      // }
      // console.log(data);
      const data = {
        filename:Object.keys(this.response)[this.index],
        txt:this.response[__filename]
      }
      completeController(data).then(res=>{
        // console.log(res)
        ElMessage.success("complete success!");
        if(this.index === this.length - 1)
          this.whetherGenerate = true;
        this.index++;
        this.key = Object.keys(this.response)[this.index];
        this.code = this.response[this.key];
      }).catch(error=>{
        ElMessage.warning("complete failed!");
        console.log('补全失败', error);
      })
    },
    inputChange(content) {
      this.code = content;
      this.$nextTick(() => {
        console.log("code:" + this.code);
        console.log("content:" + content)
      });
    },
    //生成
    generate(){
      this.isloading = true;
      const data = {
        "filename": "MR.vhdl",
        "txt": "library IEEE;\n\nuse IEEE.STD_LOGIC_1164.ALL;\n\nuse IEEE.std_logic_unsigned.All;\n\nUSE ieee.numeric_std.ALL;\n\n--指令（instruction）统一为std_logic数据类型，值（value，signal）统一为STD_LOGIC_VECTOR ( 31 downto 0 )数据类型\nentity MR is\nport(\n\tin_TP_MR_Curr_mode_load_inst:in STD_LOGIC;--in_TP_MR_Current mode load instruction\n\tin_MI_MR_Curr_mode_stor_inst:in STD_LOGIC;--in_MI_MR_Current mode storage instruction\n\tin_MI_MR_Curr_mode:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_MI_MR_Current mode\n\tin_AD_MR_Curr_mode_load_inst:in STD_LOGIC;--in_AD_MR_Current mode load instruction\n\tin_TCC_MR_Targ_angl_load_inst:in STD_LOGIC;--in_TCC_MR_Target angle load instruction\n\tin_TCC_MR_Targ_angu_velo_load_inst:in STD_LOGIC;--in_TCC_MR_Target angular velocity load instruction\n\tin_MSM_MR_Curr_mode_load_inst:in STD_LOGIC;--in_MSM_MR_Current mode load instruction\n\tin_MSM_MR_Curr_mode_work_time_load_inst:in STD_LOGIC;--in_MSM_MR_Current mode working time load instruction\n\tin_MSM_MR_Next_cycl_mode_stor_inst:in STD_LOGIC;--in_MSM_MR_Next cycle mode storage instruction\n\tin_MSM_MR_Next_cycl_mode:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_MSM_MR_Next cycle mode\n\tin_MSM_MR_Curr_mode_work_time_stor_inst:in STD_LOGIC;--in_MSM_MR_Current mode working time storage instruction\n\tin_MSM_MR_Curr_mode_work_time:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_MSM_MR_Current mode working time\n\tin_MSM_MR_Targ_angl_stor_inst:in STD_LOGIC;--in_MSM_MR_Target angle storage instruction\n\tin_MSM_MR_Targ_angl:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_MSM_MR_Target angle\n\tin_MSM_MR_Targ_angu_velo_stor_inst:in STD_LOGIC;--in_MSM_MR_Target angular velocity storage instruction\n\tin_MSM_MR_Targ_angu_velo:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_MSM_MR_Target angular velocity\n\tin_TIP_MR_Next_cycl_mode_stor_inst:in STD_LOGIC;--in_TIP_MR_Next cycle mode storage instruction\n\tin_TIP_MR_Next_cycl_mode:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_TIP_MR_Next cycle mode\n\tout_TP_MR_Curr_mode:out STD_LOGIC_VECTOR ( 31 downto 0 );--out_TP_MR_Current mode\n\tout_AD_MR_Curr_mode:out STD_LOGIC_VECTOR ( 31 downto 0 );--out_AD_MR_Current mode\n\tout_TCC_MR_Targ_angl:out STD_LOGIC_VECTOR ( 31 downto 0 );--out_TCC_MR_Target angle\n\tout_TCC_MR_Targ_angu_velo:out STD_LOGIC_VECTOR ( 31 downto 0 );--out_TCC_MR_Target angular velocity\n\tout_MSM_MR_Curr_mode:out STD_LOGIC_VECTOR ( 31 downto 0 );--out_MSM_MR_Current mode\n\tout_MSM_MR_Curr_mode_work_time:out STD_LOGIC_VECTOR ( 31 downto 0 )--out_MSM_MR_Current mode working time\n);\nend MR;\narchitecture Behavioral of MR is\ntype ram_type0 is array (1 downto 0) of STD_LOGIC_VECTOR ( 31 downto 0 );\nsignal RAM_MR_Current_mode: ram_type0;\nsignal Current_mode_addr: integer:=1;\ntype ram_type1 is array (1 downto 0) of STD_LOGIC_VECTOR ( 31 downto 0 );\nsignal RAM_MR_Next_cycl_mode: ram_type1;\nsignal Next_cycl_mode_addr: integer:=1;\ntype ram_type2 is array (1 downto 0) of STD_LOGIC_VECTOR ( 31 downto 0 );\nsignal RAM_MR_Current_mode_work_time: ram_type2;\nsignal Current_mode_work_time_addr: integer:=1;\ntype ram_type3 is array (1 downto 0) of STD_LOGIC_VECTOR ( 31 downto 0 );\nsignal RAM_MR_Target_angl: ram_type3;\nsignal Target_angl_addr: integer:=1;\ntype ram_type4 is array (1 downto 0) of STD_LOGIC_VECTOR ( 31 downto 0 );\nsignal RAM_MR_Target_angu_velo: ram_type4;\nsignal Target_angu_velo_addr: integer:=1;\ntype ram_type5 is array (1 downto 0) of STD_LOGIC_VECTOR ( 31 downto 0 );\nsignal RAM_MR_Next_cycl_mode: ram_type5;\nsignal Next_cycl_mode_addr: integer:=1;\nsignal Next_cycl_mode_stor_inst:STD_LOGIC_VECTOR (1 downto 0 );\nbegin\n\tprocess(in_MI_MR_Curr_mode_stor_inst)\n\tbegin\n\t\tif in_MI_MR_Curr_mode_stor_inst='1' then\n\t\t\tRAM_MR_Current_mode(Current_mode_addr)<=in_MI_MR_Curr_mode;\n\t\tend if;\n\tend process;\n\tprocess(in_MSM_MR_Next_cycl_mode_stor_inst,in_TIP_MR_Next_cycl_mode_stor_inst)\n\tbegin\n\t\tNext_cycl_mode_stor_inst <= in_MSM_MR_Next_cycl_mode_stor_inst&in_TIP_MR_Next_cycl_mode_stor_inst;\n\t\tcase Next_cycl_mode_stor_inst is\n\t\t\twhen \"00\"=>\n\t\t\t\tRAM_MR_Next_cycl_mode(Next_cycl_mode_addr)<=in_TIP_MR_Next_cycl_mode;\n\t\t\twhen \"01\"=>\n\t\t\t\tRAM_MR_Next_cycl_mode(Next_cycl_mode_addr)<=in_MSM_MR_Next_cycl_mode;\n\t\t\twhen \"10\"=>\n\t\t\t\tRAM_MR_Next_cycl_mode(Next_cycl_mode_addr)<=in_TIP_MR_Next_cycl_mode;\n\t\t\twhen \"11\"=>\n\t\t\t\tRAM_MR_Next_cycl_mode(Next_cycl_mode_addr)<=in_TIP_MR_Next_cycl_mode;\n\t\tend case;\n\tend process;\n\tprocess(in_MSM_MR_Curr_mode_work_time_stor_inst)\n\tbegin\n\t\tif in_MSM_MR_Curr_mode_work_time_stor_inst='1' then\n\t\t\tRAM_MR_Current_mode_work_time(Current_mode_work_time_addr)<=in_MSM_MR_Curr_mode_work_time;\n\t\tend if;\n\tend process;\n\tprocess(in_MSM_MR_Targ_angl_stor_inst)\n\tbegin\n\t\tif in_MSM_MR_Targ_angl_stor_inst='1' then\n\t\t\tRAM_MR_Target_angl(Target_angl_addr)<=in_MSM_MR_Targ_angl;\n\t\tend if;\n\tend process;\n\tprocess(in_MSM_MR_Targ_angu_velo_stor_inst)\n\tbegin\n\t\tif in_MSM_MR_Targ_angu_velo_stor_inst='1' then\n\t\t\tRAM_MR_Target_angu_velo(Target_angu_velo_addr)<=in_MSM_MR_Targ_angu_velo;\n\t\tend if;\n\tend process;\n\tprocess(in_TP_MR_Curr_mode_load_inst)\n\tbegin\n\t\tif in_TP_MR_Curr_mode_load_inst='1' then\n\t\t\tout_TP_MR_Curr_mode<=RAM_MR_Current_mode(Current_mode_addr);\n\t\tend if;\n\tend process;\n\tprocess(in_AD_MR_Curr_mode_load_inst)\n\tbegin\n\t\tif in_AD_MR_Curr_mode_load_inst='1' then\n\t\t\tout_AD_MR_Curr_mode<=RAM_MR_Current_mode(Current_mode_addr);\n\t\tend if;\n\tend process;\n\tprocess(in_TCC_MR_Targ_angl_load_inst)\n\tbegin\n\t\tif in_TCC_MR_Targ_angl_load_inst='1' then\n\t\t\tout_TCC_MR_Targ_angl<=RAM_MR_Target_angl(Target_angl_addr);\n\t\tend if;\n\tend process;\n\tprocess(in_TCC_MR_Targ_angu_velo_load_inst)\n\tbegin\n\t\tif in_TCC_MR_Targ_angu_velo_load_inst='1' then\n\t\t\tout_TCC_MR_Targ_angu_velo<=RAM_MR_Target_angu_velo(Target_angu_velo_addr);\n\t\tend if;\n\tend process;\n\tprocess(in_MSM_MR_Curr_mode_load_inst)\n\tbegin\n\t\tif in_MSM_MR_Curr_mode_load_inst='1' then\n\t\t\tout_MSM_MR_Curr_mode<=RAM_MR_Current_mode(Current_mode_addr);\n\t\tend if;\n\tend process;\n\tprocess(in_MSM_MR_Curr_mode_work_time_load_inst)\n\tbegin\n\t\tif in_MSM_MR_Curr_mode_work_time_load_inst='1' then\n\t\t\tout_MSM_MR_Curr_mode_work_time<=RAM_MR_Current_mode_work_time(Current_mode_work_time_addr);\n\t\tend if;\n\tend process;\n\n\n\n\nend Behavioral;\n"
      };
      generateControllerIP(data).then(res=>{
        ElMessage.success(res.data);
        console.log("生成成功",res);
        this.isloading = false;
      }).catch(error=>{
        ElMessage.warning("Generated failure");
        console.log("生成失败",error);
        this.isloading = false;
      })
    }
  }
}
</script>

<style scoped>
.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}

</style>