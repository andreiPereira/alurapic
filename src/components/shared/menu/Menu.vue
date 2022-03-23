<template>
    <nav>
      <!--ul>       
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cadastro">Cadastro</router-link></li>
      </ul-->
      <ul>       
          <li v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">{{rota.titulo}}</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

    export default {
        props: {
            rotas: {
                type: Array,
                required: true
            }
        }
    }

</script>
<style></style>