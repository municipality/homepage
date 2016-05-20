import {Component, OnInit} from 'angular2/core';


import {Instagram} from './instagram.component';
import {Projects} from './projects.component';

@Component({
    selector : 'wall',
    directives : [Instagram, Projects],
    template : `
        <div class="wall-container">
            <projects></projects>
            <instagram></instagram>
        </div>
    `
})
export class Wall implements OnInit {

    constructor () {
    }
    /*
      Called right after the directive's data-bound properties have been checked
      for the first time
     */
    ngOnInit () {

    }
}
