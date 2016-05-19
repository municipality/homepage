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
                <div class="ig-image" *ngFor="#image of images">
                    <img (load)="loaded()" src={{image.url}}>
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

    constructor (private instagramService : InstagramService) {
        this.images = [];
        this.mostRecent = 3;
        this.igItems = [];
        this.loadCounter = 0;
        this.showLoadingMask = true;
    }

    ngOnInit () {
        this.instagramService.getMostRecent()
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
