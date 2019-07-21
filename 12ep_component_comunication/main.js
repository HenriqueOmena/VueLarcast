Vue.component('tabs', {

    props: ['title'],

    template:
    `
    <input placeholder="Digite seu codigo de cupon">

    `,

     data() {
        return {


        };
     },

     created() {
         this.tabs = this.$children;
         console.log(this.$children);
     },

     methods : {

        selectTab(selectedTab) {
            this.tabs.forEach(tab =>  {

                tab.isActive = (tab.name == selectedTab.name)

            })
        }
     }
})

new Vue({
    el: '#root',

    methods:  {

        onCouponApllied() {

            alert('aplicou cupon')

        }

    }

})
