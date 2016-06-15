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
                            percent: 80
                        },
                        {
                            name: "Java",
                            percent: 60
                        },
                        {
                            name: "C",
                            percent: 50
                        },
                        {
                            name: "HTML",
                            percent: 60
                        },
                        {
                            name: "CSS",
                            percent: 60
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZ2luZWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFFSSx5QkFBcUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU5QixDQUFDO2dCQUVELHFDQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDO3dCQUVLOzRCQUNJLEtBQUssRUFBRyxZQUFZOzRCQUNwQixHQUFHLEVBQUcsZ0NBQWdDOzRCQUN0QyxLQUFLLEVBQUcsdUJBQXVCO3lCQUNsQzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsWUFBWTs0QkFDcEIsR0FBRyxFQUFHLHdDQUF3Qzs0QkFDOUMsS0FBSyxFQUFHLHVCQUF1Qjt5QkFDbEM7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGlCQUFpQjs0QkFDekIsR0FBRyxFQUFHLHNDQUFzQzs0QkFDNUMsS0FBSyxFQUFHLDRCQUE0Qjt5QkFDdkM7cUJBQ0osQ0FBQztvQkFDViw4REFBOEQ7b0JBQzlELDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwyQ0FBMkM7b0JBQzNDLHlDQUF5QztvQkFDekMsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGlGQUFpRjtvQkFDakYsZUFBZTtvQkFDZixFQUFFO29CQUNGLGFBQWE7Z0JBQ2pCLENBQUM7Z0JBRUQscUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUM7d0JBQ0gsa0JBQWtCO3dCQUNsQiwwQkFBMEI7d0JBQzFCOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixPQUFPLEVBQUUsRUFBRTt5QkFDZDt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsTUFBTTs0QkFDWixPQUFPLEVBQUUsRUFBRTt5QkFDZDt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsR0FBRzs0QkFDVCxPQUFPLEVBQUUsRUFBRTt5QkFDZDt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsTUFBTTs0QkFDWixPQUFPLEVBQUUsRUFBRTt5QkFDZDt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsS0FBSzs0QkFDWCxPQUFPLEVBQUUsRUFBRTt5QkFDZDtxQkFDSixDQUFDO2dCQUNOLENBQUM7Z0JBaEVMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQWlFYixzQkFBQztZQUFELENBQUMsQUFoRUQsSUFnRUM7WUFoRUQsNkNBZ0VDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbmdpbmVlclNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDpIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cyAoKSB7XG4gICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiBcIlNjcm9sbCBBcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6IFwiaHR0cDovL3Njcm9sbGFydC5oZXJva3VhcHAuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6ICdpbWFnZXMvc2Nyb2xsLWFydC5wbmcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1Bob3RvIFdhbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJ2h0dHA6Ly9icmlhbnMtcGhvdG8td2FsbC5oZXJva3VhcHAuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIDogJ2ltYWdlcy9waG90by13YWxsLnBuZydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnQWJvdXQgQnJpYW4gTGVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6ICdodHRwOi8vYWJvdXQtYnJpYW4tbGVlLmhlcm9rdWFwcC5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnaW1hZ2VzL2Fib3V0LWJyaWFuLWxlZS5wbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAvLyBsZXQgdXJsID0gYGh0dHA6Ly9tdW5pY2lwYWxpdHkuaGVyb2t1YXBwLmNvbS9hcGkvcHJvamVjdHNgO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXG4gICAgICAgIC8vICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmcm9tIG11bmljaXBhbGl0eS5oZXJva3VhcHAuY29tXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNraWxsc2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8vbmFtZTogc2tpbGwgbmFtZVxuICAgICAgICAgICAgLy9wZXJjZW50OiBwZXJjZW50IG1hc3RlcnlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkphdmFzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50OiA4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50OiA2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50OiA1MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkhUTUxcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50OiA2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNTU1wiLFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IDYwXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxufVxuIl19