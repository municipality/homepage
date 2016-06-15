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
                }
                Faces.prototype.ngOnInit = function () {
                    if (!this.mobileService.isMobile()) {
                        var facesContainers = document.getElementsByClassName("face");
                        for (var i = 0; i < facesContainers.length; i++) {
                            facesContainers[i].className += " desktop";
                        }
                    }
                };
                Faces = __decorate([
                    core_1.Component({
                        selector: 'faces',
                        directives: [engineer_component_1.Engineer, designer_component_1.Designer],
                        providers: [brian_service_1.BrianService],
                        template: "\n        <div class=\"intro\">\n\n        </div>\n        <engineer></engineer>\n        <designer></designer>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [mobile_service_1.MobileService])
                ], Faces);
                return Faces;
            }());
            exports_1("Faces", Faces);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUNJLGVBQXFCLGFBQTZCO29CQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7Z0JBRWxELENBQUM7Z0JBRUQsd0JBQVEsR0FBUjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzlELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM5QyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQzt3QkFDL0MsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBMUJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFVBQVUsRUFBRyxDQUFDLDZCQUFRLEVBQUUsNkJBQVEsQ0FBQzt3QkFDakMsU0FBUyxFQUFHLENBQUMsNEJBQVksQ0FBQzt3QkFDMUIsUUFBUSxFQUFHLHlIQU9WO3FCQUNKLENBQUM7O3lCQUFBO2dCQWVGLFlBQUM7WUFBRCxDQUFDLEFBYkQsSUFhQztZQWJELHlCQWFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RW5naW5lZXJ9IGZyb20gJy4vZW5naW5lZXIuY29tcG9uZW50JztcbmltcG9ydCB7RGVzaWduZXJ9IGZyb20gJy4vZGVzaWduZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtCcmlhblNlcnZpY2V9IGZyb20gJy4vYnJpYW4uc2VydmljZSc7XG5pbXBvcnQge01vYmlsZVNlcnZpY2V9IGZyb20gJy4vbW9iaWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnZmFjZXMnLFxuICAgIGRpcmVjdGl2ZXMgOiBbRW5naW5lZXIsIERlc2lnbmVyXSxcbiAgICBwcm92aWRlcnMgOiBbQnJpYW5TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxlbmdpbmVlcj48L2VuZ2luZWVyPlxuICAgICAgICA8ZGVzaWduZXI+PC9kZXNpZ25lcj5cblxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWNlcyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgbW9iaWxlU2VydmljZSA6IE1vYmlsZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vYmlsZVNlcnZpY2UuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgdmFyIGZhY2VzQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYWNlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlc0NvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmYWNlc0NvbnRhaW5lcnNbaV0uY2xhc3NOYW1lICs9IFwiIGRlc2t0b3BcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==