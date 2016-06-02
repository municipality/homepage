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
                    this.mostRecent = 6;
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
                            _this.images.push(_this.igItems[i].images);
                        }
                    });
                };
                Instagram.prototype.loaded = function (image) {
                    this.loadCounter++;
                    if (this.loadCounter == this.mostRecent) {
                        this.showLoadingMask = false;
                        document.getElementById("ig-popup-container").addEventListener("click", function (e) {
                            document.getElementById("ig-popup-container").style.display = "none";
                        });
                    }
                };
                Instagram.prototype.handleClick = function (image) {
                    var container = document.getElementById("ig-popup-container");
                    var imageElement = document.getElementById("ig-popup");
                    imageElement.src = image.standard_resolution.url;
                    container.style.display = "block";
                };
                Instagram = __decorate([
                    core_1.Component({
                        selector: 'instagram',
                        providers: [instagram_service_1.InstagramService],
                        template: "\n        <p class=\"section-header\">Instagram</p>\n        <div class=\"ig-container\">\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"ig-image-container\">\n                <div class=\"ig-image\" *ngFor=\"#image of images; #last = last\">\n                    <img #im *ngIf=\"!last\" class=\"hover-fade\" (load)=\"loaded(im)\" (click)=\"handleClick(image)\" src={{image.thumbnail.url}}>\n                    <a *ngIf=\"last\" class=\"ig-last-recent\" href=\"http://instagram.com/best_blee_it\" target=\"_blank\">\n                        <img class=\"ig-last-recent-img\" (load)=\"loaded()\" src={{image.thumbnail.url}}>\n                        <p class=\"ig-see-more\">See more..</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBU0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFIeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBSTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsNEJBQVEsR0FBUjtvQkFBQSxpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUU3QyxDQUFDO29CQUlMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsMEJBQU0sR0FBTixVQUFRLEtBQUs7b0JBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7NEJBQ3RFLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDekUsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQztnQkFDTCxDQUFDO2dCQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxZQUFZLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0QsWUFBWSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO29CQUNqRCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLENBQUM7Z0JBMUVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFdBQVc7d0JBQ3RCLFNBQVMsRUFBRyxDQUFDLG9DQUFnQixDQUFDO3dCQUM5QixRQUFRLEVBQUcsMjhCQWtCVjtxQkFDSixDQUFDOzs2QkFBQTtnQkFzREYsZ0JBQUM7WUFBRCxDQUFDLEFBckRELElBcURDO1lBckRELGlDQXFEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0luc3RhZ3JhbVNlcnZpY2V9IGZyb20gJy4vaW5zdGFncmFtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdpbnN0YWdyYW0nLFxuICAgIHByb3ZpZGVycyA6IFtJbnN0YWdyYW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPkluc3RhZ3JhbTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlnLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dMb2FkaW5nTWFza1wiIGNsYXNzPVwiaWctbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZy1sb2FkaW5nLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZy1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctaW1hZ2VcIiAqbmdGb3I9XCIjaW1hZ2Ugb2YgaW1hZ2VzOyAjbGFzdCA9IGxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyAjaW0gKm5nSWY9XCIhbGFzdFwiIGNsYXNzPVwiaG92ZXItZmFkZVwiIChsb2FkKT1cImxvYWRlZChpbSlcIiAoY2xpY2spPVwiaGFuZGxlQ2xpY2soaW1hZ2UpXCIgc3JjPXt7aW1hZ2UudGh1bWJuYWlsLnVybH19PlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImxhc3RcIiBjbGFzcz1cImlnLWxhc3QtcmVjZW50XCIgaHJlZj1cImh0dHA6Ly9pbnN0YWdyYW0uY29tL2Jlc3RfYmxlZV9pdFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImlnLWxhc3QtcmVjZW50LWltZ1wiIChsb2FkKT1cImxvYWRlZCgpXCIgc3JjPXt7aW1hZ2UudGh1bWJuYWlsLnVybH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpZy1zZWUtbW9yZVwiPlNlZSBtb3JlLi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEluc3RhZ3JhbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpbWFnZXMgOiBzdHJpbmdbXTtcbiAgICBtb3N0UmVjZW50IDogbnVtYmVyO1xuICAgIGlnSXRlbXMgOiBhbnlbXTtcbiAgICBsb2FkQ291bnRlciA6IG51bWJlcjtcbiAgICBzaG93TG9hZGluZ01hc2sgOiBib29sZWFuID0gdHJ1ZTtcbiAgICB1c2VybmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGluc3RhZ3JhbVNlcnZpY2UgOiBJbnN0YWdyYW1TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubW9zdFJlY2VudCA9IDY7XG4gICAgICAgIHRoaXMuaWdJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ01hc2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gXCJiZXN0X2JsZWVfaXRcIjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFncmFtU2VydmljZS5nZXRNb3N0UmVjZW50KHRoaXMudXNlcm5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAvL1NldCB1cCB0aGUgbW9zdCByZWNlbnRzXG4gICAgICAgICAgICB0aGlzLmlnSXRlbXMgPSByZXNwb25zZS5pdGVtcztcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1vc3RSZWNlbnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vbG93X3Jlc29sdXRpb24gLCBzdGFuZGFyZF9yZXNvbHV0aW9uICwgdGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgLy82NDB4NjQwICwgMzIweDMyMCwgMTUwLDE1MFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5pZ0l0ZW1zW2ldLmltYWdlcyk7XG5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZGVkIChpbWFnZSkge1xuICAgICAgICB0aGlzLmxvYWRDb3VudGVyKys7XG4gICAgICAgIGlmICh0aGlzLmxvYWRDb3VudGVyID09IHRoaXMubW9zdFJlY2VudCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZ01hc2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWctcG9wdXAtY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWctcG9wdXAtY29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhpbWFnZSkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZy1wb3B1cC1jb250YWluZXJcIik7XG4gICAgICAgIHZhciBpbWFnZUVsZW1lbnQ6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZy1wb3B1cFwiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbn1cbiJdfQ==