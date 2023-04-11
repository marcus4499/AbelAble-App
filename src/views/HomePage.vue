<template>
  <ion-page>
    <div class="main-container"> 
      <div class="header">
        <div>
          <ion-img  class="image" src="../../assets/image1.png"></ion-img>
        </div> 
      </div>

      <div class="title">
            <ion-img  class="logo1" src="../../assets/logo.png"></ion-img>
      </div> 
      
      <div>
        <p>Welcome to AbelAble. Be Part of the solution and contribute in the preservation of our culture.</p>
        <p style="padding:5px; font-size: 20px; color: #000; margin: 0;">Enjoy Learning</p>
      </div>
  </div> 

    <div  class="footer">
        <div  class="grid-item">
          <ion-icon @click="navigateAbout()"  class="clickbtn" src="../../assets/svg/people.svg"></ion-icon>
          <p  @click="navigateAbout()" class="tags">About</p>
        </div>
        
        <div class="grid-item">
          <ion-icon @click="navigateHome()" class="clickbtn"  src="../../assets/svg/home.svg"></ion-icon>
          <p  @click="navigateHome()" class="tags">Home</p>
        </div>

        <div class="grid-item">
          <ion-icon @click="navigateModules()" class="clickbtn" src="../../assets/svg/grid.svg"></ion-icon>
          <p  @click="navigateModules()" class="tags">Modules</p>
        </div>
    </div>

  </ion-page>
</template>

<script lang=ts>
import {IonImg, IonIcon,IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({ 
  name: 'HomePage',
  components: {
    IonImg,
    IonIcon,
    IonPage
  },
  setup() {
      const router = useRouter();

      const navigateAbout = () => {
      router.push('/about');
    };
    const navigateHome = () => {
      router.push('/content');

    }; const navigateModules = () => {
      router.push('/modules');
    };

      return {
        navigateAbout, navigateHome, navigateModules
      };
    },
    
    
 
  
});

</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


.main-container {
  text-align: center;
  position: fixed;
  width: 100%;
  height: 90%;
  z-index: 0;
  
}
.header{
  left: 0;
  right: 0;
}


.title{
  top: 20%;
}
.title .logo1{
  width: 90%;
  margin-top:10px;
  margin-left: auto;
  margin-right: auto;
}

.main-container p{
  margin: 25px;
  padding: 10px;
  color: black;
  position: relative;
  text-align: center;
  font-size:19px;

}
.footer{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  background-color: #03254C;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
  justify-items: center;
}
.grid-item{
  padding-top: 0px;
  text-align: center;
}

.tags{
  font-size: 12px;
}
.clickbtn{
 width: 25px;
 height: 25px; 
}


</style>
