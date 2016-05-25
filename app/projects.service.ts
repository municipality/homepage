import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

@Injectable()
export class ProjectsService {

    constructor (private http:Http) {

    }

    getProjects () {
        let url = `http://municipality.herokuapp.com/api/projects`;
        return this.http.get(url)
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
