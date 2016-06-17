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
                        template: "\n        <div class=\"ig-container\">\n\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <p class=\"header\">@best_blee_it<br><br>Most Recent</p>\n            <div class=\"ig-image-container\">\n\n                <div class=\"ig-image\" *ngFor=\"#image of images; #last = last\">\n                    <img #im *ngIf=\"!last\" class=\"hover-fade\" (load)=\"loaded(im)\" (click)=\"handleClick(image)\" src={{image.thumbnail.url}}>\n                    <a *ngIf=\"last\" class=\"ig-last-recent\" href=\"http://instagram.com/best_blee_it\" target=\"_blank\">\n                        <img class=\"ig-last-recent-img\" (load)=\"loaded()\" src={{image.thumbnail.url}}>\n                        <p class=\"ig-see-more\">See more..</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBU0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFIeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBSTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsNEJBQVEsR0FBUjtvQkFBQSxpQkFhQztvQkFaRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7eUJBQ2pELFNBQVMsQ0FBQyxVQUFDLFFBQVE7d0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUM5QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDdEMsa0RBQWtEOzRCQUNsRCw0QkFBNEI7NEJBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRTdDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCwwQkFBTSxHQUFOLFVBQVEsS0FBSztvQkFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO3dCQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQzs0QkFDdEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUN6RSxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsK0JBQVcsR0FBWCxVQUFZLEtBQUs7b0JBQ2IsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUM5RCxJQUFJLFlBQVksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMzRCxZQUFZLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7b0JBQ2pELFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFFdEMsQ0FBQztnQkExRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsU0FBUyxFQUFHLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFFBQVEsRUFBRyxrK0JBb0JWO3FCQUNKLENBQUM7OzZCQUFBO2dCQW9ERixnQkFBQztZQUFELENBQUMsQUFuREQsSUFtREM7WUFuREQsaUNBbURDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5zdGFncmFtU2VydmljZX0gZnJvbSAnLi9pbnN0YWdyYW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2luc3RhZ3JhbScsXG4gICAgcHJvdmlkZXJzIDogW0luc3RhZ3JhbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWctY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93TG9hZGluZ01hc2tcIiBjbGFzcz1cImlnLWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctbG9hZGluZy10YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlclwiPkBiZXN0X2JsZWVfaXQ8YnI+PGJyPk1vc3QgUmVjZW50PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWltYWdlLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWltYWdlXCIgKm5nRm9yPVwiI2ltYWdlIG9mIGltYWdlczsgI2xhc3QgPSBsYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgI2ltICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImhvdmVyLWZhZGVcIiAobG9hZCk9XCJsb2FkZWQoaW0pXCIgKGNsaWNrKT1cImhhbmRsZUNsaWNrKGltYWdlKVwiIHNyYz17e2ltYWdlLnRodW1ibmFpbC51cmx9fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJsYXN0XCIgY2xhc3M9XCJpZy1sYXN0LXJlY2VudFwiIGhyZWY9XCJodHRwOi8vaW5zdGFncmFtLmNvbS9iZXN0X2JsZWVfaXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpZy1sYXN0LXJlY2VudC1pbWdcIiAobG9hZCk9XCJsb2FkZWQoKVwiIHNyYz17e2ltYWdlLnRodW1ibmFpbC51cmx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaWctc2VlLW1vcmVcIj5TZWUgbW9yZS4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW0gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW1hZ2VzIDogc3RyaW5nW107XG4gICAgbW9zdFJlY2VudCA6IG51bWJlcjtcbiAgICBpZ0l0ZW1zIDogYW55W107XG4gICAgbG9hZENvdW50ZXIgOiBudW1iZXI7XG4gICAgc2hvd0xvYWRpbmdNYXNrIDogYm9vbGVhbiA9IHRydWU7XG4gICAgdXNlcm5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBpbnN0YWdyYW1TZXJ2aWNlIDogSW5zdGFncmFtU2VydmljZSkge1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLm1vc3RSZWNlbnQgPSA2O1xuICAgICAgICB0aGlzLmlnSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiYmVzdF9ibGVlX2l0XCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmluc3RhZ3JhbVNlcnZpY2UuZ2V0TW9zdFJlY2VudCh0aGlzLnVzZXJuYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy9TZXQgdXAgdGhlIG1vc3QgcmVjZW50c1xuICAgICAgICAgICAgdGhpcy5pZ0l0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb3N0UmVjZW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAvL2xvd19yZXNvbHV0aW9uICwgc3RhbmRhcmRfcmVzb2x1dGlvbiAsIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgIC8vNjQweDY0MCAsIDMyMHgzMjAsIDE1MCwxNTBcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHRoaXMuaWdJdGVtc1tpXS5pbWFnZXMpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRlZCAoaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5sb2FkQ291bnRlcisrO1xuICAgICAgICBpZiAodGhpcy5sb2FkQ291bnRlciA9PSB0aGlzLm1vc3RSZWNlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlnLXBvcHVwLWNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlnLXBvcHVwLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaW1hZ2UpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWctcG9wdXAtY29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50OmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWctcG9wdXBcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBpbWFnZS5zdGFuZGFyZF9yZXNvbHV0aW9uLnVybDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICB9XG5cbn1cbiJdfQ==