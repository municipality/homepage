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
                    this.getProjects();
                    this.panels = document.getElementsByClassName("designer-panel");
                    this.innerContainer = document.getElementsByClassName("designer-inner-container")[0];
                    this.currentPanel = 0;
                    var panelWidth = this.innerContainer.parentElement.offsetWidth;
                    this.innerContainer.style.width = 100 * this.panels.length + "%";
                    window.addEventListener("resize", function (e) {
                        // panelWidth = this.innerContainer.parentElement.offsetWidth;
                        // this.innerContainer.style.width = panelWidth * this.panels.length + "px";
                        // this.innerContainer.style.left = panelWidth * this.currentPanel * -1 + "px";
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
                        if (this.currentPanel == 0) {
                            bgImage.style["z-index"] = "0";
                        }
                    }
                    else {
                        this.currentPanel++;
                        this.brianService.toNextPanel(container);
                        bgImage.style["z-index"] = "2";
                    }
                };
                Designer = __decorate([
                    core_1.Component({
                        selector: 'designer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div class=\"container designer-container panel-size\">\n            <img #bgimage class=\"intro-image designer-intro-image\" src=\"images/designer-bg.jpg\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"handlePanel('back', bgimage, container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"handlePanel('forward', bgimage, container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container designer-inner-container\">\n                <div class=\"panel designer-panel intro panel-size\">\n\n                    <div class=\"title\">\n                        <p>Designer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel designer-panel projects panel-size\">\n                        <h2 class=\"header\">Projects</h2>\n                        <div class=\"projects-table\">\n                            <div *ngFor=\"#project of projects\" class=\"projects-table-cell\">\n                                <a href={{project.url}} target=\"_blank\">\n                                    <img src=\"{{project.image}}\">\n                                </a>\n                                <p align=\"center\">{{project.title}}</p>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService])
                ], Designer);
                return Designer;
            }());
            exports_1("Designer", Designer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVzaWduZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBRUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFFakUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2hDLDhEQUE4RDt3QkFDOUQsNEVBQTRFO3dCQUM1RSwrRUFBK0U7b0JBQ25GLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuRCw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsOEJBQThCO29CQUM5QixvQ0FBb0M7b0JBQ3BDLFFBQVE7b0JBQ1IsYUFBYTtvQkFDYix5QkFBeUI7b0JBQ3pCLDZDQUE2QztvQkFDN0MsUUFBUTtvQkFDUixFQUFFO29CQUNGLE1BQU07Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBVyxHQUFYLFVBQWEsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTO29CQUN0Qyw2QkFBNkI7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FDdkIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNuQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0wsQ0FBQztnQkE1R0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsVUFBVTt3QkFDckIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsUUFBUSxFQUFHLGd1REFzQ1Y7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBbUVGLGVBQUM7WUFBRCxDQUFDLEFBakVELElBaUVDO1lBakVELCtCQWlFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0JyaWFuU2VydmljZX0gZnJvbSAnLi9icmlhbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtFbmdpbmVlclNlcnZpY2V9IGZyb20gJy4vZW5naW5lZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvciA6ICdkZXNpZ25lcicsXHJcbiAgICBwcm92aWRlcnM6IFtFbmdpbmVlclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBkZXNpZ25lci1jb250YWluZXIgcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8aW1nICNiZ2ltYWdlIGNsYXNzPVwiaW50cm8taW1hZ2UgZGVzaWduZXItaW50cm8taW1hZ2VcIiBzcmM9XCJpbWFnZXMvZGVzaWduZXItYmcuanBnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjdXJyZW50UGFuZWwgIT0gMFwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlUGFuZWwoJ2JhY2snLCBiZ2ltYWdlLCBjb250YWluZXIpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSBwYW5lbHMubGVuZ3RoIC0gMVwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVBhbmVsKCdmb3J3YXJkJywgYmdpbWFnZSwgY29udGFpbmVyKVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbnMvcmlnaHQtYXJyb3cucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZGVzaWduZXItaW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZGVzaWduZXItcGFuZWwgaW50cm8gcGFuZWwtc2l6ZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVzaWduZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGVmdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByaWdodFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGRlc2lnbmVyLXBhbmVsIHByb2plY3RzIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+UHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIiBjbGFzcz1cInByb2plY3RzLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e3Byb2plY3QuaW1hZ2V9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cImNlbnRlclwiPnt7cHJvamVjdC50aXRsZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpbm5lckNvbnRhaW5lcjtcclxuICAgIHBhbmVscztcclxuICAgIGN1cnJlbnRQYW5lbDtcclxuICAgIHByb2plY3RzO1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSwgcHJpdmF0ZSBlbmdpbmVlclNlcnZpY2UgOiBFbmdpbmVlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdldFByb2plY3RzKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlc2lnbmVyLXBhbmVsXCIpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSAxMDAgKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcIiVcIjtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgLy8gdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUubGVmdCA9IHBhbmVsV2lkdGggKiB0aGlzLmN1cnJlbnRQYW5lbCAqIC0xICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsIChldmVudCkge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZ2V0UHJvamVjdHMgKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLmVuZ2luZWVyU2VydmljZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIC8vIC5zdWJzY3JpYmUoIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvL0hhbmRsZSBlcnJvclxyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoXCJDYW5ub3QgcmV0cmlldmUgcHJvamVjdHNcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBhbmVsIChkaXJlY3Rpb24sIGJnSW1hZ2UsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIC8vZGlyZWN0aW9uID0gYmFjayB8fCBmb3J3YXJkXHJcbiAgICAgICAgaWYoZGlyZWN0aW9uID09IFwiYmFja1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwtLTtcclxuICAgICAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50UGFuZWwgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYmdJbWFnZS5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwrKztcclxuICAgICAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9OZXh0UGFuZWwoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgYmdJbWFnZS5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19