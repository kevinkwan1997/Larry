import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Songs from '../views/Songs.vue';
import Artist from '../views/Artist.vue';
import Song from '../views/Song.vue';
import SongList from '../views/SongList.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/songs',
    name: Songs,
    component: Songs
  },
  {
    path: '/:artist',
    name: Artist,
    component: Artist,
    children: [
      {
        path: 'songs', name: 'songlist', component: SongList,
        children: [
          {
            path: ':song', name:'song',component: Song
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
