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
                    <img *ngIf="!last" (load)="loaded()" src={{image.url}}>
                    <a *ngIf="last" href="http://instagram.com/{{username}}" target="_blank">
                        <img class="ig-last-recent" (load)="loaded()" src={{image.url}}>
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
        this.mostRecent = 4;
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
        }
    }

}
