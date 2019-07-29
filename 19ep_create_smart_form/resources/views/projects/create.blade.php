<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css">

    <title>My Smart Vue Form</title>

    <style>
        body { padding: 40px 15px; }
        button { margin: 10px 0px; }
    </style>
</head>
<body>

    <div id="app" class="container">
        <form action="/projects" method="post" @submit.prevent="onSubmit" @keydown="errors.clear(name)">
            <div class="control">

                <label for="name" class="label">Nome do Projeto</label>

                <input type="text" id="name" class="input" name="name" v-model="name">

                <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>

            </div>

            <div class="control">

                <label for="description" class="label">Descrição do Projeto</label>

                <input type="text" id="description" class="input" name="description" v-model="description">

                <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>

            </div>

            <div class="control">

                <button class="button is-primary margin-top" :disabled="errors.any()">Guardar</button>

            </div>
        </form>
    </div>


    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>
