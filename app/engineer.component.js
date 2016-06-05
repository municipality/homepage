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
    var Engineer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            }],
        execute: function() {
            Engineer = (function () {
                function Engineer(brianService) {
                    this.brianService = brianService;
                }
                Engineer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.panels = document.getElementsByClassName("engineer-panel");
                    this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
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
                Engineer.prototype.onScroll = function (event) {
                };
                ;
                Engineer.prototype.toNextPanel = function (component) {
                    this.brianService.toNextPanel(component);
                    this.currentPanel++;
                };
                Engineer.prototype.toPrevPanel = function (component) {
                    this.brianService.toPrevPanel(component);
                    this.currentPanel--;
                    if (this.currentPanel == 0) {
                    }
                };
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        template: "\n        <div class=\"container engineer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"toPrevPanel(container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"toNextPanel(container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel projects panel-size\">\n                        <h2 class=\"header\">Projects</h2>\n\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0NBO2dCQUlJLGtCQUFxQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBRTlDLENBQUM7Z0JBRUQsMkJBQVEsR0FBUjtvQkFBQSxpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7b0JBRXRCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztvQkFFL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBRXpFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNoQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO3dCQUMzRCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDekUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDaEYsQ0FBQyxDQUFDLENBQUM7b0JBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRUQsMkJBQVEsR0FBUixVQUFVLEtBQUs7Z0JBRWYsQ0FBQzs7Z0JBRUQsOEJBQVcsR0FBWCxVQUFhLFNBQVM7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsOEJBQVcsR0FBWCxVQUFhLFNBQVM7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFN0IsQ0FBQztnQkFDTCxDQUFDO2dCQTNFTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixRQUFRLEVBQUcsK25DQTZCVjtxQkFDSixDQUFDOzs0QkFBQTtnQkE0Q0YsZUFBQztZQUFELENBQUMsQUExQ0QsSUEwQ0M7WUExQ0QsK0JBMENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3IgOiAnZW5naW5lZXInLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBlbmdpbmVlci1jb250YWluZXIgcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvUHJldlBhbmVsKGNvbnRhaW5lcilcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL2xlZnQtYXJyb3cucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9OZXh0UGFuZWwoY29udGFpbmVyKVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbnMvcmlnaHQtYXJyb3cucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZW5naW5lZXItaW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZW5naW5lZXItcGFuZWwgaW50cm8gcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZSBFbmdpbmVlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBsZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJpZ2h0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZW5naW5lZXItcGFuZWwgcHJvamVjdHMgcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXJcIj5Qcm9qZWN0czwvaDI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmVlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpbm5lckNvbnRhaW5lcjtcclxuICAgIHBhbmVscztcclxuICAgIGN1cnJlbnRQYW5lbDtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGJyaWFuU2VydmljZTpCcmlhblNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVuZ2luZWVyLXBhbmVsXCIpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSBwYW5lbFdpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcGFuZWxXaWR0aCAqIHRoaXMuY3VycmVudFBhbmVsICogLTEgKyBcInB4XCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwgKGV2ZW50KSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0b05leHRQYW5lbCAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9OZXh0UGFuZWwoY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUHJldlBhbmVsIChjb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b1ByZXZQYW5lbChjb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsLS07XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhbmVsID09IDApIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==