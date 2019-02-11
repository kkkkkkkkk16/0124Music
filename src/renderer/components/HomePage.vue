<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
        <aplayer v-bind="music"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: "HomePage",
  data() {
    return {
      music: {
        music: {
          autoplay: true,
          title: "Seinabo Sey - Hard Time",
          artist: "Silent Siren-ww",
          src: "../../../static/Seinabo Sey - Hard Time.mp3",
          pic: "https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg",
          autoplay: false
        }
      }
    };
  },
  props: {},
  components: {
    Aplayer
  }
};
</script>

<style scoped>
</style>
