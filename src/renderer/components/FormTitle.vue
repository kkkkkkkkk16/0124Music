<template>
  <div id="mytitle">
    <title-button></title-button>
  </div>
</template>

<script>
import TitleButton from './TitleButton';

const { ipcRenderer: ipc } = require("electron");
export default {
  name: "FromTitle",
  components: {
    "title-button":TitleButton
  },

};
</script>

<style>
#mytitle {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 52px;
  /*background-color: rgb(198, 47, 47);*/
  background-color: rgb(0, 0, 0);
  /* -webkit-app-region: drag; */
}
</style>
