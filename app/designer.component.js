System.register(['angular2/core', './brian.service', './engineer.service'], function(exports_1, context_1) {
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
    var core_1, brian_service_1, engineer_service_1;
    var Designer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            },
            function (engineer_service_1_1) {
                engineer_service_1 = engineer_service_1_1;
            }],
        execute: function() {
            Designer = (function () {
                function Designer(brianService, engineerService) {
                    this.brianService = brianService;
                    this.engineerService = engineerService;
                    this.projects = [];
                }
                Designer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getProjects();
                    this.panels = document.getElementsByClassName("designer-panel");
                    this.innerContainer = document.getElementsByClassName("designer-inner-container")[0];
                    this.currentPanel = 0;
                    var panelWidth = this.innerContainer.parentElement.offsetWidth;
                    this.innerContainer.style.width = 100 * this.panels.length + "%";
                    window.addEventListener("resize", function (e) {
                        panelWidth = _this.innerContainer.parentElement.offsetWidth;
                        _this.innerContainer.style.width = panelWidth * _this.panels.length + "px";
                        _this.innerContainer.style.left = panelWidth * _this.currentPanel * -1 + "px";
                    });
                    document.addEventListener("scroll", this.onScroll);
                };
                Designer.prototype.onScroll = function (event) {
                };
                ;
                Designer.prototype.getProjects = function () {
                    this.projects = this.engineerService.getProjects();
                    // .subscribe( (response) => {
                    //     console.log(response);
                    //     if (response != null) {
                    //         this.projects = response;
                    //     }
                    //     else {
                    //         //Handle error
                    //         alert("Cannot retrieve projects");
                    //     }
                    //
                    // });
                };
                Designer.prototype.handlePanel = function (direction, bgImage, container) {
                    //direction = back || forward
                    if (direction == "back") {
                        this.currentPanel--;
                        this.brianService.toPrevPanel(container);
                    }
                    else {
                        this.currentPanel++;
                        this.brianService.toNextPanel(container);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Designer.prototype, "isDesktop", void 0);
                Designer = __decorate([
                    core_1.Component({
                        selector: 'designer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div [ngClass]=\"{desktop: isDesktop}\"\n        class=\"container face designer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"handlePanel('back', bgimage, container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"handlePanel('forward', bgimage, container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container designer-inner-container\">\n                <div class=\"panel designer-panel intro panel-size\">\n\n                    <div class=\"title\">\n                        <p>Designer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel designer-panel projects panel-size\">\n                        <h2 class=\"header\">Projects</h2>\n                        <div class=\"projects-table\">\n                            <div *ngFor=\"#project of projects\" class=\"projects-table-cell\">\n                                <a href={{project.url}} target=\"_blank\">\n                                    <img src=\"{{project.image}}\">\n                                </a>\n                                <p align=\"center\">{{project.title}}</p>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService])
                ], Designer);
                return Designer;
            }());
            exports_1("Designer", Designer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVzaWduZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQU1JLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUVqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuRCw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsOEJBQThCO29CQUM5QixvQ0FBb0M7b0JBQ3BDLFFBQVE7b0JBQ1IsYUFBYTtvQkFDYix5QkFBeUI7b0JBQ3pCLDZDQUE2QztvQkFDN0MsUUFBUTtvQkFDUixFQUFFO29CQUNGLE1BQU07Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBVyxHQUFYLFVBQWEsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTO29CQUN0Qyw2QkFBNkI7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FDdkIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzdDLENBQUM7Z0JBQ0wsQ0FBQztnQkF4REQ7b0JBQUMsWUFBSyxFQUFFOzsyREFBQTtnQkFqRFo7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsVUFBVTt3QkFDckIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsUUFBUSxFQUFHLDJxREFzQ1Y7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBZ0VGLGVBQUM7WUFBRCxDQUFDLEFBOURELElBOERDO1lBOURELCtCQThEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0JyaWFuU2VydmljZX0gZnJvbSAnLi9icmlhbi5zZXJ2aWNlJztcbmltcG9ydCB7RW5naW5lZXJTZXJ2aWNlfSBmcm9tICcuL2VuZ2luZWVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnZGVzaWduZXInLFxuICAgIHByb3ZpZGVyczogW0VuZ2luZWVyU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwie2Rlc2t0b3A6IGlzRGVza3RvcH1cIlxuICAgICAgICBjbGFzcz1cImNvbnRhaW5lciBmYWNlIGRlc2lnbmVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnYmFjaycsIGJnaW1hZ2UsIGNvbnRhaW5lcilcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVBhbmVsKCdmb3J3YXJkJywgYmdpbWFnZSwgY29udGFpbmVyKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZGVzaWduZXItaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGRlc2lnbmVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlc2lnbmVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGVmdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBkZXNpZ25lci1wYW5lbCBwcm9qZWN0cyBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXJcIj5Qcm9qZWN0czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNwcm9qZWN0IG9mIHByb2plY3RzXCIgY2xhc3M9XCJwcm9qZWN0cy10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3twcm9qZWN0LnVybH19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e3Byb2plY3QuaW1hZ2V9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiY2VudGVyXCI+e3twcm9qZWN0LnRpdGxlfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXNpZ25lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW5uZXJDb250YWluZXI7XG4gICAgcGFuZWxzO1xuICAgIGN1cnJlbnRQYW5lbDtcbiAgICBwcm9qZWN0cztcbiAgICBASW5wdXQoKSBpc0Rlc2t0b3A7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSwgcHJpdmF0ZSBlbmdpbmVlclNlcnZpY2UgOiBFbmdpbmVlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgICAgICB0aGlzLmdldFByb2plY3RzKCk7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItcGFuZWxcIik7XG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IDA7XG5cbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IDEwMCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwiJVwiO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBwYW5lbFdpZHRoICogdGhpcy5jdXJyZW50UGFuZWwgKiAtMSArIFwicHhcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcblxuICAgIH07XG5cbiAgICBnZXRQcm9qZWN0cyAoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLmVuZ2luZWVyU2VydmljZS5nZXRQcm9qZWN0cygpO1xuICAgICAgICAvLyAuc3Vic2NyaWJlKCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgLy8gICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHJlc3BvbnNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgLy9IYW5kbGUgZXJyb3JcbiAgICAgICAgLy8gICAgICAgICBhbGVydChcIkNhbm5vdCByZXRyaWV2ZSBwcm9qZWN0c1wiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGFuZWwgKGRpcmVjdGlvbiwgYmdJbWFnZSwgY29udGFpbmVyKSB7XG4gICAgICAgIC8vZGlyZWN0aW9uID0gYmFjayB8fCBmb3J3YXJkXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSBcImJhY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwtLTtcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvUHJldlBhbmVsKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCsrO1xuICAgICAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9OZXh0UGFuZWwoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==