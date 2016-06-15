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
        <div class="faces-intro">
            <div class="section-header">
                <h2 align="center" class="blue">Faces</h2>
            </div>
        </div>
        <engineer [isDesktop]=isDesktop></engineer>
        <designer [isDesktop]=isDesktop></designer>

    `
})

export class Faces implements OnInit {
    constructor (private mobileService : MobileService) {

    }
    isDesktop = false;
    ngOnInit () {
        if (!this.mobileService.isMobile()) {
            this.isDesktop = true;
        }
    }
}
