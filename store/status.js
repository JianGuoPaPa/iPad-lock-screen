export default {
    state() {
        return {
            lock: true
        }
    },
    mutations: {
        LOCK: (state, status) => {
            state.lock = status
        }
    }
}