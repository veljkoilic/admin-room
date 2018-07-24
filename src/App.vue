
<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <Blog/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from './components/Blog.vue'
import Administration from './components/Administration.vue'


export default {
  name: 'app',
  components: {
    Blog,
    Administration
    
  }
}
</script>

<style>

</style>