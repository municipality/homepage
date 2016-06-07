import {Component} from 'angular2/core';

@Component ({
    selector : 'footer',
    template : `
        <div class="container">
            <div class="cell logo">
            </div>
            <div class="cell">
                <p>Software Engineer</p>
                <p>Photographer</p>
            </div>
            <div class="cell">
                <h4>Contact</h4>
                <a class="email" href="mailto:ucsdblee@gmail.com">ucsdblee@gmail.com</a>
            </div>
            <div class="cell">
                <h4>Follow My Ventures</h4>
            </div>
        </div>
    `
})

export class Footer {

    constructor () {

    }
}
