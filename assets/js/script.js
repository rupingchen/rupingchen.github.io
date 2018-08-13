/* 

    Hopefully you've read over the article and have a solid graps of 
    iteration/enumeration in JS.

    You aren't restricted to using jQuery, but you can if you like. 
    the document is set up for you, but feel free to delete it.

    Assignment: finish the two event handlers so that they fulfill their 
    respective functionality. 

*/

$(document).ready(function() {


    // PART 1
    $(".base_coloring").click(function() {
        /*
            Re-color the div's with class 'q1-re-color' on the page so
            that each background color of the nested div of the 'q1-re-color' object.
            You are allowed no more than 3 lines of code with everything contained 
            in the for loop.

            HINT: Array.from($(class_list)) returns an 
            iterable of div objects with class 'class_list' 

            HINT: There are several ways to do this, but if you don't
            use jQuery you should look up things like 'children array' and 'innerHTML'
        */
        // YOUR CODE HERE.
        for (let value of Array.from($(".landing-re-color"))){
            let hex_val = value.textContent;
            $(value).attr("style", "background:" + hex_val);
        }
    })


    

    // PART 2
    $(".order_coloring").click(function() {
        /*
            Re-color the div's with class 'q1-re-color' on the page so 
            that each bacground color of the object corresponds to 
            rgb(10, order-on-page * 12, order-on-page * 10)
            -> ex) the second div on the page should have background color (10, 12, 10)
            -> you are allowed no more than 3 lines of code with everything contained 
            in the for loop.

            HINT: Array.from($(class_list)) returns an 
            iterable of div objects with class 'class_list' 
        */ 
        // YOUR CODE HERE.
        for (let value of Array.from($(".q1-re-color"))){
            let id = $(value).attr('id');
            $(value).attr('style','background:rgb(10,' + (id*12) + "," + (id*10) + ")");
        }

    })
})