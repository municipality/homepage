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
                        template: "\n        <p class=\"section-header\">Instagram</p>\n        <div class=\"ig-container\">\n            <div *ngIf=\"showLoadingMask\" class=\"ig-loading\">\n                <div class=\"ig-loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"ig-image-container\">\n                <div class=\"ig-image\" *ngFor=\"#image of images\">\n                    <img (load)=\"loaded()\" src={{image.url}}>\n                </div>\n            </div>\n            </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [instagram_service_1.InstagramService])
                ], Instagram);
                return Instagram;
            }());
            exports_1("Instagram", Instagram);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBUUksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFGeEQsb0JBQWUsR0FBYSxJQUFJLENBQUM7b0JBRzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCw0QkFBUSxHQUFSO29CQUFBLGlCQWdCQztvQkFmRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO3lCQUNwQyxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3RDLGtEQUFrRDs0QkFDbEQsNEJBQTRCOzRCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdkQsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDBCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztvQkFDakMsQ0FBQztnQkFDTCxDQUFDO2dCQTFETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixTQUFTLEVBQUcsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsUUFBUSxFQUFHLHdpQkFjVjtxQkFDSixDQUFDOzs2QkFBQTtnQkEwQ0YsZ0JBQUM7WUFBRCxDQUFDLEFBekNELElBeUNDO1lBekNELGlDQXlDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0luc3RhZ3JhbVNlcnZpY2V9IGZyb20gJy4vaW5zdGFncmFtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdpbnN0YWdyYW0nLFxuICAgIHByb3ZpZGVycyA6IFtJbnN0YWdyYW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPkluc3RhZ3JhbTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlnLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dMb2FkaW5nTWFza1wiIGNsYXNzPVwiaWctbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZy1sb2FkaW5nLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZy1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWctaW1hZ2VcIiAqbmdGb3I9XCIjaW1hZ2Ugb2YgaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgKGxvYWQpPVwibG9hZGVkKClcIiBzcmM9e3tpbWFnZS51cmx9fT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWdyYW0gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW1hZ2VzIDogc3RyaW5nW107XG4gICAgbW9zdFJlY2VudCA6IG51bWJlcjtcbiAgICBpZ0l0ZW1zIDogYW55W107XG4gICAgbG9hZENvdW50ZXIgOiBudW1iZXI7XG4gICAgc2hvd0xvYWRpbmdNYXNrIDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBpbnN0YWdyYW1TZXJ2aWNlIDogSW5zdGFncmFtU2VydmljZSkge1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLm1vc3RSZWNlbnQgPSAzO1xuICAgICAgICB0aGlzLmlnSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFncmFtU2VydmljZS5nZXRNb3N0UmVjZW50KClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vU2V0IHVwIHRoZSBtb3N0IHJlY2VudHNcbiAgICAgICAgICAgIHRoaXMuaWdJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubW9zdFJlY2VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy9sb3dfcmVzb2x1dGlvbiAsIHN0YW5kYXJkX3Jlc29sdXRpb24gLCB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAvLzY0MHg2NDAgLCAzMjB4MzIwLCAxNTAsMTUwXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmlnSXRlbXNbaV0uaW1hZ2VzLnRodW1ibmFpbCk7XG5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZGVkICgpIHtcbiAgICAgICAgdGhpcy5sb2FkQ291bnRlcisrO1xuICAgICAgICBpZiAodGhpcy5sb2FkQ291bnRlciA9PSB0aGlzLm1vc3RSZWNlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmdNYXNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==