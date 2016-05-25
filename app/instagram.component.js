System.register(['angular2/core', './instagram.service'], function(exports_1, context_1) {
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
    var core_1, instagram_service_1;
    var Instagram;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instagram_service_1_1) {
                instagram_service_1 = instagram_service_1_1;
            }],
        execute: function() {
            Instagram = (function () {
                function Instagram(instagramService) {
                    this.instagramService = instagramService;
                    this.showLoadingMask = true;
                    this.images = [];
                    this.mostRecent = 4;
                    this.igItems = [];
                    this.loadCounter = 0;
                    this.showLoadingMask = true;
                    this.username = "best_blee_it";
                }
                Instagram.prototype.ngOnInit = function () {
                    var _this = this;
                    this.instagramService.getMostRecent(this.username)
                        .subscribe(function (response) {
                        console.log(response);
                        //Set up the most recents
                        _this.igItems = response.items;
                        for (var i = 0; i < _this.mostRecent; i++) {
                            //low_resolution , standard_resolution , thumbnail
                            //640x640 , 320x320, 150,150
                            _this.images.push(_this.igItems[i].images.thumbnail);
                        }
                    });
                };
                Instagram.prototype.loaded = function () {
                    this.loadCounter++;
                    if (this.loadCounter == this.mostRecent) {
                        this.showLoadingMask = false;
                    }
                };
                Instagram = __decorate([
                    core_1.Component({
                        selector: 'instagram',
                        providers: [instagram_service_1.InstagramService],
                        template: "\n        <p class=\"section-header\">Instagram</p>\n        <div class=\"ig-container\">\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"ig-image-container\">\n                <div class=\"ig-image hover-fade\" *ngFor=\"#image of images; #last = last\">\n                    <img *ngIf=\"!last\" (load)=\"loaded()\" src={{image.url}}>\n                    <a *ngIf=\"last\" class=\"ig-last-recent\" href=\"http://instagram.com/best_blee_it\" target=\"_blank\">\n                        <img class=\"ig-last-recent-img\" (load)=\"loaded()\" src={{image.url}}>\n                        <p class=\"ig-see-more\">See more..</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBU0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFIeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBSTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsNEJBQVEsR0FBUjtvQkFBQSxpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdkQsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDBCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDakMsQ0FBQztnQkFDTCxDQUFDO2dCQWhFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixTQUFTLEVBQUcsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsUUFBUSxFQUFHLHc0QkFrQlY7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBNENGLGdCQUFDO1lBQUQsQ0FBQyxBQTNDRCxJQTJDQztZQTNDRCxpQ0EyQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnN0YWdyYW1TZXJ2aWNlfSBmcm9tICcuL2luc3RhZ3JhbS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW5zdGFncmFtJyxcbiAgICBwcm92aWRlcnMgOiBbSW5zdGFncmFtU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5JbnN0YWdyYW08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93TG9hZGluZ01hc2tcIiBjbGFzcz1cImlnLWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctbG9hZGluZy10YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWltYWdlIGhvdmVyLWZhZGVcIiAqbmdGb3I9XCIjaW1hZ2Ugb2YgaW1hZ2VzOyAjbGFzdCA9IGxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFsYXN0XCIgKGxvYWQpPVwibG9hZGVkKClcIiBzcmM9e3tpbWFnZS51cmx9fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJsYXN0XCIgY2xhc3M9XCJpZy1sYXN0LXJlY2VudFwiIGhyZWY9XCJodHRwOi8vaW5zdGFncmFtLmNvbS9iZXN0X2JsZWVfaXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpZy1sYXN0LXJlY2VudC1pbWdcIiAobG9hZCk9XCJsb2FkZWQoKVwiIHNyYz17e2ltYWdlLnVybH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpZy1zZWUtbW9yZVwiPlNlZSBtb3JlLi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEluc3RhZ3JhbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpbWFnZXMgOiBzdHJpbmdbXTtcbiAgICBtb3N0UmVjZW50IDogbnVtYmVyO1xuICAgIGlnSXRlbXMgOiBhbnlbXTtcbiAgICBsb2FkQ291bnRlciA6IG51bWJlcjtcbiAgICBzaG93TG9hZGluZ01hc2sgOiBib29sZWFuID0gdHJ1ZTtcbiAgICB1c2VybmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGluc3RhZ3JhbVNlcnZpY2UgOiBJbnN0YWdyYW1TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubW9zdFJlY2VudCA9IDQ7XG4gICAgICAgIHRoaXMuaWdJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ01hc2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gXCJiZXN0X2JsZWVfaXRcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFncmFtU2VydmljZS5nZXRNb3N0UmVjZW50KHRoaXMudXNlcm5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAvL1NldCB1cCB0aGUgbW9zdCByZWNlbnRzXG4gICAgICAgICAgICB0aGlzLmlnSXRlbXMgPSByZXNwb25zZS5pdGVtcztcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vc3RSZWNlbnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vbG93X3Jlc29sdXRpb24gLCBzdGFuZGFyZF9yZXNvbHV0aW9uICwgdGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgLy82NDB4NjQwICwgMzIweDMyMCwgMTUwLDE1MFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5pZ0l0ZW1zW2ldLmltYWdlcy50aHVtYm5haWwpO1xuXG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRlZCAoKSB7XG4gICAgICAgIHRoaXMubG9hZENvdW50ZXIrKztcbiAgICAgICAgaWYgKHRoaXMubG9hZENvdW50ZXIgPT0gdGhpcy5tb3N0UmVjZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nTWFzayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=