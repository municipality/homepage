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
                InstagramService.prototype.getMostRecent = function () {
                    var url = "http://municipality.herokuapp.com/api/instagram-recents";
                    //let url = `http://localhost:3000/api/instagram-recents`;
                    return this.http.get(url)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSwwQkFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU1QixDQUFDO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0ksSUFBSSxHQUFHLEdBQUcseURBQXlELENBQUM7b0JBQ3BFLDBEQUEwRDtvQkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDakIsR0FBRyxDQUFDLFVBQUMsUUFBUTt3QkFDVixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNsRCxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUM7Z0JBcEJMO29CQUZrQixzQkFBc0I7b0JBRXZDLGlCQUFVLEVBQUU7O29DQUFBO2dCQXFCYix1QkFBQztZQUFELENBQUMsQUFwQkQsSUFvQkM7WUFwQkQsK0NBb0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7IC8vIHRvIHVzZSBtYXAgZnVuY3Rpb25cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc3RhZ3JhbVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCkge1xuXG4gICAgfVxuXG4gICAgZ2V0TW9zdFJlY2VudCAoKSB7XG4gICAgICAgIGxldCB1cmwgPSBgaHR0cDovL211bmljaXBhbGl0eS5oZXJva3VhcHAuY29tL2FwaS9pbnN0YWdyYW0tcmVjZW50c2A7XG4gICAgICAgIC8vbGV0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2luc3RhZ3JhbS1yZWNlbnRzYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSBpbnN0YWdyYW1cIik7XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=