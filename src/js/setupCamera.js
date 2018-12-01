function setupCamera(scene, canvas) {

    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // attach the camera to the canvas
    camera.attachControl(canvas, true);
    // key codes
   // camera.keysUp.push(87);
   // camera.keysDown.push(83);
    //camera.keysLeft.push(65);
    //camera.keysRight.push(68);

    /*
                    // Parameters: name, position, scene
                    var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(-10, 5, -10), scene);
                    // The goal distance of camera from target
                    camera.radius = 10;
                    // The goal height of camera above local origin (centre) of target
                    camera.heightOffset = 10;
                    // The goal rotation of camera around local origin (centre) of target in x y plane
                    camera.rotationOffset = 0;
                    // Acceleration of camera in moving from current to goal position
                    camera.cameraAcceleration = 0.005
                    // The speed at which acceleration is halted
                    camera.maxCameraSpeed = 10
                    // This attaches the camera to the canvas
                    camera.attachControl(canvas, true);
                    // NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
                    // targetMesh created here.
                    //camera.target = targetMesh;   // version 2.4 and earlier
                    //camera.lockedTarget = targetMesh; //version 2.5 onwards
    */
    return camera;
}