import { Component } from '@angular/core';

@Component({
    selector: 'page-todo',
    templateUrl: 'todo.html',
})
export class TodoPage {

    public items: Array<string> = ['avocado', 'cheese'];

}
