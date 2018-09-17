/*
|--------------------------------------------------------------------------
| Directive - Get Title Value
|--------------------------------------------------------------------------
*/

// Import Vue

import Vue from 'vue';

// Create Directive

Vue.directive('titlevalue', {

    bind(el, binding, vnode) {

        el.addEventListener('click', function() {
            var title = el.textContent
            console.log(`O Tìtulo da tarefa é ${title} e o id é ${binding.value}`)
        })

    }

}); 