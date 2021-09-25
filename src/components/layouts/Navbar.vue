<template>

   <nav class="navbar">
    <div class="container">
        <router-link to="#" class="navbar-brand"><img class="nav-logo" src="/assets/logo-login.png" alt=""></router-link>
        <div class="ml-auto">
            <button class="btn nav-title-icon shadow-xl"><img src="/assets/icons/user.png" alt=""></button>
            <button class="btn nav-title-icon shadow-xl"><img src="/assets/icons/search.png" alt=""></button>
            <button  @click="isVisible" class="btn nav-title-icon shadow-xl"><img :src="[listIcon? '/assets/icons/list.png': '/assets/icons/close.png']" alt=""></button>
        </div>
    </div>
   </nav>
    <section :class="[isVisibleClass ? 'visible-sidebar' : '']" class="sidebar text-center">
            <div class="user-icon mb-4">
                <img src="assets/logo/logo-desk.png" class="w-75 mt-3" alt="">
            </div>
            <div class="sidebar-content">
                <div class="sidebar-user">
                    <div class="img-back">
                        <img src="assets/usernoimg.png" alt="">
                    </div>
                    <h4>Username</h4>
                </div>
                 <div class="sidebar-menus-back mt-4">
                    <div class="sidebar-home">
                        <a href="">Home</a>
                    </div>
                     <div class="sidebar-home mt-3">
                        <a href="">Products</a>
                    </div>
                     <div class="sidebar-home mt-3">
                        <a href="">About Us</a>
                    </div>
                     <div class="sidebar-home mt-3">
                        <a href="">Contact Us</a>
                    </div>
                </div>
            </div>
           
        </section>
  
</template>

<script>
// import image from "../assets/logo-login.png"
export default {
    name: 'Navbar',
    data() {
      return {
          isVisibleClass: false,
          listIcon: true
        }
    },
    methods:{
        isVisible(){
            this.isVisibleClass = !this.isVisibleClass
            this.listIcon = !this.listIcon
        }
    }
}
</script>

<style>
.visible-sidebar{
    visibility: visible !important;
    transform: translateX(0%) !important;
}

.sidebar{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(180deg, #6776FE 0%, rgba(140, 20, 234, 0.99) 99.99%, rgba(65, 76, 175, 0) 100%, #414CAF 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width:18rem;
    z-index: 999;
    /* visibility: hidden; */
    transform: translateX(-100%);
    transition: 0.7s;
}
.sidebar-content{
    padding: 1rem;
}
.sidebar-user{
    border-radius: 13px;
    box-shadow: -4px -4px 7px 0px rgb(159 157 222 / 84%), 4px 4px 7px 0px rgb(0 0 0 / 25%);
    padding: 1px;
}
.sidebar-user .img-back{
    border-radius: 50%;
    margin: auto;
    width: 70px;
    margin-top: -32px;
    padding: 8px;
    height: 70px;
    background: #6d67fb;
    box-shadow: -4px -4px 7px 0px rgb(159 157 222 / 84%), 4px 4px 7px 0px rgb(0 0 0 / 25%);
}
.sidebar-user img{
    width: 100%;
}
.sidebar-user h4{
    color: white;
    font-weight: 600;
}
.sidebar-menus-back{
    border-radius: 13px;
    box-shadow: -4px -4px 7px 0px rgb(159 157 222 / 84%), 4px 4px 7px 0px rgb(0 0 0 / 25%);
    padding: 1rem;
}
.sidebar-home{
    border-radius: 13px;
    box-shadow: -4px -4px 7px 0px rgb(159 157 222 / 84%), 4px 4px 7px 0px rgb(0 0 0 / 25%);
    padding: 0.7rem;
}
.sidebar-home a{
    color: white;
    font-size: 17px;
    text-decoration: none;
    font-weight: 600;
}
.nav-logo{
    width: 11rem;
}
.nav-title-icon{
    float: left;
    z-index: 2;
    width: 45px;
    height: 45px;
    margin-right: 13.33333px;
    border-radius: 12px;
    text-align: center;
    background: #eef2f1;
}
.shadow-xl {
   box-shadow: -4px -4px 7px 0px rgb(255 255 255), 4px 4px 7px 0px rgb(0 0 0 / 25%);
}
.nav-title-icon img{
    width: 28px;
    margin-left: -3px;
}

/* Mobile View Start */
@media only screen and (max-width: 600px) {
    .nav-logo{
        width: 8rem;
    }
}
</style>