import {Component} from 'angular2/core';

import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'headerbar',
    template : `
        <div class="headerbar-name">
            <p>Brian Lee</p>
        </div>
        <ul class="headerbar-options">
            <li (click)="scrollTo('intro')">Intro</li>
            <li (click)="scrollTo('projects')">Projects</li>
            <li (click)="scrollTo('instagram')">Instagram</li>


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
