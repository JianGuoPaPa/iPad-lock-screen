<template>
    <div class="BootInterface">
        <Logo/>
    </div>
</template>

<script>
export default {
    name: "BootInterface"
}
</script>

<style scoped lang="scss">
.BootInterface {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: 1000;

    ::v-deep .NuxtLogo {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>