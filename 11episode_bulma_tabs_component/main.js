Vue.component('tabs', {

    props: ['title', 'body', 'footer'],

    template:
    `
    <div>
        <div class="tabs is-boxed">
            <ul>
                <li class="is-active">
                    <a>
                        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                        <span>Pictures</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                        <span>Music</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                        <span>Videos</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                        <span>Documents</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
     `,

     created() {
         this.tabs = this.$children;
         console.log(this.$children);
     },

    data() {
        return {

            tabs: []
        };
     },

     methods : {

        hideModal() {
            this.isVisible = false;
        }
     }
})

Vue.component('tab', {

    template: `
        <div>
            <slot></slot>
        </div>
    `,

    props: {

        name: { required: true }

    }


})


new Vue({
    el: '#root'
})
