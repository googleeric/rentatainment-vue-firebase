<template>
    <div>
        <Navbar/>
        <BottomNavigation/>
        <div class="carousel-neo">
            <div id="carouselExampleControls" class="carousel slide ms-2 me-2 ms-md-3 me-md-3" data-bs-ride="carousel">
                    <div class="carousel-inner home-carousel-inner">
                        <div class="carousel-item active">
                            <img src="/assets/banners/1st.png" class="d-none d-md-block w-100" alt="...">
                            <img src="/assets/banners/mobile1.png" class="d-md-none w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/banners/2nd.png" class="d-none d-md-block w-100" alt="...">
                            <img src="/assets/banners/mobile1.png" class="d-block d-md-none w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <img src="/assets/icons/left.png" alt="" aria-hidden="true">
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <img src="/assets/icons/right.png" alt="" aria-hidden="true">
                    </button>
            </div>
        </div>
        <div class="row category-section mx-3 mt-4">
                <h3 class="title-text">Popular Categories</h3>
                <div class="col-md-4 col-6 col-sm-6">
                    <div class="category-neo">
                        <div class="section1 section-back1">
                            <img class="ms-md-4 ms-3" src="/assets/ps4.png" alt="">
                            <h1 class="section-text">Playstation</h1>
                            <h5 class="section-minitext d-none d-sm-block">PS4 Slim & PS4 Pro</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-6 col-sm-6">
                    <div class="category-neo">
                        <div class="section1 section-back2">
                            <img class="ms-md-4 ms-3" src="/assets/controller.png" alt="">
                            <h1 class="section-text">Controllers</h1>
                            <h5 class="section-minitext d-none d-sm-block">Orginal PS4 Controllers</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-6 col-sm-6">
                    <div class="category-neo mt-md-0 mt-2">
                        <div class="section1 section-back3">
                            <img class="ms-md-4 ms-3" src="/assets/chess.png" alt="">
                            <h1 class="section-text">Chess</h1>
                            <h5 class="section-minitext d-none d-sm-block">Metal Chess Available</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-6 col-sm-6">
                    <div :class="categoryNeo">
                        <div class="section1 section-back4">
                            <img class="ms-md-4 ms-3" src="/assets/tt.png" alt="">
                            <h1 class="section-text">Table Tennis</h1>
                            <h5 class="section-minitext d-none d-sm-block">Good Quality Table</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-6 col-sm-6">
                    <div :class="categoryNeo">
                        <div class="section1 section-back5">
                            <img class="ms-md-4 ms-3" src="/assets/camera.png" alt="">
                            <h1 class="section-text">Cameras</h1>
                            <h5 class="section-minitext d-none d-sm-block">Cameras By Vendors</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-6 col-sm-6">
                    <div :class="categoryNeo">
                        <div class="section1 section-back6">
                            <img class="ms-md-4 ms-3" src="/assets/foosball.png" alt="">
                            <h1 class="section-text">Foosball</h1>
                            <h5 class="section-minitext d-none d-sm-block">Football By Hand </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row owlcarousel mt-md-3">
                    <div class="col-6 col-md-3">
                        <div class="owlimg">
                            <div class="owlback">
                                <div class="wishlist">
                                    <img class="heart" src="/assets/icons/wishlist.png" alt="">
                                    <img class="wishlistback" src="/assets/icons/circle.png">
                                </div>
                                <img class="main-pro-image" src="/assets/products/ps4pro.png">
                                <div class="product-details">
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i><br>
                                    <h3 class="product-title">PS4 Pro Edition</h3>
                                    <p class="product-in">In Stock</p>
                                    <p class="product-cost">Rs.450/- <span>Per Day</span></p>
                                    <p class="product-mrp"><span>Rs.500/-</span> (-10%)</p>
                                </div>
                                <div class="cartschedulesection">
                                    <img class="cartback" src="/assets/icons/circle.png">
                                    <img class="scheduleback" src="/assets/icons/circle.png">
                                    
                                    <img class="cart" src="/assets/icons/whatsapp.png" alt="">
                                    <img class="schedule" src="/assets/icons/schedule.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="owlimg">
                            <div class="owlback">
                                 <div class="wishlist">
                                    <img class="heart" src="/assets/icons/wishlist.png" alt="">
                                    <img class="wishlistback" src="/assets/icons/circle.png">
                                </div>
                                <img class="main-pro-image" src="/assets/products/ps4slim.png">
                                <div class="product-details">
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i><br>
                                    <h3 class="product-title">PS4 Slim Edition</h3>
                                    <p class="product-in">In Stock</p>
                                    <p class="product-cost">Rs.350/- <span>Per Day</span></p>
                                    <p class="product-mrp"><span>Rs.400/-</span> (-10%)</p>
                                </div>
                                 <div class="cartschedulesection">
                                    <img class="cartback" src="/assets/icons/circle.png">
                                    <img class="scheduleback" src="/assets/icons/circle.png">
                                    
                                    <img class="cart" src="/assets/icons/whatsapp.png" alt="">
                                    <img class="schedule" src="/assets/icons/schedule.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 third-pro-mb">
                        <div class="owlimg">
                            <div class="owlback">
                                 <div class="wishlist">
                                    <img class="heart" src="/assets/icons/wishlist.png" alt="">
                                    <img class="wishlistback" src="/assets/icons/circle.png">
                                </div>
                                <img class="main-pro-image" src="/assets/products/controller.png">
                                <div class="product-details">
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i><br>
                                    <h3 class="product-title">PS4 Controllers V2</h3>
                                    <p class="product-in">In Stock</p>
                                    <p class="product-cost">Rs.100/- <span>Per Day</span></p>
                                    <p class="product-mrp"><span>Rs.200/-</span> (-10%)</p>
                                </div>
                                 <div class="cartschedulesection">
                                    <img class="cartback" src="/assets/icons/circle.png">
                                    <img class="scheduleback" src="/assets/icons/circle.png">
                                    
                                    <img class="cart" src="/assets/icons/whatsapp.png" alt="">
                                    <img class="schedule" src="/assets/icons/schedule.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 third-pro-mb">
                            <div class="owlimg">
                            <div class="owlback">
                                 <div class="wishlist">
                                    <img class="heart" src="/assets/icons/wishlist.png" alt="">
                                    <img class="wishlistback" src="/assets/icons/circle.png">
                                </div>
                                <img class="main-pro-image" src="/assets/products/carrom.png">
                                <div class="product-details">
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i><br>
                                    <h3 class="product-title">Champion Board</h3>
                                    <p class="product-in">In Stock</p>
                                    <p class="product-cost">Rs.700/- <span>Per Week</span></p>
                                    <p class="product-mrp"><span>Rs.900/-</span> (-10%)</p>
                                </div>
                                 <div class="cartschedulesection">
                                    <img class="cartback" src="/assets/icons/circle.png">
                                    <img class="scheduleback" src="/assets/icons/circle.png">
                                    
                                    <img class="cart" src="/assets/icons/whatsapp.png" alt="">
                                    <img class="schedule" src="/assets/icons/schedule.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-3">
                        <div class="owlimg">
                            <div class="owlback">
                                <img src="/assets/products/tt.png">
                                <div class="product-details">
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i>
                                        <i class="fa fa-star color-yellow-dark"></i><br>
                                    <h3 class="product-title">Table Tennis</h3>
                                    <p class="product-in">In Stock</p>
                                    <p class="product-cost">Rs.2000/- <span>Per Month</span></p>
                                    <p class="product-mrp"><span>Rs.2500/-</span> (-10%)</p>
                                </div>
                            </div>
                        </div>
                    </div> -->
            </div>
            <div class="row mx-3 offer-section">
                    <div class="col offers-back">
                        <div class="offer1 p4" :style="offer1">
                            <h4>Great Deals on PS4</h4>
                            <h5>Call / Whatsapp - 8898661031 / 81698036866</h5>
                            <a href="" class="phone">
                                <img src="/assets/icons/phone.png" alt="">
                            </a>
                            <a href="" class="whatsapp">
                                <img src="/assets/icons/whatsapp.png" alt="">
                            </a>
                        </div>
                    </div>
                     <div class="col offers-back">
                         <div class="offer1 p4" :style="offer1">
                            <h4>Great Deals on PS4</h4>
                            <h5>Call Now / whatsapp - 8898661031 / 81698036866</h5>
                            <a href="" class="phone">
                                <img src="/assets/icons/phone.png" alt="">
                            </a>
                            <a href="" class="whatsapp">
                                <img src="/assets/icons/whatsapp.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
    </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue'
import Footer from './layouts/Footer.vue'
import BottomNavigation from './layouts/BottomNavigation.vue'
export default {
    
    data(){
        return{
            // sliding: null,
            categoryNeo:['category-neo', 'mt-md-3', 'mt-sm-2', 'mt-2'],
            offer1:{
                 backgroundImage: `url('/assets/banners/offer1.jpg')`
             },
        }
    },
    components: {
        Navbar,
        Footer,
        BottomNavigation
    },
    methods:{
        
    },
}
</script>
<style>
.carousel-neo{
    padding: 1rem 0;
    margin-left: 2rem;
    margin-right: 2rem;
    background: #EEF2F1;
    border-radius: 15px;
    box-shadow: -4px -4px 7px 0px rgb(255 255 255), 4px 4px 7px 0px rgb(0 0 0 / 25%);
}
.home-carousel-inner{
    border-radius: 20px;
}
.carousel-control-prev,
.carousel-control-next{
    width:45px;
    height: 45px;
    background: #eef2f1;
    border-radius: 50%;
    top: calc(50% - 25px);
    opacity: 1;
    box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.25);
}
.carousel-control-prev{
    left: -2rem;
}
.carousel-control-prev:hover{
    background: #eef2f1;
    opacity: 1;
}
.carousel-control-next{
    right: -2rem;
}
.carousel-control-next:hover{
    background: #eef2f1;
    opacity: 1;
}
.carousel-control-prev img{
    width: 2rem;
    margin-top: 7px;
    margin-left: -4px;
}
.carousel-control-prev img:hover{
    width: 1.8rem;
}
.carousel-control-next img{
    width: 2rem;
    margin-top: 7px;
    margin-right: -4px;
}
.carousel-control-next img:hover{
    width: 1.8rem;
}

.category-neo{
    padding: 0.5rem;
    background: #eef2f1;
    border-radius: 13px;
    box-shadow: -4px -4px 7px 0px rgb(255 255 255), 4px 4px 7px 0px rgb(0 0 0 / 25%);
}

.category-section .section1{
    position: relative;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.category-section .section-back1{
    background: #E44D26;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F16529, #E44D26);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F16529, #E44D26); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.category-section .section-back2{
    background: #bc4e9c;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f80759, #bc4e9c);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f80759, #bc4e9c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.category-section .section-back3{
    background: #005C97;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.category-section .section-back4{
    background: #fc00ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #00dbde, #fc00ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.category-section .section-back6{
    background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.category-section .section-back5{
    background: #bc4e9c;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #f80759, #bc4e9c);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f80759, #bc4e9c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.category-section .section-text{
    font-size: 2rem;
    top: 0.7rem;
    position: absolute;
    left: 8.5rem;
    color: white;
    font-weight: 700;
}
.category-section .section-minitext{
    position: absolute;
    top: 3.7rem;
    left: 8.5rem;
    color: white;
}
/* .section-back3, .section-back4, .section-back5, .section-back6{
    margin-top:0.5rem;
} */
.title-text{
    font-size: 22px;
    line-height: 24px;
    font-weight: 700;
    color: black;
    margin-bottom: 1rem;
    margin-top: -8px;
}
.bodyback{
    background-color: #EEF2F1 !important;
}

/* Product Details */
.product-details{
    margin-top: -10px;
    margin-left: 1.5rem;
    text-align: left;
}
.product-title{
    font-size: 17px;
    font-weight: 700;
    color: #0e81c3;
}
.product-in{
    color: green;
    font-weight: 600;
    font-size: 14px;
    line-height: 0.4;
}
.product-cost{
    font-weight: 700;
    font-size: 16px;
    color: #eb3349;
    line-height: 10px;
}
.product-cost span{
    font-size: 15px;
}
.product-mrp{
    margin-top: -22px;
    font-size: 11px;
    color:gray;
}
.product-mrp span{
    color:gray;
    font-size: 12px;
    line-height: 40px;
    text-decoration: line-through;
}

/* Offers Section */
.offer-section{
    margin-bottom: 3rem;
}
.offer1, .offer2{
    height: 35vh;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
.offer1 h4, .offer2 h4{
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    font-weight: 700;
    color: white;
}
.offer1 h5, .offer2 h5{
    position: absolute;
    top: 5rem;
    font-size: 17px;
    color: white;
    left: 18px;
    font-weight: 600;
}
.offer1 .phone, .offer2 .phone{
    height: 40px;
    width: 40px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    bottom: 19px;
    left: 1rem;
}
.offer1 .phone i, .offer2 .phone i{
    font-size: 24px;
    margin-left: 10px;
    margin-top: 9px;
    color: #000;
}
.offer1 .whatsapp, .offer2 .whatsapp{
    height: 40px;
    width: 40px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    bottom: 19px;
    left: 4rem;
}
.offer1 .whatsapp i, .offer2 .whatsapp i{
    font-size: 24px;
    margin-left: 0.6rem;
    margin-top: 7px;
    color: #000;
}
.offer1 .whatsapp img{
    position: absolute;
    top: 4px;
    left: 4px;
}
.offer1 .phone img{
    position: absolute;
    top: 8px;
    width: 30px;
    left: 5px;
}
.offers-back{
    padding: 0.8rem;
    background: #eef2f1;
    border-radius: 13px;
    box-shadow: -4px -4px 7px 0px rgb(255 255 255), 4px 4px 7px 0px rgb(0 0 0 / 25%);
    margin-top: 14px;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
}
/* Owl Carousel */

.owl-stage{
    padding-left:0 !important;
}
.owlback{
    background: white;
    border-radius: 29px;
    box-shadow: 8px 6px 1px 0px rgb(208 208 208), 4px 4px 7px 0px rgb(255 255 255 / 0%);
    border: 1px solid #d0d0d08f;
}

.owlcarousel .owlback .main-pro-image{
    padding: 1rem;
}
.color-yellow-dark{
    color: #f6bb42!important;
}
.owlimg{
    padding: 1rem;
}
.owlcarousel{
    margin-left: 3rem;
    margin-right: 3rem;
}
.wishlist{
    position: relative;
}
.wishlist .heart{
    position: absolute;
    top: 16px;
    right: 15px;
    z-index: 1;
}
.wishlist .wishlistback{
    position: absolute;
    top: 5px;
    right: 5px;
}
.cartschedulesection{
    position: relative;
}
.cartschedulesection .cartback{
    position: absolute;
    right: 4px;
    bottom: 5rem;
    width: 3.5rem;
}
.cartschedulesection .scheduleback{
    position: absolute;
    right: 4px;
    bottom: 1.5rem;
    width: 3.5rem;
}
.cartschedulesection .cart{
    position: absolute;
    right: 14px;
    bottom: 87px;
}
.cartschedulesection .schedule{
    position: absolute;
    right: 15px;
    bottom: 31px;
}

/* Sidebar CSS */


/* Mobile View Start */
@media only screen and (max-width: 600px) {
    .carousel-neo{
        padding: 6px 0;
        border-radius: 10px;
    }
    .home-carousel-inner{
        border-radius: 10px;
    }
    .carousel-control-next img, .carousel-control-prev img{
        width: 1.5rem;
        margin-top: 3px;
    }
    .carousel-control-next{
        right: -21px;
    }
    .carousel-control-prev{
        left: -21px;
    }
    
    /* categories */
    .category-neo{
        border-radius: 10px;
        padding:4px;
    }

    .carousel-control-prev, .carousel-control-next{
        width: 35px;
        height: 35px;
    }
    .section1 img{
        width: 2rem;
    }
    .category-section .section-text {
        font-size: 12px;
        top: 8px;
        left: 56px;
    }
    
    /* Product Section */
    .owlback{
        border-radius: 10px;
        box-shadow: 5px 5px 1px 0px rgb(208 208 208), 4px 4px 7px 0px rgb(255 255 255); 
    }
    .owlimg{
        padding: 0;
    }
    .owlcarousel{
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .third-pro-mb{
        margin-top: 1rem;
    }
    .owlback{
        box-shadow: 0px 0 16px 0px #b3b1b14d;
    }
    .owlcarousel .owlback .main-pro-image{
        width: 8rem;
    }
    .product-title{
        font-size: 11px;
    }
    .product-in{
        font-size: 10px;
    }
    .product-cost{
        font-size: 10px;
        line-height: 0;
    }
    .product-cost span{
        font-size: 10px;
    }
    .product-mrp{
        font-size:7px;
        margin-bottom: 0;
    }
    .product-mrp span{
        font-size: 9px;
    }
    .color-yellow-dark{
        font-size: 11px;
    }
    .product-details{
        padding-left: 0;
    }
    .wishlist .wishlistback{
        width: 33px;
    }
    .wishlist .heart{
        width: 18px;
        top: 14px;
        right: 12px;
    }
    .cartschedulesection .cart{
        width: 18px;
        bottom: 37px;
        right: 11px;
    }
    .cartschedulesection .cartback{
        width: 33px;
        bottom: 32px;       
    }
    .cartschedulesection .schedule{
        width: 18px;
        bottom: 9px;
        right: 11px;
    }
    .cartschedulesection .scheduleback{
        width: 33px;
        bottom: 3px;
    }

    /* Offers Section */
    .offers-back{
        padding: 7px;
        border-radius: 10px;
    }
    .offer1 h4, .offer2 h4{
        top: 1.5rem;
        font-size: 14px;
    }
    .offer1 h5, .offer2 h5{
        top: 4rem;
        font-size: 11px;
    }
    .offer1, .offer2{
        height: 21vh;
    }
    .offer1 .phone img{
        top: 6px;
        width: 22px;
        left: 4px;
    }
    .offer1 .phone, .offer2 .phone{
        height: 30px;
        width: 30px;
    }
    .offer1 .whatsapp, .offer2 .whatsapp{
        height: 30px;
        width: 30px;
        left: 3.5rem;
    }
    .offer1 .whatsapp img{
        width: 22px;
        left: 5px;
    }
    .footer-logo-section{
        width: 100%;
    }
    .footer-link2{
        width: 47%;
    }
    .footer-link{
        margin-right: 4%;
        width: 47%;
    }
    .links-1 a{
        font-size: 13px;
    }
    .footer-link1 h4, .footer-link2 h4, .footer-link3 h4{
        font-size: 18px;
    }
    .footer-link h4, .footer-link2 h4, .footer-link3 h4{
        font-size: 18px;
    }
    .footer-backneo{
        padding: 8px;
    }
    .footer-second-section{
        margin-top: -5rem;
    }
    .footer-stay{
        height: 13.5rem;
        width: 19.8rem;
        margin-top: 6rem;
    }
    .footer-contact-details{
        width: 19.8rem;
        margin-left: -12px;
    }
    .footer-second2{
        margin-top: -5rem;
    }
    .footer-contact-details{
        width: 19.8rem;
        margin-left: -12px;
    }
    .email-footer i{
        left: 3px;
        top: 4px;
        font-size: 18px;
    }
    .email-footer p{
        left: 31px;
        top: 6px;
        font-size: 10px;
    }
    .contact-footer i{
        top: 4px;
        left: 11.5rem;
        font-size: 21px;
    }
    .contact-footer .number{
        left: 13rem;
        top: 1px;
    }
    .contact-footer p{
        font-size: 11px;
    }
    .address-footer i{
        left: 44px;
        top: 32px;
        font-size: 20px;
    }
    .address-footer p{
        left: 4rem;
        top: 37px;
        font-size: 9px;
    }
    .stay-email{
        padding-left: 3rem;
        width: 12rem;
    }
    .subscribe-btn{
        font-size: 12px;
        height: 40px;
        width: 5rem;
    }
    .copyright p{
        font-size: 10px;
    }
    .subscribe-form .fa{
        left: 2rem;
    }
    .footer{
        height: 97vh;
    }
    .footer-second-section p{
        font-size: 13px;
    }
}
</style>