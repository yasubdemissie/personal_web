import Card from "./Card";
import DisplayArea from "./DisplayArea";

function App() {
  return (
    <div className="min-h-dvh bg-slate-100">
      <h1 className="font-bold bg-blue-950 text-lg text-slate-100">My Bot</h1>
      <div className="bg-gradient-to-tr px-2 py-4 from-slate-900 to-blue-950 text-cyan-600">
        <DisplayArea>My name is Yasub Demissie. Do you want to know anything else</DisplayArea>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
