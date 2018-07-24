<template>
  <div v-on:mousemove="sendCursorLocation" class="container">
      <table>
  <tr>
    <th>Title</th>
    <th>Category</th>
    <th>Author</th>
  </tr>

    <single-post v-bind:key="post.title" v-for="post in allBlogPosts" :title="post.title" :category="post.category" :author="post.author"></single-post>
    
</table>
      <input type="text">
      <input type="text">
      <input type="text">
      <button>Send</button>
  </div>
</template>

<script>
import io from 'socket.io-client';
import singlePost from './singlePost.vue'

export default {
    name: 'app',
    components: {
    singlePost
  },
    data() {
        return {
            allBlogPosts:[
                {title: "Some title", category: "Some category", author:"Some author"},
                {title: "Some title2", category: "Some category2", author:"Some author2"},
                {title: "Some title3", category: "Some category3", author:"Some author3"}

            ],

            socket : io('localhost:3001')
        }
    },
    methods: {
        sendCursorLocation(e) {
            this.socket.emit('sendLocation', {
                x: e.pageX, y: e.pageY
            });
        },
    },
    mounted() {
       this.socket.on('allMouseActivity', (data) => {
            console.log(data.coords);
            this.x = data.coords.x;
            this.y = data.coords.y;
        });
    },
}
</script>

<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>