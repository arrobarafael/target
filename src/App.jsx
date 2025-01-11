import './global.css';

import { PrimeiraQuestao } from './assets/components/PrimeiraQuestao';
import { SegundaQuestao } from './assets/components/SegundaQuestao';
import { TerceiraQuestao } from './assets/components/TerceiraQuestao';
import { QuartaQuestao } from './assets/components/QuartaQuestao';

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
    </>
  );
}

export default App;
