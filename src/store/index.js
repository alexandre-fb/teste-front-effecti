import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: [],
    filters: {
      status: "all",
      priority: "none",
      query: "",
    },
  },
  getters: {
    filteredTasks: ({ taskList, filters }) => {
      let tasks = taskList.slice();

      if (filters.status !== "all") {
        tasks = tasks.filter((task) => {
          if (filters.status === "done") {
            return task.done;
          }
          if (filters.status === "pending") {
            return !task.done;
          }
          return true;
        });
      }

      if (filters.query) {
        const query = filters.query.toLowerCase();
        tasks = tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query)
        );
      }
      if (filters.priority !== "none") {
        tasks = tasks.slice().sort((a, b) => {
          const priorityA = Number(a.priority);
          const priorityB = Number(b.priority);

          if (filters.priority === "1") {
            return priorityA - priorityB;
          }
          if (filters.priority === "2") {
            if (priorityA === 2 && priorityB !== 2) return -1;
            if (priorityA !== 2 && priorityB === 2) return 1;
            return priorityA - priorityB;
          }
          if (filters.priority === "3") {
            return priorityB - priorityA;
          }
          return 0;
        });
      }

      return tasks;
    },
  },
  mutations: {
    SET_FILTERS(state, payload) {
      state.filters = payload;
    },
    SET_TASKS(state, payload) {
      state.taskList = payload;
    },
    ADD_TASK(state, payload) {
      state.taskList.unshift(payload);
    },
    EDIT_TASK(state, payload) {
      const index = state.taskList.findIndex((task) => task.id === payload.id);
      if (index !== -1) {
        Vue.set(state.taskList, index, payload);
      }
    },
    REMOVE_TASK(state, payload) {
      state.taskList = state.taskList.filter((task) => task.id !== payload);
    },
    TOGGLE_TASK_STATUS(state, payload) {
      const task = state.taskList.find((item) => item.id === payload);
      if (task) {
        task.done = !task.done;
      }
    },
  },
  actions: {
    loadTasksFromLocalStorage({ commit }) {
      const tasks = localStorage.getItem("tasks");
      if (tasks) {
        commit("SET_TASKS", JSON.parse(tasks));
      }
    },
    setFilters({ commit }, payload) {
      commit("SET_FILTERS", payload);
    },
    setTasks({ commit, dispatch }, payload) {
      commit("SET_TASKS", payload);
      dispatch("updateTasksToLocalStorage");
    },
    addTask({ commit, dispatch }, payload) {
      commit("ADD_TASK", payload);
      dispatch("updateTasksToLocalStorage");
    },
    editTask({ commit, dispatch }, payload) {
      commit("EDIT_TASK", payload);
      dispatch("updateTasksToLocalStorage");
    },
    removeTask({ commit, dispatch }, payload) {
      commit("REMOVE_TASK", payload);
      dispatch("updateTasksToLocalStorage");
    },
    toggleTaskStatus({ commit, dispatch }, payload) {
      commit("TOGGLE_TASK_STATUS", payload);
      dispatch("updateTasksToLocalStorage");
    },
    updateTasksToLocalStorage({ state }) {
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
  },
  modules: {},
});
