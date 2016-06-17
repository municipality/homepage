import {Component} from 'angular2/core';

@Component ({
    selector : 'footer',
    template : `
        <div class="container">
            <div class="logo cell">
                <img class="logo logo-image" src="images/logo.png">
            </div>
                <div class="cell">
                    <p>Software Engineer</p>
                    <p>Designer</p>
                </div>
                <div class="cell">
                    <h4>Contact</h4>
                    <a class="email link" href="mailto:ucsdblee@gmail.com">ucsdblee@gmail.com</a>
                </div>
                <div class="cell">
                    <h4>Follow My Ventures</h4>
                    <a class="ig-name link" href="http://instagram.com/best_blee_it" target="_blank"><img class="ventures-icon" src='images/icons/instagram-icon.png'>@best_blee_it</a>
                    <a class="linkedin-name link" href="http://linkedin.com/in/bleee" target="_blank"><img class="ventures-icon" src="images/icons/linkedin-icon.png">@bleee</a>
                </div>
        </div>
        <div class="last-line">
            <p>&copy;Brian Lee</p>
            <p>Built with Angular2</p>
        </div>
    `
})

export class Footer {

    constructor () {

    }
}
