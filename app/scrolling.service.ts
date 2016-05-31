import {Injectable} from 'angular2/core';

@Injectable()
export class ScrollingService {
    constructor () {

    }

    isInViewport (component) {
        var rect = component.getBoundingClientRect();

            return ( rect.top < window.pageYOffset + window.innerHeight && rect.bottom > 0
                // rect.top >= 0 &&
                // rect.left >= 0 &&
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            );
    }
}
