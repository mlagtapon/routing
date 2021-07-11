const Number = props => {

    return (
        <div>
            {isNaN (props.item) ?
            <div>
            <h1>The word is: {props.item}</h1>
            </div>
            :
            <div>
                <h1>The number is: {props.item}</h1>
            </div>
            }
        </div>
    );
}

export default Number;