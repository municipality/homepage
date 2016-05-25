import {Component, OnInit} from 'angular2/core';
import {ProjectsService} from './projects.service';

@Component({
    selector : 'projects',
    providers : [ProjectsService],
    template : `
        <p class="section-header">Recent Projects</p>
        <div class="project">
            <img class="project-image" src="images/sample.jpg">
            <p class="project-title">Sample Text</p>
        </div>
    `
})

export class Projects implements OnInit {
    constructor (private projectsService:ProjectsService) {

    }

    ngOnInit () {
        this.projectsService.getProjects()
        .subscribe( (response) => {
            console.log(response);
        });
    }
}
