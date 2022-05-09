function newscene()
{
  

  this.setup = function()
  {
    background('#aaaaaa');
  }         
      
    
  this.enter = function()
  {   
    
  }

  this.exit = function()
  {
    
  }

  this.draw = function()
  {

    push();



    pop();
  }

  this.touchEnded = function() 
  {

  }

  this.touchMoved = function() 
  {

  }

  this.mouseDragged = function(args) 
  {
    image(brushimages[0], mouseX, mouseY, 50, 50);
  }

  this.mousePressed = function()
  {
    image(brushimages[0], mouseX, mouseY, 50, 50);
  }
  
 
}
