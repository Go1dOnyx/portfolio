import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
    formData!: FormGroup;

    constructor(private builder: FormBuilder, private httpClient: HttpClient) {}

    ngOnInit() {
        this.formData = this.builder.group({
            FullName: new FormControl('', [Validators.required]),
            Email: new FormControl('', [Validators.required, Validators.email]),
            Comment: new FormControl('', [Validators.required])
        });
    }

    submitForm(formData: any) {
        let param = new HttpParams()
        .set("FullName", formData.FullName)
        .set("Email", formData.Email)
        .set("Message", formData.Message);

        if(this.formData.valid){
            this.httpClient.post('https://localhost:7138/api/Email/Send', {param})
            .subscribe(
                response => {
                    console.log(formData.FullName);
                    console.log(formData.Email);
                    console.log(formData.Comment);

                    console.log("Email sent successfully", response)
                },
                error => {
                    console.log("Email could not be sent", error);
                }
            );   
        }
    }
}