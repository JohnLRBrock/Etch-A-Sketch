/* John Brock
 * 2016/6/20
 * Etch-A-Sketch project
 * The Odin Project
 */
var newGridSize = 16;
//initialize a grid of size n*n
var initGrid = function(n)
{
	var pixelDimension = 512/n;
	//add the pixels to the html
	for(var i = 0; i < n; i++)	
	{
		for(var j = 0; j < n; j++)  
		{
			$('#container').append('<div class="pixel"></div>');
		};
	};
	$('.pixel').height(pixelDimension+"px");
	$('.pixel').width(pixelDimension+"px");
};

$(document).ready(function()
{
	initGrid(newGridSize);
	$('.pixel').hover(function()
	{
		$(this).css("background-color","#222");
	});
	$("#reset").click(function()
	{
		$('.pixel').detach();
		newGridSize = prompt("How many colomns and rows?");
		initGrid(newGridSize);
		$('.pixel').hover(function()
	{
		$(this).css("background-color","#222");
	});
	});
});