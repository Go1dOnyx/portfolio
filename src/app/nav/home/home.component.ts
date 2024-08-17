import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    downloadResume(): void {
        const filePath = '/assets/resume/resume.pdf';
        const link = document.createElement('a');

        link.href = filePath;
        link.download = 'resume.pdf';
        link.click();
    }
}

