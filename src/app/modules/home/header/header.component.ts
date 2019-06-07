import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
      '../../../../assets/css/select2.css'],

})
export class HeaderComponent implements OnInit {
    registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          destination: [null],
          periode: [null],
          type: [null],
      });
  }

}
/* styleUrls: ['./header.component.css'], */
