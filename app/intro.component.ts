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
            <img #image2 class="outro-image" (load)="outroImageLoaded(image2)" src="images/outro1.jpg">
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
    introImage;
    outroImage;
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
                image.style.bottom = -1 * window.pageYOffset * .5 + "px";
                console.log("scrolling");
            }

        });
    }

    outroImageLoaded(image) {
        var imageTop = 0, imageLeft=0;
        var me = this;
        if(image.style.top == "") {
            image.style.top = '0px';
            image.style.left = "0px";
        }
        var ycheck = image.y;
        var outro;
        this.outroImage = image;
        document.addEventListener("scroll", (e) => {
            if(outro == null) {
                outro = document.getElementsByClassName("outro-container")[0];
            }

            if(outro && me.scrollingService.isInViewport(outro)) {
                console.log("outro scroll")

                if(window.pageYOffset > ycheck) {
                    this.outroImage.style.top = imageTop + (window.pageYOffset - ycheck) + 'px';
                } else if(window.pageYOffset < ycheck) {
                    this.outroImage.style.top = "0px";
                }

                this.outroImage.style.left = imageLeft - (window.pageYOffset * .4) + 'px';
            }
        });
    }
}
