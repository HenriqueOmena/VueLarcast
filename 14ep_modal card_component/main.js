Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">

                <slot name="header"></slot>

            </p>
            <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot>
                    aqui vai qualquer texto default, caso queira um novo basta colocar direto no component no html
                </slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <button class="button">Cancel</button>
                </slot>
            </footer>
        </div>
    </div>
    `
})


new Vue({
    el: '#root'
});
