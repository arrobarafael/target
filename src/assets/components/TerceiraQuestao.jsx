import { useEffect, useState } from 'react';
import { faturamento } from '../utils/faturamentoDiario';

export function TerceiraQuestao() {
  const [diasFaturamentoSuperiorMedia, setDiasFaturamentoSuperiorMedia] =
    useState(0);
  const [maiorFaturamento, setMaiorFaturamento] = useState(0);
  const [diaMaiorFaturamento, setDiaMaiorFaturamento] = useState('');

  const [menorFaturamento, setMenorFaturamento] = useState(0);
  const [diaMenorFaturamento, setDiaMenorFaturamento] = useState('');

  const relatorioFinal = {
    diasFaturamentoSuperiorMedia: 0,
  };

  useEffect(() => {
    const diasComFaturamento = faturamento.filter(
      (registroDia) => registroDia.valor > 0
    );

    const totalFaturamento = diasComFaturamento.reduce(
      (somatoria, diaComFaturamento) => somatoria + diaComFaturamento.valor,
      0
    );

    relatorioFinal.mediaFaturamentoMensal =
      totalFaturamento / diasComFaturamento.length;

    diasComFaturamento.reduce((valorInicial, registroDiario) => {
      if (
        relatorioFinal.maiorFaturamento === undefined ||
        registroDiario.valor > relatorioFinal.maiorFaturamento
      ) {
        relatorioFinal.maiorFaturamento = registroDiario.valor;
        relatorioFinal.diaMaiorFaturamento = registroDiario.dia;
      }

      if (
        relatorioFinal.menorFaturamento === undefined ||
        registroDiario.valor < relatorioFinal.menorFaturamento
      ) {
        relatorioFinal.menorFaturamento = registroDiario.valor;
        relatorioFinal.diaMenorFaturamento = registroDiario.dia;
      }

      if (registroDiario.valor > relatorioFinal.mediaFaturamentoMensal) {
        setDiasFaturamentoSuperiorMedia((state) => {
          return state + 1;
        });
      }
    });

    setMaiorFaturamento(relatorioFinal.maiorFaturamento);
    setDiaMaiorFaturamento(relatorioFinal.diaMaiorFaturamento);

    setMenorFaturamento(relatorioFinal.menorFaturamento);
    setDiaMenorFaturamento(relatorioFinal.diaMenorFaturamento);
  }, []);

  return (
    <div>
      Questão 3)
      <table>
        <tbody>
          <tr>
            <td>-Menor dia de Faturamento: {menorFaturamento}</td>
            <td>Dia: {diaMenorFaturamento}</td>
          </tr>

          <tr>
            <td>-Maior dia de Faturamento: {maiorFaturamento}</td>
            <td>Dia: {diaMaiorFaturamento}</td>
          </tr>
        </tbody>
      </table>
      -Número de dias que o faturamento foi superior que a média mensal:&nbsp;
      {diasFaturamentoSuperiorMedia}
    </div>
  );
}
