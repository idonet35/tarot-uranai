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
    const personalData = location.state as PersonalData;
    const [card1Message, setCard1Message] = useState('');
    const [card2Message, setCard2Message] = useState('');
    const [card3Message, setCard3Message] = useState('');
    const [totalMessage, setTotalMessage] = useState('');

    useEffect(() => {

        if (initFlag) {
            initFlag = false;

            const card1 = threeCards[0].getName();
            const card2 = threeCards[1].getName();
            const card3 = threeCards[2].getName();
            
            const divinationAsyncProc = async() => {
                const tarotMessages = await tarotAI(card1, card2, card3, personalData);
                console.log(tarotMessages);
                setCard1Message(tarotMessages[0]);
                setCard2Message(tarotMessages[1]);
                setCard3Message(tarotMessages[2]);
                setTotalMessage(tarotMessages[3]);
            }
            //divinationAsyncProc();
        }

    }, [])

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
                    <div className="tarot-type">- 総評 -</div>
                    <div className="tarot-comments">
                        <p>{totalMessage}</p>
                    </div>
                </div>
                <div className="result-tarot-report">
                    <div className="tarot-type">- Answer for Ideal -</div>
                    <div className="tarot-comments">
                        <p>運命の輪が回り、感情の奥深さが示唆されるタロットカードからのメッセージをもとに、あなたの人間関係に関する悩みに対するアドバイスをお伝えいたします。</p>

                        <p>タロットカードのメッセージが示す通り、内なる力とバランスを保ちながら問題に立ち向かうことが大切です。上司との関係性に苦労している場合、以下のアドバイスを考慮に入れてみてください：</p>

                        <p>内なる力を信じる: 力のカードは、あなたが内に秘める力強さを思い出すことを促しています。自分の価値と能力を信じ、自信を持って行動しましょう。</p>

                        <p>感情のバランスを取る: カップの3が示す通り、感情のバランスを保つことが大切です。感情を素直に表現し、真摯なコミュニケーションを心がけましょう。相手の立場や気持ちも考えることが重要です。</p>

                        <p>協力とコントロールのバランス: 力を示すカードは、力強さと優しさを組み合わせることを象徴しています。自分の意見を主張する一方で、相手の意見も尊重し、協力の姿勢を持つことが上司との関係改善につながるでしょう。</p>

                        <p>過去の経験を生かす: ワンズの6が過去の努力を示しています。これまでの経験から学んだことを活かし、今回の状況にどのように対処するか考えてみましょう。</p>

                        <p>最も重要なのは、冷静さと調和を保ちながら行動することです。感情をコントロールし、相手の立場や視点を理解することで、上司との関係を改善する道が開けるかもしれません。どうぞ、このアドバイスを参考にして、積極的な一歩を踏み出してください。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}