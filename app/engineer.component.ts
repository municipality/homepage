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
                        <div class="projects-table">
                            <div *ngFor="#project of projects" class="projects-table-cell">
                                <a href={{project.url}} target="_blank">
                                    <img src="{{project.image}}">
                                </a>
                                <p align="center">{{project.title}}</p>
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
    projects;
    constructor (private brianService:BrianService, private engineerService : EngineerService) {
        this.projects = [];
    }

    ngOnInit () {

        this.getProjects();

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

    getProjects () {
        this.projects = this.engineerService.getProjects();
        // .subscribe( (response) => {
        //     console.log(response);
        //     if (response != null) {
        //         this.projects = response;
        //     }
        //     else {
        //         //Handle error
        //         alert("Cannot retrieve projects");
        //     }
        //
        // });
    }
}
