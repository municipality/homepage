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
                    var _this = this;
                    this.getSkillset();
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
                Engineer.prototype.getSkillset = function () {
                    this.skillset = this.engineerService.getSkillset();
                };
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div class=\"container engineer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"brianService.toPrevPanel(container)\" (click)=\"currentPanel=currentPanel-1\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"brianService.toNextPanel(container)\" (click)=\"currentPanel=currentPanel+1\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <img class=\"intro-image engineer-intro-image\" src=\"images/engineer-bg.jpg\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel skills panel-size\">\n                        <h2 class=\"header\">Skillset</h2>\n                        <div class=\"skillset-list\">\n                            <div class=\"skill\" *ngFor=\"#skill of skillset\">\n                            <p>{{skill.name}}</p>\n                                <div class=\"bar\">\n\n                                    <div class=\"inner-bar\" style=\"width:{{skill.percent}}; \"> </div>\n                                </div>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUV6RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCxDQUFDO2dCQWhGTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM1QixRQUFRLEVBQUcsa3hEQXNDVjtxQkFDSixDQUFDOzs0QkFBQTtnQkF1Q0YsZUFBQztZQUFELENBQUMsQUFyQ0QsSUFxQ0M7WUFyQ0QsK0JBcUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XG5pbXBvcnQge0VuZ2luZWVyU2VydmljZX0gZnJvbSAnLi9lbmdpbmVlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2VuZ2luZWVyJyxcbiAgICBwcm92aWRlcnM6IFtFbmdpbmVlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGVuZ2luZWVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJicmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKVwiIChjbGljayk9XCJjdXJyZW50UGFuZWw9Y3VycmVudFBhbmVsLTFcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImJyaWFuU2VydmljZS50b05leHRQYW5lbChjb250YWluZXIpXCIgKGNsaWNrKT1cImN1cnJlbnRQYW5lbD1jdXJyZW50UGFuZWwrMVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZW5naW5lZXItaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGVuZ2luZWVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImludHJvLWltYWdlIGVuZ2luZWVyLWludHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2VuZ2luZWVyLWJnLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGVmdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBza2lsbHMgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGVyXCI+U2tpbGxzZXQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsc2V0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxcIiAqbmdGb3I9XCIjc2tpbGwgb2Ygc2tpbGxzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57e3NraWxsLm5hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYmFyXCIgc3R5bGU9XCJ3aWR0aDp7e3NraWxsLnBlcmNlbnR9fTsgXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEVuZ2luZWVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbm5lckNvbnRhaW5lcjtcbiAgICBwYW5lbHM7XG4gICAgY3VycmVudFBhbmVsO1xuICAgIHNraWxsc2V0O1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGJyaWFuU2VydmljZTpCcmlhblNlcnZpY2UsIHByaXZhdGUgZW5naW5lZXJTZXJ2aWNlIDogRW5naW5lZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2tpbGxzZXQgPSBbXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICAgICAgdGhpcy5nZXRTa2lsbHNldCgpO1xuXG4gICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVuZ2luZWVyLXBhbmVsXCIpO1xuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVuZ2luZWVyLWlubmVyLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwgPSAwO1xuXG4gICAgICAgIHZhciBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSBwYW5lbFdpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBwYW5lbFdpZHRoICogdGhpcy5jdXJyZW50UGFuZWwgKiAtMSArIFwicHhcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcblxuICAgIH07XG5cbiAgICBnZXRTa2lsbHNldCAoKSB7XG4gICAgICAgIHRoaXMuc2tpbGxzZXQgPSB0aGlzLmVuZ2luZWVyU2VydmljZS5nZXRTa2lsbHNldCgpO1xuICAgIH1cbn1cbiJdfQ==