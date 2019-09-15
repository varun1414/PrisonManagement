<template>
  <div class="center">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        
      <q-card class="my-card">
        <div class="row">
          <div class="col">
        <div class="cente">
      <img src="assets/190202181527-metropolitan-detention-center-file-exlarge-169.jpg" style="width:650px">
        </div>
          </div>
           <div class="col">
      <q-card-section>
        <div class="text-h3">History</div>
        <div class="text-subtitle2">
          <br><br>
        MDC Brooklyn occupies land that was originally part of Bush Terminal (now Industry City), a historic intermodal shipping, warehousing, and manufacturing complex. The Federal Bureau of Prisons initially proposed converting two buildings at Industry City into a federal jail in 1988,
         due to overcrowding at the Manhattan Detention Complex. There was large opposition from members of the local community, who feared that traffic congestion in the area would rise.
          Critics feared that the facility, with its staff, inmates, visitors, and supply deliveries, would overburden neighborhood traffic and water and sewer systems.To make room for MDC Brooklyn, one of the original Bush Terminal loft buildings—Federal Building No. 1, formerly occupied by the United States Coast Guard—was destroyed in a controlled 
          explosion in August 1993.

MDC Brooklyn opened in the early 1990s. It was built to hold 1,000 inmates awaiting arraignment or trial at the federal court in the Eastern District of New York. By 2019, according to The New York Times, it held 1600 inmates.</div>

      </q-card-section>


           </div>
        </div>
    </q-card>
          
        
      </q-carousel-slide>
     
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        
          
           
      <q-card class="my-card">
        <div class="row">
          <div class="col">
        <div class="cente">
      <img src="assets/image-20170313-9613-1bkv4u1.jpg" style="width:650px">
        </div>
          </div>
           <div class="col">
      <q-card-section>
        <br><br>
        <div class="text-h3">Visiting Hours</div>
        <br><br><br>
        <div class="text-subtitle2">
        Visiting is based on the first letter of the inmate's last name.  You will need to check the current visiting schedule here for which days you can visit.  No visits occur on Mondays or Tuesdays.  Wednesday and Thursday visitation registration occurs between 1pm and 8pm, visits last until 9pm.  Friday, Saturday, and Sunday visitation occurs from 8am-4pm, registration for visiting is from 7am-2pm.
        </div>
      </q-card-section>


           </div>
        </div>
    </q-card>
      </q-carousel-slide>
  
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
         <q-card class="my-card">
        
          
           <div class="col">
      <q-card-section>
        
        <div class="text-h3">Contact us</div>
        <br><br><br>
        <div class="text-subtitle2">
        Physical Address:
  Brooklyn Detention Complex                  <br>
  275 Atlantic Avenue<br>
  Brooklyn, NY 11201<br>
<br><br>
Telephone:<br>
(718)-797-8347<br><br>


        </div>
      </q-card-section>


          
        </div>
    </q-card>
          
        
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' }
        ]"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 'style',
      
    }
  }
}
</script>
<style>
.cente{
 position: relative;
  
}
</style>
