<template>
  <div class="container">

    <h2>Click button to generate the atomic system code</h2>

    <generate-atom></generate-atom>
  </div>
</template>

<script>
import {generateatom} from "@/api/atom";
import { ref } from 'vue'
import GenerateAtom from "@/components/generateAtom/generateAtom.vue";


export default {
  name: "GenMainController",
  components: {GenerateAtom},

}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}

.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}

</style>
