<template>
    <section class="my-5">
        <div class="container" >
            <div class="main-body" v-if="user">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img :src="user.userProfile" alt="userProfile"
                                        class="rounded-circle p-1 bg-warning" width="110">
                                    <div class="mt-3">
                                        <h4>{{ user.firstName }}</h4>
                                        <p class="text-secondary mb-1">{{user.gender}}</p>
                                        <p class="text-muted font-size-sm">{{user.userAge}}</p>
                                        <p>{{ user.userRole }}</p>
                                    </div>
                                </div>
                                <div class="list-group list-group-flush text-center mt-4">
                                    <butoon href="#" class="list-group-item list-group-item-action border-0">Logout</butoon>
                                    <button href=""> delete accout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div  id="orderDetails" class="order_card">
                        <div class="card">
                            <div class="card-body">
                                <div class="top-status">
                                    <h5>Items in your cart</h5>
                                    <ul>
                                        <li>
                                            item 1
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4">
                            <div class="card-body p-0 table-responsive">
                                <h4 class="p-3 mb-0">Edit profile</h4>
                                <div class="row gy-2 gx-3 align-items-center">
                                <div class="col-auto">
                                    <label class="visually-hidden" for="prodName">First Name</label>
                                    <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name"/>
                                </div>
                                <div class="col-auto">
                                    <label class="visually-hidden" for="lastName">Last Name</label>
                                    <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name"/>
                                </div>
                                <!-- <div class="col-auto">
                                    <label class="visually-hidden" for="userRole">User Role</label>
                                    <input v-model="userRole" class="form-select" id="userRole" placeholder="User Role">
                                </div> -->
                                <div class="col-auto">
                                    <label class="visually-hidden" for="userProfile">Profile picture</label>
                                    <input v-model="userProfile" type="text" class="form-control" id="userProfile" placeholder="User Profile"/>
                                </div>
                                <div class="col-auto">
                                    <label class="visually-hidden" for="userRole">User Role</label>
                                    <select  class="form-select" aria-label="userRole" v-model="userRole">
                                    <option value="admin">admin</option>
                                    <option value="user">user</option>
                                    </select>
                                </div>
                                <button @click="editUser">save changes</button>
                                </div>
                                <br>
                                <div v-if="user">
                                    <p>{{ user.firstName }} {{ user.lastName }}</p>
                                <!-- <div v-for="(profile, index) in getUserData()" :key="index">
                               
                                    {{ profile.firstName }} {{ profile.lastName }}
                                </div> -->
                                </div>
                                <div v-else>
                                <p>No user data available</p>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return{
            firstName: '',
            lastName: '',
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
        editUser() {
        this.$store.dispatch('editUser', this.$data);
        // console.log(this.$data);
        
    },
    },
    mounted(){
        this.getProfile()
        // this.editUser()
    }
  
}
</script>
<style scoped>

.list-group-item.active {
    background: #06C167 !important;
}
.bg-warning {
    background: #06C167 !important;
}

.button_div {
    justify-content: center;
    text-align: center;
}

@media (max-width: 768px) {
        .main_flex_div {
            display: flex;
            flex-direction: column;
        }
        .inner_flex_div {
            min-width: 100% !important;
        }
        .modal-content {
            padding: 10px 0px !important;
            min-width: 95% !important;
            height: 700px;
            overflow: scroll;
        }
        .close {
            margin-right: 10px;
        }
    }

    .list-group-item.active {
    background: #ffc107;
}
/* end common class */
.top-status ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}
.top-status ul li {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 8px solid #ddd;
    box-shadow: 1px 1px 10px 1px #ddd inset;
    margin: 10px 5px;
}



/* end timeline */
</style>>