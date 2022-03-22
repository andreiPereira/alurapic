<template>
  <div >
    <h1>{{ titulo }}</h1>
      <ul>
        <li v-for="foto of fotos">
          <img :src="foto.url" :alt="foto.titulo">
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {

      titulo: 'alurapic',

      fotos: [
        {
          url:'https://cdn.motor1.com/images/mgl/qjvEq/s1/2020-subaru-wrx-sti-render.webp',
          titulo: 'subawuw'
        },
        {
          url:'https://motorshow.com.br/wp-content/uploads/sites/2/2021/12/269057019-6617007225037554-3758995518522402541-n-e1640712075314.jpg',
          titulo: 'subaruuuuu'
        }
      ]
    }
  }
}
</script>

<style>

</style>
