<template>
    <aside>
        <nav>
            <ul>
                <li v-for="route in routes" :key="route.title">
                    <router-link class="menu-aside-item"  :to="route.path ? route.path : '/'">{{route.title}}</router-link>
                </li> 
            </ul>
        </nav>
    </aside> 
</template>

<script>

import { routes }  from '../../routes/routes';

export default {

    data() {

    return {
      routes: routes.filter(route => route.menu)
    }

  }

    
}
</script>

<style scoped lang="scss"> 

@import "./sidebar";


</style>