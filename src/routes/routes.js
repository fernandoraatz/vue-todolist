/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

// Import components

import Main from '../components/main/Main.vue';
import Form from '../components/form/Form.vue';

// Create Routes

export const routes = [

    { path: '', component: Main, title:"List All", name:'main', menu:true },
    { path: '/add', component: Form, title:"New Item", name:"add", menu:true },
    { path: '/add/:id', component: Form, title:"Edit Item", name:"edit", menu:false },
    { path: '*', component: Main , menu:false} 

];