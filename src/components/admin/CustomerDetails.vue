<template>
    <div>
        <Header />
        
        <h1 class="top-text">Customer Details</h1>
        <div class="container">
            <div class="row">
                <div class="text-center search-bar">
                    <input type="text" class="form-control" placeholder="Search" v-model="search">
                    <!-- <button @click="searchResult">Search</button> -->
                </div>
                <div class="col-12 mt-3">
                    <table class="table mt-4">
                        <thead>
                            <th>View</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Cust Type</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            <tr v-for="(customerData,index) in searchProduct" :key="customerData">
                                <td><router-link :to="{ name: 'UpdateCustomer', params: { number: customerData.number }}"><i class="fa fa-edit"></i></router-link> &nbsp; &nbsp;<i class="fa fa-eye" @click="viewCustomerDetails(customerData.number)" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>
                                <td>{{customerData.firstname}} {{customerData.lastname}}</td>
                                <td>{{customerData.number}}</td>
                                <td>{{customerData.customertype}}</td>
                                <td v-if="customerData.status == 'Active'" class="active" @load="statusUpdate(customerData.id, customerData.enddatetime, index)"><button>{{customerData.status}}</button></td>
                                <td v-else class="inactive" @click="statusUpdate(customerData.id, customerData.enddatetime, index)"><button>{{customerData.status}}</button></td>
                                <!-- <td class="active">Active</td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header cust-model-header">
                    <h4>All Details - {{viewCustomerData.firstname}} {{viewCustomerData.lastname}}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div class="row">
                       <div class="col-6 text-start cust-details">
                           <p><span>Name:</span> {{viewCustomerData.firstname}} {{viewCustomerData.middlename}} {{viewCustomerData.lastname}}</p>
                           <p><span>Address:</span> {{viewCustomerData.address1}} {{viewCustomerData.address2}}</p>
                           <p>{{viewCustomerData.city}} - {{viewCustomerData.pincode}}</p>
                           <p><span>Contact:</span> {{viewCustomerData.number}}</p>
                           <p><span>{{viewCustomerData.identityproof}}:</span> {{viewCustomerData.identitynumber}}</p>
                       </div>
                       <div class="col-6 text-start cust-details2">
                           <p><span>Customer Type:</span> {{viewCustomerData.customertype}}</p>
                           <p><span>Security Deposite:</span> {{viewCustomerData.deposite}}</p>
                           <p><span>Delivery Charges:</span> {{viewCustomerData.delivery}}</p>
                           <p><span>Amount:</span> {{viewCustomerData.amount}}/-</p>
                           <p><span>Renting Period:</span> - {{viewCustomerData.rentperiod}}</p>
                       </div>
                       
                       <div class="col-6 text-start rental-details mt-2">
                           <p><span>Rental Details:</span> </p>
                           <p>{{viewCustomerData.ps4type}} with Games</p>
                           <p><span>Start Date:</span> {{viewCustomerData.startdatetime}}</p>
                           <p><span>End Date:</span> {{viewCustomerData.enddatetime}}</p>
                       </div>
                       <div class="col-6 text-start rental-details mt-2">
                           <p><span>Rental Items:</span></p>
                           <li v-for="rentalitem in viewCustomerData.rentalitems" :key="rentalitem">{{rentalitem}}</li>
                           <li v-for="controller in viewCustomerData.controllers" :key="controller">{{controller}}</li>
                       </div>
                       <hr class="mt-2">
                       <div class="col-6 all-proofs" v-for="(proof,index) in viewCustomerData.allproofs" :key="proof">
                           <img :src="proof" alt="">
                           <iframe v-show="proof.includes('.pdf')" :src="proof" style="width:150px; height:300px;" frameborder="0"></iframe>
                            <i class="fa fa-close" @click="deleteImg(proof, viewCustomerData.id, index)"></i>
                       </div>
                   </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteDoc(viewCustomerData.id, viewCustomerData.allproofs)">Delete</button> 
                    <button type="button" class="btn btn-success" @click="pdfGenerate(viewCustomerData.id)">PDF</button>
                </div>
                </div>
            </div>
        </div>
        <router-link to="/addcustomer"><i class="fa fa-plus add-cust"></i></router-link>
    </div>
</template>
<script>
import Header from './Header.vue'
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/storage'
import { jsPDF } from "jspdf";
import {ref, computed, reactive, onMounted} from 'vue'

export default {
    name: "CustomerDetails",
    
    data(){
        return{
            viewCustomerData: '',
        }
    },
    setup(){

        const customerDatas = reactive([]);
        onMounted( () => {
            db.collection('customerdetails').orderBy("enddatetime",'desc').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let data = doc.data()
                    data.id = doc.id
                    customerDatas.push(data)
                });
            })
            .catch((err) =>{
                console.log(err)
            })
        });

        const search = ref("")
        const searchProduct = computed({
            get(){
                return customerDatas.filter(searching)
                function searching(val){
                    return val.firstname.toUpperCase().includes(search.value.toUpperCase()) + val.lastname.toUpperCase().includes(search.value.toUpperCase())
                }
            },
            // set(value){
            //    console.log(value)
            // }
        })
        
        return {searchProduct, search}
    },
    components:{
        Header
    },
    created(){
        // db.collection('customerdetails').get()
        // .then(snapshot => {
        //     snapshot.forEach(doc => {
        //         let data = doc.data()
        //         data.id = doc.id
        //         this.customerDatas.push(data)
        //     });
        // })
        // .catch((err) =>{
        //     console.log(err)
        // })
      
    },
    methods:{
        viewCustomerDetails(number){
            let ref = db.collection('customerdetails').where('number','==',number)
            ref.get()
            .then(snapshot =>{
                snapshot.forEach(doc =>{
                    this.viewCustomerData = doc.data()
                    this.viewCustomerData.id = doc.id
                })
            })
        },
        deleteImg(link, id, index){
            let viewImageDelete = firebase.storage().refFromURL(link)
            viewImageDelete.delete()
            .then(() =>{
                var datate = db.collection('customerdetails').doc(id)
                datate.update({ 
                    allproofs: firebase.firestore.FieldValue.arrayRemove(link)
                }); 
                this.viewCustomerData.allproofs.splice(index,1)
                })
            .catch((err) =>{
                console.log(err)
            })
        },
        deleteDoc(id, link){
            var delimage = link;
            var delArray = Array.prototype.slice.call(delimage);
            delArray.forEach((del) =>{
                let deleteAllImage = firebase.storage().refFromURL(del)
                deleteAllImage.delete()
            })
            db.collection('customerdetails').doc(id).delete()
            .then(() => {
                this.$router.go(0)
            //    this.searchProduct.value = this.searchProduct.filter( customerData => {
            //         return customerData.id != id
            //     })
            })
            .catch((err) =>{
                console.log(err)
            })
        },
        statusUpdate(id, date, index){
                var year1 = date.slice(0,4)
                var month1 = date.slice(5,7)
                var date1 = date.slice(8,10)
                var hour1 = date.slice(11,13)
                var minutes1 = date.slice(14,16)

                var checkdate1 = new Date(`${year1}`,`${month1}`-1,`${date1}`,`${hour1}`,`${minutes1}`)
                var newDate = new Date()
                var checkdate2 = new Date(`${newDate.getFullYear()}`,`${newDate.getMonth()}`,`${newDate.getDate()}`,`${newDate.getHours()}`,`${newDate.getMinutes()}`)

                if(checkdate1 < checkdate2){
                    var statusAI = "Inactive"
                }
                else{
                    statusAI = "Active"
                }

               
                db.collection('customerdetails').doc(id).update({
                     status: statusAI
                })
                .then(()=>{
                    db.collection('customerdetails').doc(id)
                    .onSnapshot((doc) =>{
                        this.searchProduct[index].status = this.searchProduct[index].status.replace(this.searchProduct[index].status,doc.data().status)
                    })
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        pdfGenerate(id){
             db.collection('customerdetails').doc(id)
             .onSnapshot((dbdoc) =>{ 
                const doc = new jsPDF();
                doc.text(`${dbdoc.data().firstname}`, 10, 10);
                doc.addImage(`${dbdoc.data().allproofs[1]}`, 10, 78, 12, 15)
                doc.save("a4.pdf");
              })

        }

    },
}
</script>
<style>
.search-bar{
    margin-top: 10px;
    margin-bottom: -25px;
}
table th, td{
    font-size: 10px;
}
.cust-details p, .cust-details2 p, .rental-details p{
    font-size: 10px;
    margin-bottom: 3px;
}
.rental-details li{
    font-size: 10px;
}
.cust-details span, .cust-details2 span, .rental-details span{
    color: #62008c;
    font-weight: 700;
}
.cust-details, .cust-details2{
    border: 1px solid gray;
    border-radius: 8px;
    padding: 9px;
}
.cust-model-header{
    background: #7b0492;
    color: white;
}
.cust-model-header h4{
    font-size: 15px;
    margin-bottom: 0;
}
.cust-model-header button{
    color: white;
}
.all-proofs img{
    width: 150px;
    border: 1px solid gray;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
}
.all-proofs i{
    font-size: 24px;
    color: red;
}
table .active{
    font-weight: 900;
}
table .inactive{
    font-weight: 900;
    color: red;
}
.active button{
    width: 3.1rem;
    background-color: #09ba09;
    color: white;
    border:none
}
.inactive button{
    width: 3.1rem;
    background-color: red;
    color: white;
    border: none;
}
.add-cust{
    position: fixed;
    bottom: 3rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: #147fc8;
    color: white;
    padding: 16px 16px 16px 18px;
    border-radius: 50%;
    font-size: 20px;
}
</style>