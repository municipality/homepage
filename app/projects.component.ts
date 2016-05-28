import {Component, OnInit} from 'angular2/core';
import {ProjectsService} from './projects.service';

@Component({
    selector : 'projects',
    providers : [ProjectsService],
    template : `
        <p class="section-header">Projects</p>


        <div class="projects-container">
            <div class="project" *ngFor="#project of projects">
                <a href={{project.url}} target="_blank">
                    <img class="project-image" src="{{project.image}}">
                    <p class="project-title">{{project.title}}</p>
                </a>
            </div>

        </div>
    `
})

export class Projects implements OnInit {
    projects : any[];

    constructor (private projectsService:ProjectsService) {
        this.projects = [
            // {
            //     title : 'Photo Wall',
            //     url : 'http://brians-photo-wall.herokuapp.com',
            //     image : 'images/photowall.jpg'
            // },
            // {
            //     title : 'About Me',
            //     url : 'http://about-brian-lee.herokuapp.com',
            //     image : 'images/aboutme.jpg'
            // }
        ];
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
