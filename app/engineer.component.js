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
                    this.skillset = [];
                }
                Engineer.prototype.ngOnInit = function () {
                    this.getSkillset();
                    this.panels = document.getElementsByClassName("engineer-panel");
                    this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
                    this.currentPanel = 0;
                    var panelWidth = this.innerContainer.parentElement.offsetWidth;
                    this.innerContainer.style.width = this.panels.length * 100 + "%";
                    window.addEventListener("resize", function (e) {
                        // panelWidth = this.innerContainer.parentElement.offsetWidth;
                        // this.innerContainer.style.width = panelWidth * this.panels.length + "px";
                        // this.innerContainer.style.left = panelWidth * this.currentPanel * -1 + "px";
                    });
                    document.addEventListener("scroll", this.onScroll);
                };
                Engineer.prototype.onScroll = function (event) {
                };
                ;
                Engineer.prototype.getSkillset = function () {
                    this.skillset = this.engineerService.getSkillset();
                };
                Engineer.prototype.handlePanel = function (direction, bgImage, container) {
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
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div class=\"container engineer-container panel-size\">\n            <img #bgimage class=\"intro-image engineer-intro-image\" src=\"images/engineer-bg.jpg\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"handlePanel('back', bgimage, container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"handlePanel('forward', bgimage, container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel skills panel-size\">\n                        <h2 class=\"header\">Skillset</h2>\n                        <div class=\"skillset-list\">\n                            <div class=\"skill\" *ngFor=\"#skill of skillset\">\n                            <p>{{skill.name}}</p>\n                                <div class=\"bar\">\n\n                                    <div class=\"inner-bar\" style=\"width:{{skill.percent}}; \"> </div>\n                                </div>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBRUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFFakUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2hDLDhEQUE4RDt3QkFDOUQsNEVBQTRFO3dCQUM1RSwrRUFBK0U7b0JBQ25GLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDhCQUFXLEdBQVgsVUFBYSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVM7b0JBQ3RDLDZCQUE2QjtvQkFDN0IsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUN2QixDQUFDO3dCQUNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ25DLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDbkMsQ0FBQztnQkFDTCxDQUFDO2dCQWpHTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM1QixRQUFRLEVBQUcsOHNEQXNDVjtxQkFDSixDQUFDOzs0QkFBQTtnQkF3REYsZUFBQztZQUFELENBQUMsQUF0REQsSUFzREM7WUF0REQsK0JBc0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XG5pbXBvcnQge0VuZ2luZWVyU2VydmljZX0gZnJvbSAnLi9lbmdpbmVlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2VuZ2luZWVyJyxcbiAgICBwcm92aWRlcnM6IFtFbmdpbmVlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGVuZ2luZWVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICA8aW1nICNiZ2ltYWdlIGNsYXNzPVwiaW50cm8taW1hZ2UgZW5naW5lZXItaW50cm8taW1hZ2VcIiBzcmM9XCJpbWFnZXMvZW5naW5lZXItYmcuanBnXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnYmFjaycsIGJnaW1hZ2UsIGNvbnRhaW5lcilcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVBhbmVsKCdmb3J3YXJkJywgYmdpbWFnZSwgY29udGFpbmVyKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZW5naW5lZXItaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGVuZ2luZWVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZSBFbmdpbmVlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZW5naW5lZXItcGFuZWwgc2tpbGxzIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRlclwiPlNraWxsc2V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHNldC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsXCIgKm5nRm9yPVwiI3NraWxsIG9mIHNraWxsc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tza2lsbC5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWJhclwiIHN0eWxlPVwid2lkdGg6e3tza2lsbC5wZXJjZW50fX07IFwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbmdpbmVlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW5uZXJDb250YWluZXI7XG4gICAgcGFuZWxzO1xuICAgIGN1cnJlbnRQYW5lbDtcbiAgICBza2lsbHNldDtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBicmlhblNlcnZpY2U6QnJpYW5TZXJ2aWNlLCBwcml2YXRlIGVuZ2luZWVyU2VydmljZSA6IEVuZ2luZWVyU2VydmljZSkge1xuICAgICAgICB0aGlzLnNraWxsc2V0ID0gW107XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgICAgIHRoaXMuZ2V0U2tpbGxzZXQoKTtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1wYW5lbFwiKTtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1pbm5lci1jb250YWluZXJcIilbMF07XG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcblxuICAgICAgICB2YXIgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy5wYW5lbHMubGVuZ3RoICogMTAwICsgXCIlXCI7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAvLyB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUubGVmdCA9IHBhbmVsV2lkdGggKiB0aGlzLmN1cnJlbnRQYW5lbCAqIC0xICsgXCJweFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cblxuICAgIG9uU2Nyb2xsIChldmVudCkge1xuXG4gICAgfTtcblxuICAgIGdldFNraWxsc2V0ICgpIHtcbiAgICAgICAgdGhpcy5za2lsbHNldCA9IHRoaXMuZW5naW5lZXJTZXJ2aWNlLmdldFNraWxsc2V0KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGFuZWwgKGRpcmVjdGlvbiwgYmdJbWFnZSwgY29udGFpbmVyKSB7XG4gICAgICAgIC8vZGlyZWN0aW9uID0gYmFjayB8fCBmb3J3YXJkXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSBcImJhY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwtLTtcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvUHJldlBhbmVsKGNvbnRhaW5lcik7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYW5lbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgYmdJbWFnZS5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsKys7XG4gICAgICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b05leHRQYW5lbChjb250YWluZXIpO1xuICAgICAgICAgICAgYmdJbWFnZS5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==