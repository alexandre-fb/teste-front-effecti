<template>
  <div class="priority-legend">
    <h6 class="priority-legend__title">Legenda de prioridades:</h6>
    <ul class="priority-legend__list">
      <li
        class="priority-legend__list__item"
        v-for="priority in priorityList"
        :key="priority.label"
      >
        <span class="priority-legend__color" :style="{ backgroundColor: priority.color }"></span>
        <span class="priority-legend__label">{{ priority.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PriorityLegend",
  data() {
    return {
      priorityList: [
        {
          label: "Alta",
          color: "#FF9999",
        },
        {
          label: "Média",
          color: "#FFDD99",
        },
        {
          label: "Baixa",
          color: "#99e2f9",
        },
      ],
    };
  },
};
</script>
<style scoped>
.priority-legend {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.priority-legend__title {
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.priority-legend__list {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
}

.priority-legend__list__item {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.priority-legend__color {
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.2rem;
}

.priority-legend__label {
  font-size: 0.8rem;
}
</style>
