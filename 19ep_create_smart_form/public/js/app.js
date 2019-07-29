class Errors {

    constructor() {
        this.errors = {};
    }

    has(field) {
        console.log('o field', field);
        console.log(this.errors.hasOwnProperty(field));
        return this.errors.hasOwnProperty(field);
    }

    any() {

        return Object.keys(this.errors).length > 0;

    }

    get(field) {
        if (this.errors[field]) {
            console.log('field no get', field);
            return this.errors[field][0];
        }
    }

    //only to update ur errors object
    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }
}

new Vue({
    el: '#app',

    data: {
        name: '',
        description:'',
        errors: new Errors()
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(response => alert('passou no then de sucesso'))
                .catch(error => {
                    console.log(error.response.data)
                    return this.errors.record(error.response.data)
                })
        }
    }

})
