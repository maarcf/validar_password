let nombreUsuarie = prompt(`¿Cuál es su nombre?`)
let passwordUsuarie = prompt(`¡Hola ${nombreUsuarie}!
Por favor, escriba su contraseña:
Recuerde que la misma debe contener: mínimo seis caracteres, al menos una letra y al menos un número`)


const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const validarCantidadCaracteres = password => password.length >= 6 && true //no es necesario poner && true ya que es un booleano la respuesta y por ende siempre va a retornar o true o false

const validarNumero = password => {
    let hayNum = false;
    for (let i = 0; i < password.length; i++) {
        if (numeros.indexOf(password[i]) != -1) {
            hayNum = true
        }
    }
    return hayNum
}

const validarLetra = password => {
    let hayLetra = false
    for (let i = 0; i < password.length; i++) {
        if (letras.indexOf(password[i]) != -1) {
            hayLetra = true
        }
    }
    return hayLetra
}


const validarPassword = password => validarCantidadCaracteres(password) && validarLetra(password) && validarNumero(password)


if (validarPassword(passwordUsuarie) === true) {
    alert(`✅ CONTRASEÑA VALIDA ✅`)
}
else {
    alert(`⛔ CONTRASEÑA NO VALIDA ⛔`)
}