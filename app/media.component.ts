import {Component, OnInit} from 'angular2/core';

import {Instagram} from './instagram.component';

@Component({
    selector : 'social',
    directives: [Instagram],
    template : `
        <div class="intro">
            <div class="section-header">
                <h2 align="center" class="white">Social Media</h2>
            </div>
        </div>
        <div class="tabs">
            <div *ngFor="#item of tabs" [ngClass]="{selected: (selected == item.name)}"
            (click)="tabClick(item)">
                <img src={{item.src}}>
            </div>
        </div>
        <div class="container">
            <instagram *ngIf="selected =='instagram'"></instagram>
        </div>
    `
})

export class Social implements OnInit{
    tabs = [
        {
            name: "instagram",
            src: "images/icons/instagram-icon.png"
        },
        {
            name: "instagram-test",
            src: "images/icons/instagram-icon.png"
        }
    ];
    selected;

    constructor () {
        this.selected = this.tabs[0]["name"];
    }

    ngOnInit () {

    }

    tabClick(tab) {
        this.selected = tab.name;
    }
}
