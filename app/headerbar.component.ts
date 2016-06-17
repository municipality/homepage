import {Component} from 'angular2/core';

import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'headerbar',
    template : `
        <div class="bar">
            <img class="logo" src="images/logo.png">
            <img class="burger" (click)="handleMenu(menu)"
            src="images/icons/burger.png">
        </div>
        <div #menu class="menu">
            <div class="menu-container">
                <div class="menu-item" *ngFor="#item of menuItems" (click)="scrollTo(item.id)">
                    <p align="center" class="{{item.id}}">{{item.name}}</p>
                </div>
            </div>
        </div>
    `
})
export class Headerbar {
    isMenuShowing : boolean;
    menuItems : any[];
    menu;
    constructor (private scrollingService : ScrollingService) {
        this.isMenuShowing = false;
        this.menuItems = [
            {
                id: "intro",
                name: "Who I Am"
            },
            {
                id: "objectives",
                name: "Objectives"
            },
            {
                id: "faces",
                name: "Faces"
            },
            {
                id: "media",
                name: "Social Media"
            },
            {
                id: "footer",
                name: "Contact"
            }
        ];
    }

    scrollTo (id) {
        this.scrollingService.scrollTo(id);
        this.handleMenu(this.menu);
    }

    handleMenu (menu) {
        if(!this.menu) {
            this.menu = menu;
        }
        if(!this.isMenuShowing) {
            menu.style.right = 0;
        }
        else {
            menu.style.right = "";
        }


        this.isMenuShowing = !this.isMenuShowing;
    }
}
