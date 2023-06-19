import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

// function generateId() {
// 	return Date.now() + "" + Math.floor(Math.random() * 1000);
// }

function App() {
  return (
    <div className="flex min-h-screen h-screen overflow-y-hidden">
      <div className="flex min-w-screen w-screen overflow-y-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 h-screen">
          <Navbar />
          <div className="flex-1 overflow-hidden">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
