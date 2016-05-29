document.querySelector("#button").addEventListener("click",
    function () {
        var b = new Number();
        document.querySelector("#script1").innerHTML = "if(a==undefined){document.querySelector(\"#button\").removeEventListener(\"click\",function () {b=" + a + ";\n document.querySelector(\"#txt3\").value = b; });}document.querySelector(\"#button\").addEventListener(\"click\",function () {b=" + document.querySelector("#txt1").value + ";\n document.querySelector(\"#txt3\").value = b; });";
        var a = Number(document.querySelector("#txt1").value);
    });
