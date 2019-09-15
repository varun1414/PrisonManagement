<template>
<!-- 
<div class="fixed-center text-white text-h2 ">
     
 <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card bg-red transparent">
         
      <q-card-section>
          
        Welcome {{temp.userName}}
      </q-card-section>
      
    </q-card> -->
    
    
   <div class=" q-pa-xl  fixed-center row items-start q-gutter-md  ">
    <!-- <p>{{admin_obj}}</p> -->
    <q-card class="my-card bg-red-10 " >
       <q-card-section>
        
        <div class="text-h1 text-primary text-bold text-italic">Welcome {{temp.userName}}</div>
        
      </q-card-section>
      <div class="row">
      <div class="col">
      <div class="float-right">
      <img  :src="temp.img"
      style="width:200px;height:150px" />
        </div>
        </div>
      <!-- <div class="relative-center"> -->
         <div class="col">
      <q-card-section>
      <div class="text-subtitle2 text-white">FULL NAME: {{temp.fullName}}</div><br><br>
        <div class="text-subtitle2 text-white">EMPLOYEE ID: {{temp.id}}</div><br><br>
        <div class="text-subtitle2 text-white">POST: {{temp.post}}</div><br><br>
        <div class="text-subtitle2 text-white">ADDRESS: {{temp.address}}</div>
      </q-card-section>
      </div>
    </div>
     

      
    </q-card>
   </div>
   
     
  
  

</template>
    <script>
        export default{
      props:['admin_obj'],
      data(){
        return{
           temp:{},
           current:this.$store.state.current
        }
      } ,
      mounted(){
        
        if(_.isEmpty(this.current))
        {
          this.current=null;

        this.temp=this.admin_obj;

       this.$store.commit('updateList',this.temp);
      }
      else
      this.temp=this.$store.state.current;

    }
  }
    </script>

        
        