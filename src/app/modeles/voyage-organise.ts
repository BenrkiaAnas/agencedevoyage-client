import {PhotoModel} from './photo.model';
import {CategorieModel} from './categorie';

export class VoyageOrganiseModel {
  id?: number;
  reference?: string;
  title?: string;
  description?: any;
  destination?: string;
  visible?: boolean;
  Categories?: CategorieModel[];
  photos?: PhotoModel[];
  activer?: boolean;
  constructor() {
  }

}
