<template >
  <ion-page>
    <ion-header>
    <div class="header">
        <h2>AbelAble</h2>
        <div ><ion-icon class="iconmenu" src="../../assets/svg/menu-outline.svg"></ion-icon></div>
        <div ><ion-icon @click="goBack()" class="iconback" src="../../assets/svg/arrow-back-outline.svg"></ion-icon></div>
    </div>
   </ion-header>
    <ion-content  >
      <h3>Modules</h3>
      <h4>OLD DESIGNS</h4>
      <div class="content">
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Face to Face</h3>
                </div>

                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Sinukitan</h3> 
                </div>

                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Kundiman</h3>  
                </div>

                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Borbor</h3>  
                </div>
        </div>
        
        <h4>NEW DESIGNS</h4>
      <div class="content">
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">X Pattern</h3>
                </div>

                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Mystika</h3> 
                </div>

                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Elegant</h3>  
                </div>

                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Flower</h3>  
                </div>
                <div class="card">
                    <ion-img class="cover"  src="../../assets/patterns/mistyka.jpg"></ion-img>
                    <h3 class="title">Otso Otso</h3>  
                </div>
        </div>   
     
    </ion-content>
 </ion-page>
</template>


<script lang=ts>
 import { IonContent,IonHeader,IonImg,IonIcon,IonPage } from '@ionic/vue';
 import { defineComponent } from 'vue';
 import {useIonRouter} from '@ionic/vue';

 export default defineComponent ({
  name: 'ModulesPage',
  components:{
    IonContent,IonHeader,IonPage,IonImg,IonIcon
  },
  setup() {
      const router = useIonRouter();
      
      const goBack = () => {
        router.back();
      }

      return {
        goBack
      }
 
    }
});

</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.header{
    color: #03254C;
    background-color: #fff;
    box-shadow: 10px  grey;
    height: 50px;
    
}
h2{
  padding:12px;
  font-size: 25px;  
  top: 0;
  font-weight: 600;
  text-align: center;
    }
h3{
  padding-top: 10px;
  color: #03254C;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  font-family: 'Barlow Condensed', sans-serif;
  
}
h4{
  font-size: 20px;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 0;
  color: #03254C;
  font-family: 'Barlow Condensed', sans-serif;
  padding: 0;
  text-align: center;
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
    float: left;
    position: absolute;
    left: 10px;
    right: 0;
    height: 45px;
    width: 25px;
    top: 0;
    }
.content{
    width: 80%;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 50% 50% ;
    row-gap:5px;
    column-gap: 8px;

    

}

.card{
    box-shadow: 0 0px 3px 1px grey;
    border-bottom: 3px solid #03254C;
    border-radius:5px 5px;
    padding: 5px;
    margin-bottom: 10px;
    background-color:#fff;
  }
  
  .title{
    font-size: 15px;
    text-align: left;
    font-weight: 500px;
  }
  .cover{
    width:100%;
  }


</style>    