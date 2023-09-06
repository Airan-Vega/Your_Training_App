import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    this._storage = await this.storage.create();
  }

  public async saveData(
    datas: {
      key: string;
      value: string;
    }[]
  ) {
    datas.forEach(async ({ key, value }) => {
      await this._storage?.set(key, value);
    });
  }

  public async getData(keys: string[]) {
    return keys.map(async (key) => {
      await this._storage?.get(key);
    });
  }

  public clearAllData() {
    this._storage?.clear();
  }
}
