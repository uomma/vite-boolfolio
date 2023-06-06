<template >
    <section>
        <div>blog</div>
        <div class="container">
            <div class=" row my-4 gy-4">
                <div class="col col-md-4" v-for="post in posts">
                <CardPost :post="post" />
            </div>
            </div>
        </div>
    </section>
</template>
        
<script>
import Axios from 'axios';
import CardPost from '../components/CardPost.vue';
export default {
    name: "BlogPage",
    components:{
        CardPost
    },
    
    data() {
        return {
            apiBase: "http://127.0.0.1:8000/api",
            apiUrl: {
                posts: "/posts",
            },
            posts: []
        };
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
    },
    components: { CardPost }
}
</script>
        
        
<style scoped></style>