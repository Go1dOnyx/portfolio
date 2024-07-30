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
            Phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
            Comment: new FormControl('', [Validators.required])
        });
    }

    submitForm(formData: any) {
        //add some if statements for each form property such as mobile if it contains - or no dash etc.
            console.log(formData?.value);
            console.log(formData.FullName);
            console.log(formData.Email);
            console.log(formData.Comment);
    }
}