import {Component} from 'angular2/core';
import {Engineer} from './engineer.component';

import {BrianService} from './brian.service';

@Component ({
    selector : 'faces',
    directives : [Engineer],
    providers : [BrianService],
    template : `
        <div class="intro">
            
        </div>
        <engineer></engineer>

    `
})

export class Faces {
    constructor () {

    }
}
