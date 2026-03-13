
type Props = {
    title: string,
    colllapsed?:boolean
}

export const Accordion = ({title}:Props) => {
    return <>
        <AccordionTitle title={title}/>
        <AccordionBody/>
</>


}

const AccordionTitle = ({title}:Props) => {
    return <>
        <h3>{title}</h3>
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