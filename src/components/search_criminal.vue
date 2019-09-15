
<template>

<div class="cent">
   
   <div class="center" style="max-width: 300px ">
      <q-input 
      type="text" placeholder="Search By Name.."  v-model="texts">
      <q-btn size="20px"  flat dense round icon="search" @click="search" />
      </q-input>
   </div>
    <h1 v-if="found==0">NOT FOUND</h1> 
   
        <br><br><br><br>
        
 <div class="cent2" style="max-width: 900px ">
   <div  v-if="(texts==='') && (count===0) ">
   <q-list   dense bordered padding class="rounded-borders bg-red"  v-for="criminals in criminal" :key="criminals.crimeid" > 
      
      <q-item clickable v-ripple >
        <q-item-section >
        <div class="q-pa-xs"> 
        <div class="row">
            <div class="col">    
          {{criminals.name}}
         </div>
      <div class="col absolute-right">
            <q-btn class=" relative-right" size="12px" flat dense round icon="delete"  @click="deleteRecord(criminals.crimeid)" />
            <q-btn class="relative-right " size="12px" flat dense round icon="edit" @click="editRecord(criminals.crimeid)"/>
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
        
        <div v-for="displaySearched in displaySearched"  :key="displaySearched.crimeid"> 
            <!-- <div v-if="criminals.crimeid===displaySearchedid"> -->
     <q-list   dense bordered padding class="rounded-borders bg-red"  >
      
         
      <q-item clickable v-ripple >
        <q-item-section >
        <div class="q-pa-xs"> 
        <div class="row">
            <div class="col">    
          {{displaySearched.name}}
         </div>
      <div class="col absolute-right">
            <q-btn class=" relative-right" size="12px" flat dense round icon="delete" @click="deleteRecord(displaySearched.crimeid)" />
            <q-btn class="relative-right " size="12px" flat dense round icon="edit" @click="editRecord(displaySearched.crimeid)"/>
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
  </div>
</template>
<script>
export default {
    data(){
        return{
            texts: '',
                criminal:this.$store.getters.getCriminal,
                
                displaySearched:[],
                count:0,
                found:2
    }
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
                console.log(i.name)
               this.displaySearched.push(i);
                this.found=1;
              
               }
               this.count=1;
               
              
        }
      
        
    },
   
   deleteRecord(id){
      var check=confirm('Are you sure you want to delete this criminal?');
      if(check==true)
        this.$store.commit('removeCriminal',id)
   },
    editRecord(id){
        this.$router.push({name:'edit_criminal', params:{criminal_id:id}})
   }
    
}
}
</script>
<style>
.cent{
    position:relative;
    left:200px;
    bottom:50px;
    
}

</style>