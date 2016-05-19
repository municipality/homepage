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
                InstagramService.prototype.getMostRecent = function (num) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSwwQkFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU1QixDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBZSxHQUFZO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUM7eUJBQzNELEdBQUcsQ0FBQyxVQUFDLFFBQVE7d0JBQ1YsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzt3QkFDbEQsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDO2dCQWxCTDtvQkFGa0Isc0JBQXNCO29CQUV2QyxpQkFBVSxFQUFFOztvQ0FBQTtnQkFtQmIsdUJBQUM7WUFBRCxDQUFDLEFBbEJELElBa0JDO1lBbEJELCtDQWtCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvUngnOyAvLyB0byB1c2UgbWFwIGZ1bmN0aW9uXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcblxuICAgIH1cblxuICAgIGdldE1vc3RSZWNlbnQgKG51bSA6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbnN0YWdyYW0tcmVjZW50c2ApXG4gICAgICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmcm9tIGluc3RhZ3JhbVwiKTtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==