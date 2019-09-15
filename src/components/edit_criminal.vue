<template>

 <div class="form">
    <!-- <p>{{admin_obj}}</p> -->
   
     
      <div class="row">
      <div class="col">
      <div class="img-center">
      <img  :src="tempCriminal[counter].img"
      style="width:200px;height:150px" />
        </div>
        </div>
      <!-- <div class="relative-center"> -->
         <div class="col">
     <!--  <q-card-section>
      <div class="text-subtitle2 text-white">FULL NAME: {{criminals.name}}</div><br><br>
        <div class="text-subtitle2 text-white">EMPLOYEE ID: {{criminals.criminalid}}</div><br><br>
        <div class="text-subtitle2 text-white">POST: {{criminals.crime}}</div><br><br>
        <div class="text-subtitle2 text-white">ADDRESS: {{criminals.dateOfArrest}}</div>
      </q-card-section> -->
       
       <q-form>
      <q-input
        filled
        bg-color="red"
        v-model="name"
        style="max-width:200px "
        label="USERNAME "
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

      <q-input
        filled
        bg-color="red"
        v-model="id"
          style="max-width:200px "
        label="Criminal Id"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
       <q-input
        filled
        bg-color="red"
        v-model="crime"
          style="max-width:200px "
        label="Crime Commited"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
       <q-input
        filled
        bg-color="red"
        v-model="punish"
          style="max-width:200px "
        label="Punishment (in years)"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
     
      
      <q-btn label="Submit" type="submit" color="primary" @click="updated"/>
       </q-form>
   
      </div>
    </div>
     

      
   
   </div>


</template>
<script>
import { date } from 'quasar'
export default {

    props:['criminal_id'],
    data(){
        return {
            
            criminals:{},
            tempCriminal:this.$store.state.criminal,
            name:'',
            id:0,
            counter:0,
            dateOfArrest:'',
            crime:'',
            punish:0,
            release:'',
            day:0,
            year:'',
            month:0,
            date:'',
        }
    },
mounted(){
    var getCriminals;

        for(getCriminals of this.tempCriminal)
        {
             
            if(getCriminals.crimeid==this.criminal_id){
                this.criminals=getCriminals;
                break;
            }
           this.counter++;
        }
        
        this.name=this.criminals.name;
          this.id=this.criminals.crimeid;
           this.crime=this.criminals.crime;
            this.punish=this.criminals.punish;
         this.dateOfArrest=this.criminals.dateOfArrest;

  },
    methods:{
        updated(){
            console.log(this.counter);
            
            this.tempCriminal[this.counter].name=this.name;
            this.tempCriminal[this.counter].crimeid=this.id;
            this.tempCriminal[this.counter].punish=this.punish;
            this.tempCriminal[this.counter].dateOfArrest=this.date;
             this.tempCriminal[this.counter].crime=this.crime;
            this.$store.commit('editCriminal',this.tempCriminal,this.counter);
            alert("Criminal Database updated");
            this.$router.go(-1);
        },
        getDat(){    
         this.year=this.dateOfArrest.getFullYear();
         this.month=this.dateOfArrest.getMonth()+1;
         this.day=this.dateOfArrest.getDate();
         if(this.month>9)
            this.date=this.year+'/'+this.month+'/'+this.day;
            else
            this.date=this.year+'/0'+this.month+'/'+this.day;
     console.log(this.date);
     
     }
    }
}
</script>
<style>
.form{
    position:relative;
    left:20px;
    bottom:100px
}
.img-center{
     position:relative;
    left:380px;
}
</style>