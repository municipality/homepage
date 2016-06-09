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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBU0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFIeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBSTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsNEJBQVEsR0FBUjtvQkFBQSxpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUU3QyxDQUFDO29CQUlMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsMEJBQU0sR0FBTixVQUFRLEtBQUs7b0JBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7NEJBQ3RFLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDekUsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQztnQkFDTCxDQUFDO2dCQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxZQUFZLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0QsWUFBWSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO29CQUNqRCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBRXRDLENBQUM7Z0JBM0VMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFdBQVc7d0JBQ3RCLFNBQVMsRUFBRyxDQUFDLG9DQUFnQixDQUFDO3dCQUM5QixRQUFRLEVBQUcsMjhCQWtCVjtxQkFDSixDQUFDOzs2QkFBQTtnQkF1REYsZ0JBQUM7WUFBRCxDQUFDLEFBdERELElBc0RDO1lBdERELGlDQXNEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SW5zdGFncmFtU2VydmljZX0gZnJvbSAnLi9pbnN0YWdyYW0uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ2luc3RhZ3JhbScsXHJcbiAgICBwcm92aWRlcnMgOiBbSW5zdGFncmFtU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8cCBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+SW5zdGFncmFtPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dMb2FkaW5nTWFza1wiIGNsYXNzPVwiaWctbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWxvYWRpbmctdGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctaW1hZ2VcIiAqbmdGb3I9XCIjaW1hZ2Ugb2YgaW1hZ2VzOyAjbGFzdCA9IGxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nICNpbSAqbmdJZj1cIiFsYXN0XCIgY2xhc3M9XCJob3Zlci1mYWRlXCIgKGxvYWQpPVwibG9hZGVkKGltKVwiIChjbGljayk9XCJoYW5kbGVDbGljayhpbWFnZSlcIiBzcmM9e3tpbWFnZS50aHVtYm5haWwudXJsfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJsYXN0XCIgY2xhc3M9XCJpZy1sYXN0LXJlY2VudFwiIGhyZWY9XCJodHRwOi8vaW5zdGFncmFtLmNvbS9iZXN0X2JsZWVfaXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImlnLWxhc3QtcmVjZW50LWltZ1wiIChsb2FkKT1cImxvYWRlZCgpXCIgc3JjPXt7aW1hZ2UudGh1bWJuYWlsLnVybH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImlnLXNlZS1tb3JlXCI+U2VlIG1vcmUuLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW0gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGltYWdlcyA6IHN0cmluZ1tdO1xyXG4gICAgbW9zdFJlY2VudCA6IG51bWJlcjtcclxuICAgIGlnSXRlbXMgOiBhbnlbXTtcclxuICAgIGxvYWRDb3VudGVyIDogbnVtYmVyO1xyXG4gICAgc2hvd0xvYWRpbmdNYXNrIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICB1c2VybmFtZSA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBpbnN0YWdyYW1TZXJ2aWNlIDogSW5zdGFncmFtU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5tb3N0UmVjZW50ID0gNjtcclxuICAgICAgICB0aGlzLmlnSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTWFzayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiYmVzdF9ibGVlX2l0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFncmFtU2VydmljZS5nZXRNb3N0UmVjZW50KHRoaXMudXNlcm5hbWUpXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvL1NldCB1cCB0aGUgbW9zdCByZWNlbnRzXHJcbiAgICAgICAgICAgIHRoaXMuaWdJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb3N0UmVjZW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vbG93X3Jlc29sdXRpb24gLCBzdGFuZGFyZF9yZXNvbHV0aW9uICwgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAvLzY0MHg2NDAgLCAzMjB4MzIwLCAxNTAsMTUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHRoaXMuaWdJdGVtc1tpXS5pbWFnZXMpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZCAoaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRDb3VudGVyKys7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZENvdW50ZXIgPT0gdGhpcy5tb3N0UmVjZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWctcG9wdXAtY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZy1wb3B1cC1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhpbWFnZSkge1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlnLXBvcHVwLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50OmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWctcG9wdXBcIik7XHJcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19