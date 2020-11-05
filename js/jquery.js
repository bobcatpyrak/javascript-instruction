$().ready(()=>
{
    console.log("jQuery is ready");

    $("button").click(()=>
    {
        console.debug("YOU DARE?!");
        
    });

    let value = $("#one").val();
    console.log(value);
    value = Number(value)+3;
    $("#two").val(value);
});