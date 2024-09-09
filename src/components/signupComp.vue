<template>
  <div class="modal-backdrop">
    <div class="container" id="container">
      <button class="close-button" @click="closeModal"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
          fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg></button>
      <div class="form-container sign-up-container">
        <form @submit.prevent="register" id="register">
          <h1 id="account">Create Your Account and Shop Wellness</h1>
          <input class="form-control form-control-sm" type="text" v-model="firstName" placeholder="Firstname"/>
          <input class="form-control form-control-sm" type="text" v-model="lastName" placeholder="Lastname"/>
          <input class="form-control form-control-sm" type="email" v-model="emailAdd" placeholder="Email"/>
          <input class="form-control form-control-sm" type="password" v-model="userPass" placeholder="Password"/>
          <select type="password" class="form-select form-select-sm m-2" aria-label="Small select example"
            v-model="userRole">
            <option value="" selected>Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="signIn">
          <h1>Sign in</h1>
          <input type="email" v-model="email" placeholder="Email"/>
          <input type="password" v-model="password" placeholder="Password"/>
          <a href="#" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Forgot your
            password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Sign-in to shop our juices and smoothies. Continue your journey to a healthier you with us!</p>
            <button class="ghost" id="signIn" @click="togglePanel">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Say Hello to Better Health!</h1>
            <p>Unlock a healthier you! Sign-up now to enjoy top-notch juices, smoothies, and start your health journey
              now!</p>
            <button class="ghost" id="signUp" @click="togglePanel">Sign Up</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Change password</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="text" class="form-control-plaintext" id="staticEmail" v-model="emailAdd">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" v-model="userPass">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updatePassword()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'SignupLogin',
  data() {
    return {
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
      userRole: '',
      registeredSuccessfully: false
    };
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    }
  },
  methods: {
    togglePanel() {
      const container = document.getElementById('container');
      container.classList.toggle('right-panel-active');
    },
    closeModal() {
      this.$emit('close');
    },
    register() {
      if(!this.firstName || !this.lastName || !this.emailAdd || !this.userPass || !this.userRole) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all fields!',
        });
        return;
      }
      if (this.userRole == '') {
        this.userRole = 'user'
      }
      this.$store.dispatch('addUser', this.$data).then(() => {
        this.togglePanel()
      })
    },
    async signIn() {

      if(!this.email || !this.password) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all fields!',
        });
        return;
      }

      try {
        await this.$store.dispatch('login', { emailAdd: this.email, userPass: this.password });

      } catch (e) {
        console.error(e.message);
      }
    },
    async updatePassword() {

      if(!this.emailAdd || !this.userPass) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all fields!',
        });
        return;
      }
      try {
        await this.$store.dispatch('updatePassword', { userPass: this.userPass, emailAdd: this.emailAdd }).then(() => {
          this.togglePanel()
        });
      } catch (e) {
        console.error(e.message);
      }
    }

  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');

* {
  box-sizing: border-box;
  font-family: "Muli";
}

h1 {
  font-weight: bold;
  margin: 0;
}

#account {
  font-size: 24px;
  font-weight: bold;
  margin: 0;

}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 90;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}


a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

a:hover {
  text-decoration-line: underline;
  text-decoration-color: #0f6367;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: #080808;
  z-index: 1001;
}

.close-button:hover {
  color: #c60404;
}

button {
  border-radius: 20px;
  border: 1px solid #165e2c;
  background-color: #165e2c;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button:hover {
  color: rgb(13, 13, 13);
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

button.ghost:hover {
  color: #165e2c;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  /* border: none; */
  border: #165e2c 1px solid;
  border-radius: 20px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

#register input {
  background-color: #eee;
  border: #165e2c 1px solid;
  border-radius: 20px;
  padding: 5px 8px;
  margin: 4px 0;
  width: 100%;
}

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

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  font-family: "Muli";
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {

  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background-image: url('https://asandam.github.io/images/images_capstone/p15.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>