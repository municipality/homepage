System.register(['angular2/core', './brian.service'], function(exports_1, context_1) {
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
    var core_1, brian_service_1;
    var Photographer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            }],
        execute: function() {
            Photographer = (function () {
                function Photographer(brianService) {
                    this.brianService = brianService;
                }
                Photographer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.panels = document.getElementsByClassName("photographer-panel");
                    this.innerContainer = document.getElementsByClassName("photographer-inner-container")[0];
                    this.currentPanel = 0;
                    var panelWidth = this.innerContainer.parentElement.offsetWidth;
                    this.innerContainer.style.width = panelWidth * this.panels.length + "px";
                    window.addEventListener("resize", function (e) {
                        panelWidth = _this.innerContainer.parentElement.offsetWidth;
                        _this.innerContainer.style.width = panelWidth * _this.panels.length + "px";
                        _this.innerContainer.style.left = panelWidth * _this.currentPanel * -1 + "px";
                    });
                    document.addEventListener("scroll", this.onScroll);
                };
                Photographer.prototype.onScroll = function (event) {
                };
                ;
                Photographer = __decorate([
                    core_1.Component({
                        selector: 'photographer',
                        template: "\n        <div class=\"container photographer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"brianService.toPrevPanel(container)\" (click)=\"currentPanel=currentPanel-1\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"brianService.toNextPanel(container)\" (click)=\"currentPanel=currentPanel+1\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container photographer-inner-container\">\n                <div class=\"panel photographer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Photographer</p>\n                    </div>\n                </div>\n                <div class=\"panel photographer-panel outro panel-size\">\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService])
                ], Photographer);
                return Photographer;
            }());
            exports_1("Photographer", Photographer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9ncmFwaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBob3RvZ3JhcGhlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBSUksc0JBQXFCLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFFOUMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUFBLGlCQWdCSztvQkFmRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFFekUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2hDLFVBQVUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7d0JBQzNELEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUN6RSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNoRixDQUFDLENBQUMsQ0FBQztvQkFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFRCwrQkFBUSxHQUFSLFVBQVUsS0FBSztnQkFFZixDQUFDOztnQkF0RFQ7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsY0FBYzt3QkFDekIsUUFBUSxFQUFHLHdoQ0FxQlY7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBK0JGLG1CQUFDO1lBQUQsQ0FBQyxBQTdCRCxJQTZCQztZQTdCRCx1Q0E2QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvciA6ICdwaG90b2dyYXBoZXInLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwaG90b2dyYXBoZXItY29udGFpbmVyIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSAwXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJicmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKVwiIChjbGljayk9XCJjdXJyZW50UGFuZWw9Y3VycmVudFBhbmVsLTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL2xlZnQtYXJyb3cucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYnJpYW5TZXJ2aWNlLnRvTmV4dFBhbmVsKGNvbnRhaW5lcilcIiAoY2xpY2spPVwiY3VycmVudFBhbmVsPWN1cnJlbnRQYW5lbCsxXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9yaWdodC1hcnJvdy5wbmdcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgI2NvbnRhaW5lciBjbGFzcz1cImlubmVyLWNvbnRhaW5lciBwaG90b2dyYXBoZXItaW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGhvdG9ncmFwaGVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9ncmFwaGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGhvdG9ncmFwaGVyLXBhbmVsIG91dHJvIHBhbmVsLXNpemVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGhvdG9ncmFwaGVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBhbmVscztcclxuICAgIGlubmVyQ29udGFpbmVyO1xyXG4gICAgY3VycmVudFBhbmVsO1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGhvdG9ncmFwaGVyLXBhbmVsXCIpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGhvdG9ncmFwaGVyLWlubmVyLWNvbnRhaW5lclwiKVswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IDA7XHJcblxyXG4gICAgICAgIHZhciBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUubGVmdCA9IHBhbmVsV2lkdGggKiB0aGlzLmN1cnJlbnRQYW5lbCAqIC0xICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TY3JvbGwgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIH07XHJcbn1cclxuIl19