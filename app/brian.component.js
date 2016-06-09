System.register(['angular2/core', './engineer.component', './photographer.component', './designer.component', './scrolling.service', './brian.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, photographer_component_1, designer_component_1, scrolling_service_1, brian_service_1;
    var Brian;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (engineer_component_1_1) {
                engineer_component_1 = engineer_component_1_1;
            },
            function (photographer_component_1_1) {
                photographer_component_1 = photographer_component_1_1;
            },
            function (designer_component_1_1) {
                designer_component_1 = designer_component_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            }],
        execute: function() {
            Brian = (function () {
                function Brian(scrollingService) {
                    this.scrollingService = scrollingService;
                }
                Brian.prototype.ngOnInit = function () {
                    this.brianContainer = document.getElementsByClassName("brian-container")[0];
                    this.nameTag = document.getElementsByClassName("brian-name-tag")[0];
                    document.addEventListener("scroll", this.onScroll.bind(this));
                    window.addEventListener("resize", this.onScroll.bind(this));
                };
                Brian.prototype.onScroll = function (e) {
                    var isInViewport = this.scrollingService.isInViewport;
                    var rect = this.brianContainer.getBoundingClientRect();
                    var nameTagRect = this.nameTag.getBoundingClientRect();
                    //600 is the size of brian panels
                    if (rect.top < 0 && rect.bottom > 600) {
                        this.nameTag.style.position = "fixed";
                        this.nameTag.style.bottom = "";
                        this.nameTag.style.top = "0px";
                    }
                    else {
                        this.nameTag.style.position = "absolute";
                        if (rect.bottom <= 600) {
                            this.nameTag.style.bottom = "0px";
                            this.nameTag.style.top = "";
                        }
                        else {
                            this.nameTag.style.bottom = "";
                            this.nameTag.style.top = "0px";
                        }
                    }
                };
                Brian = __decorate([
                    core_1.Component({
                        selector: 'brian',
                        directives: [engineer_component_1.Engineer, photographer_component_1.Photographer, designer_component_1.Designer],
                        providers: [brian_service_1.BrianService],
                        template: "\n        <h2 align=\"center\">The Different Facets</h2>\n        <div class=\"brian-container\">\n            <div class=\"brian-name-tag panel-size\">\n                <h2 class=\"brian-name-tag-text\">Brian</h2>\n            </div>\n            <engineer></engineer>\n            <designer></designer>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Brian);
                return Brian;
            }());
            exports_1("Brian", Brian);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUlJLGVBQXFCLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtnQkFFdEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUVELHdCQUFRLEdBQVIsVUFBVSxDQUFDO29CQUNQLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7b0JBQ3RELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDdkQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxpQ0FBaUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDbkMsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO3dCQUV6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7d0JBQ2hDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzt3QkFDbkMsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBdkRMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFVBQVUsRUFBRyxDQUFDLDZCQUFRLEVBQUUscUNBQVksRUFBRSw2QkFBUSxDQUFDO3dCQUMvQyxTQUFTLEVBQUcsQ0FBQyw0QkFBWSxDQUFDO3dCQUMxQixRQUFRLEVBQUcsNFVBV1Y7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBd0NGLFlBQUM7WUFBRCxDQUFDLEFBdkNELElBdUNDO1lBdkNELHlCQXVDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7RW5naW5lZXJ9IGZyb20gJy4vZW5naW5lZXIuY29tcG9uZW50JztcbmltcG9ydCB7UGhvdG9ncmFwaGVyfSBmcm9tICcuL3Bob3RvZ3JhcGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXNpZ25lcn0gZnJvbSAnLi9kZXNpZ25lci5jb21wb25lbnQnO1xuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdicmlhbicsXG4gICAgZGlyZWN0aXZlcyA6IFtFbmdpbmVlciwgUGhvdG9ncmFwaGVyLCBEZXNpZ25lcl0sXG4gICAgcHJvdmlkZXJzIDogW0JyaWFuU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxoMiBhbGlnbj1cImNlbnRlclwiPlRoZSBEaWZmZXJlbnQgRmFjZXRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJyaWFuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJyaWFuLW5hbWUtdGFnIHBhbmVsLXNpemVcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJicmlhbi1uYW1lLXRhZy10ZXh0XCI+QnJpYW48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZW5naW5lZXI+PC9lbmdpbmVlcj5cbiAgICAgICAgICAgIDxkZXNpZ25lcj48L2Rlc2lnbmVyPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBCcmlhbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYnJpYW5Db250YWluZXI7XG4gICAgc3RhcnRQb3NpdGlvbjtcbiAgICBuYW1lVGFnO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2U6U2Nyb2xsaW5nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmJyaWFuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJyaWFuLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgdGhpcy5uYW1lVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJyaWFuLW5hbWUtdGFnXCIpWzBdO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25TY3JvbGwgKGUpIHtcbiAgICAgICAgdmFyIGlzSW5WaWV3cG9ydCA9IHRoaXMuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQ7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5icmlhbkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG5hbWVUYWdSZWN0ID0gdGhpcy5uYW1lVGFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAvLzYwMCBpcyB0aGUgc2l6ZSBvZiBicmlhbiBwYW5lbHNcbiAgICAgICAgaWYgKHJlY3QudG9wIDwgMCAmJiByZWN0LmJvdHRvbSA+IDYwMCkge1xuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLmJvdHRvbSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblxuICAgICAgICAgICAgaWYocmVjdC5ib3R0b20gPD0gNjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUuYm90dG9tID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuIl19