import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VoyageOrganiseService} from '../../../services/voyageOrganise.service';
import {VoyageOrganiseModel} from '../../../modeles/voyage-organise';
import {PlanningService} from "../../../services/planning.service";
import {PlanningModel} from "../../../modeles/planning";
import {ActivatedRoute, NavigationExtras, NavigationStart, Router} from "@angular/router";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";



@Component({
  selector: 'app-search-voyage-organise',
  templateUrl: './search-voyage-organise.component.html',
  styleUrls: ['./search-voyage-organise.component.css'],
})
export class SearchVoyageOrganiseComponent implements OnInit {
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
