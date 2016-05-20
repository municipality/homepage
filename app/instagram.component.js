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
                        template: "\n        <p class=\"section-header\">Instagram</p>\n        <div class=\"ig-container\">\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"ig-image-container\">\n                <div class=\"ig-image\" *ngFor=\"#image of images; #last = last\">\n                    <img *ngIf=\"!last\" (load)=\"loaded()\" src={{image.url}}>\n                    <a *ngIf=\"last\" href=\"http://instagram.com/{{username}}\" target=\"_blank\">\n                        <img class=\"ig-last-recent\" (load)=\"loaded()\" src={{image.url}}>\n                        <p class=\"ig-see-more\">See more..</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBU0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFIeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBSTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsNEJBQVEsR0FBUjtvQkFBQSxpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdkQsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDBCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDakMsQ0FBQztnQkFDTCxDQUFDO2dCQWhFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixTQUFTLEVBQUcsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsUUFBUSxFQUFHLGcyQkFrQlY7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBNENGLGdCQUFDO1lBQUQsQ0FBQyxBQTNDRCxJQTJDQztZQTNDRCxpQ0EyQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnN0YWdyYW1TZXJ2aWNlfSBmcm9tICcuL2luc3RhZ3JhbS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW5zdGFncmFtJyxcbiAgICBwcm92aWRlcnMgOiBbSW5zdGFncmFtU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5JbnN0YWdyYW08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93TG9hZGluZ01hc2tcIiBjbGFzcz1cImlnLWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctbG9hZGluZy10YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWltYWdlXCIgKm5nRm9yPVwiI2ltYWdlIG9mIGltYWdlczsgI2xhc3QgPSBsYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhbGFzdFwiIChsb2FkKT1cImxvYWRlZCgpXCIgc3JjPXt7aW1hZ2UudXJsfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwibGFzdFwiIGhyZWY9XCJodHRwOi8vaW5zdGFncmFtLmNvbS97e3VzZXJuYW1lfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpZy1sYXN0LXJlY2VudFwiIChsb2FkKT1cImxvYWRlZCgpXCIgc3JjPXt7aW1hZ2UudXJsfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImlnLXNlZS1tb3JlXCI+U2VlIG1vcmUuLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGltYWdlcyA6IHN0cmluZ1tdO1xuICAgIG1vc3RSZWNlbnQgOiBudW1iZXI7XG4gICAgaWdJdGVtcyA6IGFueVtdO1xuICAgIGxvYWRDb3VudGVyIDogbnVtYmVyO1xuICAgIHNob3dMb2FkaW5nTWFzayA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHVzZXJuYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaW5zdGFncmFtU2VydmljZSA6IEluc3RhZ3JhbVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tb3N0UmVjZW50ID0gNDtcbiAgICAgICAgdGhpcy5pZ0l0ZW1zID0gW107XG4gICAgICAgIHRoaXMubG9hZENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTWFzayA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBcImJlc3RfYmxlZV9pdFwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5pbnN0YWdyYW1TZXJ2aWNlLmdldE1vc3RSZWNlbnQodGhpcy51c2VybmFtZSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vU2V0IHVwIHRoZSBtb3N0IHJlY2VudHNcbiAgICAgICAgICAgIHRoaXMuaWdJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9zdFJlY2VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy9sb3dfcmVzb2x1dGlvbiAsIHN0YW5kYXJkX3Jlc29sdXRpb24gLCB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAvLzY0MHg2NDAgLCAzMjB4MzIwLCAxNTAsMTUwXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmlnSXRlbXNbaV0uaW1hZ2VzLnRodW1ibmFpbCk7XG5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZGVkICgpIHtcbiAgICAgICAgdGhpcy5sb2FkQ291bnRlcisrO1xuICAgICAgICBpZiAodGhpcy5sb2FkQ291bnRlciA9PSB0aGlzLm1vc3RSZWNlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==