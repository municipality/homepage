System.register(['angular2/core', './projects.service'], function(exports_1, context_1) {
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
    var core_1, projects_service_1;
    var Projects;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            }],
        execute: function() {
            Projects = (function () {
                function Projects(projectsService) {
                    this.projectsService = projectsService;
                    this.projects = [];
                }
                Projects.prototype.ngOnInit = function () {
                    var _this = this;
                    this.projectsService.getProjects()
                        .subscribe(function (response) {
                        console.log(response);
                        if (response != null) {
                            _this.projects = response;
                        }
                        else {
                            //Handle error
                            alert("Cannot retrieve projects");
                        }
                    });
                };
                Projects = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        providers: [projects_service_1.ProjectsService],
                        template: "\n        <p class=\"section-header\">Recent Projects</p>\n        <div class=\"project\" *ngFor=\"#project of projects\">\n            <a href={{project.url}} target=\"_blank\">\n                <img class=\"project-image\" src=\"{{project.image}}\">\n                <p class=\"project-title\">{{project.title}}</p>\n            </a>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], Projects);
                return Projects;
            }());
            exports_1("Projects", Projects);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUdJLGtCQUFxQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCwyQkFBUSxHQUFSO29CQUFBLGlCQWFDO29CQVpHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO3lCQUNqQyxTQUFTLENBQUUsVUFBQyxRQUFRO3dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0QixFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDbkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7d0JBQzdCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsY0FBYzs0QkFDZCxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxVQUFVO3dCQUNyQixTQUFTLEVBQUcsQ0FBQyxrQ0FBZSxDQUFDO3dCQUM3QixRQUFRLEVBQUcsdVdBUVY7cUJBQ0osQ0FBQzs7NEJBQUE7Z0JBdUJGLGVBQUM7WUFBRCxDQUFDLEFBckJELElBcUJDO1lBckJELCtCQXFCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb2plY3RzU2VydmljZX0gZnJvbSAnLi9wcm9qZWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAncHJvamVjdHMnLFxuICAgIHByb3ZpZGVycyA6IFtQcm9qZWN0c1NlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8cCBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+UmVjZW50IFByb2plY3RzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiICpuZ0Zvcj1cIiNwcm9qZWN0IG9mIHByb2plY3RzXCI+XG4gICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cInt7cHJvamVjdC5pbWFnZX19XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+e3twcm9qZWN0LnRpdGxlfX08L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvamVjdHMgOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHByb2plY3RzU2VydmljZTpQcm9qZWN0c1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0c1NlcnZpY2UuZ2V0UHJvamVjdHMoKVxuICAgICAgICAuc3Vic2NyaWJlKCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9IYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICBhbGVydChcIkNhbm5vdCByZXRyaWV2ZSBwcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=