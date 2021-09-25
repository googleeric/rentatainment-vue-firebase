<template>
    <div class="container">
            <div class="row justify-content-center align-self-center main-row-login">   
                    <div class="mb-3 text-center">
                        <img src="assets/logo/footer-logo.png" alt="">
                    </div>
                    <h1 class="top-text text-center">Rentatainment Login</h1>
                    <div class="col-12 col-md-5 login-form">
                        <form @submit.prevent="login">
                            <h5 class="error">{{error}}</h5>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i> </span>
                                <input type="text" class="form-control" placeholder="Username" v-model="username" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"></i></span>
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>
                            <button class="btn btn-danger w-100" type="submit">Login</button>
                        </form>
                    </div>
            </div>
        </div>
</template>
<script>
export default {
    name:"AdminLogin",
    data(){
        return{
            username: '',
            password: '',
            error:''
        }
    },
    methods:{
         login(){
            if(this.username == "rent@passion" && this.password == "123"){
                var randomToken = Math.floor(10000000 + Math.random() * 90000000)
                localStorage.setItem('token',randomToken)
                this.$router.push('/customerdetails');
            }
            else{
                this.error = "Entered Id & Password Incorrect"
            }
        }
    }
    
}
</script>
<style scoped>
.main-row-login{
    margin-top: 2rem;
}
    .error{
        font-size: 10px;
    color: cyan;
    font-weight: 700;
    }
    .login-form{
        background-color: #a900ff;
        padding: 1rem;
        border-radius: 10px;
    }
    .top-text{
        border-radius: 10px;
    }
    
</style>