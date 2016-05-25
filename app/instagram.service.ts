import {Injectable} from 'angular2/core';
import {Http, Headers, Response, URLSearchParams} from 'angular2/http';
import 'rxjs/Rx'; // to use map function

@Injectable()
export class InstagramService {

    constructor(public http:Http) {

    }

    getMostRecent (username:string) {
        let url = `http://municipality.herokuapp.com/api/instagram-recents`;
        var headers = new Headers();
        var search = new URLSearchParams();
        search.append('username', username);
        return this.http.get(url, {
                    search : search
                })
               .map((response) => {
                   if(response.status === 200) {
                       return response.json();
                   }
                   else {
                       throw new Error("No response from municipality.herokuapp.com");
                   }

               });
    }
}
