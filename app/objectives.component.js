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
                    if (!this.mobileService.isMobile()) {
                        document.addEventListener("scroll", function (e) {
                            if (_this.panels == null || _this.panels.length == 0) {
                                _this.panels = document.getElementsByClassName("outro-panel");
                                panel = _this.panels[_this.panels.length / 2];
                            }
                            if (_this.container == null) {
                                _this.container = document.getElementsByClassName("outro-container")[0];
                                _this.container.className += " desktop";
                            }
                            if (panel.getBoundingClientRect().top > 0) {
                                _this.container.style["background-image"] = "url(images/outro1.jpg)";
                            }
                            else {
                                _this.container.style["background-image"] = "url(images/outro2.jpg)";
                            }
                        });
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvYmplY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdEQTtnQkFXSSxvQkFBcUIsZ0JBQW1DLEVBQ25DLGFBQTZCO29CQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBVmxELFdBQU0sR0FBRyxLQUFLLENBQUM7b0JBRWYsZ0JBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBU2YsQ0FBQztnQkFFRCw2QkFBUSxHQUFSO29CQUFBLGlCQXlCQztvQkF4QkcsSUFBSSxLQUFLLENBQUM7b0JBQ1YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFFakMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7NEJBQ2xDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2hELEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUM3RCxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDOUMsQ0FBQzs0QkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZFLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQTs0QkFDMUMsQ0FBQzs0QkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDeEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQzs0QkFDeEUsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDRixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLHdCQUF3QixDQUFDOzRCQUN4RSxDQUFDO3dCQUVMLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBRUwsQ0FBQztnQkFFRCxxQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJO29CQUNwQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUVuQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw4QkFBUyxHQUFUO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQUMsTUFBTSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFHdkIsQ0FBQztnQkF6R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsWUFBWTt3QkFDdkIsUUFBUSxFQUFHLHc0Q0F1Q1Y7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBaUVGLGlCQUFDO1lBQUQsQ0FBQyxBQS9ERCxJQStEQztZQS9ERCxtQ0ErREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ29iamVjdGl2ZXMnLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMiBhbGlnbj1cImNlbnRlclwiIGNsYXNzPVwiYmx1ZVwiPk9iamVjdGl2ZXM8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWwgZmlyc3RcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluZmx1ZW5jZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3NpdGl2ZWx5IGluZmx1ZW5jZSBteSBzdXJyb3VuZGluZ3MgYW5kIHBlZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Db25uZWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVuaXRlIG90aGVycyB0aHJvdWdoIHBvc2l0aXZlIGF0dGl0dWRlIGFuZCBmcmllbmRseSB2aWJlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc3BpcmU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmUgYSByb2xlIG1vZGVsIGFtb25nc3QgcGVlcnMgYW5kIGluc3BpcmUgb3RoZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSB0aGUgV29ybGQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0aXZlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgb3V0cm9JbWFnZTtcbiAgICBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGxvYWRlZENvdW50ID0gMDtcbiAgICBpbWFnZUNvdW50ID0gMztcbiAgICBjb250YWluZXI7XG4gICAgb3V0cm9JbWFnZTE7XG4gICAgb3V0cm9JbWFnZTI7XG4gICAgbW9vbjtcbiAgICBwYW5lbHM7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbW9iaWxlU2VydmljZSA6IE1vYmlsZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdmFyIHBhbmVsO1xuICAgICAgICBpZiAoIXRoaXMubW9iaWxlU2VydmljZS5pc01vYmlsZSgpKSB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBhbmVscyA9PSBudWxsIHx8IHRoaXMucGFuZWxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLXBhbmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICBwYW5lbCA9IHRoaXMucGFuZWxzW3RoaXMucGFuZWxzLmxlbmd0aC8yXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiBkZXNrdG9wXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInVybChpbWFnZXMvb3V0cm8xLmpwZylcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IFwidXJsKGltYWdlcy9vdXRybzIuanBnKVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UsIGRyZWFtSW1hZ2UsIG1vb24pIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLm91dHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHRoaXMub3V0cm9JbWFnZTIgPSBkcmVhbUltYWdlO1xuICAgICAgICB0aGlzLm1vb24gPSBtb29uO1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XG5cbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxMb2FkZWQgKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cblxuICAgIH1cblxufVxuIl19