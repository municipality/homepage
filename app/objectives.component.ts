import {Component, OnInit} from 'angular2/core';
import {ScrollingService} from './scrolling.service';
import {MobileService} from './mobile.service';

@Component({
    selector : 'objectives',
    template : `
        <div class="outro-container">

            <div class="title">
                <h2 align="center" class="blue">Objectives</h2>
            </div>
            <div class="outro-panel first">

                <div class="outro-inner-panel right">
                    <div>
                        <h2>Influence</h2>
                        <p>Positively influence my surroundings and peers</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel left">
                    <div>
                        <h2>Connect</h2>
                        <p>Unite others through positive attitude and friendly vibes</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel right">
                    <div>
                        <h2>Inspire</h2>
                        <p>Be a role model amongst peers and inspire others</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel center">
                    <div>
                        <h2>Change the World</h2>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class Objectives implements OnInit {
    outroImage;
    loaded = false;

    loadedCount = 0;
    imageCount = 3;
    container;
    outroImage1;
    outroImage2;
    moon;
    panels;
    constructor (private scrollingService : ScrollingService,
                 private mobileService : MobileService) {

    }

    ngOnInit () {
        var panel;
        document.addEventListener("scroll", (e) => {
            if(this.panels == null || this.panels.length == 0) {
                this.panels = document.getElementsByClassName("outro-panel");
                panel = this.panels[this.panels.length/2];
            }

            if (this.container == null) {
                this.container = document.getElementsByClassName("outro-container")[0];
            }

            if (panel.getBoundingClientRect().top > 0) {
                this.container.style["background-image"] = "url(images/outro1.jpg)";
            }
            else {
                this.container.style["background-image"] = "url(images/outro2.jpg)";
            }

            if(!this.mobileService.isMobile()) {

            }
        });

    }

    outroImageLoaded(image, dreamImage, moon) {
        if(this.loaded) return;

        this.outroImage1 = image;
        this.outroImage2 = dreamImage;
        this.moon = moon;
        this.loadedCount++;

        if(this.loadedCount == this.imageCount) {
            this.allLoaded();
        }
    }

    allLoaded () {
        if(this.loaded) return;
        this.loaded = true;


    }

}
