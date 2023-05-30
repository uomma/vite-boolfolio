<script>
import Axios from 'axios';
import AppHeader from './components/App.Header.vue';
import AppMain from './components/App.Main.vue';
import AppFooter from './components/App.Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      apiBase: 'http://127.0.0.1:8000/api',
      apiUrl: {
        posts: '/posts',
      },
      posts: []
    }
  },
  components: {
    
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    getPosts() {
      Axios.get(this.apiBase + this.apiUrl.posts).then((response) => {
        this.posts = response.data.check;
      }).catch((error) => console.log(error));
    }
  },
  created() {
    this.getPosts();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :data="posts"/>
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
