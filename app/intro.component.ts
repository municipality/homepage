import {Component, OnInit} from 'angular2/core';
import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'intro',
    template : `
        <div class="intro-container">
            <img #image (load)="imageLoaded(image)" class="intro-image" src="images/image1.jpg">
            <div class="intro-box">
                <p class="intro-box-header">Inspire Individuality</p>
            </div>
            <div class="intro-box">
                <p class="intro-box-header">Always Be Learning</p>
            </div>
            <div class="intro-box">
                <p class="intro-box-header">Change the World</p>
            </div>
        </div>
        <div class="outro-container">
            <div class="outro-panel first">
                <div class="outro-intro">

                </div>
                <div class="outro-inner-panel right">
                    <div>
                        <h2>Testing</h2>
                        <p>Testing More</p>
                        <p>Testing Complete.</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel left">
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel center">

                </div>
            </div>
        </div>
    `
})

export class Intro implements OnInit {
    image : HTMLElement;

    constructor (private scrollingService : ScrollingService) {

    }

    ngOnInit () {

    }

    imageLoaded(image) {
        //Parallax implementation
        this.image = image;
        var me = this;
        // document.addEventListener("scroll", (e) => {
        //     if(me.scrollingService.isInViewport(me)) {
        //         me.image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
        //         console.log("scrolling");
        //     }
        //
        // });
    }
}
