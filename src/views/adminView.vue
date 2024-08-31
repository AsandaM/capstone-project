<template>
  <figure class="tabBlock">
    <ul class="tabBlock-tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-setsize="tabs.length"
        :aria-posinet="index + 1"
      >
        <a
           href="javascript:void(0);"
           class="tabBlock-tab text-success"
           :class="active_tab === index ? 'is-active' : ''"
           :aria-selected="active_tab === index"
           @click="changeTab(index)"
        >
          {{ tab.tab_title }}
        </a>
      </li>
    </ul>
    <div class="tabBlock-content">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :aria-current="active_tab === index"
        class="tabBlock-pane"
        v-show="active_tab === index"
      >
        <p>{{ tab.tab_content }}</p>
        <div v-if="index === 0">
          <adminProductComp/>
          <modal-comp :isModalOpen="isModalOpen" @close="closeModal" />
        </div>
        <div v-if="index === 1">
          <adminUserComp/>
        </div>
      </div>
    </div>
  </figure>
</template>

<script>
import adminProductComp from "@/components/adminProductComp.vue";
import adminUserComp from "@/components/adminUserComp.vue";
import modalComp from "@/components/modalComp.vue";

export default {
  components: {
    adminProductComp,
    adminUserComp,
    modalComp
  },
  data() {
    return {
      active_tab: 0,
      isModalOpen: false, // Ensure this is defined
      tabs: [
        {
          tab_title: "Products",
          tab_content:
            "This is the products page. Here you can see all the products available in the store."
        },
        {
          tab_title: "Users",
          tab_content:
            "This is the users page. Here you can see all the users registered in the store."
        },
        {
          tab_title: "Orders",
          tab_icon: "orders",
          tab_content:
            "This is the orders page. Here you can see all the orders placed in the store."
        }
      ]
    };
  },
  methods: {
    changeTab(tabIndexValue) {
      this.active_tab = tabIndexValue;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm() {
      // Insert your logic to save the product data to the database here
      console.log(this.formData);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');
*,
*,
::before,
::after {
  box-sizing: border-box;
}

.tabBlock {
  font-family: "Muli";
  background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
}

.tabBlock-tabs {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "Muli";
}

.tabBlock-tabs::after {
  clear: both;
  content: "";
  display: table;
}

.tabBlock-tab {
  background-color: #fff;
  border-color: #d8d8d8;
  border-left-style: solid;
  border-top: solid;
  border-width: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  float: left;
  padding: 0.625rem 1.25rem;
  position: relative;
  transition: 0.1s ease-in-out;
  text-decoration: none;
}

.tabBlock-tab:last-of-type {
  border-right-style: solid;
}

.tabBlock-tab::before,
.tabBlock-tab::after {
  content: "";
  display: block;
  height: 4px;
  position: absolute;
  transition: 0.1s ease-in-out;
}

.tabBlock-tab::before {
  background-color: #ddf1cf;
  left: -2px;
  right: -2px;
  top: -2px;
}

.tabBlock-tab::after {
  background-color: transparent;
  bottom: -2px;
  left: 0;
  right: 0;
}

@media screen and (min-width: 700px) {
  .tabBlock-tab {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

.tabBlock-tab.is-active {
  position: relative;
  z-index: 1;
}

.tabBlock-tab.is-active::after {
  background-color: #0b971b;
}

.tabBlock-content {
  padding: 1.25rem;
}

</style>