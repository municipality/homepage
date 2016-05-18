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
                    var info = {
                        client_id: 'aaa79cb32b094331ac3877dd6d8e01d4',
                        count: num
                    };
                    var userId = '192561481';
                    var headers = new http_1.Headers();
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.append('client_id', info.client_id);
                    return this.http.get("https://api.instagram.com/v1/users/" + userId + "/media/recent", {
                        headers: headers,
                        search: searchParams
                    }).map(function (res) {
                        debugger;
                        res = res.json();
                        return res;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSwwQkFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU1QixDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBZSxHQUFZO29CQUN2QixJQUFJLElBQUksR0FBRzt3QkFDUCxTQUFTLEVBQUcsa0NBQWtDO3dCQUM5QyxLQUFLLEVBQUcsR0FBRztxQkFDZCxDQUFBO29CQUNELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQztvQkFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7b0JBQ3pDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdDQUFzQyxNQUFNLGtCQUFlLEVBQUU7d0JBQzlFLE9BQU8sRUFBRyxPQUFPO3dCQUNqQixNQUFNLEVBQUcsWUFBWTtxQkFDeEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7d0JBQ1AsUUFBUSxDQUFBO3dCQUNSLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkF6Qkw7b0JBRmtCLHNCQUFzQjtvQkFFdkMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBMEJiLHVCQUFDO1lBQUQsQ0FBQyxBQXpCRCxJQXlCQztZQXpCRCwrQ0F5QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JzsgLy8gdG8gdXNlIG1hcCBmdW5jdGlvblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBnZXRNb3N0UmVjZW50IChudW0gOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICBjbGllbnRfaWQgOiAnYWFhNzljYjMyYjA5NDMzMWFjMzg3N2RkNmQ4ZTAxZDQnLFxuICAgICAgICAgICAgY291bnQgOiBudW1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdXNlcklkID0gJzE5MjU2MTQ4MSc7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgdmFyIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZCgnY2xpZW50X2lkJywgaW5mby5jbGllbnRfaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGBodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzLyR7dXNlcklkfS9tZWRpYS9yZWNlbnRgLCB7XG4gICAgICAgICAgICBoZWFkZXJzIDogaGVhZGVycyxcbiAgICAgICAgICAgIHNlYXJjaCA6IHNlYXJjaFBhcmFtc1xuICAgICAgICB9KS5tYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJlcyA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==