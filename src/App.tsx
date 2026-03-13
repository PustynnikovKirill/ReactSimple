import './App.css'
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";


export const App = () => {

    return <>
        <PageTitle title = {"This is App Title"}/>
        <Accordion title = "Menu" colllapsed = {true}/>
        <Accordion title = "Users" colllapsed = {false}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
    </>
}

const PageTitle =(props:{title:string})=>{

    return <>{props.title}</>;
}

