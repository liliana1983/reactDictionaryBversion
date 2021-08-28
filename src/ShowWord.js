
export function ShowWord(props){
    let word =props.word;
    let jsx_element= (
        <div>
            <p> <b>{word.word}</b>
            -/{word.phonetics[0].text}/
            
                <a href={word.phonetics[0].audio}><u> audio</u> </a></p>
            
</div>    )
return jsx_element;}