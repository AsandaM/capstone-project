<template>
  <main>
    <div class="container" v-if="user">
      <!-- Profile Left Section -->
      <div class="profile-left">
        <img :src="user.userProfile" alt="userProfile" />
        <h2>{{ user.firstName }} {{ user.lastName }}</h2>
        <p>{{ user.userRole }}</p>
      </div>
      
      <!-- Profile Right Section -->
      <div class="profile-right text-start">
        <h1>User Profile</h1>
        <div class="info">
          <p><span>Phone:</span> {{ userProfile.phone }}</p>
          <p><span>Email:</span> {{ user.emailAdd }}</p>
          <p><span>Age:</span> {{ user.userAge }}</p>
        </div>
        <div class="edit-delete-container">
          <div class="edit-profile" @click="toggleEditForm">
            <i class="fas fa-pencil-alt"></i>
          </div>
          <div class="edit-profile" @click="deleteUser(user.userID)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
  
        <!-- Edit Form Section -->
        <div v-if="isEditVisible" class="edit-form">
          <input v-model="editProfile.firstName" type="text" placeholder="First Name" />
          <input v-model="editProfile.lastName" type="text" placeholder="Last Name" />
          <input v-model="editProfile.userAge" type="number" placeholder="Age" />
          <input v-model="editProfile.userPass" type="password" placeholder="Password" />
          <input v-model="editProfile.gender" type="text" placeholder="Gender" />
          <input v-model="editProfile.userProfile" type="url" placeholder="Profile Image URL" />
          <button @click="updateProfile(user.userID)">Save Changes</button>
        </div>
      </div>
    </div>
  </main>

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
      await this.$store.dispatch('updateProfile', {userID: userID, info: this.editProfile});
      Swal.fire({
        icon: 'success',
        title: 'Profile updated successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.getProfile();
        this.isEditVisible = false;
      });
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

main{
  background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
  .container {
    display: flex;
    width: 100%;
    /* height: 100vh; */
    padding: 10px; 
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  .profile-left {
    background-color: transparent;
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
    font-size: 18px;
    color: #165e2c;
  }
  .profile-right {
    background-color: transparent;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box;
  }
  .profile-right h1 {
    font-size: 32px;
    color: #165e2c;
    margin-bottom: 5px;
  }
  .profile-right .info {
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .profile-right .info p {
    margin: 10px 0;
    font-size: 16px;
    color: #363434;
  }
  .profile-right .info p span {
    color: #165e2c;
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
    text-align: start;
  }

.edit-delete-container {
  display: flex;
  gap: 10px; 
  margin-bottom: 20px
}
  .profile-right .edit-profile {
    color: #165e2c;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .profile-right .edit-profile:hover {
    color: #c9302c;
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
