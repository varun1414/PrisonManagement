<template>
   <div class="flex fixed-center">
    <div class="q-pa-md" style="max-width: 400px"> 
      
   
   
      <q-form
    
      class="q-gutter-md"
    >
  
       

      <q-input
        filled
        bg-color="red"
        v-model="name"
        label="Name "
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

      <q-input
        filled
        bg-color="red"
        v-model="crime"
        label="Crime Commited"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        bg-color="red"
        v-model="img"
        label="Upload Image"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        bg-color="red"
        v-model="punish"
        label="Punishment(in years)"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type=number
        bg-color="red"
        v-model="crimeid"
        label="Criminal ID"
        lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
         
    <q-input label="Date Of Arrest" bg-color="red" filled v-model="dateOfArrest" mask="date" :rules="['dateOfArrest']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="dateOfArrest" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  
       <q-btn color="white" text-color="black" label="Add Record" @click="addRecord"/>
      
      </q-form>
   </div>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            name : '',
          crime: '',
          img:'',
          punish:0,
          crimeid:0,
          dateOfArrest:'2019/02/01',
            add_criminal:{}
            
        }
    },
   methods:
   { 
       addRecord(){
        this.add_criminal.name=this.name;
        this.add_criminal.crime=this.crime;
        this.add_criminal.img=this.img;
        this.add_criminal.punish=this.punish;
        this.add_criminal.crimeid=this.crimeid;
        this.add_criminal.dateOfArrest=this.dateOfArrest;
        this.$store.commit('updateCriminal',this.add_criminal);
        alert("Record added succesfully");
        this.$router.go(-1);
        
    }
}
}
</script>
