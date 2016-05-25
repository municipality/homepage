import {Component} from 'angular2/core';

@Component({
    selector : 'headerbar',
    template : `
        <div class="headerbar-name">
            <p>Brian Lee</p>
        </div>
        <div class="headerbar-options">
        <!-- From bottom to top because using float: right -->
            <p>Instagram</p>
            <p>Recent Projects</p>
        </div>
    `
})
export class Headerbar {
    constructor () {

    }
}
