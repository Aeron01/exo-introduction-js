//Faire une pyramide en utilisant la commande "for"
// Methode 1
let ast = ''
for (let counter = 0; counter <= 10; counter += 1) {
  console.log(ast += '*')
}

// Methode 2
let hash = ''; for (let count = 0; count <= 10; count += 1) { console.log(hash += '#') }

// Methode 3 mais avec l'utilisation de la commande "length"
for (let aro = ''; aro.length <= 10; aro += '@') { console.log(aro) }