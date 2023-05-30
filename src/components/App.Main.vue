<template >
    <main>
        <div class="container">
            <div class="row ">
                <div class="col col-md-4" v-for="post in data">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text">{{ post.caption }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
    
<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}
</script>
    
    
<style scoped>
main {
    background-color: rgb(25, 49, 96);
}</style>