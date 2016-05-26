import {Component, OnInit} from 'angular2/core';


import {Instagram} from './instagram.component';
import {Projects} from './projects.component';
import {Headerbar} from './headerbar.component';
import {Intro} from './intro.component';


@Component({
    selector : 'wall',
    directives : [Instagram, Projects, Headerbar, Intro],
    template : `
            <headerbar></headerbar>
            <intro></intro>
            <projects></projects>
            <instagram></instagram>
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
