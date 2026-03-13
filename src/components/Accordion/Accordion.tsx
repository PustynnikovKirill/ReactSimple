type Props = {
    title: string,
    colllapsed: boolean
}

type AccordionTitleProps = {
    title: string,
}

export const Accordion = ({title, colllapsed}: Props) => {

     return   <>
        <AccordionTitle title={title}/>
        {!colllapsed && <AccordionBody/>}
        </>
}

const AccordionTitle = ({title}: AccordionTitleProps) => {
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