import './App.css'
import DragAndDrop from './DragAndDrop';

function App() {
  return (
    <div className="min-h-screen grid justify-center bg-gray-100">
      <div className="container mx-auto p-80">
        <h1 className="text-3xl font-semibold mb-4">PDF Viewer</h1>
        <DragAndDrop />
      </div>
    </div>
  );
}

export default App;
