<template >
    <header>
        <div class="container">
            <div class="collapse navbar-collapse align-self-end" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link p-3">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contacts' }" class="nav-link p-3">contacts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'blog' }" class="nav-link p-3">blog</router-link>

                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>


<style scoped>
header {
    padding: 10px;
    background-color: aquamarine;
}
</style>