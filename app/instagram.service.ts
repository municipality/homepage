import {Injectable} from 'angular2/core';
import {Http, Headers, Response, URLSearchParams} from 'angular2/http';
import 'rxjs/Rx'; // to use map function

@Injectable()
export class InstagramService {

    constructor(public http:Http) {

    }

    getMostRecent (num : number) {
        return this.http.get(`http://localhost:3000/api/instagram-recents`)
               .map((response) => {
                   if(response.status === 200) {
                       return response.json();
                   }
                   else {
                       throw new Error("No response from instagram");
                   }

               });
    }
}
