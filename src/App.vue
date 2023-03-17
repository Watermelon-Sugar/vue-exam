<template>
  <div id="app"><NavBar /></div>
</template>

<style>
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;  background-color: #ddd0c8;
  height: 100vh;
  color: #323232;
}
</style>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
