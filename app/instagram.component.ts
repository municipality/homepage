import {Component, OnInit} from 'angular2/core';
import {InstagramService} from './instagram.service';

@Component({
    selector : 'instagram',
    providers : [InstagramService],
    template : `
        <p class="section-header">Instagram</p>
        <div class="ig-container">
            <div *ngIf="showLoadingMask" class="ig-loading">
                <div class="ig-loading-tag">
                    <div class="loader"></div>
                </div>
            </div>
            <div class="ig-image-container">
                <div class="ig-image" *ngFor="#image of images; #last = last">
                    <img #im *ngIf="!last" class="hover-fade" (load)="loaded()" (click)="handleClick(im)" src={{image.url}}>
                    <a *ngIf="last" class="ig-last-recent" href="http://instagram.com/best_blee_it" target="_blank">
                        <img class="ig-last-recent-img" (load)="loaded()" src={{image.url}}>
                        <p class="ig-see-more">See more..</p>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class Instagram implements OnInit {

    images : string[];
    mostRecent : number;
    igItems : any[];
    loadCounter : number;
    showLoadingMask : boolean = true;
    username : string;

    constructor (private instagramService : InstagramService) {
        this.images = [];
        this.mostRecent = 6;
        this.igItems = [];
        this.loadCounter = 0;
        this.showLoadingMask = true;
        this.username = "best_blee_it";
    }

    ngOnInit () {
        this.instagramService.getMostRecent(this.username)
        .subscribe((response) => {
            console.log(response);
            //Set up the most recents
            this.igItems = response.items;
            for(let i = 0; i < this.mostRecent; i++) {
                //low_resolution , standard_resolution , thumbnail
                //640x640 , 320x320, 150,150
                this.images.push(this.igItems[i].images.thumbnail);

            }



        });
    }

    loaded () {
        this.loadCounter++;
        if (this.loadCounter == this.mostRecent) {
            this.showLoadingMask = false;
            document.getElementById("ig-popup-container").addEventListener("click", (e) => {
                document.getElementById("ig-popup-container").style.display = "none";
            })
        }
    }

    handleClick(image) {
        var container = document.getElementById("ig-popup-container");
        var imageElement:any = document.getElementById("ig-popup");
        imageElement.src = image.src;
        container.style.display = "block";
    }

}
