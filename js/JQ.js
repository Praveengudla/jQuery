function func1()
{
    $("#img1").fadeToggle(3000);
}

function func2()
{
    //$(element name).action()
    //document.getElementByTagName(element name)
    $("div").css( 'background-color', 'orange');
    $("#p1").css('font-style', 'italic')
    $(".para").css('font-style', 'italic')
    $("#div1,#div2,#div3 ").css('background-color','green');
    $("li").css('background-color','purple');
    $("div > p").fadeToggle();
    $("p:first").fadeToggle();
    $("li:even").fadeToggle();
}

function func3()
{
    $("#div1,#div2,#div3").fadeToggle();
    document.getElementById("img1").style.width ="500px";

}

$("#btn").on("click", function(){$("img1").css('width','500px');});

$("document").ready(function()
{
    $("button").dblclick(function(){$("img1").css('width','500px')});
});