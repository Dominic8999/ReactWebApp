import Card from './Components/Card'
import Alert from './Components/Alert'
import List from './Components/List'
import Input from './Components/Input'

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
        <div>
          <Input className='text-black rounded' type="textarea" placeholder="type something here"/>
        </div>
      </main>
    </>
  )
}

export default App
