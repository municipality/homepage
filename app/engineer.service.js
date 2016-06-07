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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZ2luZWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFFSSx5QkFBcUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU5QixDQUFDO2dCQUVELHFDQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDO3dCQUNLOzRCQUNJLEtBQUssRUFBRyxZQUFZOzRCQUNwQixHQUFHLEVBQUcsd0NBQXdDOzRCQUM5QyxLQUFLLEVBQUcsdUJBQXVCO3lCQUNsQzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsaUJBQWlCOzRCQUN6QixHQUFHLEVBQUcsc0NBQXNDOzRCQUM1QyxLQUFLLEVBQUcsNEJBQTRCO3lCQUN2QztxQkFDSixDQUFDO29CQUNWLDhEQUE4RDtvQkFDOUQsNEJBQTRCO29CQUM1Qiw4QkFBOEI7b0JBQzlCLDJDQUEyQztvQkFDM0MseUNBQXlDO29CQUN6QyxlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsaUZBQWlGO29CQUNqRixlQUFlO29CQUNmLEVBQUU7b0JBQ0YsYUFBYTtnQkFDakIsQ0FBQztnQkFFRCxxQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQzt3QkFDSCxrQkFBa0I7d0JBQ2xCLDBCQUEwQjt3QkFDMUI7NEJBQ0ksSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLE9BQU8sRUFBRSxLQUFLO3lCQUNqQjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsTUFBTTs0QkFDWixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLEdBQUc7NEJBQ1QsT0FBTyxFQUFFLEtBQUs7eUJBQ2pCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxNQUFNOzRCQUNaLE9BQU8sRUFBRSxLQUFLO3lCQUNqQjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsS0FBSzs0QkFDWCxPQUFPLEVBQUUsS0FBSzt5QkFDakI7cUJBQ0osQ0FBQztnQkFDTixDQUFDO2dCQTFETDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkEyRGIsc0JBQUM7WUFBRCxDQUFDLEFBMURELElBMERDO1lBMURELDZDQTBEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW5naW5lZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6SHR0cCkge1xuXG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMgKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdQaG90byBXYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6ICdodHRwOi8vYnJpYW5zLXBob3RvLXdhbGwuaGVyb2t1YXBwLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6ICdpbWFnZXMvcGhvdG8td2FsbC5wbmcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ0Fib3V0IEJyaWFuIExlZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiAnaHR0cDovL2Fib3V0LWJyaWFuLWxlZS5oZXJva3VhcHAuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIDogJ2ltYWdlcy9hYm91dC1icmlhbi1sZWUucG5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgLy8gbGV0IHVybCA9IGBodHRwOi8vbXVuaWNpcGFsaXR5Lmhlcm9rdWFwcC5jb20vYXBpL3Byb2plY3RzYDtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgICAvLyAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAvLyAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSBtdW5pY2lwYWxpdHkuaGVyb2t1YXBwLmNvbVwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTa2lsbHNldCAoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAvL25hbWU6IHNraWxsIG5hbWVcbiAgICAgICAgICAgIC8vcGVyY2VudDogcGVyY2VudCBtYXN0ZXJ5XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJKYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogXCI4MCVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkphdmFcIixcbiAgICAgICAgICAgICAgICBwZXJjZW50OiBcIjYwJVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ1wiLFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IFwiNTAlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJIVE1MXCIsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogXCI2MCVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNTU1wiLFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IFwiNjAlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG59XG4iXX0=