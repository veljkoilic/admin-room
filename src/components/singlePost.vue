<template>

  <tr class="singlePost">
    <td v-text="this.title"></td>
    <td v-text="this.category">Maria Anders</td>
    <td v-text="this.author">Germany</td>
  </tr>

</template>

<script>

export default {
  name: 'single-post',
  props:{
    title: String,
    category: String,
    author: String
  },
  data () {
    return {
      isConnected: false,
      socketMessage: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
