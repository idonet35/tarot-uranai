import { useLocation } from 'react-router-dom'
import { ReadingResult } from 'views/components/PersonalData'

import 'views/styles/views.css'

export function TarotResults() {
    // 前のページの情報を取得する
    const location = useLocation();
    const readingResult = location.state as ReadingResult;

    const threeCards = readingResult.tarots;
    const card1Message = readingResult.interpretations[0];
    const card2Message = readingResult.interpretations[1];
    const card3Message = readingResult.interpretations[2];
    const adviceMessage = readingResult.advice;

    return (
        <div className="divination-container fade-in">
            <h2>大綿津見アトイのタロット占い</h2>
            <p className="center">結果</p>
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