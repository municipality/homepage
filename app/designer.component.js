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
                    this.innerContainer.style.width = panelWidth * this.panels.length + "px";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVzaWduZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUV6RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuRCw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsOEJBQThCO29CQUM5QixvQ0FBb0M7b0JBQ3BDLFFBQVE7b0JBQ1IsYUFBYTtvQkFDYix5QkFBeUI7b0JBQ3pCLDZDQUE2QztvQkFDN0MsUUFBUTtvQkFDUixFQUFFO29CQUNGLE1BQU07Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBVyxHQUFYLFVBQWEsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTO29CQUN0Qyw2QkFBNkI7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FDdkIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNuQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0wsQ0FBQztnQkE1R0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsVUFBVTt3QkFDckIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsUUFBUSxFQUFHLGd1REFzQ1Y7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBbUVGLGVBQUM7WUFBRCxDQUFDLEFBakVELElBaUVDO1lBakVELCtCQWlFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xuaW1wb3J0IHtFbmdpbmVlclNlcnZpY2V9IGZyb20gJy4vZW5naW5lZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdkZXNpZ25lcicsXG4gICAgcHJvdmlkZXJzOiBbRW5naW5lZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBkZXNpZ25lci1jb250YWluZXIgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgPGltZyAjYmdpbWFnZSBjbGFzcz1cImludHJvLWltYWdlIGRlc2lnbmVyLWludHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2Rlc2lnbmVyLWJnLmpwZ1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSAwXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlUGFuZWwoJ2JhY2snLCBiZ2ltYWdlLCBjb250YWluZXIpXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbnMvbGVmdC1hcnJvdy5wbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSBwYW5lbHMubGVuZ3RoIC0gMVwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnZm9yd2FyZCcsIGJnaW1hZ2UsIGNvbnRhaW5lcilcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9yaWdodC1hcnJvdy5wbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwiaW5uZXItY29udGFpbmVyIGRlc2lnbmVyLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBkZXNpZ25lci1wYW5lbCBpbnRybyBwYW5lbC1zaXplXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXNpZ25lcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZGVzaWduZXItcGFuZWwgcHJvamVjdHMgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjcHJvamVjdCBvZiBwcm9qZWN0c1wiIGNsYXNzPVwicHJvamVjdHMtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3twcm9qZWN0LmltYWdlfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cImNlbnRlclwiPnt7cHJvamVjdC50aXRsZX19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRGVzaWduZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlubmVyQ29udGFpbmVyO1xuICAgIHBhbmVscztcbiAgICBjdXJyZW50UGFuZWw7XG4gICAgcHJvamVjdHM7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSwgcHJpdmF0ZSBlbmdpbmVlclNlcnZpY2UgOiBFbmdpbmVlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgICAgICB0aGlzLmdldFByb2plY3RzKCk7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItcGFuZWxcIik7XG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IDA7XG5cbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUubGVmdCA9IHBhbmVsV2lkdGggKiB0aGlzLmN1cnJlbnRQYW5lbCAqIC0xICsgXCJweFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cblxuICAgIG9uU2Nyb2xsIChldmVudCkge1xuXG4gICAgfTtcblxuICAgIGdldFByb2plY3RzICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMuZW5naW5lZXJTZXJ2aWNlLmdldFByb2plY3RzKCk7XG4gICAgICAgIC8vIC5zdWJzY3JpYmUoIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAvLyAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2U7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAvL0hhbmRsZSBlcnJvclxuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IHJldHJpZXZlIHByb2plY3RzXCIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVQYW5lbCAoZGlyZWN0aW9uLCBiZ0ltYWdlLCBjb250YWluZXIpIHtcbiAgICAgICAgLy9kaXJlY3Rpb24gPSBiYWNrIHx8IGZvcndhcmRcbiAgICAgICAgaWYoZGlyZWN0aW9uID09IFwiYmFja1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbC0tO1xuICAgICAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhbmVsID09IDApIHtcbiAgICAgICAgICAgICAgICBiZ0ltYWdlLnN0eWxlW1wiei1pbmRleFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwrKztcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvTmV4dFBhbmVsKGNvbnRhaW5lcik7XG4gICAgICAgICAgICBiZ0ltYWdlLnN0eWxlW1wiei1pbmRleFwiXSA9IFwiMlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19