<template >
<ion-page>
   <ion-header>
    <div >
          <header-page/>
    </div>
    </ion-header> 
        <ion-content>
            <h3>ABEL ILOCO</h3>
            <div  @click="onclickbtn(samplepath)" class="intro">
                <ion-img class="intro-cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                <h3 class="title">Introduction</h3>
            </div>
             <div @click="onclickbtn(kundiman)" class="content">
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Kundiman</h3>
                    <h4 class="subTitle">Old Design</h4>
                </div>
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Sinukitan</h3>
                    <h4 class="subTitle">Old Design</h4>
                </div>
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Burbur</h3>
                    <h4 class="subTitle">Old Design</h4>
                </div>
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Face to Face</h3>
                    <h4 class="subTitle">Old Design</h4>
                </div>       
            </div>   
        </ion-content>
        <div>
            <footer-page />
        </div>
     </ion-page>
    </template>
    
    
 <script lang=ts>
import {IonHeader, IonContent,IonImg,IonPage } from'@ionic/vue';
import {useIonRouter} from '@ionic/vue';
import FooterPage from '@/views/FooterPage.vue'
import HeaderPage from '@/views/HeaderPage.vue'

    
export default {
    components:{
        IonContent,
        IonImg,
        IonPage,
        IonHeader,
        FooterPage,
        HeaderPage
        },
        
    setup() {
      const router = useIonRouter();
      
      const samplepath = "sample";
      const kundiman = "kundiman";
      const onclickbtn = (e:any) => {
      router.push({path:"/h5p", query: {path:e}});
      }

      return {
        samplepath,
   
        onclickbtn,
        kundiman

      }
    },  
    };
    </script>
    
    <style scoped>    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .header{
        position: relative;
        color: (#03254C);
        background-color: #fff;
        box-shadow: 0 0px 5px 1px grey;
        height: 50px;
        
    }
    h2{
        font-size: 25px;  
        padding:12px;
        font-weight: 600;
        top: 0;
        text-align: center;
    }

    h3{
        color: #03254C;
        padding-top: 30px;
        text-align: center;
        font-size: 30px;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700;
    }
    .header .iconmenu{
        position: absolute;
        float: right;
        left: auto;
        right: 10px;
        width: 35px;
        height: 50px;
        top: 0;
    }

    .iconback{
        position: absolute;
        float: left;
        right: 0;
        left: 10px;
        width: 25px;
        height: 45px;
        top: 0;
    }
    .menu-items {
        position:inherit;
        color: #fff;
        font: 20px;
        padding:0px;
        top:0;
        left: 0;
        width:90%;
        height:100%;
        padding: 2rem;
        transform: translateX(0);
        transition: transform 0.4s ease-in-out;
    }

    .menu-items.show {
        position: relative;
        transform: translateY(auto);
    }
    
    
    .intro{
        width: 70%;
        margin: auto;
        background-color: #fff;
        box-shadow: 0 0px 2px 1px grey;
        border-bottom: 3px solid #03254C;
        border-radius:5px 5px;
        padding: 5px;
    }
    .intro h3{
        font-size: 20px;
    }
   
    .content{
        width: 75%;
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 48% 48%;
        column-gap: 5px;
        row-gap:5px;
        padding: 5px;
       
    
    }
    .card{
        background-color:#fff;
        box-shadow: 0 0px 2px 1px grey;
        border-bottom: 3px solid #03254C;
        border-radius:5px 5px;
        padding: 5px;
        margin: 5px;
    }  


    .title{
        text-align: left;
        font-size: 15px;
        font-weight: 500px;
        padding-top: 5px;
    }
    .subTitle{
        font-size: 10px ;
    }
    </style>    