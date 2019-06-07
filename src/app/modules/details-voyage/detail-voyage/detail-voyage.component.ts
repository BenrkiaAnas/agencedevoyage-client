import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {PlanningModel} from '../../../modeles/planning';
import {PlanningService} from '../../../services/planning.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-detail-voyage',
  templateUrl: './detail-voyage.component.html',
  styleUrls: ['./detail-voyage.component.css'],
})
export class DetailVoyageComponent implements OnInit {
  id: number;
  planningVoyage: PlanningModel;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              private planningService: PlanningService) {
      this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
   this.getVoyagePlanning();
  }

  getVoyagePlanning() {
    this.planningService.getPlanningandVoyageById(this.id)
        .subscribe(resp =>
                this.planningVoyage = resp.data
        );
  }
    reserver(planningVoyage) {
      this.router.navigate(['/reservation-voyage' , planningVoyage.id]);
    }

}
