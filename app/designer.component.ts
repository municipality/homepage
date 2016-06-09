import {Component, OnInit} from 'angular2/core';

import {BrianService} from './brian.service';
import {EngineerService} from './engineer.service';

@Component ({
    selector : 'designer',
    providers: [EngineerService],
    template : `
        <div class="container designer-container panel-size">
            <img #bgimage class="intro-image designer-intro-image" src="images/designer-bg.jpg">
            <div *ngIf="currentPanel != 0" class="arrow arrow-left"
                (click)="handlePanel('back', bgimage, container)">
                <img src="images/icons/left-arrow.png">
            </div>
            <div *ngIf="currentPanel != panels.length - 1" class="arrow arrow-right"
                (click)="handlePanel('forward', bgimage, container)">
                <img src="images/icons/right-arrow.png">
            </div>
            <div #container class="inner-container designer-inner-container">
                <div class="panel designer-panel intro panel-size">

                    <div class="title">
                        <p>Designer</p>
                    </div>
                    <div class="flex left">

                    </div>
                    <div class="flex right">

                    </div>
                </div>
                <div class="panel designer-panel projects panel-size">
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

export class Designer implements OnInit {
    innerContainer;
    panels;
    currentPanel;
    projects;
    constructor (private brianService:BrianService, private engineerService : EngineerService) {
        this.projects = [];
    }

    ngOnInit () {

        this.getProjects();

        this.panels = document.getElementsByClassName("designer-panel");
        this.innerContainer = document.getElementsByClassName("designer-inner-container")[0];
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

    handlePanel (direction, bgImage, container) {
        //direction = back || forward
        if(direction == "back")
        {
            this.currentPanel--;
            this.brianService.toPrevPanel(container);
            if(this.currentPanel == 0) {
                bgImage.style["z-index"] = "0";
            }
        }
        else {
            this.currentPanel++;
            this.brianService.toNextPanel(container);
            bgImage.style["z-index"] = "2";
        }
    }
}
