import {Injectable} from 'angular2/core';
import {Http, Headers, Response, URLSearchParams} from 'angular2/http';
import 'rxjs/Rx'; // to use map function

@Injectable()
export class InstagramService {

    constructor(public http:Http) {

    }

    getMostRecent (num : number) {
        var info = {
            client_id : 'aaa79cb32b094331ac3877dd6d8e01d4',
            count : num
        }
        var userId = '192561481';
        var headers = new Headers();
        var searchParams = new URLSearchParams();
        searchParams.append('client_id', info.client_id);

        return this.http.get(`https://api.instagram.com/v1/users/${userId}/media/recent`, {
            headers : headers,
            search : searchParams
        }).map((res) => {
            debugger
            res = res.json();
            return res;
        })
    }
}
