import { colombia } from "./salarios.js";

function esPar(numero) {
    return numero % 2 == 0
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)) {
        const personasMitad = lista[mitad-1];
        const personasMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personasMitad,personasMitad2])
        return mediana;
        
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

export function analisis(){
    //creamos un array que solo tenga los salarios
    const salariosCol = colombia.map(function(persona){
        return persona.salary;
    })
    //ordenamos este array
    const salariosOrden = salariosCol.sort(
        function(salaryA,salaryB){
            return salaryA - salaryB;
        }
    )
    //calculamos la mediana
    console.log(medianaSalarios(salariosOrden))


}