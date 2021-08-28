import {ShowWord} from "./ShowWord";
export function ShowWords(words){
    let wordsArray=words.word;
    let jsx_elements= wordsArray.map((w)=><ShowWord word={w}/>)
    return <div>{jsx_elements}</div>;

}