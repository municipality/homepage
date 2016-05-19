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
                    return this.http.get("http://localhost:3000/api/instagram-recents")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSwwQkFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU1QixDQUFDO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDO3lCQUMzRCxHQUFHLENBQUMsVUFBQyxRQUFRO3dCQUNWLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7d0JBQ2xELENBQUM7b0JBRUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQztnQkFsQkw7b0JBRmtCLHNCQUFzQjtvQkFFdkMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBbUJiLHVCQUFDO1lBQUQsQ0FBQyxBQWxCRCxJQWtCQztZQWxCRCwrQ0FrQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JzsgLy8gdG8gdXNlIG1hcCBmdW5jdGlvblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBnZXRNb3N0UmVjZW50ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaW5zdGFncmFtLXJlY2VudHNgKVxuICAgICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSBpbnN0YWdyYW1cIik7XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=