import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';

import {Wall} from './wall.component';
import {Headerbar} from './headerbar.component';
import {Tetris} from './tetris.component';

@Component ({
    selector : 'app',
    directives : [Wall, Headerbar, Tetris],
    providers : [Http, HTTP_BINDINGS],
    template : `
        <div class="background">
            <headerbar></headerbar>
            <tetris></tetris>
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
