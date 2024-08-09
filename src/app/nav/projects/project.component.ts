import { Component } from "@angular/core";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrl: './project.component.css'
})

export class ProjectComponent {
    projectList = [
        {name: "WorldBankMVC", stacks: "Utilized: ASP.NET MVC, HTML, CSS, JavaScript, Razor, EF Core, LINQ, CRUD",
            descrip: "WorldBank is a banking system that manages accounts and banking information that a regular bank app would have."+
            "This banking system uses ASP.NET MVC with Entity Framework for the Bank-End and implement the Repository pattern.",
            url: ""
        },
        {name: "SchoolManagement", stacks: "Utilized: ASP.NET MVC, HTML, CSS, JavaScript, Razor, EF Core, LINQ, CRUD.",
            descrip: "The SchoolManagement project is a small application that manages student records and basic school information."+
            "This application is made in ASP.NET MVC and Entity Framework for the Back-End and also uses the Repository pattern.",
            url: ""
        },
        {name: "PaymentManager", stacks: "Utilized: ASP.NET, Web APIs, HTML, CSS, Angular, EF Core, LINQ, CRUD, REST API",
            descrip: "The Payment Manager is an appliation that manages payments, accounts, and financial information similar to"+
            "similar to the WorldBankMVC but in Angular.",
            ulr : ""
        }
    ];
}