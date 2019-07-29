class Errors {

    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {

        return Object.keys(this.errors).length > 0;

    }

    get(field) {
        if (this.errors[field]) {
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
        errors: new Errors
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(response => alert('passou no then de sucesso'))
                .catch(error => error.response.data)
        }
    }

})
