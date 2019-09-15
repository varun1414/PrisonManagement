<template>

  <div class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
         
    <br><br>
    
      <q-form
    
      class="q-gutter-md"
    >
      <q-input
        filled
        bg-color="red"
        v-model="name"
        label="USERNAME "
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

      <q-input
        filled
        bg-color="red"
        v-model="password"
        label="password"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    
      
     
<!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
<div>
        <q-btn label="Submit" type="submit" color="primary" @click="updated"/>
        <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      </div>
     </q-form>
<!--      <div v-if=
      <li  v-for="us in getDat">{{us.userName}}</li>  --> 
   </div>
  
   </div>
     
</template>
<script>
export default{
    
    data()
    {
        return{
       counter:0,
       temp_obj:{},
      name:'',
      password:''
        }
    
    
    },

mounted() {
    this.counter = this.$store.state.count;
    console.log(this.counter);
    this.temp_obj=this.$store.state.admin[this.counter];
     this.name=this.temp_obj.userName;
        this.password=this.temp_obj.password;
 
    
    },
methods:{
    updated(){  
            this.temp_obj.userName=this.name;
            this.temp_obj.password=this.password;
             this.$store.commit('updateList',this.temp_obj);
             alert("Profile Updated"); 
              this.$router.go(-1);
        }
}
}
</script>