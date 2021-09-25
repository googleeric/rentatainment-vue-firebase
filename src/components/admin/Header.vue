<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/customerdetails"><img class="logo-admin" src="/assets/logo/logo-login.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/customerdetails">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" to="/addcustomer">Add Customer</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="logout">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Header",
    methods:{
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/adminlogin');
        }
    }
}
</script>
<style>
    .logo-admin{
        width: 6rem;
    }
    .navbar-collapse{
        text-align: center;
    }
</style>