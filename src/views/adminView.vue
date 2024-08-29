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
           class="tabBlock-tab"
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
        </div>
        <div v-if="index === 1">
          <adminUserComp/>
        </div>

      </div>
      <hr />
    </div>
  </figure>
</template>

<script>
import adminProductComp from "@/components/adminProductComp.vue";
import adminUserComp from "@/components/adminUserComp.vue";

export default {
  components: {
    adminProductComp,
    adminUserComp
  },
  data() {
    return {
      active_tab: 0,
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
    }
  }
  
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  color: #222;
  font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 50rem;
  padding: 2.5rem 1.25rem;
}

.tabBlock {
  margin: 0 0 2.5rem;
}

.tabBlock-tabs {
  list-style: none;
  margin: 0;
  padding: 0;
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
  color: #e8a669;
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
  background-color: #e8a669;
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

.tabBlock-tab:hover,
.tabBlock-tab:focus {
  color: darkorange;
}

@media screen and (min-width: 700px) {
  .tabBlock-tab {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

.tabBlock-tab.is-active {
  position: relative;
  color: darkorange;
  z-index: 1;
}

.tabBlock-tab.is-active::before {
  background-color: darkorange;
}

.tabBlock-tab.is-active::after {
  background-color: #fff;
}

.tabBlock-tab svg {
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.5rem;
  pointer-events: none;
  fill: currentcolor;
}

.tabBlock-content {
  background-color: #fff;
  border: 2px solid #d8d8d8;
  padding: 1.25rem;
}

.tabBlock-content a {
  color: dodgerblue;
  font-weight: 700;
  transition: color 200ms ease;
}

.tabBlock-content a:hover,
.tabBlock-content a:focus {
  color: orangered;
}

.tabBlock-content hr {
  margin: 3rem 0;
  border: 1px solid transparent;
  border-radius: 50%;
  border-top-color: #d8d8d8;
}

</style>
