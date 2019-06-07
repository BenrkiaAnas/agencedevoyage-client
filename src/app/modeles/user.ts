export class User {
  id?: number;
  username: string;
  password: number;
  email: number;
  points: string;
  firstName: string;
  lastName: string;
  gendre: boolean;
  tele: string;
  profession: string;
  country: string;
  city: string;
  status: boolean;

  constructor() {
  }

  set(user: User) {
    this.id = user.id;

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gendre = user.gendre;
    this.tele = user.tele;
    this.profession = user.profession;
    this.country = user.country;
    this.city = user.city;
    this.status = user.status;
    this.points = user.points;
  }

}
