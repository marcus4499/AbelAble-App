<template>
     <div v-if="showComponent"  class="footer" >
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

</template>



<script lang=ts>
import {IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';


export default {
    components: {
        IonIcon,
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
    data() {
    return {
      showComponent: true
    }
  }
}


</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.footer{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  background-color: #03254C;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  justify-items: center;
  text-align: center;
}
.tags{
    font-size: 12px;
}
.clickbtn{
    margin-top:10px;
    width: 25px;
    height: 25px; 
}
</style>