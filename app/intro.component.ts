import {Component, OnInit} from 'angular2/core';
import {ScrollingService} from './scrolling.service';

@Component({
    selector : 'intro',
    template : `
        <div class="intro-container">
            <div #image class="intro-image-container" style="background-image: url('images/brian-blurred.jpg');">
                <img (load)="introImageLoaded(image)" src='images/brian-blurred.jpg' style="display:none;">
            </div>
            <div class="intro-icon-container">
                <img class="intro-icon" src="images/brian-icon-2.png">
            </div>
            <div class="titles-container">
                <div class="titles">
                    <h2 class="blue">Software Engineer</h2>
                    <h2 class="white">Designer</h2>
                    <h2 class="blue">Dreamer</h2>
                </div>
            </div>
        </div>
    `
})

export class Intro implements OnInit {
    introImage;
    loaded = false;

    introContainer;

    introImage1;


    constructor (private scrollingService : ScrollingService) {

    }

    ngOnInit () {

    }

    introImageLoaded(image) {
        //Get rid of app loading mask
        document.getElementById("app-loading-mask").style.display = "none";
        //Parallax implementation
        this.introImage1 = image;
        var me = this;
        if(image.style.bottom == "") {
            image.style.bottom = '0px';
        }
        var intro;
        if(intro == null) {
            intro = document.getElementsByClassName("intro-container")[0];
            this.introContainer = intro;
        }
        intro.style.height = window.innerHeight + "px";
        image.style.height = window.innerHeight + "px";
        document.addEventListener("scroll", (e) => {
            if(intro && me.scrollingService.isInViewport(intro)) {
                image.style.bottom = (-1 * Math.floor(window.pageYOffset * .3)) + "px";
            }

        });
    }


}
