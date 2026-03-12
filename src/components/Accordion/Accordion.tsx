

export const Accordion = (props:{title:string}) => {
    return <>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
</>


}

const AccordionTitle = (props:{title:string}) => {
    return <>
        <h3>{props.title}</h3>
    </>
}

const AccordionBody = () => {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}