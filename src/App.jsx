import { NotesProvider } from "./context/NotesContext";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto mt-12 px-8 pb-8">
        <NotesProvider>
          <Header />
          <NotesList />
        </NotesProvider>
      </div>
    </div>
  );
}

export default App;
