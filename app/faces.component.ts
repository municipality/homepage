import {Component, OnInit} from 'angular2/core';
import {Engineer} from './engineer.component';
import {Designer} from './designer.component';

import {BrianService} from './brian.service';
import {MobileService} from './mobile.service';

@Component ({
    selector : 'faces',
    directives : [Engineer, Designer],
    providers : [BrianService],
    template : `
        <div class="intro">

        </div>
        <engineer></engineer>
        <designer></designer>

    `
})

export class Faces implements OnInit {
    constructor (private mobileService : MobileService) {

    }

    ngOnInit () {
        if (!this.mobileService.isMobile()) {
            var facesContainers = document.getElementsByClassName("face");
            for (let i = 0; i < facesContainers.length; i++) {
                facesContainers[i].className += " desktop";
            }
        }
    }
}
