export function PrimeiraQuestao() {
  const indice = 13;
  let soma = 0;

  for (let k = 0; k < indice; k++) {
    soma = k + indice;
  }

  return <div>Questão 1) Resposta: Soma = {soma}</div>;
}
