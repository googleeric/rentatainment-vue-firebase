<template>
    <Header/>
    <div class="main-form">
        <h1 class="top-text">Add Customer</h1>
        <div class="container">
            <div class="row">
                <div class="col-12">
                        <form class="row g-3 m-0" @submit.prevent="addCustomer">
                             <div class="col-12 text-start">
                                <div class="row">
                                    <h6>Customer Type</h6>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="New Customer" v-model="addCustomerDetails.customerType" checked>
                                            <label class="form-check-label" for="flexCheckDefault">New Customer</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="Renewal" v-model="addCustomerDetails.customerType">
                                            <label class="form-check-label" for="flexCheckDefault">Renewal</label>
                                        </div>
                                    </div>
                                </div>
                             </div>
                            <div class="col-4"> 
                                <input type="text" class="form-control" placeholder="First Name" v-model.trim="addCustomerDetails.firstName">
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="Middle Name" v-model.trim="addCustomerDetails.middleName">
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="Last Name" v-model.trim="addCustomerDetails.lastName">
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Mobile Number" v-model.trim="addCustomerDetails.mobileNumber">
                            </div>
                             <div class="col-6">
                                <input type="text" class="form-control" placeholder="Email Id" v-model.trim="addCustomerDetails.emailId">
                            </div>
                            <div class="col-6">
                                <select class="form-select" v-model="addCustomerDetails.identityProof">
                                    <option value="Aadhar Card">Aadhar Card</option>
                                    <option value="Driving Licence">Driving Licence</option>
                                    <option value="Passport">Passport</option>
                                    <option value="Election Id">Election Id</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Identity Number" v-model.trim="addCustomerDetails.identityNumber"> 
                            </div>
                            <div class="col-12">
                                <textarea row="3" class="form-control" placeholder="Customer Address Line 1" v-model.trim="addCustomerDetails.address1"></textarea>
                            </div>
                            <div class="col-12">
                                <textarea row="3" class="form-control" placeholder="Customer Address Line 2" v-model.trim="addCustomerDetails.address2"></textarea>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="City" v-model.trim="addCustomerDetails.city">
                            </div>
                            <div class="col-4"> 
                                <select class="form-select" v-model="addCustomerDetails.state">
                                    <option value="Maharashtra" selected>Maharashtra</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="Pin Code" v-model.trim="addCustomerDetails.pinCode">
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="Rent Period" v-model.trim="addCustomerDetails.rentPeriod">
                            </div>

                            <div class="col-6">
                                <label for="" class="time-font">Select Start Date & Time</label> 
                                <input type="datetime-local" class="form-control" v-model="addCustomerDetails.startDateTime">
                            </div>

                              <!-- <div class="col-6">
                                <label for="">Select Start Time</label>
                                <input type="time" class="form-control">
                            </div> -->
                            
                            <div class="col-6">
                                <label for="" class="time-font">Select End Date & Time</label>
                                <input type="datetime-local" class="form-control" v-model="addCustomerDetails.endDateTime">
                            </div>

                              <!-- <div class="col-6">
                                <label for="">Select End Time</label>
                                <input type="time" class="form-control">
                            </div> -->

                            <div class="col-4">
                                <input type="number" class="form-control" placeholder="Amount" v-model.trim="addCustomerDetails.amount">
                            </div>
                            <div class="col-4">
                                <input type="number" class="form-control" placeholder="Deposite" v-model.trim="addCustomerDetails.deposite">
                            </div>
                            <div class="col-4">
                                <input type="number" class="form-control" placeholder="Delivery" v-model.trim="addCustomerDetails.delivery">
                            </div>

                            <div class="col-12 text-start">
                                <div class="row">
                                    <h5>Rental Items</h5>
                                    <div class="col-6 mt-1">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="PS4 Slim" v-model="addCustomerDetails.ps4Type" checked>
                                            <label class="form-check-label" for="flexCheckDefault">PS4 Slim</label>
                                        </div>
                                    </div>
                                     <div class="col-6 mt-1">
                                         <div class="form-check">
                                            <input class="form-check-input" type="radio" value="PS4 Pro" v-model="addCustomerDetails.ps4Type">
                                            <label class="form-check-label" for="flexCheckDefault">PS4 Pro</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="HDMI Cable" v-model="rentalitems"> 
                                            <label class="form-check-label" for="flexCheckDefault">HDMI Cable</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Power Cable" v-model="rentalitems">
                                            <label class="form-check-label" for="flexCheckDefault">Power Cable</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Charging Cable 1" v-model="rentalitems">
                                            <label class="form-check-label" for="flexCheckDefault">Charge Cable 1</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Charging Cable 2" v-model="rentalitems"> 
                                            <label class="form-check-label" for="flexCheckDefault">Charge Cable 2</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Controller 1" v-model="controller">
                                            <label class="form-check-label" for="flexCheckDefault">Controller 1</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Controller 2" v-model="controller">
                                            <label class="form-check-label" for="flexCheckDefault">Controller 2</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Controller 3" v-model="controller"> 
                                            <label class="form-check-label" for="flexCheckDefault">Controller 3</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Controller 4" v-model="controller">
                                            <label class="form-check-label" for="flexCheckDefault">Controller 4</label>
                                        </div>
                                    </div>
                                    <div class="col-12 text-start mt-3">
                                        <label for="">All Proofs</label>
                                        <input type="file" class="form-control" @change="allProofs" multiple>
                                    </div>
                                    <div class="col-6 text-center image-data" v-for="(image,index) in images" :key="image">
                                        <img style="width:150px" :src="image" alt="" class="p-2">
                                        <iframe v-show="image.includes('.pdf')" :src="image" style="width:150px; height:300px;" frameborder="0"></iframe>
                                        <i class="fa fa-close" @click="deleteImg(image, index)"></i>
                                    </div>
                                </div>
                            </div>
                            <h6 class="errors" v-for="error in errors" :key="error">{{error}}</h6>
                            <div>
                                <button type="submit" class="btn btn-danger w-100 mb-4">Add Customer</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {ref} from 'vue'
import db from '@/firebase/init'
import firebase from 'firebase/app'
import Header from './Header.vue'
import 'firebase/storage'
export default {
    name:'AddCustomer',
    data(){
        return{
          addCustomerDetails: [],
          rentalitems: [],
          controller: [],
          images:[],
          errors:[]
        }
    },
    components:{
        Header
    },   
    methods:{
        allProofs(e){
            let file = e.target.files;
            const pI = Array.prototype.slice.call(file);
            pI.forEach((image) =>{
                const storageRef=firebase.storage().ref(`${this.addCustomerDetails.firstName} ${this.addCustomerDetails.lastName}/${image.name}`).put(image);
            
                storageRef.on(`state_changed`,snapshot=>{
                    this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                }, error=>{console.log(error.message)},
                ()=>{
                    storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                        this.images.push(url);
                    })
                })
            })  
        },  
        deleteImg(img, index){
            let imageDelete = firebase.storage().refFromURL(img)
            this.images.splice(index,1)
            imageDelete.delete()
            .then(() =>{
            })
            .catch((err) =>{
                console.log(err)
            })
        },
        addCustomer(){
            let fname = this.addCustomerDetails.firstName
            let lname = this.addCustomerDetails.lastName
            let mname = this.addCustomerDetails.middleName
            let email = this.addCustomerDetails.emailId
            let ctype = this.addCustomerDetails.customerType
            let pstype = this.addCustomerDetails.ps4Type
            if(ctype == null){
                ctype = 'New Customer'
            }
            if(pstype == null){
                pstype = "PS4 Slim"
            }
            if(mname == null){
                mname = null
            } 
            if(email == null){
                email = null
            } 
            if(fname != null && lname != null){
                   db.collection('customerdetails').add({
                    customertype: ctype,
                    firstname: fname,
                    middlename : mname,
                    lastname: lname,
                    number: this.addCustomerDetails.mobileNumber,
                    email: email,
                    identityproof: this.addCustomerDetails.identityProof,
                    identitynumber: this.addCustomerDetails.identityNumber,
                    address1: this.addCustomerDetails.address1,
                    address2: this.addCustomerDetails.address2,
                    city: this.addCustomerDetails.city,
                    state: this.addCustomerDetails.state,
                    pincode: this.addCustomerDetails.pinCode,
                    rentperiod: this.addCustomerDetails.rentPeriod,
                    startdatetime: this.addCustomerDetails.startDateTime,
                    enddatetime: this.addCustomerDetails.endDateTime,
                    amount: this.addCustomerDetails.amount,
                    deposite: this.addCustomerDetails.deposite,
                    delivery: this.addCustomerDetails.delivery,
                    ps4type: pstype,
                    rentalitems: this.rentalitems,
                    controllers: this.controller,
                    allproofs: this.images,
                    status: "Active"
                })
                .then(() => {
                    this.errors = ''
                    alert("Details Added Successfully")
                    this.$router.push('/customerdetails');
                })
                .catch((err) => {
                    console.log(err);
                })
            }   
            else{
                let errorName = "Please Fill The First Name & Last Name"
                this.errors.push(errorName)
            }
        }
    },
}
</script>

<style scoped>
.time-font{
    font-size: 13px;
}
.errors{
    font-size: 10px;
    color: #ffc800;
    font-weight: 700;
    /* margin-top: 0; */
    margin-bottom: 0;
}
.main-form{
    background: #673ab7;
    color: white;
}
.image-data{
    position: relative;
    margin-top: 1rem;
}
.image-data i{
    position: absolute;
    top: -5px;
    right: 12px;
    color: #f44603;
    font-size: 28px;
    cursor: pointer;
}
</style>