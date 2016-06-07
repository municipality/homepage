import {Component, OnInit} from 'angular2/core';

import {BrianService} from './brian.service';
import {EngineerService} from './engineer.service';

@Component ({
    selector : 'engineer',
    providers: [EngineerService],
    template : `
        <div class="container engineer-container panel-size">
            <div *ngIf="currentPanel != 0" class="arrow arrow-left"
                (click)="brianService.toPrevPanel(container)" (click)="currentPanel=currentPanel-1">
                <img src="images/icons/left-arrow.png">
            </div>
            <div *ngIf="currentPanel != panels.length - 1" class="arrow arrow-right"
                (click)="brianService.toNextPanel(container)" (click)="currentPanel=currentPanel+1">
                <img src="images/icons/right-arrow.png">
            </div>
            <div #container class="inner-container engineer-inner-container">
                <div class="panel engineer-panel intro panel-size">
                    <img class="intro-image engineer-intro-image" src="images/engineer-bg.jpg">
                    <div class="title">
                        <p>Software Engineer</p>
                    </div>
                    <div class="flex left">

                    </div>
                    <div class="flex right">

                    </div>
                </div>
                <div class="panel engineer-panel skills panel-size">
                        <h2 class="header">Skillset</h2>
                        <div class="skillset-list">
                            <div class="skill" *ngFor="#skill of skillset">
                            <p>{{skill.name}}</p>
                                <div class="bar">

                                    <div class="inner-bar" style="width:{{skill.percent}}; "> </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    `
})

export class Engineer implements OnInit {
    innerContainer;
    panels;
    currentPanel;
    skillset;
    constructor (private brianService:BrianService, private engineerService : EngineerService) {
        this.skillset = [];
    }

    ngOnInit () {

        this.getSkillset();

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

    getSkillset () {
        this.skillset = this.engineerService.getSkillset();
    }
}
