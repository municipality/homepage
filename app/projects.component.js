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
                        template: "\n        <p class=\"section-header\">Projects</p>\n\n\n        <div class=\"projects-container\">\n            <div class=\"project\" *ngFor=\"#project of projects\">\n                <a href={{project.url}} target=\"_blank\">\n                    <img class=\"project-image\" src=\"{{project.image}}\">\n                    <p class=\"project-title\">{{project.title}}</p>\n                </a>\n            </div>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], Projects);
                return Projects;
            }());
            exports_1("Projects", Projects);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUdJLGtCQUFxQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBV2YsQ0FBQztnQkFDTixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBYUM7b0JBWkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7eUJBQ2pDLFNBQVMsQ0FBRSxVQUFDLFFBQVE7d0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzt3QkFDN0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixjQUFjOzRCQUNkLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLFNBQVMsRUFBRyxDQUFDLGtDQUFlLENBQUM7d0JBQzdCLFFBQVEsRUFBRywwYkFhVjtxQkFDSixDQUFDOzs0QkFBQTtnQkFtQ0YsZUFBQztZQUFELENBQUMsQUFqQ0QsSUFpQ0M7WUFqQ0QsK0JBaUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtQcm9qZWN0c1NlcnZpY2V9IGZyb20gJy4vcHJvamVjdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ3Byb2plY3RzJyxcclxuICAgIHByb3ZpZGVycyA6IFtQcm9qZWN0c1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlByb2plY3RzPC9wPlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiICpuZ0Zvcj1cIiNwcm9qZWN0IG9mIHByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cInt7cHJvamVjdC5pbWFnZX19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+e3twcm9qZWN0LnRpdGxlfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9qZWN0cyA6IGFueVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHByb2plY3RzU2VydmljZTpQcm9qZWN0c1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW1xyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZSA6ICdQaG90byBXYWxsJyxcclxuICAgICAgICAgICAgLy8gICAgIHVybCA6ICdodHRwOi8vYnJpYW5zLXBob3RvLXdhbGwuaGVyb2t1YXBwLmNvbScsXHJcbiAgICAgICAgICAgIC8vICAgICBpbWFnZSA6ICdpbWFnZXMvcGhvdG93YWxsLmpwZydcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGUgOiAnQWJvdXQgTWUnLFxyXG4gICAgICAgICAgICAvLyAgICAgdXJsIDogJ2h0dHA6Ly9hYm91dC1icmlhbi1sZWUuaGVyb2t1YXBwLmNvbScsXHJcbiAgICAgICAgICAgIC8vICAgICBpbWFnZSA6ICdpbWFnZXMvYWJvdXRtZS5qcGcnXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzU2VydmljZS5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgLnN1YnNjcmliZSggKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNhbm5vdCByZXRyaWV2ZSBwcm9qZWN0c1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19