$(document).ready(function(){
    $("button").click(function(){
        $.get("https://whattomine.com/coins.json",
        function(data, status){
            //alert("Data: " + data + "\nStatus: " + status);
            document.getElementById("test").innerHTML = data;
        });
    });
});