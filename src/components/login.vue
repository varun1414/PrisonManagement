<template>

<div class="absolute-center">
   
<q-form>
   
      <br><br>
      <q-input
        filled
        standout="bg-teal text-white text-h5" 
      
        bg-color="blue"
        
        v-model="userName"
        label="USERNAME"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <br><br>
      <q-input
        filled
        standout="bg-teal text-white text-h5" 
        
        bg-color="blue"
        type='password'
        v-model="password"
        label="PASSWORD"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <br>
     <q-btn label="Login" type="submit" color="primary" @click="validate"/>
       
      
       
    
    
     </q-form>
      
 <q-circular-progress
      v-if="Circle==true"
      :value="value"
      indeterminate
      size="50px"
      color="lime"
      class="q-ma-md"
        />
    


</div>
</template>
<script>

export default{
data(){
    return{
        userName:'',
        password:'',
        value:2,
        
        Circle:false,
         admin_data:this.$store.getters.getAdmin
    }
},
methods:{
    validate(){
         var temp_data={};
         var count=0;
          this.$store.state.count=0;
          this.$store.commit('clearCurrent');
         for(temp_data of this.admin_data)
        {
            if(temp_data.userName == this.userName && temp_data.password == this.password)
                {
                    this.Circle=true;
                    this.$router.push({name:'Edit_details', params:{admin_obj:temp_data}});
                count=1;
                break;
                }
        
        this.$store.commit('increment');
        } 
        if(count==0)
        {
         if(this.userName!=this.admin_data.userName)
        {
            this.Circle=false;
            alert("ENTER VALID USERNAME/PASSWORD");
        }
        else 
        {
            this.Circle=false;
        alert("ENTER VALID PASSWORD");
        }
    }
    }
}
}
</script>