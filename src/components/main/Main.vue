<template>

  <div class="main">
      
    

     <div class="page-title">
           <h1>List Task</h1>
      </div>

      <div class="search-box">
      <span class="search" @click="isVisible = !isVisible"><i class="material-icons">search</i></span>
      <transition name="search-fade">
        <input type="search" class="form-field_medium" @input="searchdata = $event.target.value"  placeholder="Pesquisar Tarefas" v-if="isVisible" >
      </transition>
    </div>

    <div class="todolist-box">
        <div class="card-item" v-for="item in searchEngine" :key="item.id">
              <div class="card-title">
                <h2 v-titlevalue="item.id">{{ item.title }}</h2>
              </div>
              <div class="card-description">
                {{ item.description }}
              </div>
              <div class="card-options" >
                <app-button action="remove" @actionEvent="remove(item.id)" :id="1">
                  <i class="material-icons">clear</i>
                </app-button >
                  <router-link :to="{ name: 'edit', params: { id : item.id }}">
                    <app-button action="open" @actionEvent="edit(item.id)" :id="2">
                      <i class="material-icons">edit</i>
                    </app-button >
                  </router-link>
                  <app-button action="check" @actionEvent="check(item.id)" :id="3">
                    <i class="material-icons">{{item.isChecked ? 'check_box' : 'check_box_outline_blank'}}</i>
                </app-button >
              </div>
        </div>
    </div>   
    
  </div>
</template>

<script>

import { Database } from '../../services/task';
import Buttons from './../buttons/Buttons.vue'; 
import Task from '../../models/task.js';

var database = new Database();

export default {
  name: 'Main',

  components: {
    'app-button': Buttons
  },

  data () {
    return {
      itens: [],
      searchdata: '',
      isVisible: false,
      task: new Task()
    }
  },
  computed: {
    searchEngine() {
      if (this.searchdata) {
        let exp = new RegExp(this.searchdata.trim(), 'i');
        return this.itens.filter(item => exp.test(item.title));
      } else {
        return this.itens;
      }
    }
  },
  methods: {
     startDatabase: function(){
          database.start().then( db => {
            db.findAll().then( itemsList => {
                this.itens = itemsList
            });
        })
     },

      remove(itemId) {
        if(confirm('Deseja Realmente deletar?')) {
            database.remove(itemId).then( itemsList => {
               alert('Tarefa Deletada') 
                this.itens = itemsList
            });
         }
    },
    check(itemId){
        database.find(itemId).then(item => {
            item.isChecked = !item.isChecked;
            database.update(item).then(itemsList => {
                this.itens = itemsList
            })
        })
    }
  },
  created(){
        this.startDatabase()
  }
    
}
</script>
<style lang="scss">

.page-title{
    border-bottom: 1px solid silver;
    margin-bottom: 20px;
    font-size: 0.75em;
    padding-bottom: 10px;
}

@import './card';
@import './search';
  
</style>