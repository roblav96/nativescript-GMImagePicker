"use strict";
var observable_1 = require('data/observable');
var nativescript_gmimagepicker_1 = require('nativescript-gmimagepicker');
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.message = 'GMImagePicker';
        console.log('GMImagePicker >');
        console.dump(nativescript_gmimagepicker_1.GMImagePicker);
        console.log(GMAlbumsViewCell);
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map