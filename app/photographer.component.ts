import {Component, OnInit} from 'angular2/core';

import {BrianService} from './brian.service';

@Component ({
    selector : 'photographer',
    template : `
        <div class="container photographer-container panel-size">
            <div *ngIf="currentPanel != 0" class="arrow arrow-left"
                (click)="brianService.toPrevPanel(container)" (click)="currentPanel=currentPanel-1">
                <img src="images/icons/left-arrow.png">
            </div>
            <div *ngIf="currentPanel != panels.length - 1" class="arrow arrow-right"
                (click)="brianService.toNextPanel(container)" (click)="currentPanel=currentPanel+1">
                <img src="images/icons/right-arrow.png">
            </div>
            <div #container class="inner-container photographer-inner-container">
                <div class="panel photographer-panel intro panel-size">
                    <div class="title">
                        <p>Photographer</p>
                    </div>
                </div>
                <div class="panel photographer-panel outro panel-size">

                </div>
            </div>
        </div>
    `
})

export class Photographer implements OnInit {
    panels;
    innerContainer;
    currentPanel;
    constructor (private brianService:BrianService) {

    }

    ngOnInit () {
        this.panels = document.getElementsByClassName("photographer-panel");
        this.innerContainer = document.getElementsByClassName("photographer-inner-container")[0];
        this.currentPanel = 0;

        var panelWidth = this.innerContainer.parentElement.offsetWidth;

        this.innerContainer.style.width = panelWidth * this.panels.length + "px";

        window.addEventListener("resize", (e) => {
            panelWidth = this.innerContainer.parentElement.offsetWidth;
            this.innerContainer.style.width = panelWidth * this.panels.length + "px";
            this.innerContainer.style.left = panelWidth * this.currentPanel * -1 + "px";
        });

        document.addEventListener("scroll", this.onScroll);
        }

        onScroll (event) {

        };
}
