export class User {
  constructor(
    public _id: string,
    public firstname: string,
    public email: string,
    public lastname: string,
    public password: string,
    public image: string
  ){}
}
