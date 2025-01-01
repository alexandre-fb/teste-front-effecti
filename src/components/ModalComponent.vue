<template>
  <div v-if="isActive" class="modal">
    <div class="modal__container" @click.self="closeModal">
      <div class="modal__content">
        <button class="modal__close-button" @click="closeModal">
          <img src="../../public/images/iconClose.svg" alt="Fechar" style="width: 0.8rem" />
        </button>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
}

.modal__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.modal__content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 90%;
  max-width: 800px;
  overflow-x: hidden;
  background: white;
  min-height: 200px;
  max-height: 90%;
}

.modal__close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  outline: none;
  z-index: 99;
}
</style>
