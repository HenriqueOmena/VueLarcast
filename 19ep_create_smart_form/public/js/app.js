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

        if (field) {
            delete this.errors[field];

            return;

        }

        this.errors =  {};

    }
}

class Form {

    constructor(data) {
        this.originalData = data;

        for (let field in data) {

            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        let data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;

    }

    reset() {

        for (let field in this.originalData) {

            this[field] = '';

        }

    }


    submit(requestType, url) {

        axios[requestType]( url, this.data())
            .then(this.onSucess.bind(this))
            .catch(this.onFail.bind(this))

    }

    onSuccess(response) {
        //TEMPORY

        alert(response.data.message)

        this.errors.clear();
        this.reset();
    }

    onFail() {
        this.errors.record(error.response.data)
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

            this.form.submit('post', '/projects');

        },

        onSucess(response) {
            alert(response.data.message);
            form.reset()
        }
    }

})
