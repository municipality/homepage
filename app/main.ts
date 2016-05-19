import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable, OnInit} from 'angular2/core';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {InstagramService} from './instagram.service';

@Component ({
    selector : 'app',
    providers : [Http, HTTP_BINDINGS, InstagramService],
    template : `
    `
})

class App implements OnInit{
    constructor (private instagramService:InstagramService) {

    }

    ngOnInit () {
        this.instagramService.getMostRecent(3)
        .subscribe(res => {
            console.log(res);
        });
    }
}



bootstrap(App);
