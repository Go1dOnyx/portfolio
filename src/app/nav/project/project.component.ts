import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';

@Component ({
    selector: 'app-project',
    templateUrl : './project.component.html',
    styleUrl: './project.component.css'
})

export class ProjectComponent implements OnInit{
    searchText: string = '';

    listProjectCategories = [
        { name: 'Bank', description: "Bank account application made in ASP.NET MVC. I've used Entity Framework and Repositories to "+ 
        "help manage the data from their database. It uses the CRUD and will soon have RESTful methodologies",
        link: 'https://github.com/Go1dOnyx/WorldBankDBMVC'},
        { name: 'School', description: 'School management system made in ASP.NET MVC.',
        link: 'https://github.com/Go1dOnyx/MVCMangement-New'},
        { name: 'Calculator', description: 'Scentific Calculator using old ASP.NET Web Forms.',
        link: 'https://github.com/Go1dOnyx/ScientificCalculator'},
        { name: 'Ecommerce', description: 'Ecommerce Store made in ASP.NET MVC and EF',
        link: '#'},
        { name: 'Social', description: 'Social Media Page made in ASP.NET MVC.',
        link: '#'},
        { name: 'Quiz', description: 'Quiz application made in ASP.NET MVC.',
        link: '#'},
        { name: 'Employee', description: 'Employee management system in ASP.NET MVC',
        link: '#'},
        { name: 'Appointment', description: 'Appointment Scheduler system in ASP.NET MVC',
        link: '#'},
        { name: 'Payroll', description: 'Payroll system for my Employee project in ASP.NET MVC',
        link: '#'}
    ];

    constructor(private tabService: TabService) {}

    ngOnInit(): void {
        this.tabService.setActiveTab('project');
    }

    matchCategoryList(category: any): boolean {
        return category.name.toLowerCase().includes(this.searchText.toLowerCase());
    }
    visitPage(link: string): void {
        window.location.href = link;
    }
}