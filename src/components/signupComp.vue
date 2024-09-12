<template>
  <div class="modal-backdrop">
    <main>
      <div class="container">
        <button class="close-button" @click="closeModal"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
            fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
            <path
              d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg></button>
        <div v-show="showLogin" class="login-form p-5">
          <form @submit.prevent="signIn">
            <div class="input-container">
              <h1 class="mt-2">Welcome Back!</h1>
              <p>Sign-in to shop our juices and smoothies. <br> Continue your journey to a healthier you with us!</p>
            </div>
            <div class="input-container">
              <i class="fas fa-user"></i>
              <input type="email" v-model="email" placeholder="Email"/>
            </div>
            <div class="input-container">
              <i class="fas fa-lock"></i>
              <input type="password" v-model="password" placeholder="Password"/>
            </div>
            <div class="input-container">
              <a href="#" type="button" class="btn" id="forgot" data-bs-toggle="modal" data-bs-target="#forgot">Forgot your
                password?</a>
            </div>
            <button type="submit" class="btn1">Sign in</button>
            <div class="signup">
              Don't have an account? <a @click="toggleForm">Sign up</a>
            </div>
          </form>
        </div>
    
        <div v-show="!showLogin" class="signup-form">
          <form @submit.prevent="register" id="register">
            <div class="input-container">
              <h1 class="mt-2">Say Hello to Better Health!</h1>
              <p>Unlock a healthier you! Sign-up now to enjoy top-notch juices, <br> smoothies, and start your health journey
                now!</p>
            </div>
            <div class="input-container">
              <i class="fas fa-user"></i>
              <input type="text" v-model="firstName" placeholder="Firstname"/>
            </div>
            <div class="input-container">
              <i class="fas fa-user"></i>
              <input type="text" v-model="lastName" placeholder="Lastname"/>
            </div>
            <div class="input-container">
              <i class="fas fa-envelope"></i>
              <input type="email" v-model="emailAdd" placeholder="Email"/>
            </div>
            <div class="input-container">
              <i class="fas fa-lock"></i>
              <input type="password" v-model="userPass" placeholder="Password"/>
            </div>
            <div class="input-container">
            <select type="password" aria-label="Small select example"
            v-model="userRole">
            <option value="" selected>Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
            </div>
            <button type="submit" class="btn1">Sign up</button>
            <div class="signup">
              Already have an account? <a @click="toggleForm">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>

  <!-- Modal for forgot password -->
  <div class="modal fade" id="forgot" tabindex="-1" aria-labelledby="forgotLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="forgotLabel">Change password</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <div class="input-container">
                <i class="fas fa-user"></i>
                <input type="email" v-model="email" placeholder="Email"/>
              </div>
          </div>
          <div class="mb-3 row">
            <div class="input-container">
                <i class="fas fa-lock"></i>
                <input type="password" v-model="password" placeholder="Password"/>
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
      registeredSuccessfully: false,
      showLogin: true
    };
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    }
  },
  methods: {
    toggleForm() {
      this.showLogin = !this.showLogin;
    },
    closeModal() {
      this.$emit('close');
    },
    register() {
      if(!this.firstName || !this.lastName || !this.emailAdd || !this.userPass) {
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
        this.toggleForm()
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
  background-image: url('https://asandam.github.io/images/images_capstone/p6.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  /* overflow: hidden; */
  width: 768px;
  /* max-width: 100%; */
  /* min-height: 480px; */
  font-family: "Muli";
}

.modal-content{
  background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
}
form{
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: -1;
  padding: 10px;
}
.container h1 {
  font-size: 2em;
  margin-bottom: 40px;
}

.input-container {
  position: relative;
  margin-bottom: 20px;
}

.input-container i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #12601b;
  padding-left: 12px;
}

.input-container input {
  width: 300px;
  padding: 10px 10px 10px 40px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  background: top;
  color: black !important;
  font-size: 1em;
}

.input-container input:focus {
  outline: none;
  border-bottom: 1px solid black;
}

.input-container a {
  color: #e6f6ee;
  font-size: 14px;
  text-decoration: none;
  /* margin: 5px 0; */
}

.input-container a:hover {
  text-decoration-line: underline;
  background-color: #12601b;
}

.btn1 {
  width: 300px;
  padding: 15px;
  background: orange;
  border: none;
  color: white;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 20px;
}

.btn1:hover {
  background: #12601b;
}

.signup {
  color: rgb(246, 241, 241);
}

.signup a {
  color: #12601b;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px
}

.signup a:hover {
  text-decoration: underline;
}

.close-button {
  position: absolute;
  top: -3px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: rgb(248, 244, 244);
  z-index: 1;
}

.close-button:hover {
  color: red;
}

@media (max-width: 1024px) {
  .container {
    width: 90%;
    /* min-height: auto; */
    padding: 20px;
  }

  .container h1 {
    font-size: 1.4em;
    margin-bottom: 10px;
  }

  .input-container p{
    font-size: 1em;
    margin-bottom: 10px;
  }

  .input-container input {
    width: 100%;
    padding: 10px 10px 10px 40px;
  }

  .btn1 {
    width: 100%;
    padding: 10px;
  }

  .close-button {
    top: 10px;
    right: 20px;
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .container {
    width: 90%;
    min-height: auto;
    padding: 20px;
  }

  .container h1 {
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .input-container p{
    font-size: 0.8em;
    margin-bottom: 2px;
  }

  .input-container input {
    width: 100%;
    padding: 10px 10px 10px 40px;
  }

  .btn1 {
    width: 100%;
  }

  .close-button {
    top: 10px;
    right: 20px;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    width: 95%;
    padding: 10px;
  }

  .container h1 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .input-container input {
    padding: 8px 8px 8px 35px;
  }

  .btn1 {
    padding: 10px;
    font-size: 0.9em;
  }

  .close-button {
    font-size: 18px;
    top: 10px;
    right: 20px;
  }
}

@media (max-width: 339px) {
  .container {
    width: 95%;
    padding: 5px;
  }

  .container h1 {
    font-size: 1em;
    /* margin-bottom: 10px; */
    padding: 10px;
    margin: 0;
  }

  .input-container input {
    padding: 8px 8px 8px 35px;
  }

  .btn1 {
    padding: 5px;
    font-size: 0.9em;
    margin: 0;
  }

  .close-button {
    font-size: 18px;
    top: -2px;
    right: 5px;
  }
  .input-container p{
    font-size: 0.8em;
    margin-bottom: 2px;
  }

  form{
    width: 100%;
  }

  .signup{
    font-size: 12px;
  }

  .signup a{
    font-size: 12px;
  }
}
</style>

