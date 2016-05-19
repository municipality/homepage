import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {Instagram} from './instagram.component';

@Component ({
    selector : 'app',
    directives : [Instagram],
    providers : [Http, HTTP_BINDINGS],
    template : `
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
