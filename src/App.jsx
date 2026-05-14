import { AppProvider } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import ToolForm from './components/ToolForm';

function App() {
  return (
    <AppProvider>
      <div className="app-container spacing-y-lg">
        <header className="text-center">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter italic">
            Abo<span className="text-blue-500">Takip</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm font-medium tracking-wide">
            Dijital Abonelik Yönetimi
          </p>
        </header>

        <main className="spacing-y">
          <ToolForm />
          <Dashboard />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;