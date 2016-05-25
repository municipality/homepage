import {Component} from 'angular2/core';

@Component({
    selector : 'projects',
    template : `
        <p class="section-header">Recent Projects</p>
        <div class="project">
            <img class="project-image" src="images/sample.jpg">
            <p class="project-title">Sample Text</p>
        </div>
    `
})

export class Projects {
    constructor () {

    }
}
