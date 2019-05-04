

function cipherize(){

    var shift = document.forms["shift"]["shift_amount"].value;
    var i1 = document.forms["input"]["input_1"].value;
    var i2 = document.forms["input"]["input_2"].value;
    var i3 = document.forms["input"]["input_3"].value;
    var i4 = document.forms["input"]["input_4"].value;

    var o1 = character_shift(i1, shift)
    var o2 = character_shift(i2, shift)
    var o3 = character_shift(i3, shift)
    var o4 = character_shift(i4, shift)
    
    document.getElementById("output_1").value = o1;
    document.getElementById("output_2").value = o2;
    document.getElementById("output_3").value = o3;
    document.getElementById("output_4").value = o4;


    return false;
}

function character_shift(string, shift){
    var character = string.toUpperCase()
    character = string.charCodeAt(0);


    character = character + parseInt(shift);
    
    do {
        if(character > 90) {
            character = 65 + (character-90)
        } else 
        if ( character < 65) {
            character = 91 - (65-character)
        }
    } while(character > 90 || character < 65);

    shifted_string = String.fromCharCode(character)
    // window.alert(shifted_string)

    return shifted_string

}