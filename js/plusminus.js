

$().ready(()=>
{
    console.log("jquery loaded");

    $("input").css("color", "red");
    $("input").css("fontStyle", "normal");
    $("input").css("fontWeight", "normal");

    let num = 0;
    

    $("#min").click(()=>
    {
        num -= 1;
        display();
    });

    $("#plus").click(()=>
    {
        num += 1;
        display();
    });

    
    
    const display = () => {
    
        if(num%2==0 && num != 0)
            $("input").css("color", "red");
        else
            $("input").css("color", "black");

        if(num%3==0 && num != 0)
            $("input").css("fontWeight", "bold");
        else
            $("input").css("fontWeight", "normal");

        if(num%5==0 && num != 0)
            $("input").css("fontStyle", "italic");
        else
            $("input").css("fontStyle", "normal");

        $("input").val(num);
    }
    
    display();
});