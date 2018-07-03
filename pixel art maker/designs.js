let canvas = $("#pixelCanvas"); //store the table in the variable canvas

// When size is submitted by the user, call makeGrid()
$("#submit").on("click",function(evt){
  evt.preventDefault(); //prevent execution of default functionality of browser
  console.log("You have submitted the grid size!");
  makeGrid(); //call make grid function
})
function makeGrid() {
  // Your code goes here!
  canvas.empty(); // clear grid
  let height = $("#inputHeight").val(); //store value of grid height in a variable height
  let width = $("#inputWidth").val(); //store value of grid width in a variable width
  // loop to create rows for the table 
  for( let i=height; i>=1; i--){
    canvas.append("<tr></tr>"); //add specified number of rows 
  }
  // loop to create columns for the table 
  for (let j = width; j>=1; j--){
    canvas.find('tr').append("<td></td>"); //add specified number of columns
  }
}
//Fill the color of the clicked cell with the chosen one
canvas.on("click",'td',function(e){
  let color = $("#colorPicker").val();//Select color input
  e.preventDefault();
  $(e.target).css('background',color);//Fill the target with specified color
})
//Code to fill colors on dragging
canvas.mousedown(function(){
         $('td').hover(function(){
           let color = $("#colorPicker").val();//Select color input
           $(this).css('background',color);//Fill the target with specified color 
         })
      })
      .mouseup(function(){
      $('td').unbind('mouseenter mouseleave');  //for unbidnding the function
      }); 

//Reset the color of the clicked cell on double click
canvas.on("dblclick",'td',function(e){
   e.preventDefault();
   $(e.target).css({'background-color':'transparent'});//reset the color of the target
})

//Code to clear grid 
$("#cleargrid").on("click",function(e){
   e.preventDefault();
   canvas.empty(); //clears the grid
})

//Code to reset color
$("#resetcolor").on("click",function(e){
   e.preventDefault();
   canvas.find('td').css({'background-color':'transparent'});//It reset the cells color.   
})