import './global.css';

import { PrimeiraQuestao } from './assets/components/PrimeiraQuestao';
import { SegundaQuestao } from './assets/components/SegundaQuestao';
import { TerceiraQuestao } from './assets/components/TerceiraQuestao';
import { QuartaQuestao } from './assets/components/QuartaQuestao';
import { QuintaQuestao } from './assets/components/QuintaQuestao';

function App() {
  return (
    <>
      <PrimeiraQuestao />
      <br />
      <SegundaQuestao />
      <br />
      <TerceiraQuestao />
      <br />
      <QuartaQuestao />
      <br />
      <QuintaQuestao />
    </>
  );
}

export default App;
