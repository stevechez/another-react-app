import NavBar from './components/nav/NavBar'
import Instagram from './components/stories/Instagram'

function App() {
  return (
    <div className='container mx-auto w-3/4'>
      <NavBar />
      
      <Instagram />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
