<template>
    <Header/>
    <div class="main-form">
        <h1 class="top-text">Update Customer</h1>
        <div class="container">
            <div class="row">
                <div class="col-12">
                        <form class="row g-3 m-0" @submit.prevent="updateCustomer">
                             <div class="col-12 text-start">
                                <div class="row">
                                    <h6>Customer Type</h6>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input v-if="singleCustomerDetails.customertype == 'New Customer'" class="form-check-input" type="radio" value="New Customer" v-model="singleCustomerDetails.customertype" checked>
                                             <input v-else class="form-check-input" type="radio" value="New Customer" v-model="singleCustomerDetails.customertype">
                                            <label class="form-check-label" for="flexCheckDefault">New Customer</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input v-if="singleCustomerDetails.customertype == 'Renewal'" class="form-check-input" type="radio" value="Renewal" v-model="singleCustomerDetails.customertype" checked>
                                            <input v-else class="form-check-input" type="radio" value="Renewal" v-model="singleCustomerDetails.customertype">
                                            <label class="form-check-label" for="flexCheckDefault">Renewal</label>
                                        </div>
                                    </div>
                                </div>
                             </div>
                            <div class="col-4"> 
                                <input type="text" class="form-control" placeholder="First Name" v-model.trim="singleCustomerDetails.firstname">
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="Middle Name" v-model.trim="singleCustomerDetails.middlename">
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="Last Name" v-model.trim="singleCustomerDetails.lastname">
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Mobile Number" v-model.trim="singleCustomerDetails.number">
                            </div>
                             <div class="col-6">
                                <input type="text" class="form-control" placeholder="Email Id" v-model.trim="singleCustomerDetails.email">
                            </div>
                            <div class="col-6">
                                <select class="form-select" v-model="singleCustomerDetails.identityproof">
                                    <option value="Aadhar Card">Aadhar Card</option>
                                    <option value="Driving Licence">Driving Licence</option>
                                    <option value="Passport">Passport</option>
                                    <option value="Election Id">Election Id</option>
                                    <option value="Light Bill">Light Bill</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Identity Number" v-model.trim="singleCustomerDetails.identitynumber"> 
                            </div>
                            <div class="col-12">
                                <textarea row="3" class="form-control" placeholder="Customer Address Line 1" v-model.trim="singleCustomerDetails.address1"></textarea>
                            </div>
                            <div class="col-12">
                                <textarea row="3" class="form-control" placeholder="Customer Address Line 2" v-model.trim="singleCustomerDetails.address2"></textarea>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="City" v-model.trim="singleCustomerDetails.city">
                            </div>
                            <div class="col-4"> 
                                <select class="form-select" v-model="singleCustomerDetails.state">
                                    <option value="Maharashtra" selected>Maharashtra</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" placeholder="Pin Code" v-model.trim="singleCustomerDetails.pincode">
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="Rent Period" v-model.trim="singleCustomerDetails.rentperiod">
                            </div>

                            <div class="col-6">
                                <label for="" class="time-font">Select Start Date & Time</label> 
                                <input type="datetime-local" class="form-control" v-model="singleCustomerDetails.startdatetime">
                            </div>

                              <!-- <div class="col-6">
                                <label for="">Select Start Time</label>
                                <input type="time" class="form-control">
                            </div> -->
                            
                            <div class="col-6">
                                <label for="" class="time-font">Select End Date & Time</label>
                                <input type="datetime-local" class="form-control" v-model="singleCustomerDetails.enddatetime">
                            </div>

                              <!-- <div class="col-6">
                                <label for="">Select End Time</label>
                                <input type="time" class="form-control">
                            </div> -->

                            <div class="col-4">
                                <input type="number" class="form-control" placeholder="Amount" v-model.trim="singleCustomerDetails.amount">
                            </div>
                            <div class="col-4">
                                <input type="number" class="form-control" placeholder="Deposite" v-model.trim="singleCustomerDetails.deposite">
                            </div>
                            <div class="col-4">
                                <input type="number" class="form-control" placeholder="Delivery" v-model.trim="singleCustomerDetails.delivery">
                            </div>

                            <div class="col-12 text-start">
                                <div class="row">
                                    <h5>Rental Items</h5>
                                    <div class="col-6 mt-1">
                                        <div class="form-check">
                                            <input v-if="singleCustomerDetails.ps4type == 'PS4 Slim'" class="form-check-input" type="radio" value="PS4 Slim" v-model="singleCustomerDetails.ps4type" checked>
                                            <input v-else class="form-check-input" type="radio" value="PS4 Slim" v-model="singleCustomerDetails.ps4type">
                                            <label class="form-check-label" for="flexCheckDefault">PS4 Slim</label>
                                        </div>
                                    </div>      
                                                     
                                     <div class="col-6 mt-1">
                                         <div class="form-check">
                                            <input v-if="singleCustomerDetails.ps4type == 'PS4 Pro'" class="form-check-input" type="radio" value="PS4 Pro" v-model="singleCustomerDetails.ps4type" checked>
                                            <input v-else class="form-check-input" type="radio" value="PS4 Pro" v-model="singleCustomerDetails.ps4type">
                                            <label class="form-check-label" for="flexCheckDefault">PS4 Pro</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-6 mt-3" v-for="(rentalitem,index) in singleCustomerDetails.rentalitems" :key="index">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" :value="rentalitem" v-model="singleCustomerDetails.rentalitems"> 
                                            <label class="form-check-label" for="flexCheckDefault">{{rentalitem}}</label>
                                        </div>
                                    </div>

                                    <div class="col-6 mt-3" v-for="controller in singleCustomerDetails.controllers" :key="controller">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" :value="controller" v-model="singleCustomerDetails.controllers" checked> 
                                            <label class="form-check-label" for="flexCheckDefault">{{controller}}</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 text-start mt-3">
                                        <label for="">All Proofs</label>
                                        <input type="file" class="form-control" @change="allProofs" multiple>
                                    </div>

                                    <div class="col-6 all-proofs" v-for="(proof,index) in singleCustomerDetails.allproofs" :key="proof">
                                        <img :src="proof" alt="">
                                        <iframe v-show="proof.includes('.pdf')" :src="proof" style="width:150px; height:300px;" frameborder="0"></iframe>
                                            <i class="fa fa-close" @click="deleteFirbaseImage(proof, singleCustomerDetails.id, index)"></i>
                                    </div>

                                     <div class="col-6 text-center image-data" v-for="(image,index) in images" :key="image">
                                        <img style="width:150px" :src="image" alt="" class="p-2">
                                        <iframe v-show="image.includes('.pdf')" :src="image" style="width:150px; height:300px;" frameborder="0"></iframe>
                                        <i class="fa fa-close" @click="deleteArrayImage(image, index)"></i>
                                    </div>
                                </div>
                            </div>
                            <h6 class="errors" v-for="error in errors" :key="error">{{error}}</h6>
                            <div>
                                <button type="submit" class="btn btn-danger w-100 mb-4">Update Customer</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase/app'
import Header from './Header.vue'
import 'firebase/storage'
export default {
    name:'UpdateCustomer',
    data(){
        return{
          singleCustomerDetails: '',
          images: []
        }
    },
    components:{
        Header
    },   
    created(){
        let ref = db.collection('customerdetails').where('number','==',this.$route.params.number)
            ref.get()
            .then(snapshot =>{
                snapshot.forEach(doc =>{
                    // console.log(doc.data())
                    this.singleCustomerDetails = doc.data()
                    this.singleCustomerDetails.id = doc.id

                })
            })
             
    },
   
    methods:{
        allProofs(e){
            let file = e.target.files;
            const pI = Array.prototype.slice.call(file);
            pI.forEach((image) =>{
                const storageRef=firebase.storage().ref(`${this.singleCustomerDetails.firstname} ${this.singleCustomerDetails.lastname}/${image.name}`).put(image);
            
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
     
        deleteFirbaseImage(link, id, index){
            let viewImageDelete = firebase.storage().refFromURL(link)
            viewImageDelete.delete()
            .then(() =>{
                    var datate = db.collection('customerdetails').doc(id)
                    datate.update({ 
                        allproofs: firebase.firestore.FieldValue.arrayRemove(link)
                    }); 
                    this.singleCustomerDetails.allproofs.splice(index,1)
                    })
            .catch((err) =>{
                console.log(err)
            })
        },
        deleteArrayImage(img, index){
            let imageDelete = firebase.storage().refFromURL(img)
            this.images.splice(index,1)
            imageDelete.delete()
            .then(() =>{
            })
            .catch((err) =>{
                console.log(err)
            })
        },
        updateCustomer(){
            let fname = this.singleCustomerDetails.firstname
            let lname = this.singleCustomerDetails.lastname
            let mname = this.singleCustomerDetails.middlename
            let email = this.singleCustomerDetails.email
            let ctype = this.singleCustomerDetails.customertype
            let pstype = this.singleCustomerDetails.ps4type
            let proof = this.singleCustomerDetails.allproofs
            proof.forEach((data) =>{
                this.images.push(data);
                this.singleCustomerDetails.allproofs = null
            })
           
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
                   db.collection('customerdetails').doc(this.singleCustomerDetails.id).update({
                    customertype: ctype,
                    firstname: fname,
                    middlename : mname,
                    lastname: lname,
                    number: this.singleCustomerDetails.number,
                    email: email,
                    identityproof: this.singleCustomerDetails.identityproof,
                    identitynumber: this.singleCustomerDetails.identitynumber,
                    address1: this.singleCustomerDetails.address1,
                    address2: this.singleCustomerDetails.address2,
                    city: this.singleCustomerDetails.city,
                    state: this.singleCustomerDetails.state,
                    pincode: this.singleCustomerDetails.pincode,
                    rentperiod: this.singleCustomerDetails.rentperiod,
                    startdatetime: this.singleCustomerDetails.startdatetime,
                    enddatetime: this.singleCustomerDetails.enddatetime,
                    amount: this.singleCustomerDetails.amount,
                    deposite: this.singleCustomerDetails.deposite,
                    delivery: this.singleCustomerDetails.delivery,
                    ps4type: pstype,
                    rentalitems: this.singleCustomerDetails.rentalitems,
                    controllers: this.singleCustomerDetails.controllers,
                    allproofs: this.images
                })
                .then(() => {
                    this.errors = ''
                    alert("Details Updated Successfully")
                    this.$router.push('/customerdetails');
                })
                .catch((err) => {
                    console.log(err);
                })
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
:root {
    scroll-behavior: smooth;
}

</style>