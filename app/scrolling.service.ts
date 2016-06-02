import {Injectable} from 'angular2/core';

@Injectable()
export class ScrollingService {
    constructor () {

    }

    isInViewport (component) {
        var rect = component.getBoundingClientRect();
            //rect.top is distance from top in perspective to viewport
            //window.innerheight is viewport size
            return ( rect.top < window.innerHeight && rect.bottom > 0
                // rect.top >= 0 &&
                // rect.left >= 0 &&
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            );
    }


    /**
        @param id : element to scroll to id
     */
    scrollTo (id) {
        var scrollAmt = 50;
        var item:any = document.getElementById(id);
        var rect = item.getBoundingClientRect();
        var body = document.body;
        var html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        var scroll = () => {
            var item:any = document.getElementById(id);
            var rect = item.getBoundingClientRect();

            //Need to scroll down to element
            if(window.pageYOffset + window.innerHeight < height && rect.top > 0) {
                if(rect.top <= scrollAmt) {
                    setTimeout(() => {
                        window.scrollBy(0, rect.top);
                    }, .1);
                } else {
                    setTimeout(() => {
                        window.scrollBy(0, scrollAmt);
                        scroll();
                    }, .1);
                }


            }

            //Need to scroll up to element
            else if (rect.top < 0) {
                if(rect.top > -1*scrollAmt) {
                    setTimeout(() => {
                        window.scrollBy(0, rect.top);
                    }, .1);
                }
                else {
                    setTimeout(() => {
                        window.scrollBy(0, -1*scrollAmt);
                        scroll();
                    }, .1);
                }
            }

        }
        scroll();
    }

}
