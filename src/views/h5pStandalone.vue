<template>
    <ion-content scrollX="true" scrollY="true">
    <div id="h5p-container"></div>
   </ion-content>

</template>

<script>
 import { H5P } from 'h5p-standalone';
 import { IonContent } from '@ionic/vue';
 import { useRoute } from "vue-router";

 export default{
    name: 'h5pStandalone',
    components: {
      IonContent, 
    },
    
    
 

 mounted(){
    const route = useRoute();
    const publicpath = route.query.path
    console.log(publicpath);
    const el = document.getElementById('h5p-container');
    const options = {
    h5pJsonPath: '../workspace/'+ publicpath,
    frameJs: '../dist/frame.bundle.js',
    frameCss: '../dist/styles/h5p.css',
    fullscreen: true, //enable fullscreen button
            frame: true, 
            copyright: true,
            icon: true,
};

new H5P(el, options);

 },

};
</script>

<style scoped>
#h5p-container{
max-width: 100%;
}  
</style>