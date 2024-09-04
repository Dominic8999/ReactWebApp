import Card from './Components/Card'
import Alert from './Components/Alert'
import List from './Components/List'

export let list  = [
  "Take a Walk",
  "birdwatching",
  "Coding",
  "Learning",
]

function App() {
  return (
    <>
      <main className='relative text-center'>
        <Card>
          <h1 className='font-black text-xl text-center'>Hello World!</h1>
        </Card>
        <Alert className="text-red-800"/>
        <ul className="flex flex-col space-y-4 p-4 m-4">
          {list.map((item) => (<List text={item}/>))}
        </ul>
      </main>
    </>
  )
}

export default App
