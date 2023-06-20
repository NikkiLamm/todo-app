import Header from './components/header/Header';
import MainTasks from './components/main/MainTasks';

import './styles/main.scss';
import './styles/reset.scss';
import './styles/variables.scss';

function App() {
  return (
    <div className='todo'>
      <div className='todo-container'>
        <Header />
        <MainTasks />
      </div>
    </div>
  );
};

export default App;