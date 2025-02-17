$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 700, 50, 50, "red");
createPlatform(120,600, 50, 60, "orange");
createPlatform(200, 620, 30,300, "yellow");
createPlatform(270, 559, 50, 290, "green");
createPlatform(340,500, 50, 60, "indigo");
createPlatform(440, 490, 1300, 20, "blue");
createPlatform(1000,410, 50, 60, "brown");


    // TODO 3 - Create Collectables
    createCollectable("grace", 350, 450, 0.1, 0.8);
createCollectable("kennedi", 200, 170, 0.5, 0.7);
createCollectable("max", 440, 300, 0.1, 0.8);



    
    // TODO 4 - Create Cannons
    createCannon("right", 500, 2000);
    createCannon("bottom", 500, 2000);
    createCannon("bottom", 900, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
