System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Engineer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Engineer = (function () {
                function Engineer() {
                }
                Engineer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.panels = document.getElementsByClassName("engineer-panel");
                    this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
                    this.innerContainer.style.width = window.innerWidth * this.panels.length + "px";
                    window.addEventListener("resize", function (e) {
                        _this.innerContainer.style.width = window.innerWidth * _this.panels.length + "px";
                    });
                    document.addEventListener("scroll", this.onScroll);
                };
                Engineer.prototype.onScroll = function (event) {
                };
                ;
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        template: "\n        <div class=\"container engineer-container panel-size\">\n            <div class=\"inner-container engineer-inner-container\">\n                <div class=\"panel engineer-panel intro panel-size\">\n                    <div class=\"title\">\n                        <p>Software Engineer</p>\n                    </div>\n                    <div class=\"flex left\">\n\n                    </div>\n                    <div class=\"flex right\">\n\n                    </div>\n                </div>\n                <div class=\"panel outro panel-size\">\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUdJO2dCQUVBLENBQUM7Z0JBRUQsMkJBQVEsR0FBUjtvQkFBQSxpQkFTQztvQkFSRyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3BGLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJCQUFRLEdBQVIsVUFBVSxLQUFLO2dCQUVmLENBQUM7O2dCQTVDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixRQUFRLEVBQUcsd25CQW1CVjtxQkFDSixDQUFDOzs0QkFBQTtnQkF1QkYsZUFBQztZQUFELENBQUMsQUFyQkQsSUFxQkM7WUFyQkQsK0JBcUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yIDogJ2VuZ2luZWVyJyxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZW5naW5lZXItY29udGFpbmVyIHBhbmVsLXNpemVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNvbnRhaW5lciBlbmdpbmVlci1pbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBlbmdpbmVlci1wYW5lbCBpbnRybyBwYW5lbC1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxlZnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcmlnaHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBvdXRybyBwYW5lbC1zaXplXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZWVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlubmVyQ29udGFpbmVyO1xyXG4gICAgcGFuZWxzO1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lZXItcGFuZWxcIik7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmVlci1pbm5lci1jb250YWluZXJcIilbMF07XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb250YWluZXIuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMucGFuZWxzLmxlbmd0aCArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcclxuXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==