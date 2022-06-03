'use strict';


const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $pixelCanvas = $('#pixelCanvas');
const $colorPicker = $('#colorPicker');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(event => {
    event.preventDefault();

    let height = $inputHeight.val();
    let width = $inputWidth.val();

    $pixelCanvas.html('');

    makeGrid(height, width);
    addCellClickListener();
});

/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        $pixelCanvas.append('<tr></tr>');
    }

    for (let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    }
}

function addCellClickListener() {
    // color chosen by user
    $('td').click(event => {
        let color = $colorPicker.val();

        $(event.currentTarget).css("background-color", color);
    });
}