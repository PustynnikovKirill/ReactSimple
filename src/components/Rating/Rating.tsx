export const Rating = (props:{ value:number}) => {

    if (props.value === 2){
        return <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    }
    if (props.value === 3){
        return <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    }
    return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={true}/>
        <Star selected={false}/>

    </div>
}


const Star = (props: { selected: boolean}) => {

    if (props.selected === true) {
        return <span> <b>star</b> </span>
    } else {
      return  <span> star </span>
    }
}