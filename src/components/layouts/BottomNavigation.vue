<template>
    <div class="bottomnavigation">
        <nav class="navbar fixed-bottom justify-content-center navbar-light bg-light">
            <a href="tel:+918898661031"><img src="/assets/icons/call.png" class="bottom-icons-left"></a>
            <a href="https://wa.me/918898661031?text=I'm%20interested%20in%20your%20products%20for%20rent"><img src="/assets/icons/bottom-whatsapp.png" alt="" class="bottom-icons-left"></a>
            <div class="bottom-home">
                <router-link to=""><img src="/assets/icons/home.png" alt=""></router-link>
            </div>
            <router-link to=""><img src="/assets/icons/bottom-list.png" class="bottom-icons-right"></router-link>
            <router-link to=""><img src="/assets/icons/bottom-user.png" alt="" class="bottom-icons-right"></router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'BottomNavigation',
    data(){
        return{

        }
    }
}
</script>

<style>
.bottomnavigation i{
    font-size: 2rem;
    color: #000;
}
.bottom-home{
    position: relative;
    width: 4rem;
    height: 4rem;
    background:#eef2f1;
    border-radius: 50%;
    margin-top: -3rem;
    box-shadow: -4px -4px 7px 0px rgba(228, 228, 228, 0.65) inset, 4px 4px 7px 0px rgba(0, 0, 0, 0.25) inset;
}
.bottom-home a{
    position: absolute;
    top: 25%;
    left: 25%;
}
.bottom-home img{
    width: 2rem;
}
.bottom-icons-left{
    width: 2.1rem;
    margin-right: 1.2rem;
}
.bottom-icons-right{
    width: 2.1rem;
    margin-left: 1.2rem;
}
@media only screen and (min-width: 600px) {
   
}
</style>