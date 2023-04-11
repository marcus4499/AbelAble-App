<template >
<ion-page>
<ion-header>
    <div class="header">
        <h2>AbelAble</h2>
        <div ><ion-icon class="iconmenu" src="../../assets/svg/menu-outline.svg"></ion-icon></div>
        <div ><ion-icon @click="goBack()" class="iconback" src="../../assets/svg/arrow-back-outline.svg"></ion-icon></div>


    </div>
  </ion-header>
      <ion-content :scroll-events="true" >
           <h3>About Us</h3>
      
      <div class="grid">
        <div class="memberList">
                <ion-img class="imgMember"  src="../../assets/members/img_avatar.png"></ion-img>
                <h1>Prof. Wilben Christie R. Pagtaconan</h1>
                <h4>Research Adviser</h4>
               </div>  

              <div class="memberList">
                <ion-img class="imgMember" src="../../assets/members/Eloisa.jpg"></ion-img>
                <h1>Eloisa Marie Agustin</h1>
                <h4>Researcher</h4>

               </div> 
                <div class="memberList">
                <ion-img class="imgMember" src="../../assets/members/ashley.jpg"></ion-img>
                <h1>Ashley Magbaleta</h1>
                <h4>Researcher</h4>
               </div>

                <div class="memberList"> 
                <ion-img class="imgMember" src="../../assets/members/img_avatar.png"></ion-img>
                <h1>Cyrus Kim Galvan</h1>
                <h4>Researcher</h4>
               </div>

                <div class="memberList">
                <ion-img class="imgMember" src="../../assets/members/marc.jpg"></ion-img>
                <h1>Marc Vincent Maneja</h1>
                <h4>Researcher</h4>
              </div>                
        </div>
         <div class="content">
            <h3>The Project</h3>
            <p>The purpose of this project is to develop an interactive mobile learning kit about Iloco loom weaving entitled "AbelAble," which aims to document the traditional way of weaving and as well as educate both weavers and non-weavers. The mobile learning kit will provide learning modules about the step-by-step process of creating the Abel Iloco. 
            </p>
       </div>
     
  </ion-content>
</ion-page>  
</template>


<script lang=ts>
import {IonHeader, IonImg, IonIcon,IonContent, IonPage } from '@ionic/vue';
import {useIonRouter} from '@ionic/vue';

export default {
  components: {
    IonHeader, IonImg, IonIcon, IonContent, IonPage
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
  
     
};

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
    box-shadow: 10px  #000;
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
    padding-top: 15px;
    text-align: center;
    font-size: 30px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
}
h1{
  font-size: 19px;
  padding-top: 5px;
  padding-left: 0;
  padding-right: 0;
}
h4{
  font-size: 15px;
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


.content{
  font-size: 15px;
  width: 90%;
  height: auto;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  text-align: justify;
  padding: 12px 8px;
  border-top: 2px solid #000;
}

.grid{
  display: flexbox;
  width: 65%; 
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
 
}
.memberList{
  border-radius: 10px 10px;
  padding:20px;
  margin-top: 25px;
  background-color: #fff;
  border-bottom: 8px solid #03254C;
  text-align: center;
  box-shadow: 0 0px 5px 1px grey;
}
</style>    