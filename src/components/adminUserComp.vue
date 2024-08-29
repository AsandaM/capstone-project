<template>
    <div class="table-responsive">
        <table class="table">
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
              <td>{{ user.emailAdd }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="pagination-row">
              <td colspan="4">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a class="page-link" @click="prevPage" :disabled="page === 1">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" @click="nextPage" :disabled="page === totalPages">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          </tfoot>
        </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: "Firstname", value: "firstName" },
          { text: "Lastname", value: "lastName" },
          { text: "Gender", value: "gender" },
          { text: "Email Address", value: "emailAdd" }
        ],
        itemsPerPage: 4,
        page: 1,
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
  
  th {
    background-color: #f0f0f0;
  }
  </style>
  