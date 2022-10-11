import { Count } from './class-components/Count';
import { Form as FormClass } from './class-components/Form';

export const App = () => {
  return (
    <div className="App">
      <Count count={10}/>
      <hr />
      <FormClass />
    </div>
  );
}