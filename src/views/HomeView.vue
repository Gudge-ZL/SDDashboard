<template>

  <div v-show="detailedView" class="detailed"  @click="detailOff">
    <img alt="Vue logo" src="../assets/momiji.gif" class="detailedContent">
  </div>

  <div class="mainBox">
    <div class="home">
      <img :class="{'hidden': detailedView}" alt="Vue logo" src="../assets/momiji.gif" @click="detailOn">
      <HelloWorld msg="Welcome to my dashboard"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      detailedView: false,
    }
  },
  methods: {
    detailOff() {
      this.detailedView = false;
    },
    detailOn() {
      this.detailedView = true;
    },
  }
}
</script>

<style scoped>
.mainBox {
  width: 100%;
  height: 100%;
  background: #ffffff;
}

.home {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.detailed {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 9999;
}

.detailedContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hidden {
  visibility: hidden;
}
</style>