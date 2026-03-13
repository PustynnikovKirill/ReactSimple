import './App.css'
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";


export const App = () => {

    return <>
        <PageTitle title = {"This is App Title"}/>
        <Rating value ={3}/>
        <Accordion title = {"Menu"} colllapsed = {true}/>
        <Accordion title = {"Users"} colllapsed = {false}/>
        <Rating value ={2}/>
    </>
}

const PageTitle =(props:{title:string})=>{

    return <>{props.title}</>;
}

