<template>

    
     

      <!--  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
 -->
    
      <!-- <h1 class="text-white">Basic</h1> -->
    <!-- </q-parallax> -->

   <!--  </div>
  </div> -->
    
  <!-- <div class="q-pa-md q-gutter-md">
    <div class="row justify-between"> -->

   
      
    <div class="img">
 
    <q-layout view="hHh Lpr lff"  class="shadow-2 rounded-borders ">
        
    <q-header  class=" text-white transparent">
     
      <q-toolbar>
        <q-toolbar-title>
            
         
    
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
         
         <q-avatar size="200px" >
            <img src="assets/1200px-Patch_of_the_New_York_City_Police_Department.svg.png" width="200" height="220">
         </q-avatar>

      
        <!--  <q-avatar size="60px">
            <img src="assets/1200px-Patch_of_the_New_York_City_Police_Department.svg.png" width="100" height="20">
         </q-avatar> -->
         
        </q-toolbar-title>
     
      </q-toolbar>

      <!-- <q-tabs align="center">
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/page2" label="Guest" />
        <q-route-tab to="/page3" label="About" />
      </q-tabs>
       -->
        <!-- <q-btn size="40px" flat @click="drawer = !drawer" round dense icon="arrow_forward" /> -->
       
     <q-drawer

        v-model="drawer"

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="340"
        :breakpoint="500"
        show-if-above
        bordered
         content-class="bg-indigo-10" 
      >
      
          
            <q-item clickable v-ripple @click="edit" >
              <q-item-section avatar>
                <q-icon name="edit" />
              </q-item-section>

              <q-item-section>
                Change Username/Password
              </q-item-section>
            </q-item>
<q-item clickable v-ripple @click="addCriminal">
              <q-item-section avatar>
                <q-icon name="add" />
              </q-item-section>

              <q-item-section>
               Add Criminal
              </q-item-section>
            </q-item>
           
            <q-item clickable v-ripple @click="searchCriminal">
              <q-item-section avatar>
                <q-icon name="search" />
              </q-item-section>

              <q-item-section>
                Search Criminal
              </q-item-section>
            </q-item>

            <!-- <q-separator /> -->

            <q-item clickable v-ripple @click="logOut">
              <q-item-section avatar>
                <q-icon name="power_settings_new" />
              </q-item-section>

              <q-item-section>
               Log Out
              </q-item-section>
            </q-item>
         
            
        
      </q-drawer>
      
  
    </q-header>
   
   <!-- </div>
  </div> -->

    

<!--  <div class="fixed-bottom ">
     
    <q-parallax
   
      src="assets/106534.jpg"
     :height="700"
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
      drawer: true,
      miniState: true,
      
      
    }
  },
 
  methods:{
   edit(){
     this.$router.push('edit_profile');
   },
   
   addCriminal(){
      this.$router.push('add_criminal');
    },
     searchCriminal(){
      this.$router.push('search_criminal');
    },
     logOut(){
      this.$router.push('login');
    },

  }
}
</script>
<style>
.img{
  
background-image: url("106534.jpg");
background-size:cover;

}
</style>
