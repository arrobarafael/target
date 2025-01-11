import { useState } from 'react';

function criaSequenciaFibonacci(numeroDigitado) {
  const sequenciaDeFibonacci = [0, 1];
  let novaPosicao = 0;

  do {
    novaPosicao =
      sequenciaDeFibonacci[sequenciaDeFibonacci.length - 1] +
      sequenciaDeFibonacci[sequenciaDeFibonacci.length - 2];

    sequenciaDeFibonacci.push(novaPosicao);
  } while (numeroDigitado > novaPosicao && numeroDigitado > 0);

  return sequenciaDeFibonacci;
}

function checaSeNumeroFibonacci(e) {
  e.preventDefault();
  const numeroDigitado = event.target.numero.value;

  const sequenciaFibonacci = criaSequenciaFibonacci(numeroDigitado);

  const resultado = sequenciaFibonacci.filter(
    (numeroFibonacci) => numeroFibonacci == numeroDigitado
  );

  if (resultado.length < 1) {
    alert('Número não faz parte da sequência de Fibonacci');
  } else {
    alert('Número faz parte da sequência de Fibonacci');
  }
}

export function SegundaQuestao() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <form action="" onSubmit={checaSeNumeroFibonacci}>
        Questão 2)&nbsp;
        <input
          type="number"
          name="numero"
          placeholder="Digite um número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button type="submit">Checar</button>
      </form>
    </div>
  );
}
