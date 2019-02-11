<template>
    <div id="app">
        <form-title></form-title>
        <home-page id="main-container"></home-page>
        <el-container>
            <el-aside width="20%">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>

  import HomePage from '@/components/HomePage';
  import FormTitleVue from './components/FormTitle.vue';

  export default {
    name: 'my-project',
    components: {
      'home-page': HomePage,
      'form-title': FormTitleVue,
    },
  };
</script>

<style>
    @import '../../static/style/icon/iconfont.css';
    .el-header, .el-footer {
        background-color: #B3C0D1;
        /* color: #333; */
        /* text-align: center; */
        /* line-height: 60px; */
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

   body > .el-container {
      margin:0 20px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }


    #main-container {
        margin-top: 70px;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #fff;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(50, 121, 121, 0.3);
        border-radius: 5px;
        background-color: #F5F5F5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        -webkit-box-shadow: inset 0 0 6px rgba(33, 110, 110, 0.3);
        background-color: rgb(194, 220, 241);
    }
</style>
