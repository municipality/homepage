import {Component, OnInit} from 'angular2/core';


import {Instagram} from './instagram.component';
import {Projects} from './projects.component';

import {Intro} from './intro.component';



@Component({
    selector : 'wall',
    directives : [Instagram, Projects, Intro],
    template : `
            <intro></intro>
            <div class="blank-block"></div>
            <projects></projects>
            <instagram></instagram>
    `
})
export class Wall implements OnInit {
    intro;
    outro;
    constructor () {

    }
    /*
      Called right after the directive's data-bound properties have been checked
      for the first time
     */
    ngOnInit () {

    }
}
