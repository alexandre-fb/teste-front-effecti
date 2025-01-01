<template>
  <div class="app-container">
    <header>
      <h1>Lista de tarefas</h1>
    </header>
    <main ref="main">
      <TaskList />
    </main>
    <footer>
      <span>Desenvolvido por </span>
      <a href="https://www.linkedin.com/in/alexandre-fb/" target="_blank">Alexandre Bisognin</a>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TaskList from "./TaskList.vue";

export default {
  name: "ToDoList",
  components: {
    TaskList,
  },
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        done: false,
        priority: 2,
      },
    };
  },
  computed: {
    ...mapState(["taskList"]),
  },
  created() {
    this.loadInitialTasks();
  },
  methods: {
    ...mapActions([
      "loadTasksFromLocalStorage",
      "addTask",
      "editTask",
      "removeTask",
      "toggleTaskStatus",
    ]),
    loadInitialTasks() {
      this.loadTasksFromLocalStorage();
    },
  },
};
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
header {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: #333;
  color: #fff;
}

header h1 {
  font-size: 1.4rem;
  font-weight: 600;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

footer {
  background-color: #333;
  color: white;
  padding: .3rem 0;
  text-align: center;
  font-size: 0.8rem;
}

footer a {
  color: white;
  font-size: 0.8rem;
  transition: 200ms ease-in-out;
}

footer a:hover {
  opacity: 0.9;
}
</style>
