import Header from './components/header/Header';
import MainTasks from './components/main/MainTasks';
import ButtonAdd from './components/ui/buttonAdd/ButtonAdd';

import './styles/main.scss';
import './styles/reset.scss';
import './styles/variables.scss';

function App() {
  return (
    <div className='todo'>
      <div className='todo-container'>
        <Header />
        <MainTasks />
        <ButtonAdd />
      </div>
    </div>
  );
};

export default App;