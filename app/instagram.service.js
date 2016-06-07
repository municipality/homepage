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
                    return this.http.get(url, {
                        search: search
                    })
                        .map(function (response) {
                        if (response.status === 200) {
                            return response.json();
                        }
                        else {
                            throw new Error("No response from municipality.herokuapp.com");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSwwQkFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU1QixDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBZSxRQUFlO29CQUMxQixJQUFJLEdBQUcsR0FBRyx5REFBeUQsQ0FBQztvQkFDcEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO3dCQUNkLE1BQU0sRUFBRyxNQUFNO3FCQUNsQixDQUFDO3lCQUNGLEdBQUcsQ0FBQyxVQUFDLFFBQVE7d0JBQ1YsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQzt3QkFDbkUsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDO2dCQXhCTDtvQkFGa0Isc0JBQXNCO29CQUV2QyxpQkFBVSxFQUFFOztvQ0FBQTtnQkF5QmIsdUJBQUM7WUFBRCxDQUFDLEFBeEJELElBd0JDO1lBeEJELCtDQXdCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvUngnOyAvLyB0byB1c2UgbWFwIGZ1bmN0aW9uXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcblxuICAgIH1cblxuICAgIGdldE1vc3RSZWNlbnQgKHVzZXJuYW1lOnN0cmluZykge1xuICAgICAgICBsZXQgdXJsID0gYGh0dHA6Ly9tdW5pY2lwYWxpdHkuaGVyb2t1YXBwLmNvbS9hcGkvaW5zdGFncmFtLXJlY2VudHNgO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIHZhciBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHNlYXJjaC5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoIDogc2VhcmNoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gbXVuaWNpcGFsaXR5Lmhlcm9rdWFwcC5jb21cIik7XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=