function inverteString(frase) {
  const quantidadeLetras = frase.length;
  const fraseEmArray = frase.split('');
  const fraseInvertidaArray = [];
  let letra = '';

  for (let i = quantidadeLetras - 1; i >= 0; i--) {
    letra = fraseEmArray[i];
    fraseInvertidaArray.push(letra);
  }
  console.log(fraseInvertidaArray);

  return fraseInvertidaArray.join('');
}

export function QuintaQuestao() {
  const frase = 'Invertendo essa string';
  return (
    <div>
      Questão 5) <br />
      Frase: {frase}
      <br />
      Frase invertida: {inverteString(frase)}
    </div>
  );
}
