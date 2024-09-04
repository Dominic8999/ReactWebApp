import Card from './Components/Card'
import Alert from './Components/Alert'

function App() {
  return (
    <>
      <main className='relative text-center'>
        <Card>
          <h1 className='font-black text-xl text-center'>Hello World!</h1>
        </Card>
        <Alert className="text-red-800"/>
      </main>
    </>
  )
}

export default App
