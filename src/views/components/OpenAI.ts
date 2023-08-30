import OpenAI from "openai";
import { PersonalData } from "./PersonalData";

const openAI = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
    timeout: 30 * 1000,
});

export const tarotAI = async(card1: string, card2: string, card3: string, data: PersonalData ) => {
    const message = `Three-Card Spreadに基づくタロットカード占い
    1枚目 ${card1}
    2枚目 ${card2}
    3枚目 ${card3}
    ${data.year}/${data.month}/${data.date}生まれの人の占星術と年齢を考慮に入れ、占い師として${data.username}さんの悩みに500字以内のアドバイスを与えてください。
    ${data.message}`;

    const completion = await openAI.chat.completions.create({
        messages:[{ role: 'user', content: message}],
        model: 'gpt-3.5-turbo',
        functions: [
            {
                name: 'tarotDivination',
                description: 'Three-Card Spread result',
                parameters: {
                    type: 'object',
                    properties: {
                        card1: {
                            type : 'object',
                            properties: {
                                card: {
                                    type: 'string',
                                    description: 'card1 name',
                                },
                                interpretation: {
                                    type: 'string',
                                    description: 'card1 interpretation',
                                }
                            }
                        },
                        card2: {
                            type : 'object',
                            properties: {
                                card: {
                                    type: 'string',
                                    description: 'card2 name',
                                },
                                interpretation: {
                                    type: 'string',
                                    description: 'card2 interpretation',
                                }
                            }
                        },
                        card3: {
                            type : 'object',
                            properties: {
                                card: {
                                    type: 'string',
                                    description: 'card3 name',
                                },
                                interpretation: {
                                    type: 'string',
                                    description: 'card3 interpretation',
                                }
                            }
                        },
                        advice:{
                            type: 'string',
                            description: 'タロット占いと占星術、年齢に基づいた500文字のアドバイス',
                        }
                    },
                    required: ['card1', 'card2', 'card3', 'total', 'advice']
                }
            }
        ]
    });

    const ret_json = completion.choices[0].message.function_call?.arguments;
    if(ret_json === undefined){
        return NaN;
    }

    let jsonStrings = ret_json.split(/\r\n|\n/);
    for(let i = jsonStrings.length - 1; i > 0; i--){
        if(jsonStrings[i] === '') continue;
        const str = jsonStrings[i].replace(/\s+/g, '');

        if(str[0] === '}'){
            const last_str = jsonStrings[i - 1].slice(-1);
            if(last_str === ','){
                jsonStrings[i - 1] = jsonStrings[i - 1].slice(0, -1);
            }
        }
    }
    const result = jsonStrings.join('\n');
    
    return result;
}