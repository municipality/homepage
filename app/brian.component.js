System.register(['angular2/core', './engineer.component', './photographer.component', './scrolling.service', './brian.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, photographer_component_1, scrolling_service_1, brian_service_1;
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
                    this.brianContainer = document.getElementsByTagName("brian")[0];
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
                        directives: [engineer_component_1.Engineer, photographer_component_1.Photographer],
                        providers: [brian_service_1.BrianService],
                        template: "\n        <div class=\"brian-name-tag panel-size\">\n            <h2 class=\"brian-name-tag-text\">Brian</h2>\n        </div>\n        <engineer></engineer>\n        <photographer></photographer>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Brian);
                return Brian;
            }());
            exports_1("Brian", Brian);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUlJLGVBQXFCLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtnQkFFdEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFFRCx3QkFBUSxHQUFSLFVBQVUsQ0FBQztvQkFDUCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO29CQUN0RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ3ZELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDdkQsaUNBQWlDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQ25DLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzt3QkFFekMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNoQyxDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NEJBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7d0JBQ25DLENBQUM7b0JBRUwsQ0FBQztnQkFDTCxDQUFDO2dCQXBETDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixVQUFVLEVBQUcsQ0FBQyw2QkFBUSxFQUFFLHFDQUFZLENBQUM7d0JBQ3JDLFNBQVMsRUFBRyxDQUFDLDRCQUFZLENBQUM7d0JBQzFCLFFBQVEsRUFBRywrTUFRVjtxQkFDSixDQUFDOzt5QkFBQTtnQkF3Q0YsWUFBQztZQUFELENBQUMsQUF2Q0QsSUF1Q0M7WUF2Q0QseUJBdUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtFbmdpbmVlcn0gZnJvbSAnLi9lbmdpbmVlci5jb21wb25lbnQnO1xuaW1wb3J0IHtQaG90b2dyYXBoZXJ9IGZyb20gJy4vcGhvdG9ncmFwaGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2JyaWFuJyxcbiAgICBkaXJlY3RpdmVzIDogW0VuZ2luZWVyLCBQaG90b2dyYXBoZXJdLFxuICAgIHByb3ZpZGVycyA6IFtCcmlhblNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnJpYW4tbmFtZS10YWcgcGFuZWwtc2l6ZVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiYnJpYW4tbmFtZS10YWctdGV4dFwiPkJyaWFuPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxlbmdpbmVlcj48L2VuZ2luZWVyPlxuICAgICAgICA8cGhvdG9ncmFwaGVyPjwvcGhvdG9ncmFwaGVyPlxuXG5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJyaWFuIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBicmlhbkNvbnRhaW5lcjtcbiAgICBzdGFydFBvc2l0aW9uO1xuICAgIG5hbWVUYWc7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZTpTY3JvbGxpbmdTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuYnJpYW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJyaWFuXCIpWzBdO1xuICAgICAgICB0aGlzLm5hbWVUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnJpYW4tbmFtZS10YWdcIilbMF07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvblNjcm9sbCAoZSkge1xuICAgICAgICB2YXIgaXNJblZpZXdwb3J0ID0gdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydDtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmJyaWFuQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgbmFtZVRhZ1JlY3QgPSB0aGlzLm5hbWVUYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8vNjAwIGlzIHRoZSBzaXplIG9mIGJyaWFuIHBhbmVsc1xuICAgICAgICBpZiAocmVjdC50b3AgPCAwICYmIHJlY3QuYm90dG9tID4gNjAwKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUuYm90dG9tID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgICAgICAgICBpZihyZWN0LmJvdHRvbSA8PSA2MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=