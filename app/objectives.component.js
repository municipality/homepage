System.register(['angular2/core', './scrolling.service', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, scrolling_service_1, mobile_service_1;
    var Objectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Objectives = (function () {
                function Objectives(scrollingService, mobileService) {
                    this.scrollingService = scrollingService;
                    this.mobileService = mobileService;
                    this.loaded = false;
                    this.loadedCount = 0;
                    this.imageCount = 3;
                }
                Objectives.prototype.ngOnInit = function () {
                    var _this = this;
                    var panel;
                    document.addEventListener("scroll", function (e) {
                        if (_this.panels == null || _this.panels.length == 0) {
                            _this.panels = document.getElementsByClassName("outro-panel");
                            panel = _this.panels[_this.panels.length / 2];
                        }
                        if (_this.container == null) {
                            _this.container = document.getElementsByClassName("outro-container")[0];
                        }
                        if (panel.getBoundingClientRect().top > 0) {
                            _this.container.style["background-image"] = "url(images/outro1.jpg)";
                        }
                        else {
                            _this.container.style["background-image"] = "url(images/outro2.jpg)";
                        }
                        if (!_this.mobileService.isMobile()) {
                        }
                    });
                };
                Objectives.prototype.outroImageLoaded = function (image, dreamImage, moon) {
                    if (this.loaded)
                        return;
                    this.outroImage1 = image;
                    this.outroImage2 = dreamImage;
                    this.moon = moon;
                    this.loadedCount++;
                    if (this.loadedCount == this.imageCount) {
                        this.allLoaded();
                    }
                };
                Objectives.prototype.allLoaded = function () {
                    if (this.loaded)
                        return;
                    this.loaded = true;
                };
                Objectives = __decorate([
                    core_1.Component({
                        selector: 'objectives',
                        template: "\n        <div class=\"outro-container\">\n\n            <div class=\"title\">\n                <h2 align=\"center\" class=\"blue\">Objectives</h2>\n            </div>\n            <div class=\"outro-panel first\">\n\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Influence</h2>\n                        <p>Positively influence my surroundings and peers</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Connect</h2>\n                        <p>Unite others through positive attitude and friendly vibes</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire</h2>\n                        <p>Be a role model amongst peers and inspire others</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService, mobile_service_1.MobileService])
                ], Objectives);
                return Objectives;
            }());
            exports_1("Objectives", Objectives);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvYmplY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdEQTtnQkFXSSxvQkFBcUIsZ0JBQW1DLEVBQ25DLGFBQTZCO29CQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBVmxELFdBQU0sR0FBRyxLQUFLLENBQUM7b0JBRWYsZ0JBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBU2YsQ0FBQztnQkFFRCw2QkFBUSxHQUFSO29CQUFBLGlCQXdCQztvQkF2QkcsSUFBSSxLQUFLLENBQUM7b0JBQ1YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2xDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hELEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUM3RCxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsQ0FBQzt3QkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNFLENBQUM7d0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsd0JBQXdCLENBQUM7d0JBQ3hFLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQzt3QkFDeEUsQ0FBQzt3QkFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUVwQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUM7Z0JBRUQscUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSTtvQkFDcEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFBQyxNQUFNLENBQUM7b0JBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsOEJBQVMsR0FBVDtvQkFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBR3ZCLENBQUM7Z0JBeEdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLFFBQVEsRUFBRyx3NENBdUNWO3FCQUNKLENBQUM7OzhCQUFBO2dCQWdFRixpQkFBQztZQUFELENBQUMsQUE5REQsSUE4REM7WUE5REQsbUNBOERDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5pbXBvcnQge01vYmlsZVNlcnZpY2V9IGZyb20gJy4vbW9iaWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdvYmplY3RpdmVzJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDIgYWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImJsdWVcIj5PYmplY3RpdmVzPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsIGZpcnN0XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JbmZsdWVuY2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9zaXRpdmVseSBpbmZsdWVuY2UgbXkgc3Vycm91bmRpbmdzIGFuZCBwZWVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29ubmVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Vbml0ZSBvdGhlcnMgdGhyb3VnaCBwb3NpdGl2ZSBhdHRpdHVkZSBhbmQgZnJpZW5kbHkgdmliZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JbnNwaXJlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJlIGEgcm9sZSBtb2RlbCBhbW9uZ3N0IHBlZXJzIGFuZCBpbnNwaXJlIG90aGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGFuZ2UgdGhlIFdvcmxkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIE9iamVjdGl2ZXMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG91dHJvSW1hZ2U7XG4gICAgbG9hZGVkID0gZmFsc2U7XG5cbiAgICBsb2FkZWRDb3VudCA9IDA7XG4gICAgaW1hZ2VDb3VudCA9IDM7XG4gICAgY29udGFpbmVyO1xuICAgIG91dHJvSW1hZ2UxO1xuICAgIG91dHJvSW1hZ2UyO1xuICAgIG1vb247XG4gICAgcGFuZWxzO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIG1vYmlsZVNlcnZpY2UgOiBNb2JpbGVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHZhciBwYW5lbDtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5wYW5lbHMgPT0gbnVsbCB8fCB0aGlzLnBhbmVscy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLXBhbmVsXCIpO1xuICAgICAgICAgICAgICAgIHBhbmVsID0gdGhpcy5wYW5lbHNbdGhpcy5wYW5lbHMubGVuZ3RoLzJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInVybChpbWFnZXMvb3V0cm8xLmpwZylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwidXJsKGltYWdlcy9vdXRybzIuanBnKVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5tb2JpbGVTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UsIGRyZWFtSW1hZ2UsIG1vb24pIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLm91dHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHRoaXMub3V0cm9JbWFnZTIgPSBkcmVhbUltYWdlO1xuICAgICAgICB0aGlzLm1vb24gPSBtb29uO1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XG5cbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxMb2FkZWQgKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cblxuICAgIH1cblxufVxuIl19