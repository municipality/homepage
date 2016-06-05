System.register(['angular2/core', './brian.service'], function(exports_1, context_1) {
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
    var core_1, brian_service_1;
    var Engineer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            }],
        execute: function() {
            Engineer = (function () {
                function Engineer(brianService) {
                    this.brianService = brianService;
                }
                Engineer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.panels = document.getElementsByClassName("engineer-panel");
                    this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
                    this.currentPanel = 0;
                    var panelWidth = this.innerContainer.parentElement.offsetWidth;
                    this.innerContainer.style.width = panelWidth * this.panels.length + "px";
                    window.addEventListener("resize", function (e) {
                        _this.innerContainer.style.width = panelWidth * _this.panels.length + "px";
                    });
                    document.addEventListener("scroll", this.onScroll);
                };
                Engineer.prototype.onScroll = function (event) {
                };
                ;
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        template: "\n        <div class=\"container engineer-container panel-size\">\n            <div *ngIf=\"currentPanel != 0\" class=\"arrow arrow-left\">\n                <img src=\"images/icons/left-arrow.png\">\n            </div>\n            <div *ngIf=\"currentPanel != panels.length - 1\" class=\"arrow arrow-right\">\n                <img src=\"images/icons/right-arrow.png\">\n            </div>\n            <div class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel engineer-panel outro panel-size\">\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [brian_service_1.BrianService])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUlJLGtCQUFxQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBRTlDLENBQUM7Z0JBRUQsMkJBQVEsR0FBUjtvQkFBQSxpQkFjQztvQkFiRyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFFekUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM3RSxDQUFDLENBQUMsQ0FBQztvQkFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkQsQ0FBQztnQkFFRCwyQkFBUSxHQUFSLFVBQVUsS0FBSztnQkFFZixDQUFDOztnQkF4REw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsVUFBVTt3QkFDckIsUUFBUSxFQUFHLDI4QkF5QlY7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBNkJGLGVBQUM7WUFBRCxDQUFDLEFBM0JELElBMkJDO1lBM0JELCtCQTJCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0JyaWFuU2VydmljZX0gZnJvbSAnLi9icmlhbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yIDogJ2VuZ2luZWVyJyxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZW5naW5lZXItY29udGFpbmVyIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSAwXCIgY2xhc3M9XCJhcnJvdyBhcnJvdy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29ucy9sZWZ0LWFycm93LnBuZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImN1cnJlbnRQYW5lbCAhPSBwYW5lbHMubGVuZ3RoIC0gMVwiIGNsYXNzPVwiYXJyb3cgYXJyb3ctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb25zL3JpZ2h0LWFycm93LnBuZ1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNvbnRhaW5lciBlbmdpbmVlci1pbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBpbnRybyBwYW5lbC1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBvdXRybyBwYW5lbC1zaXplXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZWVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlubmVyQ29udGFpbmVyO1xyXG4gICAgcGFuZWxzO1xyXG4gICAgY3VycmVudFBhbmVsO1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYnJpYW5TZXJ2aWNlOkJyaWFuU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItcGFuZWxcIik7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1pbm5lci1jb250YWluZXJcIilbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwgPSAwO1xyXG5cclxuICAgICAgICB2YXIgcGFuZWxXaWR0aCA9IHRoaXMuaW5uZXJDb250YWluZXIucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhbmVsV2lkdGggKiB0aGlzLnBhbmVscy5sZW5ndGggKyBcInB4XCI7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSBwYW5lbFdpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsIChldmVudCkge1xyXG5cclxuICAgIH07XHJcbn1cclxuIl19