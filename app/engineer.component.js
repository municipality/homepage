System.register(['angular2/core', './brian.service', './engineer.service', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, brian_service_1, engineer_service_1, mobile_service_1;
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
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Engineer = (function () {
                function Engineer(brianService, engineerService, mobileService) {
                    this.brianService = brianService;
                    this.engineerService = engineerService;
                    this.mobileService = mobileService;
                    this.skillset = [];
                }
                Engineer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getSkillset();
                    this.panels = document.getElementsByClassName("engineer-panel");
                    this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
                    this.currentPanel = 0;
                    var panelWidth = this.innerContainer.parentElement.offsetWidth;
                    this.innerContainer.style.width = this.panels.length * 100 + "%";
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
                Engineer.prototype.getSkillset = function () {
                    this.skillset = this.engineerService.getSkillset();
                };
                Engineer.prototype.handlePanel = function (direction, container) {
                    //direction = back || forward
                    if (direction == "back") {
                        this.currentPanel--;
                        this.brianService.toPrevPanel(container);
                        if (this.currentPanel == 0) {
                        }
                    }
                    else {
                        this.currentPanel++;
                        this.brianService.toNextPanel(container);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Engineer.prototype, "isDesktop", void 0);
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div id=\"engineer-container\" [ngClass]=\"{desktop: isDesktop}\"\n        class=\"container face engineer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"handlePanel('back', container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"handlePanel('forward', container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel skills panel-size\">\n                        <h2 class=\"header\">Skillset</h2>\n                        <div class=\"skillset-list\">\n                            <div class=\"skill\" *ngFor=\"#skill of skillset\">\n                            <p>{{skill.name}}</p>\n                                <div class=\"bar\">\n\n                                    <div class=\"inner-bar\" [ngStyle]=\"{'width': skill.percent}\"> </div>\n                                </div>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService, mobile_service_1.MobileService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0RBO2dCQU1JLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDLEVBQVUsYUFBNkI7b0JBQTNHLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBQzVILElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUVqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDhCQUFXLEdBQVgsVUFBYSxTQUFTLEVBQUUsU0FBUztvQkFDN0IsNkJBQTZCO29CQUM3QixFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDekMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0MsQ0FBQztnQkFDTCxDQUFDO2dCQTlDRDtvQkFBQyxZQUFLLEVBQUU7OzJEQUFBO2dCQWpEWjtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM1QixRQUFRLEVBQUcsb3FEQXNDVjtxQkFDSixDQUFDOzs0QkFBQTtnQkFzREYsZUFBQztZQUFELENBQUMsQUFwREQsSUFvREM7WUFwREQsK0JBb0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xuaW1wb3J0IHtFbmdpbmVlclNlcnZpY2V9IGZyb20gJy4vZW5naW5lZXIuc2VydmljZSc7XG5pbXBvcnQge01vYmlsZVNlcnZpY2V9IGZyb20gJy4vbW9iaWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnZW5naW5lZXInLFxuICAgIHByb3ZpZGVyczogW0VuZ2luZWVyU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJlbmdpbmVlci1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7ZGVza3RvcDogaXNEZXNrdG9wfVwiXG4gICAgICAgIGNsYXNzPVwiY29udGFpbmVyIGZhY2UgZW5naW5lZXItY29udGFpbmVyIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjdXJyZW50UGFuZWwgIT0gMFwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVBhbmVsKCdiYWNrJywgY29udGFpbmVyKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL2xlZnQtYXJyb3cucG5nXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjdXJyZW50UGFuZWwgIT0gcGFuZWxzLmxlbmd0aCAtIDFcIiBjbGFzcz1cImFycm93IGFycm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlUGFuZWwoJ2ZvcndhcmQnLCBjb250YWluZXIpXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbnMvcmlnaHQtYXJyb3cucG5nXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI2NvbnRhaW5lciBjbGFzcz1cImlubmVyLWNvbnRhaW5lciBlbmdpbmVlci1pbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZW5naW5lZXItcGFuZWwgaW50cm8gcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGVmdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBza2lsbHMgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+U2tpbGxzZXQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsc2V0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxcIiAqbmdGb3I9XCIjc2tpbGwgb2Ygc2tpbGxzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57e3NraWxsLm5hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYmFyXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IHNraWxsLnBlcmNlbnR9XCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEVuZ2luZWVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbm5lckNvbnRhaW5lcjtcbiAgICBwYW5lbHM7XG4gICAgY3VycmVudFBhbmVsO1xuICAgIHNraWxsc2V0O1xuICAgIEBJbnB1dCgpIGlzRGVza3RvcDtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBicmlhblNlcnZpY2U6QnJpYW5TZXJ2aWNlLCBwcml2YXRlIGVuZ2luZWVyU2VydmljZSA6IEVuZ2luZWVyU2VydmljZSwgcHJpdmF0ZSBtb2JpbGVTZXJ2aWNlIDogTW9iaWxlU2VydmljZSkge1xuICAgICAgICB0aGlzLnNraWxsc2V0ID0gW107XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgICAgIHRoaXMuZ2V0U2tpbGxzZXQoKTtcblxuICAgICAgICB0aGlzLnBhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1wYW5lbFwiKTtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1pbm5lci1jb250YWluZXJcIilbMF07XG4gICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gMDtcblxuICAgICAgICB2YXIgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy5wYW5lbHMubGVuZ3RoICogMTAwICsgXCIlXCI7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFuZWxXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUubGVmdCA9IHBhbmVsV2lkdGggKiB0aGlzLmN1cnJlbnRQYW5lbCAqIC0xICsgXCJweFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xuICAgIH1cblxuICAgIG9uU2Nyb2xsIChldmVudCkge1xuXG4gICAgfTtcblxuICAgIGdldFNraWxsc2V0ICgpIHtcbiAgICAgICAgdGhpcy5za2lsbHNldCA9IHRoaXMuZW5naW5lZXJTZXJ2aWNlLmdldFNraWxsc2V0KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGFuZWwgKGRpcmVjdGlvbiwgY29udGFpbmVyKSB7XG4gICAgICAgIC8vZGlyZWN0aW9uID0gYmFjayB8fCBmb3J3YXJkXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJiYWNrXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsLS07XG4gICAgICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b1ByZXZQYW5lbChjb250YWluZXIpO1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50UGFuZWwgPT0gMCkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwrKztcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvTmV4dFBhbmVsKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=