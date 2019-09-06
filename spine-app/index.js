import {App} from './app/app.js';

/* Component */
class CustomEl extends HTMLElement {
    constructor() {
        super();

        new App({el: $("#customElId")});
    }
}

/* Registration */
customElements.define("custom-el", CustomEl);

