<template>
  <el-button
      type="primary"
      @click = "assemble"
      style="margin-left: 20px"
      v-if="isloading"
      loading>
    click to assemble
  </el-button>
  <el-button
      type="primary"
      @click = "assemble"
      style="margin-left: 20px"
      v-else="isloading">
    click to assemble
  </el-button>
</template>

<script>
import {assembleSystem} from "@/api/assemble";

export default {
  name: "assembleSystem",
  data(){
    return {
      isloading:false,
    }
  },
  methods:{
    assemble(){
      this.isloading = true;
      const data = {
        "filename": "TTCOCC.vhdl",
        "txt": "library IEEE;\n\nuse IEEE.STD_LOGIC_1164.ALL;\n\nuse IEEE.std_logic_unsigned.All;\n\nUSE ieee.numeric_std.ALL;\n\n--指令（instruction）统一为std_logic数据类型，值（value，signal）统一为STD_LOGIC_VECTOR ( 31 downto 0 )数据类型\nentity TTCOCC is\nport(\n\tin_TTCO_TTCO_Tria_cont_inst:in STD_LOGIC_VECTOR ( 31 downto 0 );--in_TTCO_TTCOCC_Triaxial control instruction\n\tin_calc_inst:in STD_LOGIC;--in_calculate instruction\n\tout_TTCO_TTCO_Tria_cont_sign:out STD_LOGIC_VECTOR ( 31 downto 0 )--out_TTCOCC_TTCO_Triaxial control signal\n);\nend TTCOCC;\narchitecture Behavioral of TTCOCC is\nbegin\n    process(in_calc_inst)\n\n    begin\n\n            if in_calc_inst='1' then\n--由输入端口in_TTCO_TTCO_Tria_cont_inst、得到输出端口out_TTCO_TTCO_Tria_cont_sign、\n            end if;\n\n\tend process;\n\n\n\nend Behavioral;\n"
      }
      assembleSystem(data).then(res=>{
        console.log("集成成功",res);
        ElMessage.success("Successful integration");
        this.isloading = false;
      }).catch(error=>{
        console.log("集成失败",error);
        ElMessage.warning("Integration failure");
        this.isloading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>