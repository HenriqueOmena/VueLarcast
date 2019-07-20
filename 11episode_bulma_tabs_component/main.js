Vue.component('message', {

    props: ['title', 'body', 'footer'],

    template:
    `

    `,

    data() {
        return {

            isVisible:true

        };
     },

     methods : {

        hideModal() {
            this.isVisible = false;
        }
     }
})



new Vue({
    el: '#root'
})
