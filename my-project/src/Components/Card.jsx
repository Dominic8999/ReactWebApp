import doggie from '../assets/doggie.svg'
import catto from '../assets/catto.svg'

let component_1, component_2;

let components =[
    component_1 = {
        title: "a doggie",
        image: doggie,
        description: "A doggie likes to play with bones"
    },
    component_2 = {
        title: "catto",
        image: catto,
        description: "A catto likes to play with fishes"
    }
]


function Card({children}){
    return(
        <div className="
        flex items-center justify-center min-h-screen
        relative
        lg:w-48 lg:h-64
        md:w-32 md:h-50
        container shadow-xl
        box-border border-4 border-cyan-600 border-double 
        mx-auto my-10 ">
            <div className="
            flex flex-col m-2
            text-center text-blue-500">
                {children}
                <div>
                    <h3 className='font-bold'>{components[0].title}</h3>
                    <img src={components[0].image} alt="" />
                    <p className='italic'>{components[0].description}</p>
                </div>
                <div>
                    <h3 className='font-bold'>{components[1].title}</h3>
                    <img src={components[1].image} alt="" />
                    <p className='italic'>{components[1].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card