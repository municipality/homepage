System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var InstagramService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            InstagramService = (function () {
                function InstagramService(http) {
                    this.http = http;
                }
                InstagramService.prototype.getMostRecent = function (username) {
                    var url = "http://municipality.herokuapp.com/api/instagram-recents";
                    var headers = new http_1.Headers();
                    var search = new http_1.URLSearchParams();
                    search.append('username', username);
                    //let url = `http://localhost:3000/api/instagram-recents`;
                    return this.http.get(url, {
                        search: search
                    })
                        .map(function (response) {
                        if (response.status === 200) {
                            return response.json();
                        }
                        else {
                            throw new Error("No response from instagram");
                        }
                    });
                };
                InstagramService = __decorate([
                    // to use map function
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InstagramService);
                return InstagramService;
            }());
            exports_1("InstagramService", InstagramService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSwwQkFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU1QixDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBZSxRQUFlO29CQUMxQixJQUFJLEdBQUcsR0FBRyx5REFBeUQsQ0FBQztvQkFDcEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNwQywwREFBMEQ7b0JBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsTUFBTSxFQUFHLE1BQU07cUJBQ2xCLENBQUM7eUJBQ0YsR0FBRyxDQUFDLFVBQUMsUUFBUTt3QkFDVixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNsRCxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUM7Z0JBekJMO29CQUZrQixzQkFBc0I7b0JBRXZDLGlCQUFVLEVBQUU7O29DQUFBO2dCQTBCYix1QkFBQztZQUFELENBQUMsQUF6QkQsSUF5QkM7WUF6QkQsK0NBeUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7IC8vIHRvIHVzZSBtYXAgZnVuY3Rpb25cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc3RhZ3JhbVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCkge1xuXG4gICAgfVxuXG4gICAgZ2V0TW9zdFJlY2VudCAodXNlcm5hbWU6c3RyaW5nKSB7XG4gICAgICAgIGxldCB1cmwgPSBgaHR0cDovL211bmljaXBhbGl0eS5oZXJva3VhcHAuY29tL2FwaS9pbnN0YWdyYW0tcmVjZW50c2A7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgdmFyIHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgc2VhcmNoLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgICAgIC8vbGV0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2luc3RhZ3JhbS1yZWNlbnRzYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaCA6IHNlYXJjaFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmcm9tIGluc3RhZ3JhbVwiKTtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==