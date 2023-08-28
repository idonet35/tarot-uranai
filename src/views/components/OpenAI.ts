import OpenAI from "openai";
import { PersonalData } from "./PersonalData";

const openAI = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
    timeout: 30 * 1000,
});

export const tarotAI = async(card1: string, card2: string, card3: string, data: PersonalData ) => {
    const message = `三枚引きのタロットカード占い
    1枚目 ${card1}
    2枚目 ${card2}
    3枚目 ${card3}
    
    ${data.year}/${data.month}/${data.date}生まれの人の占星術と年齢を考慮に入れ、占い師っぽく文書を書いて下さい。
    通し番号をつけて、
    1.1枚目
    2.2枚目
    3.3枚目
    4.総評
    の形で`;

    console.log('Sstart divination...');
    const completion = await openAI.chat.completions.create({
        messages:[{ role: 'user', content: message}],
        model: 'gpt-3.5-turbo',
    });

    const message_content = (completion.choices[0].message.content);
    console.log(message_content);

    let result: string[] = ['', '', '', ''];
    if(message_content){
        const messages = message_content.split(/\r\n|\n/);
        console.log(messages);
        let count = 0;
        messages.forEach((message) =>{
            if(message === ''){
                // next
            }
            else if(message.slice(0,2) === '1.'){
                count = 0;
            }
            else if(message.slice(0,2) === '2.'){
                count = 1;
            }
            else if(message.slice(0,2) === '3.'){
                count = 2;
            }
            else if(message.slice(0,2) === '4.'){
                count = 3;
            }
            else{
                if(result[count].length > 0){
                    result[count] += "\n";
                }
                result[count] += message;
            }
        });
    }

    return result;
}