<template>
  <div class="task">
    <span
      class="task__priority-tag"
      :title="`Prioridade ${getPriorityData(taskData.priority).label}`"
      :style="{ backgroundColor: getPriorityData(taskData.priority).color }"
    ></span>

    <div class="task__content">
      <h3 class="task__content__title">{{ taskData.title }}</h3>
      <h4 class="task__content__description">{{ taskData.description }}</h4>
    </div>

    <div class="task__actions">
      <div class="task__actions__edit-remove">
        <button @click="handleEdit" title="Editar">
          <img src="../../public/images/iconEdit.svg" alt="Lápis" style="width: 1rem" />
        </button>
        <button @click="handleRemove" title="Exluir">
          <img src="../../public/images/iconClose.svg" alt="X" style="width: 0.8rem" />
        </button>
      </div>
      <div class="task__actions__status">
        <button @click="toggleStatus" :class="taskData.done ? 'done' : ''">
          {{ taskData.done ? "Concluído" : "Pendente" }}
          <span :class="taskData.done ? 'done' : ''">
            <img
              v-if="taskData.done"
              src="../../public/images/iconCheckGreen.svg"
              alt="Check"
              style="width: 0.8rem"
            />

            <img
              v-if="!taskData.done"
              src="../../public/images/iconClock.svg"
              alt="Relógio"
              style="width: 1rem"
            />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskItemComponent",
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["toggleTaskStatus"]),
    handleEdit() {
      this.$emit("editClick", this.taskData);
    },
    handleRemove() {
      this.$emit("removeClick", this.taskData);
    },
    toggleStatus() {
      this.toggleTaskStatus(this.taskData.id);
    },
    getPriorityData(priority) {
      switch (Number(priority)) {
        case 1:
          return {
            label: "Alta",
            color: "#FF9999",
          };
        case 2:
          return {
            label: "Média",
            color: "#FFEB99",
          };
        case 3:
          return {
            label: "Baixa",
            color: "#99e2f9",
          };
        default:
          return "Não definida";
      }
    },
  },
};
</script>
<style>
.task {
  border: 1px solid #ccc;
  padding: 0.8rem 0.8rem 0.8rem 1.6rem;
  margin: 0.8rem 0;
  min-height: 5rem;
  border-radius: 0.8rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.task:hover {
  box-shadow: 0 0 0.6rem #cccccc61;
}

.task__priority-tag {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #6eff90;
  color: white;
  width: 0.8rem;
  border-radius: 0.8rem 0 0 0.8rem;
}

.task__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.task__content__title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.task__content__description {
  font-size: 1rem;
  color: #6f6f6f;
}

.task__actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.task__actions__edit-remove {
  display: flex;
  justify-content: flex-end;
}

.task__actions__edit-remove button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  margin-left: 0.1rem;
}

.task__actions__edit-remove button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  margin-left: 0.1rem;
  padding: 0.4rem;
  border-radius: 0.5rem;
  position: relative;
  top: -0.4rem;
  right: -0.4rem;
  cursor: pointer;
}

.task__actions__edit-remove button:hover {
  background: #f4f4f4;
}

.task__actions__status button {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background: none;
  padding: 0;
  font-weight: 600;
  color: #AB298D;
  padding: 0.5rem;
  position: relative;
  bottom: -0.5rem;
  right: -0.5rem;
}

.task__actions__status button:hover {
  background: #f4f4f4;
}

.task__actions__status button.done {
  color: #12b638;
}

.task__actions__status span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  margin-left: 0.4rem;
  padding: 0.1rem;
  border: 1px solid #AB298D;
}

.task__actions__status span.done {
  box-shadow: 0 0 0.2rem #12b638;
  border: 1px solid #12b638;
}
</style>
