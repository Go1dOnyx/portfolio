import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
    formData!: FormGroup;

    constructor(private builder: FormBuilder) {}

    ngOnInit() {
        this.formData = this.builder.group({
            FullName: new FormControl('', [Validators.required]),
            Email: new FormControl('', [Validators.required, Validators.email]),
            Comment: new FormControl('', [Validators.required])
        });
    }

    submitForm(formData: any) {
        if(formData?.valid) {
            console.log(formData?.value);
            console.log(formData.FullName);
            console.log(formData.Email);
            console.log(formData.Comment);
        }
    }
}