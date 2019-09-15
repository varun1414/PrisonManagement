import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
   state:{
      admin: [
        {
        userName : 'jon',
        password: 'snow',
        img:'assets/24_courtesy_of_hbo-h_2019.jpg',
        fullName:'jon snow',
        id:23400,
        post:'General',
        address:'New York',
        
        },
        {
          userName : 'rob',
          password: 'stark',
        fullName:'rob stark',
        id:23411,
        post:'General',
        address:'New Jersey'
          },
          {
            userName : 'ramsey',
            password: 'bolton',
            img:'assets/ramsey.jpg',
          fullName:'ramsey bolton',
          id:23422,
          post:'General',
          address:'New York'
            }
      ],
      count:0,
      current: {},
      criminal:[
        
          {
          name : 'robert',
          crime: 'murder',
          img:'assets/robert.jpg',
          punish:2,
          crimeid:232114,
          dateOfArrest:new Date(2017, 4, 12),
          totalVisits:5
          
          
          },
          {
            name : 'harvey specter',
            crime: 'robbery',
            img:'assets/harvey.jpg',
            punish:2,
            crimeid:2448,
            dateOfArrest:new Date(2017, 9, 2),
            totalVisits:5
            
            },
            {
              name : 'mike ross',
              crime: 'murder',
              img:'assets/mike.jpg',
              punish:2,
              crimeid:2349,
              dateOfArrest:new Date(2017, 4, 12),
              totalVisits:5
              
              },
            
                {
                  name : 'theon',
                  crime: 'robbery',
                  img:'assets/theon.jpg',
                  punish:2,
                  crimeid:2342,
                  dateOfArrest:new Date(2017,11,1),
                  totalVisits:5
                  
                  },
                  {
                    name : 'yara',
                    crime: 'hit and run',
                    img:'assets/yara.jpg',
                    punish:2,
                    crimeid:2347,
                    dateOfArrest:new Date(2017, 4, 12),
                    totalVisits:5
                    
                    },
                    {
                      name : 'danny',
                      crime: 'robbery',
                      img:'assets/danny.jpg',
                      punish:2,
                      crimeid:2345,
                      dateOfArrest:new Date(2017, 4, 12),
                      totalVisits:5
                      
                      },
                      {
                        name : 'joey',
                        crime: 'robbery',
                        img:'assets/joey.jpg',
                        punish:2,
                        crimeid:2344,
                        dateOfArrest:new Date(2017, 4, 12),
                        totalVisits:5
                        
                        },
                        {
                          name : 'chandler',
                          crime: 'hit and run',
                          img:'assets/chandler.jpg',
                          punish:2,
                          crimeid:2343,
                          dateOfArrest:new Date(2017, 4, 12),
                          totalVisits:5
                          
                          }
                          
      ]
  },
getters:{
  getAdmin:(state,getters) =>{
    return state.admin
  },
  getCriminal:(state,getters)=>{
    return state.criminal
  },
  getCurrent:(state,getters)=>{
    return state.current
  }
  
},
mutations:{
  increment (state) {
    // mutate state
    state.count++
  },
  decrement (state,id) {
    // mutate state
    var x,count=0;
    for(x of state.criminal)
    {
      if(x.crimeid==id)
        {
          state.criminal[count].totalVisits--
          break;
        }
        count++;
    }
    
  },
  updateList(state,obj){
    state.current=obj;
  },
  updateCriminal(state,obj){
    state.criminal.push(obj);
  },
  clearCurrent(state)
  {
    state.current={};
  },
  editCriminal(state,obj,index){
    state.criminal[index]=obj;
  },
  removeCriminal(state,id){
    var x,count=0;
    for(x of state.criminal)
    {
      if(x.crimeid==id)
        {
          state.criminal.splice(count,1);
          break;
        }
        count++;
    }
  }
}

   
    
  })

  return Store
}
