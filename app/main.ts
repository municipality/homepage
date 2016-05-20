import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';

import {Instagram} from './instagram.component';
import {Projects} from './projects.component';

@Component ({
    selector : 'app',
    directives : [Instagram, Projects],
    providers : [Http, HTTP_BINDINGS],
    template : `
        <projects></projects>
        <instagram></instagram>
    `
})

class App implements OnInit{
    constructor () {

    }

    ngOnInit () {

    }
}



bootstrap(App);
