import {Component, OnInit} from 'angular2/core';

import {BrianService} from './brian.service';

@Component ({
    selector : 'engineer',
    template : `
        <div class="container engineer-container panel-size">
            <div *ngIf="currentPanel != 0" class="arrow arrow-left"
                (click)="toPrevPanel(container)">
                <img src="images/icons/left-arrow.png">
            </div>
            <div *ngIf="currentPanel != panels.length - 1" class="arrow arrow-right"
                (click)="toNextPanel(container)">
                <img src="images/icons/right-arrow.png">
            </div>
            <div #container class="inner-container engineer-inner-container">
                <div class="panel engineer-panel intro panel-size">
                    <div class="title">
                        <p>Software Engineer</p>
                    </div>
                    <div class="flex left">

                    </div>
                    <div class="flex right">

                    </div>
                </div>
                <div class="panel engineer-panel projects panel-size">
                        <h2 class="header">Projects</h2>


                </div>
            </div>
        </div>
    `
})

export class Engineer implements OnInit {
    innerContainer;
    panels;
    currentPanel;
    constructor (private brianService:BrianService) {

    }

    ngOnInit () {
        this.panels = document.getElementsByClassName("engineer-panel");
        this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
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

    toNextPanel (component) {
        this.brianService.toNextPanel(component);
        this.currentPanel++;
    }

    toPrevPanel (component) {
        this.brianService.toPrevPanel(component);
        this.currentPanel--;
        if (this.currentPanel == 0) {

        }
    }
}
