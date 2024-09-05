<template>
  <main>
    <div class="container" v-if="user">
      <div class="sidebar">
        <img alt="Profile" height="100"
          :src="user.userProfile"
          width="100" />
        <h2>{{user.firstName}} {{user.lastName}}</h2>
        <p>{{user.userRole}}</p>
        <button @click="updateProfile(user.userID)"> Edit profile </button>
        <button @click="deleteUser(user.userID)"> Delete account </button>
      </div>
      <div class="content">
        <h3> Profile Information </h3>
        <div class="mb-3 text-start">
          <label for="firstName" class="form-label text-start">First Name:</label>
          <input type="text" class="form-control" id="firstName" v-model="firstName">
        </div>
        <div class="mb-3 text-start">
          <label for="lastName" class="form-label">Last Name:</label>
          <input type="text" class="form-control" id="lastName" v-model="lastName">
        </div>
        <div class="mb-3 text-start">
          <label for="userAge" class="form-label">Age:</label>
          <input type="number" class="form-control" id="userAge" v-model="userAge">
        </div>
        <div class="mb-3 text-start">
          <label for="gender" class="form-label">Gender:</label>
          <input type="text" class="form-control" id="gender" v-model="gender">
        </div>
        <div class="mb-3 text-start">
          <label for="emailAdd" class="form-label">Email Address:</label>
          <input type="email" class="form-control" id="emailAdd" v-model="emailAdd">
        </div>
        <div class="mb-3 text-start">
          <label for="userRole" class="form-label">Role:</label>
          <input type="text" class="form-control" id="userRole" v-model="userRole">
        </div>
        <div class="mb-3 text-start">
          <label for="userPass" class="form-label">Password:</label>
          <input type="password" class="form-control" id="userPass" v-model="userPass">
        </div>
        <div class="mb-3 text-start">
          <label for="userProfile" class="form-label">Profile picture:</label>
          <input type="url" class="form-control" id="userProfile" v-model="userProfile">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';
export default{
  data(){
      return{
          firstName: '',
          lastName: '',
          userAge: '',
          emailAdd: '',
          userPass: '',
          userRole: '',
          gender: '',
          userProfile: ''
      }
  },
  computed:{
      user(){
          return this.$store.state.userProfile
      }
  },
  methods:{
      getProfile(){
          this.$store.dispatch('userProfile')
      }, 
      async updateProfile(userID) {
      try {
        await this.$store.dispatch('updateProfile', { userID: userID, info: this.$data });
        Swal.fire({
          title: 'Success!',
          text: 'Profile updated successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.$router.push('/profile');
          location.reload()
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error updating the profile',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    },
    deleteUser(id){
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this account!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteUser', id);
          Swal.fire({
            title: 'Deleted!',
            text: 'Your account has been deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.$router.push('/');
            this.$cookies.remove('token');
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Your account is safe :)',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    }
  },
  mounted(){
      this.getProfile()
      // this.updateProfile()
  }

}
</script>
<style scoped>
main {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}

.container {
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.sidebar {
  width: 300px;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
  text-align: center;
}

.sidebar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #00c853;
}

.sidebar h2 {
  font-size: 24px;
  margin: 10px 0 5px;
}

.sidebar p {
  color: #757575;
  margin: 5px 0;
}

.sidebar button {
  background-color: #00c853;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
}

.sidebar button:hover {
  background-color: #00b248;
}

.sidebar a {
  display: block;
  color: #757575;
  text-decoration: none;
  margin: 10px 0;
}

.content {
  padding: 20px;
  flex-grow: 1;
}

.content h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.content p {
  margin: 10px 0;
}

.content p span {
  font-weight: bold;
}
</style>