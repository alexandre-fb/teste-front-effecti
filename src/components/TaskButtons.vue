<template>
  <div class="buttonn-container">
    <button class="add-button primary-button" @click="handleAddClick">
      <img src="../../public/images/iconPlus.svg" alt="Adicionar Tarefa" style="width: 0.8rem" />
      <span> Tarefa </span>
    </button>

    <button :disabled="fakeTasksAdded" class="add-button primary-button" @click="addFakeTasks">
      <img src="../../public/images/iconPlus.svg" alt="Adicionar Tarefa" style="width: 0.8rem" />
      <span> 150 tarefas de teste </span>
    </button>

    <button v-if="filteredTasks.length" class="add-button secondary-button" @click="resetTasks">
      <span> Remover todas tarefas </span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TaskButtons",
  data() {
    return {
      fakeTasksAdded: false,
    };
  },
  computed: {
    ...mapGetters(["filteredTasks"]),
  },
  mounted() {
    const fakeTasksAdded = localStorage.getItem("fakeTasksAdded");
    if (fakeTasksAdded) {
      this.fakeTasksAdded = true;
    }
  },
  methods: {
    handleAddClick() {
      this.$emit("addClick");
    },
    addFakeTasks() {
      this.$emit("addFakeTasks");
      this.fakeTasksAdded = true;
      localStorage.setItem("fakeTasksAdded", true);
    },
    resetTasks() {
      this.$emit("resetTasks");
      this.fakeTasksAdded = false;
      localStorage.removeItem("fakeTasksAdded");
    },
  },
};
</script>

<style scoped>
.buttonn-container {
  padding: 0.8rem 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.add-button {
  padding-right: 0.6rem;
}

.add-button span {
  margin-left: 0.4rem;
}

.add-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
