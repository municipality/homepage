import {Component, OnInit, AfterViewInit} from 'angular2/core';

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
            <instagram [style.display]="selected =='instagram' ? 'block' : 'none'"></instagram>
        </div>
    `
})

export class Social implements OnInit, AfterViewInit{
    tabs = [
        {
            name: "instagram",
            src: "images/icons/instagram-icon.png"
        }
    ];
    selected;

    constructor () {
        this.selected = this.tabs[0]["name"];
    }

    ngOnInit () {

    }

    ngAfterViewInit () {

    }

    tabClick(tab) {
        this.selected = tab.name;
    }
}
