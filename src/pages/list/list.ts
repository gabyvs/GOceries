import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'list',
    templateUrl: 'list.html',
})
export class List implements OnInit {

    constructor (private storage: Storage) {}

    public items: Array<string>;

    public clear () {
        this.storage.set('items', []).then(() => {
            this.items = [];
        });
    }

    public add (item: string) {
        const strItem = item && item.trim();
        if (!!strItem) {
            this.storage.get('items').then((items) => {
                let updated = items || [];
                updated.push(strItem);
                this.storage.set('items', updated).then(() => {
                    this.items.push(strItem);
                });
            });
        }
    }

    public ngOnInit () {
        this.getItems();
    }

    private getItems () {
        this.storage.get('items').then((items) => {
            this.items = items || [];
        })
    }

}
