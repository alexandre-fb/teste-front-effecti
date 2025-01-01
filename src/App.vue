<template>
  <div id="app">
    <ToDoList />
  </div>
</template>
<script>
import ToDoList from "./components/ToDoList.vue";
import "@/assets/css/global.css";

export default {
  name: "App",
  components: {
    ToDoList,
  },
};
</script>
