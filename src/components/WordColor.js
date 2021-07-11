const WordColor = props => {

    return (
        <div>
            <h1 className="p-2"><span style={{color: props.textcolor, backgroundColor: props.bgcolor}}>{props.word}</span></h1>
        </div>
    );
}

export default WordColor;