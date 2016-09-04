import {Observable} from 'data/observable';
import {GMImagePicker} from 'nativescript-gmimagepicker';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
    this.message = 'GMImagePicker';
    
    console.log('GMImagePicker >');
    console.dump(GMImagePicker);
    console.log(GMAlbumsViewCell);

  }
}