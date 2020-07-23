new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe() {
            alert('alert!');
        }
    }
})
