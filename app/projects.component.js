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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUdJLGtCQUFxQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBV2YsQ0FBQztnQkFDTixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQUEsaUJBYUM7b0JBWkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7eUJBQ2pDLFNBQVMsQ0FBRSxVQUFDLFFBQVE7d0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzt3QkFDN0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixjQUFjOzRCQUNkLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFVBQVU7d0JBQ3JCLFNBQVMsRUFBRyxDQUFDLGtDQUFlLENBQUM7d0JBQzdCLFFBQVEsRUFBRywwYkFhVjtxQkFDSixDQUFDOzs0QkFBQTtnQkFtQ0YsZUFBQztZQUFELENBQUMsQUFqQ0QsSUFpQ0M7WUFqQ0QsK0JBaUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvamVjdHNTZXJ2aWNlfSBmcm9tICcuL3Byb2plY3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdwcm9qZWN0cycsXG4gICAgcHJvdmlkZXJzIDogW1Byb2plY3RzU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5Qcm9qZWN0czwvcD5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCIgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCJ7e3Byb2plY3QuaW1hZ2V9fVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtdGl0bGVcIj57e3Byb2plY3QudGl0bGV9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdHMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb2plY3RzIDogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBwcm9qZWN0c1NlcnZpY2U6UHJvamVjdHNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGUgOiAnUGhvdG8gV2FsbCcsXG4gICAgICAgICAgICAvLyAgICAgdXJsIDogJ2h0dHA6Ly9icmlhbnMtcGhvdG8td2FsbC5oZXJva3VhcHAuY29tJyxcbiAgICAgICAgICAgIC8vICAgICBpbWFnZSA6ICdpbWFnZXMvcGhvdG93YWxsLmpwZydcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGUgOiAnQWJvdXQgTWUnLFxuICAgICAgICAgICAgLy8gICAgIHVybCA6ICdodHRwOi8vYWJvdXQtYnJpYW4tbGVlLmhlcm9rdWFwcC5jb20nLFxuICAgICAgICAgICAgLy8gICAgIGltYWdlIDogJ2ltYWdlcy9hYm91dG1lLmpwZydcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNTZXJ2aWNlLmdldFByb2plY3RzKClcbiAgICAgICAgLnN1YnNjcmliZSggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vSGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJDYW5ub3QgcmV0cmlldmUgcHJvamVjdHNcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=