<template>
    <div class="HomeScreen">
        <div class="appContainer" v-if="showContent">
            <div v-swiper:mySwiper="swiperOption" class="swiper-container app-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>

                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>

                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>

                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>

                    </div>
                    <div class="swiper-slide">
                        <div class="iconContainer">
                            <nuxt-link class="app" to="/app/setting">
                                <svg-icon icon-class="memo"></svg-icon>
                                <div class="appName">备忘录</div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <!--                <div class="swiper-button-prev"></div>-->
                <!--                <div class="swiper-button-next"></div>-->
            </div>
        </div>
        <div class="dockContainer" v-if="showContent">
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeScreen",
    props: {
        screenReady: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            showContent: false,
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 2000,
                speed: 1000,
                loop: true,
                observer: true,
                observeParents: true,
                autoplayDisableOnInteraction: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            }
        }
    },
    watch: {
        screenReady() {
            setTimeout(() => {
                this.showContent = true
            }, 500)
        }
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
.HomeScreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url('/img/wallpaper.jpg');
    background-position: center;
    background-size: cover;
    z-index: 1;

    .appContainer {
        margin: 10vh 2vw;

        .swiper-slide {
            text-align: left;
            font-size: 0;


            .iconContainer {
                display: inline-block;
                vertical-align: top;
                text-align: center;
                width: 19.9%;
                margin-bottom: 3vh;

                .svg-icon {
                    width: 1.2rem;
                    height: 1.2rem;
                }

                .app {
                    .appName {
                        font-size: .2rem;
                    }
                }
            }
        }
    }

    .dockContainer {
        position: fixed;
        bottom: 2vh;
        left: 50%;
        height: 12vh;
        width: 50vw;
        transform: translateX(-50%);
        border-radius: 4vh;
        z-index: 2;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
    }
}
</style>