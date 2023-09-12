function setup() {
    createCanvas(500, 500);
    background('lightgreen');
  }
  
  function draw() {
    
    stroke('lightgreen');
    fill('purple');
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 25, 25);
    }
  }