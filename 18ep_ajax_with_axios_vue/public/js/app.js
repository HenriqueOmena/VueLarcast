new Vue({
    el: '#app',

    data: {

        skills: []

    },

    // ao iniciar o vue vai executar as funç~çoes do mouted
    mounted() {

        axios.get('/skills')
            .then(response => this.skills = response.data );

    }


});
