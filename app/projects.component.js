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
                        template: "\n        <p class=\"section-header\">Recent Projects</p>\n        <div class=\"project\" *ngFor=\"#project of projects\">\n            <a href={{project.url}} target=\"_blank\">\n                <img class=\"project-image\" src=\"images/sample.jpg\">\n                <p class=\"project-title\">{{project.title}}</p>\n            </a>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], Projects);
                return Projects;
            }());
            exports_1("Projects", Projects);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUdJLGtCQUFxQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUVwRCxDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBYUM7b0JBWkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7eUJBQ2pDLFNBQVMsQ0FBRSxVQUFDLFFBQVE7d0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzt3QkFDN0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixjQUFjOzRCQUNkLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLFNBQVMsRUFBRyxDQUFDLGtDQUFlLENBQUM7d0JBQzdCLFFBQVEsRUFBRyx1V0FRVjtxQkFDSixDQUFDOzs0QkFBQTtnQkF1QkYsZUFBQztZQUFELENBQUMsQUFyQkQsSUFxQkM7WUFyQkQsK0JBcUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvamVjdHNTZXJ2aWNlfSBmcm9tICcuL3Byb2plY3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdwcm9qZWN0cycsXG4gICAgcHJvdmlkZXJzIDogW1Byb2plY3RzU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5SZWNlbnQgUHJvamVjdHM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCIgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3twcm9qZWN0LnVybH19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiaW1hZ2VzL3NhbXBsZS5qcGdcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtdGl0bGVcIj57e3Byb2plY3QudGl0bGV9fTwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2plY3RzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm9qZWN0cyA6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcHJvamVjdHNTZXJ2aWNlOlByb2plY3RzU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzU2VydmljZS5nZXRQcm9qZWN0cygpXG4gICAgICAgIC5zdWJzY3JpYmUoIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL0hhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IHJldHJpZXZlIHByb2plY3RzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==