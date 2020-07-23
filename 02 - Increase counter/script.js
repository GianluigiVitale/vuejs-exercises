new Vue({
    el: '#app',
    data: {
        counter: 0,
        number: 'Smaller than 5'
    },
    methods: {
        increase() {
            this.counter++;

            this.number = (this.counter > 5) ? 'Greater than 5' : 'Smaller than 5';
        }
    }
})
