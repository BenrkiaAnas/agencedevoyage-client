import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlanningModel} from "../../../modeles/planning";
import {PlanningService} from "../../../services/planning.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {

  registerForm: FormGroup;
  collection: PlanningModel [];
  photos: any;
  url = 'http://localhost:8000/uploads/images/';
  defaultImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/68939/angular-logo.png';
  constructor(private formBuilder: FormBuilder,
              private voyageServicePlanning: PlanningService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.getAllVoyagePlanning();
  }

  getAllVoyagePlanning() {
    this.voyageServicePlanning.getPlanningandVoyage()
        .subscribe(resp =>
                this.collection = resp.data
            // console.log(resp.data)
        );
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      prix: [null],
      populaire: [null],
    });
  }
  detail(item) {

    this.router.navigate(['/detail-voyage', item.id]);
  }

}
/* styleUrls: ['./category.component.css'], */
