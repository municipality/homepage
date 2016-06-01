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
            <img #image2 class="outro-image" (load)="outroImageLoaded(image2, image3, moon)" src="images/outro1.jpg">
            <img #image3 class="outro-image" src="images/outro2.jpg">
            <img #moon class="outro-image moon" src="images/moon.png">
            <div class="outro-panel first">
                <div class="outro-intro">

                </div>
                <div class="outro-inner-panel right">
                    <div>
                        <h2>Inspire Individuality</h2>
                        <p>Stand out from the rest of the crowd.</p>
                        <p>Be the black sheep of the pack.</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel left">
                    <div>
                        <h2>Dream Big</h2>
                        <p>Aim high, and soar among the stars.</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel center">
                    <div>
                        <h2>Change the World</h2>
                        <p>The smallest ideas can have the biggest impact.</p>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class Intro implements OnInit {
    introImage;
    outroImage;
    loaded = false;
    constructor (private scrollingService : ScrollingService) {

    }

    ngOnInit () {

    }

    imageLoaded(image) {
        //Parallax implementation

        var me = this;
        if(image.style.bottom == "") {
            image.style.bottom = '0px';
        }
        var intro;
        this.introImage = image;
        document.addEventListener("scroll", (e) => {
            if(intro == null) {
                intro = document.getElementsByClassName("intro-container")[0];
            }
            if(intro && me.scrollingService.isInViewport(intro)) {
                image.style.bottom = -1 * window.pageYOffset * .2 + "px";
            }

        });
    }

    outroImageLoaded(image, dreamImage, moon) {
        if(!image || !dreamImage) return;
        if(this.loaded) return;
        this.loaded = true;

        dreamImage.style.opacity = 0;
        var moonBottom = 0;
        moon.style.bottom = "0px";
        var imageTop = 0, imageLeft=0;
        var me = this;
        if(image.style.top == "") {
            image.style.top = '0px';
            image.style.left = "0px";
        }
        var ycheck = image.y;
        var outro;
        var inspire = document.getElementsByClassName("outro-inner-panel")[0];
        var dream = document.getElementsByClassName("outro-inner-panel")[1];
        var change = document.getElementsByClassName("outro-inner-panel")[2];
        var isInViewport = this.scrollingService.isInViewport;
        var focus = inspire;
        var prevOffset = 0;
        var scroll = "";
        document.addEventListener("scroll", (e) => {
            if(window.pageYOffset > prevOffset) {
                scroll = "down";
            }
            else {
                scroll = "up";
            }
            prevOffset = window.pageYOffset;
            console.log(scroll);

            if(outro == null) {
                outro = document.getElementsByClassName("outro-container")[0];
            }

            if(outro && isInViewport(outro)) {
                if(window.pageYOffset > ycheck) {
                    image.style.top = imageTop + (window.pageYOffset - ycheck) + 'px';
                    dreamImage.style.top = imageTop + (window.pageYOffset - ycheck) + 'px';
                } else if(window.pageYOffset < ycheck) {
                    image.style.top = "0px";
                    dreamImage.style.top = "0px";
                }

                image.style.left = imageLeft - (window.pageYOffset * .1) + 'px';
                dreamImage.style.left = imageLeft - (window.pageYOffset * .05) + 'px';
            }
            if(scroll == "up") {
                if(isInViewport(inspire) && focus != inspire) {
                    focus = inspire;
                    image.style.opacity = 1;
                    dreamImage.style.opacity = 0;
                }
            }
            else {
                if(isInViewport(dream) && focus != dream) {
                    focus = dream;
                    image.style.opacity = 0;
                    dreamImage.style.opacity = 1;
                }
            }

            if(isInViewport(change)) {
                moon.style.bottom = moonBottom + ((window.pageYOffset-moon.x-moon.height) * .4);
            }



        });
    }

}
