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
                Designer = __decorate([
                    core_1.Component({
                        selector: 'designer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div class=\"container face designer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"handlePanel('back', bgimage, container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"handlePanel('forward', bgimage, container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container designer-inner-container\">\n                <div class=\"panel designer-panel intro panel-size\">\n\n                    <div class=\"title\">\n                        <p>Designer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel designer-panel projects panel-size\">\n                        <h2 class=\"header\">Projects</h2>\n                        <div class=\"projects-table\">\n                            <div *ngFor=\"#project of projects\" class=\"projects-table-cell\">\n                                <a href={{project.url}} target=\"_blank\">\n                                    <img src=\"{{project.image}}\">\n                                </a>\n                                <p align=\"center\">{{project.title}}</p>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService])
                ], Designer);
                return Designer;
            }());
            exports_1("Designer", Designer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVzaWduZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0RBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUVqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuRCw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsOEJBQThCO29CQUM5QixvQ0FBb0M7b0JBQ3BDLFFBQVE7b0JBQ1IsYUFBYTtvQkFDYix5QkFBeUI7b0JBQ3pCLDZDQUE2QztvQkFDN0MsUUFBUTtvQkFDUixFQUFFO29CQUNGLE1BQU07Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBVyxHQUFYLFVBQWEsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTO29CQUN0Qyw2QkFBNkI7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FDdkIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzdDLENBQUM7Z0JBQ0wsQ0FBQztnQkF2R0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsVUFBVTt3QkFDckIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsUUFBUSxFQUFHLCtuREFxQ1Y7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBK0RGLGVBQUM7WUFBRCxDQUFDLEFBN0RELElBNkRDO1lBN0RELCtCQTZEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xuaW1wb3J0IHtFbmdpbmVlclNlcnZpY2V9IGZyb20gJy4vZW5naW5lZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdkZXNpZ25lcicsXG4gICAgcHJvdmlkZXJzOiBbRW5naW5lZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmYWNlIGRlc2lnbmVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnYmFjaycsIGJnaW1hZ2UsIGNvbnRhaW5lcilcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVBhbmVsKCdmb3J3YXJkJywgYmdpbWFnZSwgY29udGFpbmVyKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZGVzaWduZXItaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGRlc2lnbmVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlc2lnbmVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGVmdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBkZXNpZ25lci1wYW5lbCBwcm9qZWN0cyBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXJcIj5Qcm9qZWN0czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNwcm9qZWN0IG9mIHByb2plY3RzXCIgY2xhc3M9XCJwcm9qZWN0cy10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3twcm9qZWN0LnVybH19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e3Byb2plY3QuaW1hZ2V9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiY2VudGVyXCI+e3twcm9qZWN0LnRpdGxlfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXNpZ25lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW5uZXJDb250YWluZXI7XG4gICAgcGFuZWxzO1xuICAgIGN1cnJlbnRQYW5lbDtcbiAgICBwcm9qZWN0cztcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBicmlhblNlcnZpY2U6QnJpYW5TZXJ2aWNlLCBwcml2YXRlIGVuZ2luZWVyU2VydmljZSA6IEVuZ2luZWVyU2VydmljZSkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdHMoKTtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZXNpZ25lci1wYW5lbFwiKTtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZXNpZ25lci1pbm5lci1jb250YWluZXJcIilbMF07XG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcblxuICAgICAgICB2YXIgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gMTAwICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCIlXCI7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUubGVmdCA9IHBhbmVsV2lkdGggKiB0aGlzLmN1cnJlbnRQYW5lbCAqIC0xICsgXCJweFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cblxuICAgIG9uU2Nyb2xsIChldmVudCkge1xuXG4gICAgfTtcblxuICAgIGdldFByb2plY3RzICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMuZW5naW5lZXJTZXJ2aWNlLmdldFByb2plY3RzKCk7XG4gICAgICAgIC8vIC5zdWJzY3JpYmUoIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAvLyAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2U7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAvL0hhbmRsZSBlcnJvclxuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IHJldHJpZXZlIHByb2plY3RzXCIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVQYW5lbCAoZGlyZWN0aW9uLCBiZ0ltYWdlLCBjb250YWluZXIpIHtcbiAgICAgICAgLy9kaXJlY3Rpb24gPSBiYWNrIHx8IGZvcndhcmRcbiAgICAgICAgaWYoZGlyZWN0aW9uID09IFwiYmFja1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbC0tO1xuICAgICAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsKys7XG4gICAgICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b05leHRQYW5lbChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19