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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9ncmFwaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBob3RvZ3JhcGhlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBSUksc0JBQXFCLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFFOUMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUFBLGlCQWdCSztvQkFmRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFFekUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2hDLFVBQVUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7d0JBQzNELEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUN6RSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNoRixDQUFDLENBQUMsQ0FBQztvQkFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFRCwrQkFBUSxHQUFSLFVBQVUsS0FBSztnQkFFZixDQUFDOztnQkF0RFQ7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsY0FBYzt3QkFDekIsUUFBUSxFQUFHLHdoQ0FxQlY7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBK0JGLG1CQUFDO1lBQUQsQ0FBQyxBQTdCRCxJQTZCQztZQTdCRCx1Q0E2QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0JyaWFuU2VydmljZX0gZnJvbSAnLi9icmlhbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3Bob3RvZ3JhcGhlcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGhvdG9ncmFwaGVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJicmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKVwiIChjbGljayk9XCJjdXJyZW50UGFuZWw9Y3VycmVudFBhbmVsLTFcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImJyaWFuU2VydmljZS50b05leHRQYW5lbChjb250YWluZXIpXCIgKGNsaWNrKT1cImN1cnJlbnRQYW5lbD1jdXJyZW50UGFuZWwrMVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgcGhvdG9ncmFwaGVyLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwaG90b2dyYXBoZXItcGFuZWwgaW50cm8gcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBob3RvZ3JhcGhlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBob3RvZ3JhcGhlci1wYW5lbCBvdXRybyBwYW5lbC1zaXplXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUGhvdG9ncmFwaGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwYW5lbHM7XG4gICAgaW5uZXJDb250YWluZXI7XG4gICAgY3VycmVudFBhbmVsO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGJyaWFuU2VydmljZTpCcmlhblNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGhvdG9ncmFwaGVyLXBhbmVsXCIpO1xuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBob3RvZ3JhcGhlci1pbm5lci1jb250YWluZXJcIilbMF07XG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcblxuICAgICAgICB2YXIgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSBwYW5lbFdpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcGFuZWxXaWR0aCAqIHRoaXMuY3VycmVudFBhbmVsICogLTEgKyBcInB4XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgIH1cblxuICAgICAgICBvblNjcm9sbCAoZXZlbnQpIHtcblxuICAgICAgICB9O1xufVxuIl19