
declare class GMAlbumsViewCell extends UITableViewCell {

	static alloc(): GMAlbumsViewCell; // inherited from NSObject

	static appearance(): GMAlbumsViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GMAlbumsViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GMAlbumsViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GMAlbumsViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GMAlbumsViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GMAlbumsViewCell; // inherited from UIAppearance

	static new(): GMAlbumsViewCell; // inherited from NSObject

	assetCollection: PHAssetCollection;

	assetsFetchResults: PHFetchResult<any>;

	gradient: CAGradientLayer;

	gradientView: UIView;

	imageView1: UIImageView;

	imageView2: UIImageView;

	imageView3: UIImageView;

	infoLabel: UILabel;

	slowMoIcon: UIImageView;

	titleLabel: UILabel;

	videoIcon: UIImageView;

	setVideoLayout(isVideo: boolean): void;
}

declare class GMAlbumsViewController extends UITableViewController {

	static alloc(): GMAlbumsViewController; // inherited from NSObject

	static new(): GMAlbumsViewController; // inherited from NSObject

	selectAllAlbumsCell(): void;
}

declare class GMGridViewCell extends UICollectionViewCell {

	static alloc(): GMGridViewCell; // inherited from NSObject

	static appearance(): GMGridViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GMGridViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GMGridViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GMGridViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GMGridViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GMGridViewCell; // inherited from UIAppearance

	static new(): GMGridViewCell; // inherited from NSObject

	asset: PHAsset;

	coverView: UIView;

	enabled: boolean;

	gradient: CAGradientLayer;

	gradientView: UIView;

	imageView: UIImageView;

	selectedButton: UIButton;

	shouldShowSelection: boolean;

	videoDuration: UILabel;

	videoIcon: UIImageView;

	bind(asset: PHAsset): void;
}

declare class GMGridViewController extends UICollectionViewController {

	static alloc(): GMGridViewController; // inherited from NSObject

	static new(): GMGridViewController; // inherited from NSObject

	assetsFetchResults: PHFetchResult<any>;

	constructor(o: { picker: GMImagePickerController; });

	initWithPicker(picker: GMImagePickerController): this;
}

declare class GMImagePickerController extends UIViewController {

	static alloc(): GMImagePickerController; // inherited from NSObject

	static new(): GMImagePickerController; // inherited from NSObject

	allowsMultipleSelection: boolean;

	autoDisableDoneButton: boolean;

	autoSelectCameraImages: boolean;

	colsInLandscape: number;

	colsInPortrait: number;

	confirmSingleSelection: boolean;

	confirmSingleSelectionPrompt: string;

	customCancelButtonTitle: string;

	customDoneButtonTitle: string;

	customNavigationBarPrompt: string;

	customSmartCollections: NSArray<any>;

	delegate: GMImagePickerControllerDelegate;

	displayAlbumsNumberOfAssets: boolean;

	displaySelectionInfoToolbar: boolean;

	mediaTypes: NSArray<any>;

	minimumInteritemSpacing: number;

	navigationBarBackgroundColor: UIColor;

	navigationBarTextColor: UIColor;

	navigationBarTintColor: UIColor;

	navigationController: UINavigationController;

	pickerBackgroundColor: UIColor;

	pickerBoldFontName: string;

	pickerFontHeaderSize: number;

	pickerFontName: string;

	pickerFontNormalSize: number;

	pickerStatusBarStyle: UIStatusBarStyle;

	pickerTextColor: UIColor;

	selectedAssets: NSMutableArray<any>;

	showCameraButton: boolean;

	toolbarBarTintColor: UIColor;

	toolbarTextColor: UIColor;

	toolbarTintColor: UIColor;

	useCustomFontForNavigationBar: boolean;

	deselectAsset(asset: PHAsset): void;

	dismiss(sender: any): void;

	finishPickingAssets(sender: any): void;

	selectAsset(asset: PHAsset): void;
}

interface GMImagePickerControllerDelegate extends NSObjectProtocol {

	assetsPickerControllerDidCancel?(picker: GMImagePickerController): void;

	assetsPickerControllerDidDeselectAsset?(picker: GMImagePickerController, asset: PHAsset): void;

	assetsPickerControllerDidFinishPickingAssets(picker: GMImagePickerController, assets: NSArray<any>): void;

	assetsPickerControllerDidHighlightAsset?(picker: GMImagePickerController, asset: PHAsset): void;

	assetsPickerControllerDidSelectAsset?(picker: GMImagePickerController, asset: PHAsset): void;

	assetsPickerControllerDidUnhighlightAsset?(picker: GMImagePickerController, asset: PHAsset): void;

	assetsPickerControllerShouldDeselectAsset?(picker: GMImagePickerController, asset: PHAsset): boolean;

	assetsPickerControllerShouldEnableAsset?(picker: GMImagePickerController, asset: PHAsset): boolean;

	assetsPickerControllerShouldHighlightAsset?(picker: GMImagePickerController, asset: PHAsset): boolean;

	assetsPickerControllerShouldSelectAsset?(picker: GMImagePickerController, asset: PHAsset): boolean;

	assetsPickerControllerShouldShowAsset?(picker: GMImagePickerController, asset: PHAsset): boolean;
}
declare var GMImagePickerControllerDelegate: {

	prototype: GMImagePickerControllerDelegate;
};

declare var GMImagePickerVersionNumber: number;

declare var GMImagePickerVersionString: interop.Reference<number>;

declare var kAlbumGradientHeight: number;

declare var kAlbumImageToTextSpace: number;

declare var kAlbumLeftToImageSpace: number;

declare var kAlbumRowHeight: number;
