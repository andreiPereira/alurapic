import Vue from 'vue';

// Para chamar, precisa ser v-meu-transform
Vue.directive('meu-transform', {
    bind(el, binding, vnode){
        
        let current = 0;
        el.addEventListener('dblclick', function(){

            // inicializando increment e animate
            let increment = 90;
            let animate = false;

            if(binding.value){
                // recebe incremento mandado no obj
                increment = binding.value.incremento;
                
                // recebe animate mandado no obj
                animate = binding.value.animate;
            }
            
            current+=increment;
            
            el.style.transform = `rotate(${current}deg)`;
            // aplica o comando da rotação
            
            //adiciona um movimento no giro da imagem
            if(animate) el.style.transition = 'transform 0.5s';
        });
    }
});