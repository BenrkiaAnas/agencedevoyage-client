import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirmation-mail',
  templateUrl: './confirmation-mail.component.html',
  styleUrls: ['./confirmation-mail.component.css']
})
export class ConfirmationMailComponent implements OnInit {
  cleUserValidation: string;
  constructor(private service: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cleUserValidation = this.route.snapshot.paramMap.get("cle");
    this.service.confirmationUserAcount(this.cleUserValidation).subscribe(res => {
      console.log(res);
    });
  }

}
