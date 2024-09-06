<template>
  <div class="container" v-if="user">
    <!-- Profile Left Section -->
    <div class="profile-left">
      <img :src="user.userProfile" alt="Portrait of Luna Lambert" />
      <h2>{{ user.firstName }} {{ user.lastName }}</h2>
      <p>{{ user.userRole }}</p>
    </div>
    
    <!-- Profile Right Section -->
    <div class="profile-right">
      <h1>User Profile</h1>
      <div class="info">
        <p><span>Phone:</span> {{ userProfile.phone }}</p>
        <p><span>Email:</span> {{ user.emailAdd }}</p>
        <p><span>Age:</span> {{ user.userAge }}</p>
      </div>
      <div class="edit-profile" @click="toggleEditForm">
        Edit Profile <i class="fas fa-pencil-alt"></i>
      </div>
      <div class="edit-profile" @click="deleteUser(user.userID)">
        Delete Account <i class="fas fa-pencil-alt"></i>
      </div>

      <!-- Edit Form Section -->
      <div v-if="isEditVisible" class="edit-form">
        <input v-model="editProfile.firstName" type="text" placeholder="First Name" />
        <input v-model="editProfile.lastName" type="text" placeholder="Last Name" />
        <input v-model="editProfile.userAge" type="number" placeholder="Age" />
        <input v-model="editProfile.userPass" type="password" placeholder="Password" />
        <input v-model="editProfile.userRole" type="text" placeholder="Role" />
        <input v-model="editProfile.gender" type="text" placeholder="Gender" />
        <input v-model="editProfile.userProfile" type="url" placeholder="Profile Image URL" />
        <button @click="updateProfile(user.userID)">Save Changes</button>
      </div>
    </div>
  </div>

</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      userProfile: {
        firstName: '',
        lastName: '',
        phone: '+1 (714) 298-3082',
        emailAdd: '',
        birthday: '1996-08-07',
        userProfile: ''
      },
      isEditVisible: false,
      editProfile: {
        firstName: '',
          lastName: '',
          userAge: '',
          userPass: '',
          userRole: '',
          gender: '',
          userProfile: ''
      }
    };
  },
  computed:{
    user(){
      return this.$store.state.userProfile;
    }
  },
  methods: {
    toggleEditForm() {
      this.isEditVisible = !this.isEditVisible;
    },
  getProfile(){
    this.$store.dispatch('userProfile');
  },
  async updateProfile(userID){
    try{
      await this.$store.dispatch('updateProfile', {userID: userID, info: this.editProfile});
      Swal.fire({
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        this.getProfile();
        this.isEditVisible = false;
      });
    }catch(err){
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while updating your profile',
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
      this.getProfile();
    }
};
</script>

<style scoped>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
  }
  .container {
    display: flex;
    width: 100%;
    /* height: 100vh; */
    padding: 10px;
    
  }
  .profile-left {
    background-color: #a3a392;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
  }
  .profile-left img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
  .profile-left h2 {
    margin: 20px 0 5px;
    font-size: 24px;
    color: #333;
  }
  .profile-left p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
  .profile-right {
    background-color: #fff;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box;
  }
  .profile-right h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }
  .profile-right .info {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .profile-right .info p {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
  }
  .profile-right .info p span {
    color: #666;
  }
  .profile-right .edit-profile {
    color: #d9534f;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .profile-right .edit-profile i {
    margin-left: 5px;
  }
  .edit-form {
    display: flex;
    flex-direction: column;
  }
  .edit-form input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .edit-form button {
    padding: 10px;
    font-size: 16px;
    background-color: #d9534f;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .profile-left, .profile-right {
      width: 100%;
    }
  }
</style>
