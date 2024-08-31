<template>
  <div>
    <!-- Modal -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-sandbox" @click="closeModal"></div>
      <div class="modal-box">
        <div class="modal-body">
          <slot name="modal-header"></slot>
          <form @submit.prevent="submitForm">
            <slot name="modal-content"></slot>
            <button type="submit">Save</button>
            <button type="button" @click="closeModal">Close</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitForm() {
      this.$emit('submit');
      this.closeModal();
    },
  },
};
</script>

<style scoped>
/* Modal styles */
.modal,
.modal-box {
  z-index: 900;
}

.modal-sandbox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
}

.modal {
  display: block; /* Ensure the modal is displayed */
  position: fixed;
  left: 0;
  top: 0;
  background: transparent;
  overflow: auto;
}

.modal-box {
  position: relative;
  width: 80%;
  max-width: 920px;
  margin: 100px auto;
  background-image: url('https://asandam.github.io/images/images_capstone/p6.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  animation-name: modalbox;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
}

.modal-body {
  padding: 60px 8%;
}

@keyframes modalbox {
  0% {
    top: -250px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

button {
  min-width: 100px;
  padding: 16px 32px;
  margin: 24px 8px 0 0;
  background: transparent;
  text-decoration: none;
  border: 1px solid #ffc107;
  outline: none;
  color: #fbfbf9;
  cursor: pointer;
}

button:hover {
  background: #ffc107;
  color: black;
}
</style>