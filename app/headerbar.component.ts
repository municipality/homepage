import {Component} from 'angular2/core';

import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'headerbar',
    template : `
        <div class="headerbar-name">
            <p>Brian Lee</p>
        </div>
        <div class="headerbar-options">
        <!-- From bottom to top because using float: right -->
            <p (click)="scrollTo('instagram')">Instagram</p>
            <p (click)="scrollTo('projects')">Projects</p>
            <p (click)="scrollTo('intro')">Intro</p>
        </div>
    `
})
export class Headerbar {
    constructor (private scrollingService : ScrollingService) {

    }

    scrollTo (id) {
        this.scrollingService.scrollTo(id);
    }
}
