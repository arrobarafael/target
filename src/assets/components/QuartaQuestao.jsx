const faturamentoNacional = [
  {
    id: 1,
    estado: 'SP',
    valor: 67836.43,
  },
  {
    id: 2,
    estado: 'RJ',
    valor: 36678.66,
  },
  {
    id: 3,
    estado: 'MG',
    valor: 29229.88,
  },
  {
    id: 4,
    estado: 'ES',
    valor: 27165.48,
  },
  {
    id: 5,
    estado: 'Outros',
    valor: 19849.53,
  },
];

function formatarValorParaReais(valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function CalculaFaturamentoTotal() {
  return faturamentoNacional.reduce(
    (somatoria, faturamento) => somatoria + faturamento.valor,
    0
  );
}

function CalculaPorcentagem(faturamentoEstado) {
  const faturamentoTotal = CalculaFaturamentoTotal();
  const percentualDeRepresentacao =
    (faturamentoEstado * 100) / faturamentoTotal;

  return percentualDeRepresentacao.toFixed(2);
}

export function QuartaQuestao() {
  return (
    <div>
      Questão 4)
      <br />
      <table>
        {faturamentoNacional.map((faturamento) => {
          return (
            <tbody key={faturamento.id}>
              <tr>
                <td>Estado: {faturamento.estado}</td>
                <td>
                  Faturamento: {formatarValorParaReais(faturamento.valor)}
                </td>
                <td>
                  Porcentagem de Participação:{' '}
                  {CalculaPorcentagem(faturamento.valor)}%
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
