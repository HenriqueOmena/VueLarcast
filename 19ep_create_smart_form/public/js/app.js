class Errors {

    constructor() {
        this.errorValidacao = {};
    }

    has(field) {
        console.log('o field', field);

        if (this.errorValidacao.errors) {
            console.log('o error', this.errorValidacao.errors);
            console.log('no if', this.errorValidacao.errors.hasOwnProperty(field));
            console.log('in no if', field in this.errorValidacao.errors)
            return this.errorValidacao.hasOwnProperty(field);
        }

        return this.errorValidacao.hasOwnProperty(field);
    }

    any() {

        return Object.keys(this.errorValidacao).length > 0;

    }

    get(field) {
        if (this.errorValidacao[field]) {
            console.log('field no get', field);
            return this.errorValidacao[field][0];
        }
    }

    //only to update ur errors object
    record(errors) {
        console.log('error no record', errors);
        this.errorValidacao = errors;
        console.log('dentro de record', errors);
    }

    clear(field) {
        delete this.errorValidacao[field];
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
                    console.log('catch do pedido', error.response.data)
                    return this.errorValidacao.record(error.response.data)
                })
        }
    }

})
