const app = "I don't do much."
var kittens = ["Milo", "Otis", "Grafield"]

function destructivelyAppendKitten (name) {
kittens.push('Ralph');
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
}

function destructivelyPrependKitten () {
  kittens.unshift('Bob');
  }
  
function destructivelyRemoveFirstKitten () {
  kittens.shift();
  
}

function appendKitten (name) {
  return kittens.slice(0).push(name);
}