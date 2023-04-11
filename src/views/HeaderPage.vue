<template>
        <div v-if="showHeader" class="header">
            <h2>AbelAble</h2>
            <div ><ion-icon   class="iconmenu"  src="../../assets/svg/menu-outline.svg"></ion-icon>
            </div>
            <div @click="goBack()"><ion-icon  class="iconback" src="../../assets/svg/arrow-back-outline.svg"></ion-icon></div>
        </div>
</template>


<script lang="ts">
import {IonIcon } from '@ionic/vue';
import {useIonRouter} from '@ionic/vue';

export default {
  name: 'HeaderPage',
    components: {
        IonIcon,
    },
     setup() {
      const router = useIonRouter();
      
      const goBack = () => {
        router.back();
      }
      return{
        goBack
      }
    },
    data() {
    return {
     showHeader: true
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
        position: relative;
        color: #03254C;
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


</style>
