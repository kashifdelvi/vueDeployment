<template>
  <main>
    <navigation-comp/>
    <router-view></router-view>
  </main>
</template>
<script>
  import NavigationComp from "./components/NavigationComp.vue"
  export default {
    components:{
      'navigation-comp':NavigationComp
    },
    mounted(){
      console.log(process.env.NODE_ENV)
    },
    name: "App",
  };
</script>

