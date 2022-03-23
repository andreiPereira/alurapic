<!-- Template -->
<template>

  <div class="corpo">

    <meu-menu :rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>

  </div>

</template>

<!-- Script -->
<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components:{
    'meu-menu' : Menu
  },

  data() {
    return {
      routes
    }
  }
}

</script>

<!-- Style -->
<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter, 
  .pagina-leave-active {
    transition: all 0.5s ease;
  }

  .pagina-enter-active, 
  .pagina-leave-active {
    opacity: 0;
    transform: scale(0.9);
  }

</style>
