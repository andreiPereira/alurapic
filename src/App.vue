<!-- Template -->
<template>
  <div class="corpo">

    <nav>
      <!--ul>       
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cadastro">Cadastro</router-link></li>
      </ul-->
      <ul>       
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<!-- Script -->
<script>

import { routes } from './routes';

export default {
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
