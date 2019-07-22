Vue.component('coupon', {

    props: ['title'],

    template:
    `
    <input placeholder="Digite seu codigo de cupon" @blur="onCouponApplied">

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

        onCouponApplied() {

            this.$emit('applied')

        }

     }
})

new Vue({
    el: '#root',

    data: {

        couponApplied: false

    },

    methods:  {

        onCouponApplied() {

            this.couponApplied = true
            alert('aplicou cupon')

        }

    }

})
