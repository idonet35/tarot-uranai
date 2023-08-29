import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { PersonalData } from 'views/components/PersonalData'
import { TarotData, tarotDeck } from 'views/components/TarotCardSets';
import { tarotAI } from 'views/components/OpenAI';

import 'views/styles/views.css'

// タロットカードデッキ
function DrawCards(numOfCards: number): TarotData[] {
    if (numOfCards > tarotDeck.length) {
        return [];
    }

    // 引いたカードを保存
    const drawnCards = [];

    // カードデッキをコピー
    const remaininigDeck = [...tarotDeck];

    for (let i = 0; i < numOfCards; i++) {
        const randomIndex = Math.floor(Math.random() * remaininigDeck.length);
        const card = remaininigDeck.splice(randomIndex, 1)[0];
        card.reverse = Math.random() < 0.5;

        drawnCards.push(card);
    }

    return drawnCards;
}

// 初期化フラグ
let initFlag = true;

// 3枚のカードを引く
let threeCards: TarotData[] = DrawCards(3);;

export function TarotResults() {
    // 前のページの情報を取得する
    const location = useLocation();
    const [personalData] = useState(location.state as PersonalData);
    const [card1Message, setCard1Message] = useState('');
    const [card2Message, setCard2Message] = useState('');
    const [card3Message, setCard3Message] = useState('');
    // const [totalMessage, setTotalMessage] = useState('');
    const [adviceMessage, setAdviceMessage] = useState('');
    const [isInitialized, setInitialized] = useState(false);

    useEffect(() => {
        if (initFlag) {
            initFlag = false;

            const card1 = threeCards[0].getName();
            const card2 = threeCards[1].getName();
            const card3 = threeCards[2].getName();

            const divinationAsyncProc = async () => {
                const tarot_jsonString = await tarotAI(card1, card2, card3, personalData) as string;
                const tarot_jsonObject = JSON.parse(tarot_jsonString);
                setCard1Message(tarot_jsonObject.card1.interpretation);
                setCard2Message(tarot_jsonObject.card2.interpretation);
                setCard3Message(tarot_jsonObject.card3.interpretation);
                const advice = tarot_jsonObject.advice as string;
                setAdviceMessage(advice.replace('\n', '</p><p>'));

                setInitialized(true);
            }
            divinationAsyncProc();
        }
    }, [isInitialized, personalData])

    return (
        <div className="divination-container">
            <h2>占い結果</h2>
            <div className="result-tarots">
                <div className="layout-grid3">
                    <div className="result-tarot-report">
                        <div className="tarot-type">- 過去 -</div>
                        <div className={threeCards[0].reverse ? "tarot-card reverse" : "tarot-card"}>
                            <img src={threeCards[0].image} alt="" />
                        </div>
                        <div className="tarot-name">
                            {threeCards[0].reverse && "逆さの"}{threeCards[0].name_jp}
                        </div>
                        <div className="tarot-comments"><p>{card1Message}</p></div>
                    </div>

                    <div className="result-tarot-report">
                        <div className="tarot-type">- 現在 -</div>
                        <div className={threeCards[1].reverse ? "tarot-card reverse" : "tarot-card"}>
                            <img src={threeCards[1].image} alt="" />
                        </div>
                        <div className="tarot-name">
                            {threeCards[1].reverse && "逆さの"}{threeCards[1].name_jp}
                        </div>
                        <div className="tarot-comments"><p>{card2Message}</p></div>
                    </div>

                    <div className="result-tarot-report">
                        <div className="tarot-type">- 未来 -</div>
                        <div className={threeCards[2].reverse ? "tarot-card reverse" : "tarot-card"}>
                            <img src={threeCards[2].image} alt="" />
                        </div>
                        <div className="tarot-name">
                            {threeCards[2].reverse && "逆さの"}{threeCards[2].name_jp}
                        </div>
                        <div className="tarot-comments"><p>{card3Message}</p></div>
                    </div>
                </div>
                <div className="result-tarot-report">
                    <div className="tarot-type">- Answer to Ideal -</div>
                    <div className="tarot-comments">
                        <p>{adviceMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}