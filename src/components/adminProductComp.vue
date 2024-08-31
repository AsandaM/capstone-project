<template>
  <button type="button" class="btn btn-success flex-container" @click="openAddProductModal(product)">Add new product</button>
  <div class="table-responsive">
    <table class="table table-success table-striped-columns">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.value">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in paginatedProducts" :key="product.prodID">
          <td>{{ product.prodName }}</td>
          <td>R{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.type }}</td>
          <td>
            <div class="btn-group btn-group-md" role="group" aria-label="Vertical button group">
              <button type="button" class="btn btn-warning" @click="openEditProductModal(product)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
              </button>
              <button type="button" class="btn btn-danger" @click="deleteProduct(product.prodID)">
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

    <modal-comp :isModalOpen="isAddProductModalOpen" @close="closeModal" @submit="addProduct">
      <template #modal-header>
        <h2>Add New Product</h2>
      </template>
      <template #modal-content>
        <!-- Add Product Form -->
        <div class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label class="visually-hidden" for="prodName">Product Name</label>
            <input v-model="formData.prodName" type="text" class="form-control" id="prodName" placeholder="Product Name"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="prodDesc">Description</label>
            <input v-model="formData.prodDesc" type="text" class="form-control" id="prodDesc" placeholder="Product Description"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="type">Type</label>
            <select v-model="formData.type" class="form-select" id="type" placeholder="Type">
              <option value="juice">Juice</option>
              <option value="smoothie">Smoothie</option>
            </select>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="image">Image</label>
            <input v-model="formData.image" type="text" class="form-control" id="image" placeholder="Image URL"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="category">Category</label>
            <select  class="form-select" aria-label="Category" v-model="formData.category">
              <option selected>Category</option>
              <option value="detox">Detox</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Immune Boost">Immune Boost</option>
              <option value="Performance">Performance</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Maintain Weight">Maintain Weight</option>
              <option value="Stay Clean">Stay Clean</option>
            </select>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="price">Price</label>
            <input v-model="formData.price" type="decimal" class="form-control" id="price" placeholder="Price"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="duration_days">Duration days</label>
            <input v-model="formData.duration_days" type="number" class="form-control" id="duration_days" placeholder="Duration days"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="calories">Calories</label>
            <input v-model="formData.calories" type="number" class="form-control" id="calories" placeholder="Calories"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="benefits">Benefits</label>
            <input v-model="formData.benefits" type="text" class="form-control" id="benefits" placeholder="Benefits"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="quantity">Instructions</label>
            <input v-model="formData.instructions" type="text" class="form-control" id="instructions" placeholder="Instructions"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="quantity">Ingredients</label>
            <input v-model="formData.ingredients" type="text" class="form-control" id="ingredients" placeholder="Ingredients"/>
          </div>  
        </div>
      </template>
    </modal-comp>

    <!-- Edit products -->

    <modal-comp :isModalOpen="isEditProductModalOpen" @close="closeModal" @submit="editProduct">
      <template #modal-header>
        <h2>Edit Product</h2>
      </template>
      <template #modal-content>
        <!-- Edit Product Form -->
        <div class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label class="visually-hidden" for="prodName">Product Name</label>
            <input v-model="formData.prodName" type="text" class="form-control" id="prodName" placeholder="Product Name"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="prodDesc">Description</label>
            <input v-model="formData.prodDesc" type="text" class="form-control" id="prodDesc" placeholder="Product Description"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="type">Type</label>
            <select v-model="formData.type" class="form-select" id="type" placeholder="Type">
              <option value="juice">Juice</option>
              <option value="smoothie">Smoothie</option>
            </select>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="image">Image</label>
            <input v-model="formData.image" type="text" class="form-control" id="image" placeholder="Image URL"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="category">Category</label>
            <select  class="form-select" aria-label="Category" v-model="formData.category">
              <option selected>Category</option>
              <option value="detox">Detox</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="immune_boost">Immune Boost</option>
              <option value="performance">Performance</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="maintain_weight">Maintain Weight</option>
              <option value="stay_clean">Stay Clean</option>
            </select>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="price">Price</label>
            <input v-model="formData.price" type="decimal" class="form-control" id="price" placeholder="Price"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="duration_days">Duration days</label>
            <input v-model="formData.duration_days" type="number" class="form-control" id="duration_days" placeholder="Duration days"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="calories">Calories</label>
            <input v-model="formData.calories" type="number" class="form-control" id="calories" placeholder="Calories"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="benefits">Benefits</label>
            <input v-model="formData.benefits" type="text" class="form-control" id="benefits" placeholder="Benefits"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="quantity">Instructions</label>
            <input v-model="formData.instructions" type="text" class="form-control" id="instructions" placeholder="Instructions"/>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="quantity">Ingredients</label>
            <input v-model="formData.ingredients" type="text" class="form-control" id="ingredients" placeholder="Ingredients"/>
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
        { text: "Product Name", value: "prodName" },
        { text: "Price", value: "price" },
        { text: "Category", value: "category" },
        { text: "Type", value: "type" },
        { text: "Actions", value: "actions" }
      ],
      itemsPerPage: 4,
      page: 1,
      isAddProductModalOpen: false,
      isEditProductModalOpen: false,
      formData: {
        prodName: '',
        prodDesc: '',
        type: '',
        image: '',
        category: '',
        price: '',
        duration_days: '',
        calories: '',
        benefits: '',
        instructions: '',
        ingredients: ''
      },
    };
  },
  computed: {
    products() {
      return this.$store.state.products || [];
    },
    paginatedProducts() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = this.page * this.itemsPerPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
  },
  methods: {
    getProducts() {
      this.$store.dispatch('getProducts');
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
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id);
    },
    openAddProductModal(product) {
      this.formData = { ...product };
      this.isAddProductModalOpen = true;
    },
    openEditProductModal(product) {
      this.formData = { ...product };
      this.isEditProductModalOpen = true;
    },
    closeModal() {
      this.isAddProductModalOpen = false;
      this.isEditProductModalOpen = false;
    },
    addProduct() {
      this.$store.dispatch('addProduct', this.formData);
      this.closeModal();
    },
    editProduct() {
      this.$store.dispatch('editProduct', this.formData);
      this.closeModal();
    },
  },
  mounted() {
    this.getProducts();
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