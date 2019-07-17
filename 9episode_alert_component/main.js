Vue.component('message', {

    props: ['title', 'body', 'footer'],

    template:
    `
    <div id="root">
        <div class="alert alert-success" role="alert" v-show="isVisible">
        <h4 class="alert-heading">
            {{ title }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" @click="hideModal">&times;</span>
            </button>
        </h4>
        <p>
            {{ body }}
        </p>
        <hr>
        <p class="mb-0">{{ footer }}</p>
        </div>
    </div>
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
