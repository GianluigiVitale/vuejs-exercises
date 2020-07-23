new Vue({
    el: '#exercise',
    data: {
        value : 0,
        time: 2000
    },
    computed: {
        result() {
            return this.value == 16 ? 'done' : 'not there yet'
        }
    },
    watch: {
        result() {
            var val = this;

            setTimeout(function() {
                val.value = 0;
            }, val.time);
        }
    }
})
