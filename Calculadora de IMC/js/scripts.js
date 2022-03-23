document.querySelector("#button").onclick = function (){
    let altura = Number (document.querySelector("#altura").value);
    let peso = Number (document.querySelector("#peso").value);
    let nome = document.querySelector("#nome").value;
    let calculo = peso/(Math.pow(altura,2));
    let resultado;
    let table = document.querySelector("#tabela");
    
    if(nome!=""&&altura!=""&&peso!=""){
        if(calculo<18.5){
            resultado="Abaixo do Peso";
        }else if(calculo>=18.5&&calculo<=24.9){
            resultado="Peso Normal";
        }else if(calculo>=25&&calculo<=29.9){
            resultado="Sobrepeso";
        }else if(calculo>=30&&calculo<=34.9){
            resultado="Obesidade Grau I";
        }else if(calculo>=35&&calculo<=39.9){
            resultado="Obesidade Grau II";
        }else if(calculo>=40){
            resultado="Obesidade Grau III";
        }

        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        tdNome.setAttribute("class", "borda");
        let tdCalculo = document.createElement("td");
        tdCalculo.setAttribute("class", "borda");
        let tdResultado = document.createElement("td");
        tdResultado.setAttribute("class", "borda");
        let tdAltura = document.createElement("td");
        tdAltura.setAttribute("class", "borda");
        let tdPeso = document.createElement("td");

        tdNome.append(
            document.createTextNode(nome)
        );
        tdCalculo.append(
            document.createTextNode(calculo.toFixed(1))
        );
        tdResultado.append(
            document.createTextNode(resultado)
        )
        tdAltura.append(
            document.createTextNode(altura.toFixed(2))
        );
        tdPeso.append(
            document.createTextNode(peso)
        );

        table.append(tr);
        tr.append(tdNome);
        tr.append(tdCalculo);
        tr.append(tdResultado);
        tr.append(tdAltura);
        tr.append(tdPeso);

    }else{
        alert("Prencha os campos para calcular");
    }
    return false;
}
document.querySelector("#limpar").onclick = function(){
    location.reload();        
}