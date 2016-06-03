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
                };
                Engineer = __decorate([
                    core_1.Component({
                        selector: 'engineer',
                        template: "\n        <div class=\"engineer-container viewport-size\">\n            <div class=\"engineer-inner-container\">\n                <div class=\"engineer-panel intro viewport-size\">\n                    <div class=\"left\">\n                        <div class=\"title\">\n                            <h2>Brian</h2>\n                            <p>Software Engineer</p>\n                        </div>\n                    </div>\n                    <div class=\"right\">\n\n                    </div>\n                </div>\n                <div class=\"engineer-panel outro viewport-size\">\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Engineer);
                return Engineer;
            }());
            exports_1("Engineer", Engineer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUdJO2dCQUVBLENBQUM7Z0JBRUQsMkJBQVEsR0FBUjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3BGLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBdENMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLFFBQVEsRUFBRyxzcEJBbUJWO3FCQUNKLENBQUM7OzRCQUFBO2dCQWlCRixlQUFDO1lBQUQsQ0FBQyxBQWZELElBZUM7WUFmRCwrQkFlQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2VuZ2luZWVyJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImVuZ2luZWVyLWNvbnRhaW5lciB2aWV3cG9ydC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5naW5lZXItaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZ2luZWVyLXBhbmVsIGludHJvIHZpZXdwb3J0LXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5CcmlhbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29mdHdhcmUgRW5naW5lZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmdpbmVlci1wYW5lbCBvdXRybyB2aWV3cG9ydC1zaXplXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRW5naW5lZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlubmVyQ29udGFpbmVyO1xuICAgIHBhbmVscztcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVuZ2luZWVyLXBhbmVsXCIpO1xuICAgICAgICB0aGlzLmlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVuZ2luZWVyLWlubmVyLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5wYW5lbHMubGVuZ3RoICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=