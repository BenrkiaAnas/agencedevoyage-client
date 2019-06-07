import {VoyageOrganiseModel} from './voyage-organise';

export class PlanningModel {
  id?: number;
  hotel: any;
  voyageOrganise: VoyageOrganiseModel;
  promo: any;
  inclusion: any[] = [];
  reference: string;
  description: string;
  nbrDays: number;
  nbrNight: number;
  nbrPlace: number;
  priceAdult: number;
  priceChild: number;
  dateBegin: string;
  dateEnd: string;
  visible: boolean;
  isActiver: boolean;

  constructor() {
  }

  set(planning: PlanningModel) {
    this.id = planning.id;
    this.hotel = planning.hotel;
    this.voyageOrganise = planning.voyageOrganise;
    this.promo = planning.promo;
    // this.setInclusions(planning.inclusion);
    this.reference = planning.reference;
    this.description = planning.description;
    this.nbrDays = planning.nbrDays;
    this.nbrNight = planning.nbrNight;
    this.nbrPlace = planning.nbrPlace;
    this.priceAdult = planning.priceAdult;
    this.priceChild = planning.priceChild;
    this.dateBegin = planning.dateBegin;
    this.dateEnd = planning.dateEnd;
    this.visible = planning.visible;
    this.isActiver = planning.isActiver;
  }

  // setInclusions(inclusions: Inclusion[]) {
  //   if (inclusions.length) {
  //     for (let elem of inclusions) {
  //       this.inclusion.push(elem);
  //     }
  //   }
  // }
}
