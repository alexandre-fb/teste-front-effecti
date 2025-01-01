<template>
  <div class="container">
    <h2 class="title">{{ titleText }}</h2>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__item">
        <label for="title" class="label">Título </label>
        <input
          type="text"
          id="title"
          class="input"
          required
          :disabled="isRemoving"
          v-model="formData.title"
        />
      </div>

      <div class="form__item">
        <label for="description" class="label">Descrição</label>
        <input
          type="text"
          id="description"
          class="input"
          :disabled="isRemoving"
          v-model="formData.description"
        />
      </div>

      <div class="form__item">
        <label for="priority" class="label">Prioridade:</label>
        <select id="priority" class="input" v-model="formData.priority" :disabled="isRemoving">
          <option value="1">Alta</option>
          <option value="2">Média</option>
          <option value="3">Baixa</option>
        </select>
      </div>

      <div class="form__buttons">
        <button
          type="button"
          class="form__button__button form__button__button--cancel secondary-button"
          @click="handleClickCancel"
        >
          Cancelar
        </button>
        <button
          v-if="isRemoving"
          type="button"
          class="form__button__button form__button__button--remove primary-button"
          @click="handleRemove"
        >
          Remover
        </button>
        <button v-else type="submit" class="form__button__button form__button__button--save primary-button">
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskForm",
  props: {
    selectedTask: {
      type: Object,
    },
    action: {
      type: String,
    },
  },
  computed: {
    titleText() {
      if (this.isRemoving) {
        return "Tem certeza que deseja remover esta tarefa?";
      }
      if (this.isEditing) {
        return "Editar Tarefa";
      }
      return "Adicionar Tarefa";
    },
    isEditing() {
      return this.action === "edit";
    },
    isRemoving() {
      return this.action === "remove";
    },
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        done: false,
        priority: 3,
      },
    };
  },
  mounted() {
    if (this.isEditing || this.isRemoving) {
      this.formData = { ...this.selectedTask };
    }
  },
  methods: {
    ...mapActions(["addTask", "editTask", "removeTask"]),
    handleClickCancel() {
      this.resetFormData();
      this.$emit("cancel");
    },
    handleRemove() {
      this.removeTask(this.selectedTask.id);
      this.$emit("taskRemove");
    },
    handleSubmit() {
      if (this.isEditing) {
        this.editTask({ ...this.formData, id: this.selectedTask.id });
      } else {
        this.addTask({ ...this.formData, id: Date.now() });
      }
      this.resetFormData();
      this.$emit("taskSave");
    },
    resetFormData() {
      this.formData = {
        title: "",
        description: "",
        done: false,
        priority: 3,
      };
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  position: relative;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form__item {
  margin-bottom: 1rem;
}

.form__buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.form__buttons button {
  margin-left: .5rem;
}

.form__button__button--remove {
  background-color: #f44336;
}
</style>
