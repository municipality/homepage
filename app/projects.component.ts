import {Component, OnInit} from 'angular2/core';
import {ProjectsService} from './projects.service';

@Component({
    selector : 'projects',
    providers : [ProjectsService],
    template : `
        <p class="section-header">Recent Projects</p>
        <div class="project" *ngFor="#project of projects">
            <a href={{project.url}} target="_blank">
                <img class="project-image" src="{{project.image}}">
                <p class="project-title">{{project.title}}</p>
            </a>
        </div>
    `
})

export class Projects implements OnInit {
    projects : any[];

    constructor (private projectsService:ProjectsService) {
        this.projects = [];
    }

    ngOnInit () {
        this.projectsService.getProjects()
        .subscribe( (response) => {
            console.log(response);
            if (response != null) {
                this.projects = response;
            }
            else {
                //Handle error
                alert("Cannot retrieve projects");
            }

        });
    }
}
