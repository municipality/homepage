import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

@Injectable()
export class EngineerService {

    constructor (private http:Http) {

    }

    getProjects () {
        return [
                    {
                        title : 'Photo Wall',
                        url : 'http://brians-photo-wall.herokuapp.com',
                        image : 'images/photo-wall.png'
                    },
                    {
                        title : 'About Brian Lee',
                        url : 'http://about-brian-lee.herokuapp.com',
                        image : 'images/about-brian-lee.png'
                    }
                ];
        // let url = `http://municipality.herokuapp.com/api/projects`;
        // return this.http.get(url)
        //        .map((response) => {
        //            if(response.status === 200) {
        //                return response.json();
        //            }
        //            else {
        //                throw new Error("No response from municipality.herokuapp.com");
        //            }
        //
        //        });
    }

    getSkillset () {
        return [
            //name: skill name
            //percent: percent mastery
            {
                name: "Javascript",
                percent: "80%"
            },
            {
                name: "Java",
                percent: "60%"
            },
            {
                name: "C",
                percent: "50%"
            },
            {
                name: "HTML",
                percent: "60%"
            },
            {
                name: "CSS",
                percent: "60%"
            }
        ];
    }
}
