<!-- Template -->
<template>
    <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>

<!-- Script -->
<script>
export default {
    props: [
        'url',
        'titulo'
    ]
}
</script>

<!-- Style -->
<style scoped>
    .imagem-responsiva {
        width: 100%;
    }
</style>