import Vue from 'vue'
import Router from 'vue-router'

import Blog from '../components/Blog.vue'
import Administration from '../components/Administration.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/create',
          component: Blog
        },
        {
            path: '/administration',
            component: Administration
          }
      ]

})
