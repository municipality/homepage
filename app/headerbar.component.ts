import {Component} from 'angular2/core';

import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'headerbar',
    template : `
        <img class="logo" src="images/logo.png">
        <ul class="headerbar-options">
            <li (click)="scrollTo('intro')">Intro</li>
            <li (click)="scrollTo('brian')">Facets</li>
        </ul>
    `
})
export class Headerbar {
    constructor (private scrollingService : ScrollingService) {

    }

    scrollTo (id) {
        this.scrollingService.scrollTo(id);
    }
}
