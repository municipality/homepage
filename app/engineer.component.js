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
                    if (!this.mobileService.isMobile()) {
                        document.getElementById("engineer-container").className += " desktop";
                    }
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
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        providers: [engineer_service_1.EngineerService],
                        template: "\n        <div id=\"engineer-container\" class=\"container engineer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\"\n                (click)=\"handlePanel('back', container)\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\"\n                (click)=\"handlePanel('forward', container)\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div #container class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel skills panel-size\">\n                        <h2 class=\"header\">Skillset</h2>\n                        <div class=\"skillset-list\">\n                            <div class=\"skill\" *ngFor=\"#skill of skillset\">\n                            <p>{{skill.name}}</p>\n                                <div class=\"bar\">\n\n                                    <div class=\"inner-bar\" style=\"width:{{skill.percent}}; \"> </div>\n                                </div>\n                            </div>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService, engineer_service_1.EngineerService, mobile_service_1.MobileService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDLEVBQVUsYUFBNkI7b0JBQTNHLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBQzVILElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBdUJDO29CQXJCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDO29CQUMxRSxDQUFDO29CQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUVqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDhCQUFXLEdBQVgsVUFBYSxTQUFTLEVBQUUsU0FBUztvQkFDN0IsNkJBQTZCO29CQUM3QixFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDekMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0MsQ0FBQztnQkFDTCxDQUFDO2dCQWpHTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM1QixRQUFRLEVBQUcsZ25EQXFDVjtxQkFDSixDQUFDOzs0QkFBQTtnQkF5REYsZUFBQztZQUFELENBQUMsQUF2REQsSUF1REM7WUF2REQsK0JBdURDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XG5pbXBvcnQge0VuZ2luZWVyU2VydmljZX0gZnJvbSAnLi9lbmdpbmVlci5zZXJ2aWNlJztcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdlbmdpbmVlcicsXG4gICAgcHJvdmlkZXJzOiBbRW5naW5lZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cImVuZ2luZWVyLWNvbnRhaW5lclwiIGNsYXNzPVwiY29udGFpbmVyIGVuZ2luZWVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IDBcIiBjbGFzcz1cImFycm93IGFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnYmFjaycsIGNvbnRhaW5lcilcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVBhbmVsKCdmb3J3YXJkJywgY29udGFpbmVyKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250YWluZXIgY2xhc3M9XCJpbm5lci1jb250YWluZXIgZW5naW5lZXItaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGVuZ2luZWVyLXBhbmVsIGludHJvIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZSBFbmdpbmVlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZW5naW5lZXItcGFuZWwgc2tpbGxzIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRlclwiPlNraWxsc2V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHNldC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsXCIgKm5nRm9yPVwiI3NraWxsIG9mIHNraWxsc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tza2lsbC5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWJhclwiIHN0eWxlPVwid2lkdGg6e3tza2lsbC5wZXJjZW50fX07IFwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbmdpbmVlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW5uZXJDb250YWluZXI7XG4gICAgcGFuZWxzO1xuICAgIGN1cnJlbnRQYW5lbDtcbiAgICBza2lsbHNldDtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBicmlhblNlcnZpY2U6QnJpYW5TZXJ2aWNlLCBwcml2YXRlIGVuZ2luZWVyU2VydmljZSA6IEVuZ2luZWVyU2VydmljZSwgcHJpdmF0ZSBtb2JpbGVTZXJ2aWNlIDogTW9iaWxlU2VydmljZSkge1xuICAgICAgICB0aGlzLnNraWxsc2V0ID0gW107XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgICAgIHRoaXMuZ2V0U2tpbGxzZXQoKTtcblxuICAgICAgICBpZiAoIXRoaXMubW9iaWxlU2VydmljZS5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZ2luZWVyLWNvbnRhaW5lclwiKS5jbGFzc05hbWUgKz0gXCIgZGVza3RvcFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItcGFuZWxcIik7XG4gICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItaW5uZXItY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IDA7XG5cbiAgICAgICAgdmFyIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMucGFuZWxzLmxlbmd0aCAqIDEwMCArIFwiJVwiO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBwYW5lbFdpZHRoID0gdGhpcy5pbm5lckNvbnRhaW5lci5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBwYW5lbFdpZHRoICogdGhpcy5jdXJyZW50UGFuZWwgKiAtMSArIFwicHhcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcblxuICAgIH07XG5cbiAgICBnZXRTa2lsbHNldCAoKSB7XG4gICAgICAgIHRoaXMuc2tpbGxzZXQgPSB0aGlzLmVuZ2luZWVyU2VydmljZS5nZXRTa2lsbHNldCgpO1xuICAgIH1cblxuICAgIGhhbmRsZVBhbmVsIChkaXJlY3Rpb24sIGNvbnRhaW5lcikge1xuICAgICAgICAvL2RpcmVjdGlvbiA9IGJhY2sgfHwgZm9yd2FyZFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiYmFja1wiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbC0tO1xuICAgICAgICAgICAgdGhpcy5icmlhblNlcnZpY2UudG9QcmV2UGFuZWwoY29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhbmVsID09IDApIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsKys7XG4gICAgICAgICAgICB0aGlzLmJyaWFuU2VydmljZS50b05leHRQYW5lbChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19