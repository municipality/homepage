import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';

import {Wall} from './wall.component';


@Component ({
    selector : 'app',
    directives : [Wall],
    providers : [Http, HTTP_BINDINGS],
    template : `
        <div class="background">
            <div class="left-side"></div>
            <div class="right-side"></div>
            <wall></wall>
        </div>



    `
})

class App implements OnInit{
    constructor () {

    }

    ngOnInit () {

    }
}



bootstrap(App);
