Vue.component('task-list', {
    template:
    `
    <div>
        <task v-for="task in tasks">{{ task.description }}</task>
    </div>`,

    data() {
        return {
            tasks: [

                {description: 'Ir ate a loja', completed: false},
                {description: 'Estudar Vue', completed: true},
                {description: 'Jogar FuteVolei', completed: true},
                {description: 'Correr a noite', completed: false},
                {description: 'Conversar Com amigos', completed: true},
                {description: 'Comer bem durante o dia', completed: true},
                {description: 'Comer pouco durante a noite', completed: false},

            ],
        }
     }
})

Vue.component('task', {
    template:
    `<li>
        <slot>

        </slot>
    </li>`
})

new Vue({
    el: '#root'
})
