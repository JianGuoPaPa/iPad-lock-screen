<template>
    <div class="container">
        <BootInterface :class="{hide:domReady,hideIndex:screenReady}"></BootInterface>
        <LockScreen :screenReady="this.screenReady"></LockScreen>
        <HomeScreen :screenReady="this.screenReady"></HomeScreen>
    </div>
</template>

<script>

export default {
    name: 'index',
    data() {
        return {
            domReady: false,
            screenReady: false,
        }
    },
    mounted() {
        window.onload = () => {
            setTimeout(() => {
                this.domReady = true
                setTimeout(() => {
                    this.screenReady = true
                }, 1000)
            }, 1000)
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    //border-radius: .4rem;
    overflow: hidden;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    text-align: center;

    ::v-deep .BootInterface {
        transition: all linear 0.5s;
    }

    .hide {
        opacity: 0;
    }

    .hideIndex {
        display: none;
    }

    .show {
        opacity: 1 !important;
    }


}
</style>
