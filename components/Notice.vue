<template>
    <div class="Notice" :class="{animate:animate}">
        <!--        <div class="bg"></div>-->
        <div class="up">
            <div class="app-icon">
                <i style="height: 4vh;font-size: .2rem;line-height: 4vh;padding-top: .1vh;"
                   class="el-icon-discover"></i>
            </div>
            <div class="app-name">提醒事项</div>
            <div class="notice-time">现在</div>
        </div>
        <div class="down">
            <div class="notice-message">浇花</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notice",
    data() {
        return {
            animate: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.animate = true
        }, 3000)
    }
}
</script>

<style scoped lang="scss">
.animate {
    transform: scale(1) !important;
    opacity: 1 !important;
}

.Notice {
    margin-bottom: 1vh;
    position: relative;
    z-index: 100;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    height: 10vh;
    padding: 1vh 1.6vw;
    border-radius: 2vh;
    color: #000;
    font-size: .16rem;
    line-height: 4vh;
    overflow: hidden;
    transition: all ease-out .3s;
    transform: scale(0);
    opacity: 0;
    transform-origin: top center;
    backdrop-filter: blur(10px);

    //.bg {
    //    z-index: 99;
    //    position: fixed;
    //    top: 0;
    //    left: 0;
    //    width: 100vw;
    //    height: 100vh;
    //    background: url('/img/wallpaper.jpg');
    //    background-position: center;
    //    background-size: cover;
    //    filter: blur(10px);
    //}

    & > div {
        height: 4vh;
        text-align: left;
    }


    .up {

        * {
            display: inline-block;
            vertical-align: top;
        }

        .notice-time {
            float: right;
        }
    }

    .down {
    }
}
</style>