import {PlanningModel} from './planning';

export class ReservationModel {
    id?: number;
    reference?: string;
    date?: any;
    nbrAdult?: number;
    nbrchild?: number;
    prixTotal?: any;
    planningVoyage?: PlanningModel;
}
