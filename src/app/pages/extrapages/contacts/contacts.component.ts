import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

/**
 * Contacts Component
 */
export class ContactsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  longitude = 20.728218;
  latitude = 52.128973;
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Contact us', active: true }
    ];

     /**
     * Bootstrap validation form data
     */
      this.validationform = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]],
      });

      document.body.classList.remove('bg-secondary');
  }

   /**
  * Bootsrap validation form submit method
  */
    validSubmit() {
      this.submit = true;
    }

    /**
   * Returns form
   */
    get form() {
      return this.validationform.controls;
    }

}
