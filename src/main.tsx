
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
 <div>
     Hello
 </div>
)


 let users:Array<obj> = [
        {
            name: "Kirill",
            age: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            name: "Liza",
            age: {
                city: "Minsk",
                country: "Belarus"
            }
        }
    ]

console.log(users[0].age)
