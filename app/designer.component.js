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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVzaWduZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBRUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFFakUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2hDLDhEQUE4RDt3QkFDOUQsNEVBQTRFO3dCQUM1RSwrRUFBK0U7b0JBQ25GLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuRCw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0IsOEJBQThCO29CQUM5QixvQ0FBb0M7b0JBQ3BDLFFBQVE7b0JBQ1IsYUFBYTtvQkFDYix5QkFBeUI7b0JBQ3pCLDZDQUE2QztvQkFDN0MsUUFBUTtvQkFDUixFQUFFO29CQUNGLE1BQU07Z0JBQ1YsQ0FBQztnQkFFRCw4QkFBVyxHQUFYLFVBQWEsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTO29CQUN0Qyw2QkFBNkI7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FDdkIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNuQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0wsQ0FBQztnQkE1R0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsVUFBVTt3QkFDckIsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsUUFBUSxFQUFHLGd1REFzQ1Y7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBbUVGLGVBQUM7WUFBRCxDQUFDLEFBakVELElBaUVDO1lBakVELCtCQWlFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xuaW1wb3J0IHtFbmdpbmVlclNlcnZpY2V9IGZyb20gJy4vZW5naW5lZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdkZXNpZ25lcicsXG4gICAgcHJvdmlkZXJzOiBbRW5naW5lZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBkZXNpZ25lci1jb250YWluZXIgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgPGltZyAjYmdpbWFnZSBjbGFzcz1cImludHJvLWltYWdlIGRlc2lnbmVyLWludHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2Rlc2lnbmVyLWJnLmpwZ1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSAwXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlUGFuZWwoJ2JhY2snLCBiZ2ltYWdlLCBjb250YWluZXIpXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbnMvbGVmdC1hcnJvdy5wbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSBwYW5lbHMubGVuZ3RoIC0gMVwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnZm9yd2FyZCcsIGJnaW1hZ2UsIGNvbnRhaW5lcilcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9yaWdodC1hcnJvdy5wbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwiaW5uZXItY29udGFpbmVyIGRlc2lnbmVyLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBkZXNpZ25lci1wYW5lbCBpbnRybyBwYW5lbC1zaXplXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXNpZ25lcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZGVzaWduZXItcGFuZWwgcHJvamVjdHMgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjcHJvamVjdCBvZiBwcm9qZWN0c1wiIGNsYXNzPVwicHJvamVjdHMtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3twcm9qZWN0LmltYWdlfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cImNlbnRlclwiPnt7cHJvamVjdC50aXRsZX19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRGVzaWduZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlubmVyQ29udGFpbmVyO1xuICAgIHBhbmVscztcbiAgICBjdXJyZW50UGFuZWw7XG4gICAgcHJvamVjdHM7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSwgcHJpdmF0ZSBlbmdpbmVlclNlcnZpY2UgOiBFbmdpbmVlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgICAgICB0aGlzLmdldFByb2plY3RzKCk7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItcGFuZWxcIik7XG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVzaWduZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IDA7XG5cbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IDEwMCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwiJVwiO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgLy8gdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XG4gICAgICAgICAgICAvLyB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBwYW5lbFdpZHRoICogdGhpcy5jdXJyZW50UGFuZWwgKiAtMSArIFwicHhcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcblxuICAgIH07XG5cbiAgICBnZXRQcm9qZWN0cyAoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLmVuZ2luZWVyU2VydmljZS5nZXRQcm9qZWN0cygpO1xuICAgICAgICAvLyAuc3Vic2NyaWJlKCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgLy8gICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHJlc3BvbnNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgLy9IYW5kbGUgZXJyb3JcbiAgICAgICAgLy8gICAgICAgICBhbGVydChcIkNhbm5vdCByZXRyaWV2ZSBwcm9qZWN0c1wiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGFuZWwgKGRpcmVjdGlvbiwgYmdJbWFnZSwgY29udGFpbmVyKSB7XG4gICAgICAgIC8vZGlyZWN0aW9uID0gYmFjayB8fCBmb3J3YXJkXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSBcImJhY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwtLTtcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvUHJldlBhbmVsKGNvbnRhaW5lcik7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYW5lbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgYmdJbWFnZS5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsKys7XG4gICAgICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b05leHRQYW5lbChjb250YWluZXIpO1xuICAgICAgICAgICAgYmdJbWFnZS5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==