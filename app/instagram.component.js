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
                    this.mostRecent = 3;
                    this.igItems = [];
                    this.loadCounter = 0;
                    this.showLoadingMask = true;
                }
                Instagram.prototype.ngOnInit = function () {
                    var _this = this;
                    this.instagramService.getMostRecent()
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
                        template: "\n        <p class=\"section-header\">Instagram</p>\n        <div class=\"ig-container\">\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n\n\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"ig-image-container\">\n                <div class=\"ig-image\" *ngFor=\"#image of images\">\n                    <img (load)=\"loaded()\" src={{image.url}}>\n                </div>\n            </div>\n            </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBUUksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFGeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBRzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCw0QkFBUSxHQUFSO29CQUFBLGlCQWdCQztvQkFmRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO3lCQUNwQyxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdkQsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDBCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDakMsQ0FBQztnQkFDTCxDQUFDO2dCQTVETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixTQUFTLEVBQUcsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsUUFBUSxFQUFHLDRpQkFnQlY7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBMENGLGdCQUFDO1lBQUQsQ0FBQyxBQXpDRCxJQXlDQztZQXpDRCxpQ0F5Q0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnN0YWdyYW1TZXJ2aWNlfSBmcm9tICcuL2luc3RhZ3JhbS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW5zdGFncmFtJyxcbiAgICBwcm92aWRlcnMgOiBbSW5zdGFncmFtU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5JbnN0YWdyYW08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93TG9hZGluZ01hc2tcIiBjbGFzcz1cImlnLWxvYWRpbmdcIj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWxvYWRpbmctdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZy1pbWFnZVwiICpuZ0Zvcj1cIiNpbWFnZSBvZiBpbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyAobG9hZCk9XCJsb2FkZWQoKVwiIHNyYz17e2ltYWdlLnVybH19PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEluc3RhZ3JhbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpbWFnZXMgOiBzdHJpbmdbXTtcbiAgICBtb3N0UmVjZW50IDogbnVtYmVyO1xuICAgIGlnSXRlbXMgOiBhbnlbXTtcbiAgICBsb2FkQ291bnRlciA6IG51bWJlcjtcbiAgICBzaG93TG9hZGluZ01hc2sgOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGluc3RhZ3JhbVNlcnZpY2UgOiBJbnN0YWdyYW1TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubW9zdFJlY2VudCA9IDM7XG4gICAgICAgIHRoaXMuaWdJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ01hc2sgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5pbnN0YWdyYW1TZXJ2aWNlLmdldE1vc3RSZWNlbnQoKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy9TZXQgdXAgdGhlIG1vc3QgcmVjZW50c1xuICAgICAgICAgICAgdGhpcy5pZ0l0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb3N0UmVjZW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAvL2xvd19yZXNvbHV0aW9uICwgc3RhbmRhcmRfcmVzb2x1dGlvbiAsIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgIC8vNjQweDY0MCAsIDMyMHgzMjAsIDE1MCwxNTBcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHRoaXMuaWdJdGVtc1tpXS5pbWFnZXMudGh1bWJuYWlsKTtcblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRDb3VudGVyKys7XG4gICAgICAgIGlmICh0aGlzLmxvYWRDb3VudGVyID09IHRoaXMubW9zdFJlY2VudCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZ01hc2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19