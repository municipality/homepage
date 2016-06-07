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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZ2luZWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFFSSx5QkFBcUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO2dCQUU5QixDQUFDO2dCQUVELHFDQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDO3dCQUNLOzRCQUNJLEtBQUssRUFBRyxZQUFZOzRCQUNwQixHQUFHLEVBQUcsd0NBQXdDOzRCQUM5QyxLQUFLLEVBQUcsdUJBQXVCO3lCQUNsQzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsaUJBQWlCOzRCQUN6QixHQUFHLEVBQUcsc0NBQXNDOzRCQUM1QyxLQUFLLEVBQUcsNEJBQTRCO3lCQUN2QztxQkFDSixDQUFDO29CQUNWLDhEQUE4RDtvQkFDOUQsNEJBQTRCO29CQUM1Qiw4QkFBOEI7b0JBQzlCLDJDQUEyQztvQkFDM0MseUNBQXlDO29CQUN6QyxlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsaUZBQWlGO29CQUNqRixlQUFlO29CQUNmLEVBQUU7b0JBQ0YsYUFBYTtnQkFDakIsQ0FBQztnQkEvQkw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBZ0NiLHNCQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCw2Q0ErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVuZ2luZWVyU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOkh0dHApIHtcblxuICAgIH1cblxuICAgIGdldFByb2plY3RzICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnUGhvdG8gV2FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiAnaHR0cDovL2JyaWFucy1waG90by13YWxsLmhlcm9rdWFwcC5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnaW1hZ2VzL3Bob3RvLXdhbGwucG5nJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdBYm91dCBCcmlhbiBMZWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJ2h0dHA6Ly9hYm91dC1icmlhbi1sZWUuaGVyb2t1YXBwLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6ICdpbWFnZXMvYWJvdXQtYnJpYW4tbGVlLnBuZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIC8vIGxldCB1cmwgPSBgaHR0cDovL211bmljaXBhbGl0eS5oZXJva3VhcHAuY29tL2FwaS9wcm9qZWN0c2A7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgICAgLy8gICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gbXVuaWNpcGFsaXR5Lmhlcm9rdWFwcC5jb21cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgfSk7XG4gICAgfVxufVxuIl19