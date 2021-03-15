<template>
    <div class="lockScreen" :class="{show:screenReady}"
         @click="unlock"
         :style="{
                top:lockScreen.top+'px',
                transition:operator.touch&&lockScreen.status==='move'?'none': 'all ease-out .3s',
                // backdropFilter: 'blur('+ -lockScreen.top/25+'px)',
            }">
        <div class="bg" :style="{
                    filter: 'blur('+ -lockScreen.top/25+'px)',
                    top:-lockScreen.top+'px',
                    transition:operator.touch&&lockScreen.status==='move'?'none': 'all ease-out .3s',
                }"></div>
        <div class="time">
            <div class="now">{{now[0] === '24' ? '00:' + now[1] : now[0] + ':' + now[1]}}</div>
            <div class="nowDate">
                {{nowDate[0]}}月{{nowDate[1]}}日
                星期{{weekData[new Date().getDay()]}}
            </div>
            <div class="title">欢迎来到ios-blog</div>
        </div>
        <div class="notice-container">
            <Notice></Notice>
            <Notice></Notice>
            <Notice></Notice>
            <Notice></Notice>
        </div>
        <div class="unlockText">向上滑动来解锁</div>
        <div class="slideBar-container">
            <div class="slideBar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "lockScreen",
    props: {
        screenReady: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            now: new Date().toLocaleTimeString('chinese', {hour12: false}).slice(0, 5).split(':'),
            nowDate: new Date().toLocaleDateString().split('/').splice(1, 2),
            weekData: ['日', '一', '二', '三', '四', '五', '六'],
            operator: {
                touch: false,
                manual: true
            },
            lockScreen: {
                status: 'lock',
                top: 0
            }
        }
    },
    mounted() {
        this.initTouchListen()
        this.initTouchMove()
    },
    methods: {
        initTouchListen() {
            document.addEventListener('touchstart', e => {
                this.setManual()
            })
            document.addEventListener('touchend', e => {
                this.releasOperate()
            })
            document.addEventListener('mousedown', e => {
                this.setManual()
            })
            document.addEventListener('mouseup', e => {
                this.releasOperate()
            })
        },
        setManual() {
            this.operator.touch = true;
        },
        releasOperate() {
            if (this.lockScreen.top > -window.innerHeight / 3) {
                this.lockScreen.top = 0
            } else {
                this.lockScreen.top = -window.innerHeight
            }
            this.operator.touch = false
            this.lockScreen.status = 'lock'
            // this.lockScreen.top = -window.innerHeight + window.innerHeight / 100
            // this.lockScreen.top = 0
        },
        initTouchMove() {
            document.addEventListener('mousemove', e => {
                this.judgeScroll(e.clientY)
            })
            document.addEventListener('touchmove', e => {
                this.judgeScroll(e.touches[0].clientY)
            })
        },
        judgeScroll(touchHeight) {
            if (this.lockScreen.status === 'move') {
                this.lockScreen.top = -(window.innerHeight - touchHeight) + window.innerHeight / 100 * 2
            }
            if (this.operator.touch === true && this.lockScreen.status !== "move") {
                if (touchHeight > window.innerHeight - 100) {
                    this.lockScreen.status = 'move'
                }
            }
        },
        unlock() {
            // this.operator.manual = false
            // this.lockScreen.status = 'move'
            // if (this.lockScreen.top <= -window.innerHeight + window.innerHeight / 45) {
            //     this.lockScreen.top = 0
            // } else {
            //     this.lockScreen.top = -window.innerHeight + window.innerHeight / 45
            // }
            // setTimeout(() => {
            //     this.operator.manual = true
            //     this.lockScreen.status = 'lock'
            //     // this.$parent.$data.screenReady = false
            // }, 300)
        }
    }
}
</script>

<style scoped lang="scss">
.lockScreen {
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.05);
    top: 0;
    box-sizing: border-box;
    opacity: 0;
    height: 100vh;
    position: fixed;
    width: 100vw;
    color: #fff;
    z-index: 10;

    .bg {
        position: absolute;
        z-index: 9;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: url('/img/wallpaper.jpg');
        background-position: center;
        background-size: cover;
    }

    .time {
        position: relative;
        z-index: 10;
        margin-top: 10vh;

        .now {
            font-size: 1.2rem;
        }

        .nowDate {
            font-size: .3rem;
        }
    }

    .title {
        margin-top: 1.5vh;
        font-size: .2rem;
    }

    .unlockText {
        z-index: 10;
        font-size: .15rem;
        position: absolute;
        bottom: 5vh;
        width: 100%;
    }

    .notice-container {
        margin: 2vh auto 0;
        max-width: 40vw;
        min-width: 365px;
        position: relative;
        z-index: 10;

        ::v-deep .Notice:nth-child(1) {
            transition-delay: .3s;
        }

        ::v-deep .Notice:nth-child(2) {
            transition-delay: .6s;
        }

        ::v-deep .Notice:nth-child(3) {
            transition-delay: .9s;
        }

        ::v-deep .Notice:nth-child(4) {
            transition-delay: 1.2s;
        }
    }

    .slideBar-container {
        position: absolute;
        bottom: 2vh;
        left: 0;
        width: 100%;
        opacity: .2;
        text-align: center;
        height: 2vh;
        z-index: 10;
        transition: all linear .5s;

        .slideBar {
            margin-top: 1vh;
            vertical-align: top;
            display: inline-block;
            width: 20vw;
            background-color: #fff;
            height: .8vh;
            border-radius: .4vh;
        }

        &:hover {
            opacity: .5;
        }
    }
}
</style>