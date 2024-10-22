import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { SmtpService } from "../../services/smtp.service";
import { Contact } from "../../services/contact";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
    public contactModel: Contact = {} as Contact;
    formData!: FormGroup;

    constructor(private builder: FormBuilder, private router: Router, private smptService: SmtpService) {}

    ngOnInit() {
        this.formData = this.builder.group({
            FullName: new FormControl('', [Validators.required]),
            Email: new FormControl('', [Validators.required, Validators.email]),
            Message: new FormControl('', [Validators.required])
        });
    }

    submitForm(contactModel: Contact){
        this.smptService.EmailService(contactModel).subscribe(
            response => {
                console.log("Angular: Email Sent Successful.", response);
                this.router.navigate(['/']);
            }
        );
    }
}
