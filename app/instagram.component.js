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
                Instagram.prototype.handleClick = function (image) {
                    var container = document.getElementById("ig-popup-container");
                    var imageElement = document.getElementById("ig-popup-image");
                    imageElement.src = image.src;
                    container.style.display = "block";
                };
                Instagram = __decorate([
                    core_1.Component({
                        selector: 'instagram',
                        providers: [instagram_service_1.InstagramService],
                        template: "\n        <p class=\"section-header\">Instagram</p>\n        <div class=\"ig-container\">\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"ig-image-container\">\n                <div class=\"ig-image\" *ngFor=\"#image of images; #last = last\">\n                    <img #im *ngIf=\"!last\" class=\"hover-fade\" (load)=\"loaded()\" (click)=\"handleClick(im)\" src={{image.url}}>\n                    <a *ngIf=\"last\" class=\"ig-last-recent\" href=\"http://instagram.com/best_blee_it\" target=\"_blank\">\n                        <img class=\"ig-last-recent-img\" (load)=\"loaded()\" src={{image.url}}>\n                        <p class=\"ig-see-more\">See more..</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBU0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFIeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBSTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsNEJBQVEsR0FBUjtvQkFBQSxpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdkQsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDBCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDakMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxZQUFZLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNqRSxZQUFZLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQzdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFHdEMsQ0FBQztnQkF6RUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsU0FBUyxFQUFHLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFFBQVEsRUFBRyxrN0JBa0JWO3FCQUNKLENBQUM7OzZCQUFBO2dCQXFERixnQkFBQztZQUFELENBQUMsQUFwREQsSUFvREM7WUFwREQsaUNBb0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5zdGFncmFtU2VydmljZX0gZnJvbSAnLi9pbnN0YWdyYW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2luc3RhZ3JhbScsXG4gICAgcHJvdmlkZXJzIDogW0luc3RhZ3JhbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8cCBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+SW5zdGFncmFtPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0xvYWRpbmdNYXNrXCIgY2xhc3M9XCJpZy1sb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWxvYWRpbmctdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlnLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZy1pbWFnZVwiICpuZ0Zvcj1cIiNpbWFnZSBvZiBpbWFnZXM7ICNsYXN0ID0gbGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nICNpbSAqbmdJZj1cIiFsYXN0XCIgY2xhc3M9XCJob3Zlci1mYWRlXCIgKGxvYWQpPVwibG9hZGVkKClcIiAoY2xpY2spPVwiaGFuZGxlQ2xpY2soaW0pXCIgc3JjPXt7aW1hZ2UudXJsfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwibGFzdFwiIGNsYXNzPVwiaWctbGFzdC1yZWNlbnRcIiBocmVmPVwiaHR0cDovL2luc3RhZ3JhbS5jb20vYmVzdF9ibGVlX2l0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWctbGFzdC1yZWNlbnQtaW1nXCIgKGxvYWQpPVwibG9hZGVkKClcIiBzcmM9e3tpbWFnZS51cmx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaWctc2VlLW1vcmVcIj5TZWUgbW9yZS4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW0gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW1hZ2VzIDogc3RyaW5nW107XG4gICAgbW9zdFJlY2VudCA6IG51bWJlcjtcbiAgICBpZ0l0ZW1zIDogYW55W107XG4gICAgbG9hZENvdW50ZXIgOiBudW1iZXI7XG4gICAgc2hvd0xvYWRpbmdNYXNrIDogYm9vbGVhbiA9IHRydWU7XG4gICAgdXNlcm5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBpbnN0YWdyYW1TZXJ2aWNlIDogSW5zdGFncmFtU2VydmljZSkge1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLm1vc3RSZWNlbnQgPSA2O1xuICAgICAgICB0aGlzLmlnSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiYmVzdF9ibGVlX2l0XCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmluc3RhZ3JhbVNlcnZpY2UuZ2V0TW9zdFJlY2VudCh0aGlzLnVzZXJuYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy9TZXQgdXAgdGhlIG1vc3QgcmVjZW50c1xuICAgICAgICAgICAgdGhpcy5pZ0l0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tb3N0UmVjZW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAvL2xvd19yZXNvbHV0aW9uICwgc3RhbmRhcmRfcmVzb2x1dGlvbiAsIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgIC8vNjQweDY0MCAsIDMyMHgzMjAsIDE1MCwxNTBcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHRoaXMuaWdJdGVtc1tpXS5pbWFnZXMudGh1bWJuYWlsKTtcblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkZWQgKCkge1xuICAgICAgICB0aGlzLmxvYWRDb3VudGVyKys7XG4gICAgICAgIGlmICh0aGlzLmxvYWRDb3VudGVyID09IHRoaXMubW9zdFJlY2VudCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZ01hc2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGltYWdlKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlnLXBvcHVwLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlnLXBvcHVwLWltYWdlXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgfVxuXG59XG4iXX0=