<template>
    <!-- APP -->
    <div class="app">
          <app-header/>
          <app-sidebar/>
          <main>
            <router-view></router-view> 
        </main>
    </div>  
</template>


<script>

// Import Components

import Sidebar from './components/sidebar/Sidebar.vue'; 
import Header from './components/header/Header.vue'; 
import Main from './components/main/Main.vue'; 
import Form from './components/form/Form.vue'; 

// Create component

export default  {
  name: 'app',

  components: {
    'app-header': Header,
    'app-sidebar': Sidebar,
    'app-main': Main,
    'app-form': Form,
  }

}
</script>

<style lang="scss">

 // BASE
 
@import "./assets/sass/base/config";  
@import "./assets/sass/base/fonts";
@import "./assets/sass/base/base";  
@import "./assets/sass/base/grid"; 

// COMPONENTS

@import "./assets/sass/components/helpers";     
@import "./assets/sass/components/buttons";  
@import "./assets/sass/components/forms";


</style>
