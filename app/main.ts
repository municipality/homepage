import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';

import {Wall} from './wall.component';
import {Headerbar} from './headerbar.component';
import {Tetris} from './tetris.component';

import {ScrollingService} from './scrolling.service';
import {MobileService} from './mobile.service';

@Component ({
    selector : 'app',
    directives : [Wall, Headerbar, Tetris],
    providers : [Http, HTTP_BINDINGS],
    template : `
        <headerbar></headerbar>
        <wall></wall>
        <div id="ig-popup-container">
            <img id="ig-popup" src="images/sample.jpg">
        </div>
    `
})

class App implements OnInit{
    constructor () {

    }

    ngOnInit () {

    }
}



bootstrap(App, [ScrollingService, MobileService]);
