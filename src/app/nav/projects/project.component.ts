import { Component } from "@angular/core";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrl: './project.component.css'
})

export class ProjectComponent {
    inputSearch:string  = '';

    projectList = [
        {name: "WorldBankMVC", stacks: "ASP.NET MVC, HTML, CSS, JavaScript, Razor, EF Core, LINQ, CRUD",
            descrip: "WorldBank is a banking system that manages accounts and banking information that a regular bank app would have."+
            "This banking system uses ASP.NET MVC with Entity Framework for the Bank-End and implement the Repository pattern.",
            url: ""
        },
        {name: "SchoolManagement", stacks: "ASP.NET MVC, HTML, CSS, JavaScript, Razor, EF Core, LINQ, CRUD.",
            descrip: "The SchoolManagement project is a small application that manages student records and basic school information."+
            "This application is made in ASP.NET MVC and Entity Framework for the Back-End and also uses the Repository pattern.",
            url: ""
        },
        {name: "PaymentManager", stacks: "ASP.NET, Web APIs, HTML, CSS, Angular, EF Core, LINQ, CRUD, REST API",
            descrip: "The Payment Manager is an appliation that manages payments, accounts, and financial information similar to"+
            "similar to the WorldBankMVC but in Angular.",
            ulr : ""
        },
        {name: "PasswordGeneratorMVC", stacks: "ASP.NET MVC, .NET, HTML, CSS, JavaScript, Razor.",
            descrip: "The Password Generator is an ASP.NET MVC application that generates a random password based on possible "+
            "options that are provided such as length and accepted characters.",
            url: ""
        },
        {name: "ZymShop", stacks: "ASP.NET, Web APIs, REST, CRUD, Angular, HTML, CSS, Bootstrap, LINQ",
            descrip: "ZymShop is a small ecommerce store that uses microservices and RESTful APIs to the application" +
            "modular and configurable. This application uses Angular for the Front-End and ASP.NET for the Back-End.",
            url: ""
        }
    ];

    matchedList(category: any): boolean {
        return category.name.toLowerCase().includes(this.inputSearch.toLocaleLowerCase());
    }
}