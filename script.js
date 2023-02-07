
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
          -71.060217,
          42.382655,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: -71.062,
          y: 42.36,
          z: 3000
        },
        tilt: 0,
        heading: 0
      });
      
      var camera3 = new Camera({
        position: {
          x: -71.008,
          y: 42.34,
          z: 5
        },
        tilt: -90,
        heading: 90
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      
    view.ui.add(homeBtn, "top-left");
    
    [bos, tdg, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    tdg.addEventListener('click', function() {
      
      view.goTo({
        target:camera2
      });
    });
    
    bos.addEventListener('click', function() {
      view.goTo({
        target:camera
      });
    });
      
    v3.addEventListener('click', function() {
      view.goTo({
        target:camera3
      });
    });


    });
