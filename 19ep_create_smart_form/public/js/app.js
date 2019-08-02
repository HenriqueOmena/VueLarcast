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
        this.errors = errors.errors;
    }

    clear(field) {
        delete this.errors[field];
    }
}

class Form {
    reset(vm) {



    }
}

new Vue({
    el: '#app',

    data: {
        form: new Form({

            name: '',
            description: ''

        }),
        errors: new Errors()
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSucess)
                .catch(error => this.errors.record(error.response.data))
        },

        onSucess(response) {
            alert(response.data.message);
            form.reset()
        }
    }

})
