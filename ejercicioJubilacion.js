/* Escribí la función puedeJubilarse que recibe por parámetro la edad, el género y además,
 los años de aportes jubilatorios (en ese orden) que posee una persona, ejemplo:
 Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") 
es de 60 años, mientras que para los hombres (género "M") es 65. En ambos casos, se 
deben contar con al menos 30 años de aportes jubilatorios.
Te recomendamos que primero trates de resolver el ejercicio, después fijate lo que sigue y s
i podes resolverlo de ésta otra manera, deberíamos usar funciones 
dentro de otra función, eso ya lo hicimos en funcionception , ¿Lo recordás? */

function puedeJubilarse(edad, genero, aniosAportes) {
  
 
    if (genero === "F" && edad >= 60 && aniosAportes >= 30) {
        
       
    return true;
      } 
     
    else if (genero === "M" && edad >= 65 && aniosAportes >= 30) {
        
       
    return true;
      } 
     
    else {
        
       
    return false;
      }
    }
    
    console.log(puedeJubilarse(65,"M",32))