<!-- FORM -->

<template>
  <div class="form">
    
          <div class="page-title">
           <h1>Add Task</h1>
          </div>
          <form @submit.prevent="save()">
            <div class="form-row">
              <label for="">Title</label>
              <input  v-validate="'required'" v-model="task.title" class="mdl-textfield__input" type="text" id="title" maxlength="30" placeholder="Title" autocomplete="off" name="title">
              <span class="label-error">{{ errors.first('title') }}</span> 
            </div>
            <div class="form-row">
              <label for="">Description</label>
              <textarea v-validate="'required'" v-model="task.description" class="mdl-textfield__input" id="description" maxlength="100" rows="4" placeholder="Description" name="description" ></textarea>
              <span class="label-error">{{ errors.first('description') }}</span>
            </div>
            <div class="form-row">
              <button class="btn-primary" type="submit">Enviar</button>
            </div>
          </form>  
  </div>
</template>

<!-- SCRIPT -->

<script>

import {Database} from '../../services/task';
import Task from '../../models/task.js';

var database = new Database();

export default {

 data() {
    return {
      task: new Task(),
      id: this.$route.params.id
    }
  },
  methods: {

    save() {

      this.$validator.validateAll().then(success =>{
          if (success){
            if(this.id){
              database.update(this.task).then(() => {
                  alert('Editado com sucesso')
                  this.task = new Task()
              })
            }else{
              database.insert(this.task).then(() => {
                  alert('adicionado com sucesso')
                  this.task = new Task()
              })
            }

          }else{
            alert("Preencha os campos corretamente")
          }
       })


      

    },

    getData(id) {

      database.find(id).then( item => {
                 this.task = item  
      });

    }
  },
  created(){
        if(this.id){
          this.getData(this.id)
        }
  }
  
}
</script>

<!-- TEMPLATE -->
<style scoped lang="scss">

 @import './form.scss';

</style>