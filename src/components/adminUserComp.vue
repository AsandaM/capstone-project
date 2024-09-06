<template>
  <button type="button" class="btn btn-success flex-container" @click="openAddUserModal(user)">Add new user</button>
  <!-- Admin table -->
  <div class="table-responsive">
    <table class="table table-success table-striped-columns">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedUsers" :key="user.userID">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>
            <div class="btn-group btn-group-md" role="group" aria-label="Vertical button group">
              <button type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" @click="openEditUserModal(user)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
              </button>
              <button type="button" class="btn btn-danger" @click="deleteUser(user.userID)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="pagination-row">
          <td colspan="5">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item w-10 h-10">
                  <a class="page-link bg-success text-white" @click="prevPage" :disabled="page === 1">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item w-10 h-10">
                  <a class="page-link bg-success text-white" href="#" @click="nextPage" :disabled="page === totalPages">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="page-number text-success"> Page {{ page }} of {{ totalPages }} </div>
          </td>
        </tr>
      </tfoot>
    </table>

    <!-- Add new user -->
    <modal-comp :isModalOpen="isAddUserModalOpen" @close="closeModal" @submit="addUser">
      <template #modal-header>
        <h2>Add New User</h2>
      </template>
      <template #modal-content>
        <!-- Add Product Form -->
        <div class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label class="visually-hidden" for="firstName">First Name</label>
            <input v-model="form.firstName" type="text" class="form-control" id="firstName" placeholder="First Name"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="lastName">Last Name</label>
            <input v-model="form.lastName" type="text" class="form-control" id="lastName" placeholder="Last Name"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="lastName">Age</label>
            <input v-model="form.userAge" type="number" class="form-control" id="userAge" placeholder="Age"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="gender">Gender</label>
            <input v-model="form.gender" type="text" class="form-control" id="gender" placeholder="Gender"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="emailAdd">Email Address</label>
            <input v-model="form.emailAdd" type="email" class="form-control" id="emailAdd" placeholder="Email Address"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="userPass">Password</label>
            <input v-model="form.userPass" type="password" class="form-control" id="userPass" placeholder="Password"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="image">Profile picture</label>
            <input v-model="form.image" type="text" class="form-control" id="image" placeholder="Profile picture URL"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="type">Role</label>
            <select v-model="form.userRole" class="form-select" id="userRole" aria-label="role">
              <option value="">Role</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </div>
        </div>
      </template>
    </modal-comp>

    <!-- Edit user -->
    <modal-comp :isModalOpen="isEditUserModalOpen" @close="closeModal" @submit="editUser()">
      <template #modal-header>
        <h2>Edit User</h2>
      </template>
      <template #modal-content>
        <div class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label class="visually-hidden" for="firstName">First Name</label>
            <input v-model="formData.firstName" type="text" class="form-control" id="firstName" placeholder="First Name"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="lastName">Last Name</label>
            <input v-model="formData.lastName" type="text" class="form-control" id="lastName" placeholder="Product Last Name"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="age">Age</label>
            <input v-model="formData.userAge" type="number" class="form-control" id="userAge" placeholder="Age"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="gender">Gender</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="Gender"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="password">Password</label>
            <input v-model="formData.userPass" type="password" class="form-control" id="userPass" placeholder="Password"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="image">Profile Picture</label>
            <input v-model="formData.image" type="url" class="form-control" id="image" placeholder="Profile Picture"/>
          </div>  
          <div class="col-auto">
            <label class="visually-hidden" for="role">Role</label>
            <select  class="form-select" aria-label="Role" v-model="formData.userRole">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      </template>
    </modal-comp>
  </div>
</template>

<script>
import modalComp from './modalComp.vue';

export default {
  components: {
    modalComp,
  },
  data() {
    return {
      headers: [
        { text: "Fist Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Age", value: "userAge" },
        { text: "Role", value: "userRole" },
        { text: "Actions", value: "actions" }
      ],
      itemsPerPage: 4,
      page: 1,
      isAddUserModalOpen: false,
      isEditUserModalOpen: false,
      formData: {
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        emailAdd: '',
        userPass: '',
        image: '',
        userRole: ''
      },
      form:{
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        userPass: '',
        image: '',
        userRole: ''
      }
    };
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    },
    paginatedUsers() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = this.page * this.itemsPerPage;
      return this.users.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch('getUsers');
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id);
      
    },
    openAddUserModal(user) {
      this.formData = { ...user };
      this.isAddUserModalOpen = true;
    },
    openEditUserModal(user) {
      this.formData = { ...user };
      this.isEditUserModalOpen = true;
    },
    closeModal() {
      this.isAddUserModalOpen = false;
      this.isEditUserModalOpen = false;
    },
    addUser() {
      this.$store.dispatch('addUser', this.form);
      this.closeModal();
    },
    editUser() {
      this.$store.dispatch('editUser', this.formData);
      this.closeModal();
      location.reload();
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
}

th, td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
  width: 25%; /* Ensures each column takes up an equal portion of the table */
}

.pagination .page-item .page-link {
  font-size: 24px;
  cursor: pointer;
}

.flex-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 20px;
}

.form-select{
 width: 220px;

}
</style>