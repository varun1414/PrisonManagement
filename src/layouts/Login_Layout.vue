<template>

    
     
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

   
      
    

      
    
    <q-header  class="bg-transparent text-white">
   
      <q-toolbar>
        <q-toolbar-title>
            
    

      
         <q-avatar size="140px">
            <img src="assets/1200px-Patch_of_the_New_York_City_Police_Department.svg.png" width="200" height="220">
         </q-avatar>
         
        </q-toolbar-title>
      </q-toolbar>
      

      <q-tabs align="fixed-bottom" class="text-blue-10 text-bold">
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/guest" label="Guest" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
     
    </q-header>
    
   <!-- </div>
  </div> -->

    

 <div class="absolute-bottom">
     
    <q-parallax
    
      src="assets/106534.jpg"
     :height="700"
    >
    </q-parallax>

  
 </div>
    <q-page-container>
      <router-view />
    </q-page-container>
     
 </q-layout>
 
  
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
