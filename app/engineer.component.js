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
    var Engineer;
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
            Engineer = (function () {
                function Engineer(brianService, engineerService) {
                    this.brianService = brianService;
                    this.engineerService = engineerService;
                    this.projects = [];
                }
                Engineer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getProjects();
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
                Engineer.prototype.getProjects = function () {
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
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div class=\"container engineer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"toPrevPanel(container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"toNextPanel(container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel projects panel-size\">\n                        <h2 class=\"header\">Projects</h2>\n                        <div class=\"projects-table\">\n                            <div *ngFor=\"#project of projects\" class=\"projects-table-cell\">\n                                <a href={{project.url}} target=\"_blank\">\n                                    <img src=\"{{project.image}}\">\n                                </a>\n                                <p align=\"center\">{{project.title}}</p>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUV6RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVgsVUFBYSxTQUFTO29CQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUVELDhCQUFXLEdBQVgsVUFBYSxTQUFTO29CQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTdCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw4QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkQsOEJBQThCO29CQUM5Qiw2QkFBNkI7b0JBQzdCLDhCQUE4QjtvQkFDOUIsb0NBQW9DO29CQUNwQyxRQUFRO29CQUNSLGFBQWE7b0JBQ2IseUJBQXlCO29CQUN6Qiw2Q0FBNkM7b0JBQzdDLFFBQVE7b0JBQ1IsRUFBRTtvQkFDRixNQUFNO2dCQUNWLENBQUM7Z0JBdEdMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7d0JBQzVCLFFBQVEsRUFBRyw0bERBb0NWO3FCQUNKLENBQUM7OzRCQUFBO2dCQStERixlQUFDO1lBQUQsQ0FBQyxBQTdERCxJQTZEQztZQTdERCwrQkE2REMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XHJcbmltcG9ydCB7RW5naW5lZXJTZXJ2aWNlfSBmcm9tICcuL2VuZ2luZWVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3IgOiAnZW5naW5lZXInLFxyXG4gICAgcHJvdmlkZXJzOiBbRW5naW5lZXJTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZW5naW5lZXItY29udGFpbmVyIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSAwXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b1ByZXZQYW5lbChjb250YWluZXIpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSBwYW5lbHMubGVuZ3RoIC0gMVwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvTmV4dFBhbmVsKGNvbnRhaW5lcilcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwiaW5uZXItY29udGFpbmVyIGVuZ2luZWVyLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGVuZ2luZWVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29mdHdhcmUgRW5naW5lZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGVmdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByaWdodFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGVuZ2luZWVyLXBhbmVsIHByb2plY3RzIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+UHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIiBjbGFzcz1cInByb2plY3RzLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e3Byb2plY3QuaW1hZ2V9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cImNlbnRlclwiPnt7cHJvamVjdC50aXRsZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmVlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpbm5lckNvbnRhaW5lcjtcclxuICAgIHBhbmVscztcclxuICAgIGN1cnJlbnRQYW5lbDtcclxuICAgIHByb2plY3RzO1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSwgcHJpdmF0ZSBlbmdpbmVlclNlcnZpY2UgOiBFbmdpbmVlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdldFByb2plY3RzKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVuZ2luZWVyLXBhbmVsXCIpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSBwYW5lbFdpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gcGFuZWxXaWR0aCAqIHRoaXMuY3VycmVudFBhbmVsICogLTEgKyBcInB4XCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwgKGV2ZW50KSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0b05leHRQYW5lbCAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9OZXh0UGFuZWwoY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUHJldlBhbmVsIChjb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b1ByZXZQYW5lbChjb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsLS07XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhbmVsID09IDApIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzICgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5lbmdpbmVlclNlcnZpY2UuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICAvLyAuc3Vic2NyaWJlKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgLy9IYW5kbGUgZXJyb3JcclxuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IHJldHJpZXZlIHByb2plY3RzXCIpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=