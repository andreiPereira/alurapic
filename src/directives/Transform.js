import Vue from 'vue';

// Para chamar, precisa ser v-meu-transform
Vue.directive('meu-transform', {
    bind(el, binding, vnode){
        
        let current = 0;
        el.addEventListener('dblclick', function(){
            
            // ele vai receber o valor para girar da função, e se não receber , vai ser 90
            let increment = binding.value || 90;
            current+=increment;
            
            //adiciona um movimento no giro da imagem
            el.style.transition = 'transform 0.5s';
            
            // aplica o comando da rotação
            el.style.transform = `rotate(${current}deg)`;
        });
    }
});