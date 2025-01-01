import { useAppContext } from './Context';

export const App = () => {
  const { response } = useAppContext();
  console.log(response);
  console.log(typeof response);

  return (
    <main>
      <h1>hello</h1>
    </main>
  );
};

export default App;
