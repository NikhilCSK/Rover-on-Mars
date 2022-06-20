canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


mars_array = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg", "mars.jpg"];
rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 100;

random_number = Math.floor(Math.random()*5);
console.log(random_number);

background_image = mars_array[random_number];
console.log("background image = " + background_image);
rover_image = "rover.png";

function add()
{

background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadRover;
rover_imgTag.src = rover_image;

}


function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{

      keyPressed = e.keyCode;
      console.log(keyPressed);

      if(keyPressed == '37')
      {
          Left();
          console.log("Left");
      }

      if(keyPressed == '38')
      {
          Up();
          console.log("Up");
      }

      if(keyPressed == '39')
      {
          Right();
          console.log("Right");
      }
 
      if(keyPressed == '40')
      {
          Down();
          console.log("Down");
      }
}

function Up()
{

   if (rover_y >= 0)
   {

     rover_y = rover_y - 10;
     console.log("when Up arrow is pressed, x = " + rover_x + " y = " + rover_y);
         uploadBackground();
         uploadRover();
   }

}


function Down()
{

   if (rover_y <= 500)
   {

     rover_y = rover_y + 10;
     console.log("when Down arrow is pressed, x = " + rover_x + " y = " + rover_y);
         uploadBackground();
         uploadRover();
   }

}


function Left()
{

   if (rover_x >= 0)
   {

     rover_x = rover_x - 10;
     console.log("when Left arrow is pressed, x = " + rover_x + " y = " + rover_y);
         uploadBackground();
         uploadRover();
   }

}


function Right()
{

   if (rover_x <= 700)
   {

     rover_x = rover_x + 10;
     console.log("when Right arrow is pressed, x = " + rover_x + " y = " + rover_y);
         uploadBackground();
         uploadRover();
   }

}