import Source from "./Source";
import PatternMarker from "./PatternMarker";
import BarcodeMarker from "./BarcodeMarker";
import { Controller, ControllerParameters } from "./Controller";
import ARToolKit from "./artoolkit/ARToolKit";
import ARToolKitCameraParam from "./artoolkit/ARToolKitCameraParam";
import { ARToolKitController } from "./artoolkit/ARToolKitController";

let controller: Controller;
function initialize(
	parameters: Partial<ControllerParameters>
): Promise<Controller> {
	if (controller === undefined || controller.disposed === true) {
		controller = new Controller(parameters);
	}
	return controller.postInit as Promise<Controller>;
}

export {
	Controller,
	Source,
	initialize,
	PatternMarker,
	BarcodeMarker,
	ARToolKit,
	ARToolKitCameraParam,
	ARToolKitController,
};
