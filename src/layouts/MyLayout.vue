<template>

    
     <div class="img">
  <q-layout view="hHh lpR fFf">
      <!--  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
 -->
    
      <!-- <h1 class="text-white">Basic</h1> -->
    <!-- </q-parallax> -->

   <!--  </div>
  </div> -->
    
  <!-- <div class="q-pa-md q-gutter-md">
    <div class="row justify-between"> -->

   
      
    

      
    
   
            
    

      
         <q-avatar size="250px">
            <img src="assets/1200px-Patch_of_the_New_York_City_Police_Department.svg.png" width="200" height="220">
         </q-avatar>
         
       
    
   <!-- </div>
  </div> -->

    
<!-- 
 <div class="absolute-bottom">
     
    <q-parallax
    class="transparent"
      src="assets/106534.jpg"
     :height="600"
    >
    </q-parallax>

  
 </div> -->

    <q-page-container>
      <router-view />
    </q-page-container>
    
 </q-layout>
 </div>
  
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.img{
  position:relative;
   background-size:100% 100%;
background-image: url("106534.jpg") ;
  background-size: cover;
 
}
</style>