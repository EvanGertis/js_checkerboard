let body = document.getElementsByTagName("body");

// global variables to set color
let color = "";
let color_one = "red";
let color_two = "blue";

// square size parameters.
let square_width = "100px";
let square_height = "100px";

// grid size parameters.
let rows = 6;
let cols = 6;

// main entry point for the program
main();



function main(){
    
    // loop down the rows.
    for(let i = 0; i < rows; i++){
        
        // container for the row.
        let UI_body = UI_box(String(i));
      
        // loop across the columns.
        for(let j = 0; j < cols; j++){
           
            if(j % 2 == 0 && i %2 == 0){
                color = color_one;
            }
            else {
                color = color_two;

                if(i % 2 != 0 && j % 2 != 0){
                    color = color_one;
                }
            }
            
            // generates a parameterized square and attaches it to the UI_box container.
            square(UI_body, square_width, square_height, color);
        }
    }

    

}

function square(UI_body, width, height, color){
    let square = document.createElement('div');
    square.style.width = width;
    square.style.height = height;
    square.style.margin = "2px 2px 2px 2px";
    square.style.backgroundColor = color;
    UI_body.append(square);
}

// generates a parent container to score grid squares.
function UI_box(UI_box_number){
    UI_body = document.createElement("div");
    body[0].append(UI_body);
    UI_body.setAttribute("id", UI_box_number);
    UI_body.style.display = "flex";

    return UI_body;
}