import {Component} from 'angular2/core';

@Component({
    selector : 'headerbar',
    template : `
        <div class="headerbar-name">
            <p>Brian Lee</p>
        </div>
        <div class="headerbar-options">
            <p>Recent Projects</p>
            <p>Instagram</p>
        </div>
    `
})
export class Headerbar {
    constructor () {

    }
}
