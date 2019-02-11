<template>
    <div>
        <el-button-group>
            <el-button id="closeBtn" size="mini" @click="closeWin" plain>
                <span class="iconfont icon-guanbi"></span>
            </el-button>
            <el-button id="minBtn" size="mini" @click="minWin">
                <span class="iconfont icon-jianhao"></span>

            </el-button>
            <el-button id="maxBtn" size="mini" @click="maxWin">
      <span class="iconfont icon-gongnengjianyi
"></span>
            </el-button>
        </el-button-group>
    </div>
</template>

<script>
  const { ipcRenderer: ipc } = require('electron');
  export default {
    name: 'TitleButton',
    components: {},
    methods: {
      closeWin: function () {
        console.log('click close button');
        ipc.send('close');
      },
      minWin: function () {
        console.log('click min button');
        ipc.send('hide-window');
      },
      maxWin: function () {
        console.log('click max button');
        ipc.send('max-window');
      }
    }
  };
</script>

<style>
    #closeBtn {
        position: relative;
        margin-top: 12px;
        -webkit-app-region: no-drag;
    }

    #minBtn {
        position: relative;
        margin-top: 12px;
        -webkit-app-region: no-drag;
    }

    #maxBtn {
        position: relative;
        margin-top: 12px;
        -webkit-app-region: no-drag;
    }
</style>
