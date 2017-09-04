<template>
  <div id="wrapper">
    <div id="app">
      <v-sidebar></v-sidebar>
      <div id="page-wrapper" class="gray-bg dashbard-1">
        <v-header></v-header>
        <v-tab></v-tab>
        <!--<img src="./assets/logo.png">-->
        <router-view></router-view>
        <v-footer></v-footer>
        <v-setter></v-setter>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Sidebar from './components/Sidebar.vue'
  import Tab from './components/Tab.vue'
  import Setter from './components/Setter.vue'

  export default {
    name: 'app',
    components: {'v-sidebar': Sidebar, 'v-header': Header, 'v-footer': Footer, 'v-tab': Tab,'v-setter':Setter}

  }
</script>

<style>

</style>
