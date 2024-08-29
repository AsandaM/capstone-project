<template>
  <div class="modal-backdrop">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Sign Up</h2>
        <button class="close-btn" @click="closeModal">&times;</button>
      </div>
      <div class="modal-content">
        <form @submit.prevent="register">
          <input type="text" placeholder="Email" v-model="email" required />
          <input type="text" placeholder="Username" v-model="username" required />
          <input type="password" placeholder="Password" v-model="password" required />
          <div class="button-set">
            <button type="submit">Register</button>
            <button type="button" @click="signIn">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signupComp',
  data() {
    return {
      email: '',
      username: '',
      password: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    signIn() {
      alert('Sign in');
    },
    register() {
      alert('Register');
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-content input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-set {
  display: flex;
  justify-content: space-between;
}

.button-set button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-set button[type="submit"] {
  background-color: #28a745;
  color: #fff;
}

.button-set button[type="button"] {
  background-color: #007bff;
  color: #fff;
}
</style>