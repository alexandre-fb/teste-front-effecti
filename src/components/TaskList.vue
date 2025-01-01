<template>
  <div class="component-container">
    <div class="filters-area">
      <FiltersComponent />
    </div>

    <div class="container">
      <TaskButtons
        @addClick="handleAddClick"
        @addFakeTasks="addFakeTasks"
        @resetTasks="resetTasks"
      />

      <template v-if="filteredTasks.length">
        <PriorityLegend />
      </template>

      <div class="container--list" ref="containerTaskList">
        <div class="empty-state" v-if="!visibleTasks.length">
          <p>Nenhuma tarefa encontrada.</p>
          <p>Adicione uma nova tarefa ou ajuste os filtros aplicados.</p>
        </div>
        <div v-show="visibleTasks.length">
          <ul class="list" ref="taskList" @scroll="onScroll">
            <li v-for="task in visibleTasks" :key="task.id">
              <TaskItem
                :taskData="task"
                @editClick="handleEditClick"
                @removeClick="handleRemoveClick"
              />
            </li>
          </ul>
          <p v-if="filteredTasks.length" class="amount-tasks">
            {{ `${filteredTasks.length} ${filteredTasks.length > 1 ? "tarefas" : "tarefa"}` }}
          </p>
        </div>

        <ModalComponent :isActive="showFormModal" @closeModal="closeEditModal">
          <TaskForm
            :action="action"
            :selectedTask="selectedTask"
            @cancel="closeEditModal"
            @taskSave="closeEditModal"
            @taskRemove="closeEditModal"
          />
        </ModalComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FiltersComponent from "./FiltersComponent.vue";
import PriorityLegend from "./PriorityLegend.vue";
import ModalComponent from "./ModalComponent.vue";
import TaskForm from "./TaskForm.vue";
import TaskItem from "./TaskItem.vue";
import TaskButtons from "./TaskButtons.vue";

export default {
  name: "TaskList",
  components: {
    FiltersComponent,
    PriorityLegend,
    TaskItem,
    ModalComponent,
    TaskForm,
    TaskButtons,
  },
  computed: {
    ...mapGetters(["filteredTasks"]),
  },
  data() {
    return {
      showFormModal: false,
      selectedTask: {},
      action: "",
      visibleTasks: [],
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  watch: {
    filteredTasks(newVal) {
      this.resetPagination();
    },
  },
  mounted() {
    this.resetPagination();
    this.updateListHeight();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapActions(["setTasks"]),
    handleAddClick() {
      this.showFormModal = true;
      this.selectedTask = {};
      this.action = "add";
    },
    handleEditClick(taskData) {
      this.showFormModal = true;
      this.selectedTask = taskData;
      this.action = "edit";
    },
    handleRemoveClick(taskData) {
      this.showFormModal = true;
      this.selectedTask = taskData;
      this.action = "remove";
    },
    closeEditModal() {
      this.showFormModal = false;
    },
    addFakeTasks() {
      this.resetTasks();
      const fakeTasks = Array.from({ length: 150 }, (_, index) => ({
        id: index + 1,
        title: `Fake Task ${index + 1}`,
        description: `Description for fake task ${index + 1}`,
        priority: (Math.floor(Math.random() * 3) + 1).toString(),
        done: Math.random() > 0.5,
      }));

      this.setTasks(fakeTasks);
    },
    resetTasks() {
      this.setTasks([]);
    },
    onScroll(event) {
      const bottom =
        event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight + 50;
      if (bottom) {
        this.loadMoreTasks();
      }
    },
    resetPagination() {
      this.currentPage = 1;
      this.visibleTasks = this.filteredTasks.slice(0, this.itemsPerPage);
    },
    loadMoreTasks() {
      if (this.visibleTasks.length < this.filteredTasks.length) {
        const start = this.currentPage * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        this.visibleTasks = this.visibleTasks.concat(this.filteredTasks.slice(start, end));
        this.currentPage += 1;
      }
    },
    updateListHeight() {
      const containerTaskList = this.$refs.containerTaskList;
      const list = this.$refs.taskList;
      if (containerTaskList && list) {
        list.style.height = `${containerTaskList.clientHeight - 20}px`;
      }
    },
    handleResize() {
      this.updateListHeight();
    },
  },
};
</script>

<style scoped>
.component-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.filters-area {
  width: 100%;
  background-color: #f1f1f1;
  padding: 1.2rem 0;
}

.container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.empty-state {
  text-align: center;
  padding: 2rem;
}

.empty-state p {
  margin-bottom: 0.5rem;
}

.container--list {
  flex: 1;
  width: 100%;
}

.list {
  list-style: none;
  padding: 0;
  width: 100%;
  overflow-y: auto;
  padding-right: 0.4rem;
}

.amount-tasks {
  font-size: small;
  margin: 0.2rem 0;
}
</style>
