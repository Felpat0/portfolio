import { makeAutoObservable } from "mobx";
import { Stores } from "./../types";

export class UserDataStore {
  stores: Stores;

  constructor(stores: Stores) {
    this.stores = stores;
    makeAutoObservable(this);
  }
}
