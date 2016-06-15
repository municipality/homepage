System.register(['angular2/core', './engineer.component', './designer.component', './brian.service', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, designer_component_1, brian_service_1, mobile_service_1;
    var Faces;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (engineer_component_1_1) {
                engineer_component_1 = engineer_component_1_1;
            },
            function (designer_component_1_1) {
                designer_component_1 = designer_component_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Faces = (function () {
                function Faces(mobileService) {
                    this.mobileService = mobileService;
                    this.isDesktop = false;
                }
                Faces.prototype.ngOnInit = function () {
                    if (!this.mobileService.isMobile()) {
                        this.isDesktop = true;
                    }
                };
                Faces = __decorate([
                    core_1.Component({
                        selector: 'faces',
                        directives: [engineer_component_1.Engineer, designer_component_1.Designer],
                        providers: [brian_service_1.BrianService],
                        template: "\n        <div class=\"faces-intro\">\n            <div class=\"section-header\">\n                <h2 align=\"center\" class=\"blue\">Faces</h2>\n            </div>\n        </div>\n        <engineer [isDesktop]=isDesktop></engineer>\n        <designer [isDesktop]=isDesktop></designer>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [mobile_service_1.MobileService])
                ], Faces);
                return Faces;
            }());
            exports_1("Faces", Faces);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUNJLGVBQXFCLGFBQTZCO29CQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBR2xELGNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBRGxCLENBQUM7Z0JBRUQsd0JBQVEsR0FBUjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDMUIsQ0FBQztnQkFDTCxDQUFDO2dCQXpCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixVQUFVLEVBQUcsQ0FBQyw2QkFBUSxFQUFFLDZCQUFRLENBQUM7d0JBQ2pDLFNBQVMsRUFBRyxDQUFDLDRCQUFZLENBQUM7d0JBQzFCLFFBQVEsRUFBRyx5U0FTVjtxQkFDSixDQUFDOzt5QkFBQTtnQkFZRixZQUFDO1lBQUQsQ0FBQyxBQVZELElBVUM7WUFWRCx5QkFVQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VuZ2luZWVyfSBmcm9tICcuL2VuZ2luZWVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Rlc2lnbmVyfSBmcm9tICcuL2Rlc2lnbmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2ZhY2VzJyxcbiAgICBkaXJlY3RpdmVzIDogW0VuZ2luZWVyLCBEZXNpZ25lcl0sXG4gICAgcHJvdmlkZXJzIDogW0JyaWFuU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNlcy1pbnRyb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJibHVlXCI+RmFjZXM8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZW5naW5lZXIgW2lzRGVza3RvcF09aXNEZXNrdG9wPjwvZW5naW5lZXI+XG4gICAgICAgIDxkZXNpZ25lciBbaXNEZXNrdG9wXT1pc0Rlc2t0b3A+PC9kZXNpZ25lcj5cblxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWNlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgbW9iaWxlU2VydmljZSA6IE1vYmlsZVNlcnZpY2UpIHtcblxuICAgIH1cbiAgICBpc0Rlc2t0b3AgPSBmYWxzZTtcbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb2JpbGVTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==