<template >
    <router-link :to="{ name: 'BlogPage', params: { slug: BlogPage.slug } }">
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p v-if="post.caption" class="card-text">{{ post.caption.substring(0, this.captionLenght) + '...' }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </router-link>
</template>

    
<script>
export default {
    name: 'CardPost',
    data() {
        return {
            captionLenght: 250,
            iamgeUrl: 'http://127.0.0.1:8000/storage/'
        }
    },
    props: {
        post: Object
    }
}
</script>
    
    
<style scoped>
.card {
    background-color: rgb(25, 49, 96);
}
</style>