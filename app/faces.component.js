System.register(['angular2/core', './engineer.component', './brian.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, brian_service_1;
    var Faces;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (engineer_component_1_1) {
                engineer_component_1 = engineer_component_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            }],
        execute: function() {
            Faces = (function () {
                function Faces() {
                }
                Faces = __decorate([
                    core_1.Component({
                        selector: 'faces',
                        directives: [engineer_component_1.Engineer],
                        providers: [brian_service_1.BrianService],
                        template: "\n        <div class=\"intro\">\n            \n        </div>\n        <engineer></engineer>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Faces);
                return Faces;
            }());
            exports_1("Faces", Faces);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUNJO2dCQUVBLENBQUM7Z0JBaEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFVBQVUsRUFBRyxDQUFDLDZCQUFRLENBQUM7d0JBQ3ZCLFNBQVMsRUFBRyxDQUFDLDRCQUFZLENBQUM7d0JBQzFCLFFBQVEsRUFBRyxzR0FNVjtxQkFDSixDQUFDOzt5QkFBQTtnQkFNRixZQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx5QkFJQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbmdpbmVlcn0gZnJvbSAnLi9lbmdpbmVlci5jb21wb25lbnQnO1xuXG5pbXBvcnQge0JyaWFuU2VydmljZX0gZnJvbSAnLi9icmlhbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2ZhY2VzJyxcbiAgICBkaXJlY3RpdmVzIDogW0VuZ2luZWVyXSxcbiAgICBwcm92aWRlcnMgOiBbQnJpYW5TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxlbmdpbmVlcj48L2VuZ2luZWVyPlxuXG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEZhY2VzIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG4iXX0=