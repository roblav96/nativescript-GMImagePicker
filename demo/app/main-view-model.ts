import {Observable} from 'data/observable';
// let GMImagePicker = require('nativescript-gmimagepicker')

export class HelloWorldModel extends Observable {
	public message: string;

	constructor() {
		super();
		this.message = 'GMImagePicker';

		console.dump(GMAlbumsViewCell);
		console.dump(GMAlbumsViewController);
		console.dump(GMGridViewCell);
		console.dump(GMGridViewController);
		console.dump(GMImagePickerController);
		console.dump(GMImagePickerControllerDelegate);

	}
}