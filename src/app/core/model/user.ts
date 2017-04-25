export class User {
  public get uid() {
    return this._uid;
  }

  public get name() {
    return this._name;
  }

  constructor(private _uid: string, private _name: string) {
  }
}
