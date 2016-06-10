System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var EngineerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            EngineerService = (function () {
                function EngineerService(http) {
                    this.http = http;
                }
                EngineerService.prototype.getProjects = function () {
                    return [
                        {
                            title: "Scroll Art",
                            url: "http://scrollart.herokuapp.com",
                            image: 'images/scroll-art.png'
                        },
                        {
                            title: 'Photo Wall',
                            url: 'http://brians-photo-wall.herokuapp.com',
                            image: 'images/photo-wall.png'
                        },
                        {
                            title: 'About Brian Lee',
                            url: 'http://about-brian-lee.herokuapp.com',
                            image: 'images/about-brian-lee.png'
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
                };
                EngineerService.prototype.getSkillset = function () {
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
                };
                EngineerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EngineerService);
                return EngineerService;
            }());
            exports_1("EngineerService", EngineerService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZ2luZWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFFSSx5QkFBcUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU5QixDQUFDO2dCQUVELHFDQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDO3dCQUVLOzRCQUNJLEtBQUssRUFBRyxZQUFZOzRCQUNwQixHQUFHLEVBQUcsZ0NBQWdDOzRCQUN0QyxLQUFLLEVBQUcsdUJBQXVCO3lCQUNsQzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsWUFBWTs0QkFDcEIsR0FBRyxFQUFHLHdDQUF3Qzs0QkFDOUMsS0FBSyxFQUFHLHVCQUF1Qjt5QkFDbEM7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGlCQUFpQjs0QkFDekIsR0FBRyxFQUFHLHNDQUFzQzs0QkFDNUMsS0FBSyxFQUFHLDRCQUE0Qjt5QkFDdkM7cUJBQ0osQ0FBQztvQkFDViw4REFBOEQ7b0JBQzlELDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwyQ0FBMkM7b0JBQzNDLHlDQUF5QztvQkFDekMsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGlGQUFpRjtvQkFDakYsZUFBZTtvQkFDZixFQUFFO29CQUNGLGFBQWE7Z0JBQ2pCLENBQUM7Z0JBRUQscUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUM7d0JBQ0gsa0JBQWtCO3dCQUNsQiwwQkFBMEI7d0JBQzFCOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLE1BQU07NEJBQ1osT0FBTyxFQUFFLEtBQUs7eUJBQ2pCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxHQUFHOzRCQUNULE9BQU8sRUFBRSxLQUFLO3lCQUNqQjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsTUFBTTs0QkFDWixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLEtBQUs7NEJBQ1gsT0FBTyxFQUFFLEtBQUs7eUJBQ2pCO3FCQUNKLENBQUM7Z0JBQ04sQ0FBQztnQkFoRUw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBaUViLHNCQUFDO1lBQUQsQ0FBQyxBQWhFRCxJQWdFQztZQWhFRCw2Q0FnRUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW5naW5lZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMgKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiBcIlNjcm9sbCBBcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogXCJodHRwOi8vc2Nyb2xsYXJ0Lmhlcm9rdWFwcC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnaW1hZ2VzL3Njcm9sbC1hcnQucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdQaG90byBXYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJ2h0dHA6Ly9icmlhbnMtcGhvdG8td2FsbC5oZXJva3VhcHAuY29tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnaW1hZ2VzL3Bob3RvLXdhbGwucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdBYm91dCBCcmlhbiBMZWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiAnaHR0cDovL2Fib3V0LWJyaWFuLWxlZS5oZXJva3VhcHAuY29tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnaW1hZ2VzL2Fib3V0LWJyaWFuLWxlZS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAvLyBsZXQgdXJsID0gYGh0dHA6Ly9tdW5pY2lwYWxpdHkuaGVyb2t1YXBwLmNvbS9hcGkvcHJvamVjdHNgO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAvLyAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAvLyAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gbXVuaWNpcGFsaXR5Lmhlcm9rdWFwcC5jb21cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2tpbGxzZXQgKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC8vbmFtZTogc2tpbGwgbmFtZVxyXG4gICAgICAgICAgICAvL3BlcmNlbnQ6IHBlcmNlbnQgbWFzdGVyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IFwiODAlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJKYXZhXCIsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50OiBcIjYwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudDogXCI1MCVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkhUTUxcIixcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IFwiNjAlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDU1NcIixcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IFwiNjAlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuIl19