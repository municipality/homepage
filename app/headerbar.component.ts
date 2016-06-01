import {Component} from 'angular2/core';

@Component({
    selector : 'headerbar',
    template : `
        <div class="headerbar-name">
            <p>Brian Lee</p>
        </div>
        <div class="headerbar-options">
        <!-- From bottom to top because using float: right -->
            <p (click)="scrollTo('instagram')">Instagram</p>
            <p (click)="scrollTo('projects')">Projects</p>
            <p (click)="scrollTo('intro')">Intro</p>
        </div>
    `
})
export class Headerbar {
    constructor () {

    }

    scrollTo (id) {
        var item:any = document.getElementById(id);
        var rect = item.getBoundingClientRect();
        var body = document.body;
        var html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        var scroll = () => {
            var item:any = document.getElementById(id);
            var rect = item.getBoundingClientRect();
            if(window.pageYOffset + window.innerHeight < height && rect.top > 0) {
                setTimeout(() => {
                    window.scrollBy(0, 50);
                    scroll();
                }, .1);

            }
            else if (rect.top < -50) {
                setTimeout(() => {
                    window.scrollBy(0, -50);
                    scroll();
                }, .1);
            }

        }
        scroll();
    }
}
