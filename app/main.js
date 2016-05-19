System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './instagram.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, http_1, instagram_service_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (instagram_service_1_1) {
                instagram_service_1 = instagram_service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(instagramService) {
                    this.instagramService = instagramService;
                }
                App.prototype.ngOnInit = function () {
                    this.instagramService.getMostRecent(3)
                        .subscribe(function (res) {
                        console.log(res);
                    });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        providers: [http_1.Http, http_1.HTTP_BINDINGS, instagram_service_1.InstagramService],
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFDSSxhQUFxQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7Z0JBRXRELENBQUM7Z0JBRUQsc0JBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt5QkFDckMsU0FBUyxDQUFDLFVBQUEsR0FBRzt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQWpCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixTQUFTLEVBQUcsQ0FBQyxXQUFJLEVBQUUsb0JBQWEsRUFBRSxvQ0FBZ0IsQ0FBQzt3QkFDbkQsUUFBUSxFQUFHLFFBQ1Y7cUJBQ0osQ0FBQzs7dUJBQUE7Z0JBYUYsVUFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBSUQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIVFRQX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5zdGFncmFtU2VydmljZX0gZnJvbSAnLi9pbnN0YWdyYW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxuICAgIHByb3ZpZGVycyA6IFtIdHRwLCBIVFRQX0JJTkRJTkdTLCBJbnN0YWdyYW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICBgXG59KVxuXG5jbGFzcyBBcHAgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaW5zdGFncmFtU2VydmljZTpJbnN0YWdyYW1TZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFncmFtU2VydmljZS5nZXRNb3N0UmVjZW50KDMpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbmJvb3RzdHJhcChBcHApO1xuIl19