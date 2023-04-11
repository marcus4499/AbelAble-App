<template>
     <ion-header>
                <header-page/>
     </ion-header>
    <ion-content scrollX="true" scrollY="true">
        <div class="content" >
              <h1> Introduction </h1>
                  <div v-for="(content, index) in introContents" :key="index">
                      <h4 class="title">{{ content.title }}</h4>
                      <ion-button class="clickctn" @click="content.show = !content.show">
                         {{ content.show ? 'Hide Lesson ':'Show Lesson '}}
                      </ion-button>
                    <div v-show="content.show">
                      <h5pContent h5pPath="$content.content"></h5pContent>
                    </div>
                  </div>        
        </div>
   </ion-content>    
</template>
<script>
import {IonButton,IonHeader,IonContent } from'@ionic/vue';
import HeaderPage from '@/views/HeaderPage.vue'
import h5pContent from '@/views/h5pContent.vue';
import H5P  from 'h5p-standalone';

export default{
  components:{
    HeaderPage,IonButton,IonHeader,IonContent, h5pContent
  },
  data(){
    return{
      introContents:[
        {
          id:'1',
          title: 'Lesson 1: Design Technique',
          content:'../workspace/Introduction/Lesson 1',
          show: true
        },
        {
          id:'2',
          title: 'Lesson 2: Parts of the Loom',
          content:'../workspace/Introduction/Lesson 2',
          show: false
        },
        {
          id:'3',
          title: 'Lesson 3: Preparation of the Loom',
          content:'../workspace/Introduction/Lesson 3',
          show: false
        }

    ]
    };
  },
  
  mounted() {
    H5P.externalDispatcher.on('resize', () => {
      H5P.jQuery('.h5p-h5p-content').each(function () {
        H5P.jQuery(this).height(H5P.jQuery(this.contentWindow.document).height());
      });
    });
  }
  

};

</script>


<style scoped>

*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
h1{
  color: #03254C;
  padding:12px;
  font-size: 25px;  
  top: 0;
  text-align: center;
  font-weight: 600;
}    

.content{
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}
.clickbtn{
  color: #fff;
  background-color: #03254C;
}
.title{
  font-family: 'Barlow Condensed', sans-serif;
  color: #03254C;
  padding: 10px;
}
    
   
</style>