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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUtJLGtCQUFxQixZQUF5QixFQUFVLGVBQWlDO29CQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7b0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBbUJDO29CQWpCRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUV0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBRS9ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUV6RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDhCQUFXLEdBQVgsVUFBYSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVM7b0JBQ3RDLDZCQUE2QjtvQkFDN0IsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUN2QixDQUFDO3dCQUNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ25DLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDbkMsQ0FBQztnQkFDTCxDQUFDO2dCQWpHTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM1QixRQUFRLEVBQUcsOHNEQXNDVjtxQkFDSixDQUFDOzs0QkFBQTtnQkF3REYsZUFBQztZQUFELENBQUMsQUF0REQsSUFzREM7WUF0REQsK0JBc0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xyXG5pbXBvcnQge0VuZ2luZWVyU2VydmljZX0gZnJvbSAnLi9lbmdpbmVlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yIDogJ2VuZ2luZWVyJyxcclxuICAgIHByb3ZpZGVyczogW0VuZ2luZWVyU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGVuZ2luZWVyLWNvbnRhaW5lciBwYW5lbC1zaXplXCI+XHJcbiAgICAgICAgICAgIDxpbWcgI2JnaW1hZ2UgY2xhc3M9XCJpbnRyby1pbWFnZSBlbmdpbmVlci1pbnRyby1pbWFnZVwiIHNyYz1cImltYWdlcy9lbmdpbmVlci1iZy5qcGdcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSAwXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVQYW5lbCgnYmFjaycsIGJnaW1hZ2UsIGNvbnRhaW5lcilcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL2xlZnQtYXJyb3cucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFBhbmVsICE9IHBhbmVscy5sZW5ndGggLSAxXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlUGFuZWwoJ2ZvcndhcmQnLCBiZ2ltYWdlLCBjb250YWluZXIpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9yaWdodC1hcnJvdy5wbmdcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgI2NvbnRhaW5lciBjbGFzcz1cImlubmVyLWNvbnRhaW5lciBlbmdpbmVlci1pbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBpbnRybyBwYW5lbC1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBza2lsbHMgcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkZXJcIj5Ta2lsbHNldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHNldC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxcIiAqbmdGb3I9XCIjc2tpbGwgb2Ygc2tpbGxzZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7c2tpbGwubmFtZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1iYXJcIiBzdHlsZT1cIndpZHRoOnt7c2tpbGwucGVyY2VudH19OyBcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZWVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlubmVyQ29udGFpbmVyO1xyXG4gICAgcGFuZWxzO1xyXG4gICAgY3VycmVudFBhbmVsO1xyXG4gICAgc2tpbGxzZXQ7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBicmlhblNlcnZpY2U6QnJpYW5TZXJ2aWNlLCBwcml2YXRlIGVuZ2luZWVyU2VydmljZSA6IEVuZ2luZWVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2tpbGxzZXQgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0U2tpbGxzZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItcGFuZWxcIik7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1pbm5lci1jb250YWluZXJcIilbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwgPSAwO1xyXG5cclxuICAgICAgICB2YXIgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHBhbmVsV2lkdGggPSB0aGlzLmlubmVyQ29udGFpbmVyLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSBwYW5lbFdpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBwYW5lbFdpZHRoICogdGhpcy5jdXJyZW50UGFuZWwgKiAtMSArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGdldFNraWxsc2V0ICgpIHtcclxuICAgICAgICB0aGlzLnNraWxsc2V0ID0gdGhpcy5lbmdpbmVlclNlcnZpY2UuZ2V0U2tpbGxzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQYW5lbCAoZGlyZWN0aW9uLCBiZ0ltYWdlLCBjb250YWluZXIpIHtcclxuICAgICAgICAvL2RpcmVjdGlvbiA9IGJhY2sgfHwgZm9yd2FyZFxyXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSBcImJhY2tcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsLS07XHJcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvUHJldlBhbmVsKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhbmVsID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJnSW1hZ2Uuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsKys7XHJcbiAgICAgICAgICAgIHRoaXMuYnJpYW5TZXJ2aWNlLnRvTmV4dFBhbmVsKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGJnSW1hZ2Uuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==