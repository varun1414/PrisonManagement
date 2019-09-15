
<template>

<div class="cents">
    
   
      <q-input filled  bg-color="blue-grey-4" 
      type="text" placeholder="Search By Name.."  v-model="texts">
      <q-btn size="20px"  flat dense round icon="search" @click="search" />
      </q-input>
   
   <h1 v-if="found==0">NOT FOUND</h1> 
   
        <br><br><br><br>
        
 <div class="cent2" style="max-width: 900px ">
   <div  v-if="(texts==='') && (count===0) ">
   <q-list   dense bordered padding class="rounded-borders bg-red"  v-for="criminals in criminalTemp.slice(0,5)" :key="criminals.crimeid" > 
      
      <q-item clickable v-ripple >
        <q-item-section >
        <div class="q-pa-xs"> 
        <div class="row">
            <div class="col">    
          {{criminals.name}}
         </div>
      <div class="col absolute-right">
           
            <q-btn class="relative-right " size="12px" flat dense round icon="info" @click="showCriminal(criminals.crimeid)"/>
             </div>
    </div>
        </div>
        </q-item-section>
      </q-item> 
</q-list>

    
     <!--  <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item> -->
    </div>

    <div v-if="count>=1 && texts != ''">
        
        <div v-for="displaySearch in displaySearched"  :key="displaySearch.crimeid"> 
            <!-- <div v-if="criminals.crimeid===displaySearchedid"> -->
     <q-list   dense bordered padding class="rounded-borders bg-red"  >
      
         
      <q-item clickable v-ripple >
        <q-item-section >
        <div class="q-pa-xs"> 
        <div class="row">
            <div class="col">    
          {{displaySearch.name}}
         </div>
      <div class="col absolute-right">

            <q-btn class="relative-right " size="12px" flat dense round icon="info" @click="showCriminal(displaySearch.crimeid)"/>
             </div>
    </div>
        </div>
        </q-item-section>
      </q-item>  
      
</q-list>

<!-- </div> -->
    </div>
    
  </div>
  </div>
  <q-dialog v-model="show">
       
    <!-- <p>{{admin_obj}}</p> -->
    <q-card class="my-card bg-red-5 " >
       <q-card-section>
        
      
         <div class="absolute-right">
        <q-btn icon="close" flat round dense v-close-popup />
        </div>
      </q-card-section>
      <div class="row">
      <div class="col">
      <div class="float-center">
      <img  :src="showRecord.img"
      style="width:200px;height:150px" />
        </div>
        </div>
      <!-- <div class="relative-center"> -->
         <div class="col">
      <q-card-section>
      <div class="text-subtitle2 text-white">FULL NAME: {{showRecord.name}}</div><br><br>
        <div class="text-subtitle2 text-white">Criminal id: {{showRecord.crimeid}}</div><br><br>
        <div class="text-subtitle2 text-white">Crime Commited: {{showRecord.crime}}</div><br><br>
        <div class="text-subtitle2 text-white">Punishment(in years): {{showRecord.punish}}</div>
       <br><br>
       <div class="right">
       <q-btn color="primary" label="Schedule visit" @click="Schedule"/>
       </div>
      </q-card-section>

      </div>
    </div>
     

      
    </q-card>
    </q-dialog>

      <q-dialog v-model="visit">
       
    <!-- <p>{{admin_obj}}</p> -->
    <q-card class="my-card bg-red-5 " >
     
        
       <q-card-section>
         <div class="absolute-right">
        <q-btn icon="close" flat round dense v-close-popup />
        </div>
       </q-card-section>
      
      <!-- <div class="relative-center"> -->
         
      <q-card-section>
          <h2>Schedule Visit</h2>
      <q-input filled v-model='visiterName' style="max-width:200px " label="Enter Your Name" />
      <br><br>
      <q-input filled v-model='emailId' style="max-width:200px " label="Enter Your EmailId" />
         <br><br>
      <q-input filled type="number" v-model='contactno' style="max-width:200px " label="Enter Your Contact" />
         <br><br>
         <q-input label="Date Of Visit"  style="max-width:200px " bg-color="red" filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date  v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
 <q-btn color="primary" label="Done" @click="finished"/>
      

      </q-card-section>

     

      
    </q-card>
    </q-dialog>
      <q-dialog v-model="noVisit">
      <q-card>
            <q-card-section>
         <div class="absolute-right">
        <q-btn icon="close" flat round dense v-close-popup />
        </div>
       </q-card-section>
        <q-card-section>
          <div class="text-h6">The Criminal has 5 registered Visits.</div>
        </q-card-section>
        
        <q-card-section>
          Please contact the concerned authorities in case of an emergency
        </q-card-section>
      </q-card>
      </q-dialog>
  </div>
</template>
<script>
export default {
    data(){
        return{
            texts: '',
                criminal:[],
                criminalTemp:[],
                displaySearched:[],
                count:0,
                show:false,
                id:0,
                showRecord:{},
                visit:false,
                noVisit:false,
                date:'',
                visiterName:'',
                emailId:'',
                contactno:'',
    }
    },
    mounted(){
        this.criminal=this.$store.getters.getCriminal;
        this.criminalTemp=this.criminal;
    },
    methods:{
        
         search(){
        var i;
        this.displaySearched=[];
        this.found=0;
        for(i of this.criminal)
        {
           
                if(i.name.includes(this.texts))
               {
                
               this.displaySearched.push(i);
                this.found=1;
              
               }
               this.count=1;
               
              
        }
      
        
    },
   
  /*  deleteRecord(id){
      var check=confirm('Are you sure you want to delete this criminal?');
      if(check==true)
        this.$store.commit('removeCriminal',id)
   }, */
    showCriminal(id){
        this.show=true;
        var x;
        console.log(id);
        for(x of this.criminal){
            if(x.crimeid==id){
                this.showRecord=x;
                this.id=id
                break;
            }
        }

   },
   Schedule(){
       /*  this.scheduleShow==true; */
        var x;
        this.show=false;
         for(x of this.criminal){
            
            if(x.crimeid==this.id){
                if(x.totalVisits==0){
                    this.noVisit=true;
                    break;
                }
                else{
                    this.visit=true;
                   this.$store.commit('decrement',this.id); 
                }
                
                break;
            }
        }

   },
   finished(){
       alert("Visit Registered.\nYou'll receive an email/sms specifying the time slot allocated");
       this.visit=false;
       this.visiterName='',
       this.date='',
       this.emailId='',
       this.contactno=''
   }
    
}

}
</script>
<style>
.cents{
    position:absolute;
    left:500px;
   
}

</style>