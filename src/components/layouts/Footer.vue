<template>
    <div class="footer">
        <div class="row mx-3">
            <div class="col-md-3 text-center footer-logo-section">
                <img class="footer-logo" src="/assets/footer-logo.png" alt="">
            </div>
            <div class="col-md-2 footer-link footer-backneo">
                <h4>Menu Links</h4>
                <div class="links-1">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Contact</a>
                    <a href="">About</a>
                </div>
            </div>
             <div class="col-md-3 footer-link2 footer-backneo">
                <h4>Useful Links</h4>
                 <div class="links-1">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Subscription Policy</a>
                </div>
            </div>
            <div class="col-md-4 footer-link3">
                <div class="footer-backneo footer-stay">
                    <h4>Stay Connected</h4>
                    <form action="">
                        <div class="subscribe-form">
                            <input class="stay-email" type="text" placeholder="Enter Your Email">
                            <i class="fa fa-envelope"></i>
                            <button class="btn subscribe-btn">Subscribe</button>
                        </div>
                    </form>
                    <div class="footer-social">
                        <div class="social-circle">
                            <img src="assets/icons/social-wa.png" alt="">
                        </div>
                         <div class="social-circle">
                            <img src="assets/icons/social-fb.png" alt="">
                        </div>
                         <div class="social-circle">
                            <img src="assets/icons/social-in.png" alt="">
                        </div>
                         <div class="social-circle">
                            <img src="assets/icons/social-yt.png" alt="">
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright © {{new Date().getFullYear()}} Rentatainment. All Rights Reserved.</p>
                    </div>
                </div>
                
                <!-- <h5>Location</h5>
                <p>New Panvel :</p>
                <p>Khanda Colony :</p> -->
            </div>
            <div class="col-md-3 footer-second-section">
                   <div class="footer-backneo text-center">
                        <p class="mb-0 fw-bold">Rentatainment is a firm who provides products on rent in Mumbai</p>
                    </div>
            </div>
            <div class="col-md-5 footer-second2">
                <div class="footer-backneo footer-contact-details text-center">
                    <div class="email-footer">
                        <i class="fa fa-envelope-o"></i>
                        <p>rentatainment16@gmail.com</p>
                    </div>
                    <div class="contact-footer">
                        <i class="fa fa-phone"></i>
                        <div class="number">
                            <p>+91 8898661031</p>
                            <p>+91 8169803686</p>
                        </div>
                    </div>
                    <div class="address-footer">
                        <i class="fa fa-map-marker"></i>
                        <p>Passion Gaming Zone, New Panvel - 410206</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{

        }
    }
}
</script>

<style>
.footer{
    margin-bottom: 1.5rem;
}
.footer-logo-section{
    width: 27%;
}
.footer-logo{
    width: 78%;
}
.footer-backneo{
    padding: 0.8rem;
    background: #eef2f1;
    border-radius: 13px;
    box-shadow: -4px -4px 7px 0px rgb(255 255 255), 4px 4px 7px 0px rgb(0 0 0 / 25%);
    margin-top: 14px;
    margin-bottom:5rem;
}
.footer-link{
    margin-right: 3%;
    width: 15%;
}
.footer-link2{
    margin-right: 2%;
    width: 19%;
}
.footer-link h4, .footer-link2 h4, .footer-link3 h4{
    font-weight: 600;
    margin-top: 8px;
    margin-left: 13px;
    color: #484c51e3;
    font-size: 21px;
}
.links-1{
    display: grid;
    margin-left: 13px;
    font-weight: 900;
}
.links-1 a{
    text-decoration: none;
    color: #5c5151cc;
    font-weight: 600;
}
.footer-link1 h4, .footer-link2 h4, .footer-link3 h4{
    font-weight: 700;
    font-size: 22px;
}
.footer-link1{
    margin-left: 60px;
}
.footer-social{
    display: inline-flex;
    cursor: pointer;
}
.footer-social a{
    height: 40px;
    width: 40px;
    background-color: #eb3349;
    border-radius: 50%;
    display: inline-block;
    margin-top: 0.5rem;
}
.footer-social a i{
    color: white;
    font-size: 24px;
    margin-left: 0.6rem;
    margin-top: 7px;
}
.footer-stay{
    position: absolute;
    height: 16rem;
    width: 26.5rem;
}
.footer-second-section{
    margin-top:-4.5rem
}
.footer-second-section p{
    font-size: 15px;
    color: #827e7e;
}
.footer-second2{
    margin-top:-4.5rem;
    width: 39%;
    margin-left: 12px;
}
.social-circle{
    position: relative;
    border-radius: 150px;
    background: #e0e0e0;
    width: 50px;
    height: 50px;
    margin-left: 13px;
    margin-top: 10px;
    box-shadow:  5px 5px 10px #c5c5c5,
             -5px -5px 10px #fbfbfb;
}
.social-circle img{
    position: absolute;
    top: 2px;
    left: 3px;
}
.stay-email{
    outline: none;
    padding-left: 4rem;
    font-weight: 600;
    border: 0;
    border-radius: 19px;
    height: 41px;
    width: 16rem;
    margin-left: 13px;
    background: #eef2f1;
    box-shadow: inset 6px 6px 4px #c1c1c1, inset -6px -6px 4px #ffffff;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.subscribe-btn{
    margin-left: 10px;
    border-radius: 16px;
    background: #eb3349;
    border: 0;
    color: white;
    height: 43px;
    font-weight: 700;
    width: 7rem;
    box-shadow: 3px 3px 8px #c3c3c3, -6px -6px 12px #fdfdfd;
}
.subscribe-form{
    position: relative;
}
.subscribe-form .fa{
    position: absolute;
    left: 2.5rem;
    font-size: 1.5rem;
    top: 15px;
    color: #9a9a9a85;
}
.stay-email::placeholder{  
    color: #9a9a9aaa;
}
.copyright p{
    font-weight: 600;
    font-size: 13px;
    margin-left: 13px;
    margin-top: 0.5rem;
    color: #827e7e;
}
.email-footer, .contact-footer, .address-footer{
    position: relative;
}
.email-footer i{
    position: absolute;
    left: 13px;
    top: -7px;
    font-size: 31px;
    color: #7b7474;
}
.email-footer p{
    position: absolute;
    left: 56px;
    top: -2px;
    font-size: 15px;
    font-weight: 600;
    color: #7b7474;
}
.contact-footer i{
    top: -4px;
    position: absolute;
    left: 18rem;
    font-size: 31px;
    color: #7b7474;
}
.contact-footer .number{
   position: absolute;
    left: 20rem;
    top: -7px;
}
.contact-footer p{ 
    font-size: 14px;
    font-weight: 600;
    margin-bottom: -6px;
    color: #7b7474;
}
.address-footer i{
    position: absolute;
    left: 4.5rem;
    top: 1.9rem;
    font-size: 25px;
    color: #7b7474;
}
.address-footer p{
    position: absolute;
    left: 6rem;
    top: 32px;
    font-size: 15px;
    font-weight: 600;
    color: #7b7474;
}
.footer-contact-details{
    height: 4.5rem;
}
</style>