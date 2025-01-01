<template>
  <div class="filters container">
    <div class="filter__item filter__item--search">
      <input
        class="input"
        type="search"
        @input="handleFiltersChange"
        placeholder="Buscar pro nome ou descrição"
        v-model="query"
      />
    </div>

    <div class="filter__item">
      <label class="label">Filtrar por status</label>
      <select class="input" v-model="selectedStatus" @change="handleFiltersChange">
        <option value="all">Todos</option>
        <option value="done">Concluídos</option>
        <option value="pending">Pendentes</option>
      </select>
    </div>

    <div class="filter__item">
      <label class="label">Ordenar por prioridade</label>
      <select class="input" v-model="selectedPriority" @change="handleFiltersChange">
        <option value="none">Não ordenar</option>
        <option value="1">Alta</option>
        <option value="2">Média</option>
        <option value="3">Baixa</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FiltersComponent",
  data() {
    return {
      selectedStatus: "all",
      selectedPriority: "none",
      query: "",
    };
  },
  methods: {
    ...mapActions(["setFilters"]),
    handleFiltersChange() {
      const filters = {
        status: this.selectedStatus,
        priority: this.selectedPriority,
        query: this.query,
      };
      this.setFilters(filters);
    },
  },
};
</script>

<style scoped>
.filters {
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  width: 100%;
}

@media screen and (min-width: 475px) {
  .filters {
    grid-template-columns: 1fr 1fr;
  }

  .filter__item--search {
    grid-column: span 2;
  }
}
</style>
