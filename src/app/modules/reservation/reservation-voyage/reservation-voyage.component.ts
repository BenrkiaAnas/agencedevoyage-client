import {AfterViewChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PlanningModel} from '../../../modeles/planning';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanningService} from '../../../services/planning.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReservationService} from '../../../services/reservation';
import {ReservationModel} from '../../../modeles/reservation';
import Swal from 'sweetalert2';

declare let paypal: any;

@Component({
  selector: 'app-reservation-voyage',
  templateUrl: './reservation-voyage.component.html',
  styleUrls: ['./reservation-voyage.component.css'],
})
export class ReservationVoyageComponent implements OnInit, AfterViewChecked {
    idPlanning: number;
    enfant: number;
    adult: number;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isOptional = false;
    planningVoyage: PlanningModel;
    registerForm: FormGroup;
    finalAmount: number;
    prix: number;
    idReservation: number;
    reservation: ReservationModel;
    addScript = false;
    paypalLoad = true;
    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'AediOHX3lmwrxQ550n05aWekgxxpFhMyx4HM7VYYdBBtT_yy4jno9_ZqAL77DFYOu-lBGRY_suxDzLgb',
            production: 'EOw-xYotP-TwAxmyFaRoNg3_NvtvTerlDnx1Q9o80tFC1gcEoKUFZ8TespoZqDfhAuOrYAJVdEwaQVWA'
        },
        commit: true,
        payment: (data, actions) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {amount: {total: this.finalAmount, currency: 'USD'}}
                    ]
                }
            });
        },
        onAuthorize: (data, actions) => {
            return actions.payment.execute().then((payment) => {
                // Do Somthing When Payment is Successful
                    this.reservValider();
                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Votre Payement a été effectuer, Merci ',
                    showConfirmButton: false,
                    timer: 2500
                });
                    this.router.navigate(['/']);
            })
        }
    };
    reservValider() {
        if (this.registerForm.valid) {
            this.reservationService.validerReservation(this.idReservation, this.registerForm.value)
                    .subscribe(resp => console.log());
        }
            }
    constructor(public activatedRoute: ActivatedRoute,
                public router: Router,
                private planningService: PlanningService,
                private reservationService: ReservationService,
                private formBuilder: FormBuilder) {
        this.idPlanning = activatedRoute.snapshot.params['id'];
    }


  ngOnInit() {
      // console.log(this.idPlanning);
      this.getVoyagePlanning();
      this.registerForm = this.formBuilder.group({
          nbrAdult: ['', [Validators.required, Validators.min(0), Validators.max(30)]],
          nbrchild: ['', [Validators.required]],

      });
      this.firstFormGroup = this.formBuilder.group({
          firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this.formBuilder.group({
          secondCtrl: ''
      });
  }
    getVoyagePlanning() {
        this.planningService.getPlanningandVoyageById(this.idPlanning)
            .subscribe(resp =>
                this.planningVoyage = resp.data
            );
    }
    addReservation() {
        if (this.registerForm.valid) {
            this.reservationService.createReservation(this.idPlanning, this.registerForm.value)
                .subscribe(resp => {
                    this.finalAmount = ((resp.total) / 10),
                    this.idReservation = resp.id
                });
        }
    }

    getData() {
        if (this.registerForm.valid) {
            this.enfant = this.registerForm.value.nbrchild;
            this.adult = this.registerForm.value.nbrAdult;
            this.prix = ((this.planningVoyage.priceAdult) * (this.adult)) + ((this.planningVoyage.priceChild) * (this.enfant));
        }
    }
    ngAfterViewChecked(): void {
        if (!this.addScript) {
            this.addPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
                this.paypalLoad = false;
            })
        }
    }
    addPaypalScript() {
        this.addScript = true;
        return new Promise((resolve, reject) => {
            let scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        })
    }

}

