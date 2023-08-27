import { useLocation } from 'react-router-dom'

import './views.css'
import tarots_wands_ace from "../img/Wand_Ace.png"
import tarots_wands_2 from "../img/Wand_2.png"
import tarots_wands_3 from "../img/Wand_3.png"
import tarots_wands_4 from "../img/Wand_4.png"
import tarots_wands_5 from "../img/Wand_5.png"
import tarots_wands_6 from "../img/Wand_6.png"
import tarots_wands_7 from "../img/Wand_7.png"
import tarots_wands_8 from "../img/Wand_8.png"
import tarots_wands_9 from "../img/Wand_9.png"
import tarots_wands_10 from "../img/Wand_10.png"
import tarots_wands_page from "../img/Wand_Page.png"
import tarots_wands_knight from "../img/Wand_Knight.png"
import tarots_wands_queen from "../img/Wand_Queen.png"
import tarots_wands_king from "../img/Wand_King.png"

import tarots_swords_ace from "../img/Sword_Ace.png"
import tarots_swords_2 from "../img/Sword_2.png"
import tarots_swords_3 from "../img/Sword_3.png"
import tarots_swords_4 from "../img/Sword_4.png"
import tarots_swords_5 from "../img/Sword_5.png"
import tarots_swords_6 from "../img/Sword_6.png"
import tarots_swords_7 from "../img/Sword_7.png"
import tarots_swords_8 from "../img/Sword_8.png"
import tarots_swords_9 from "../img/Sword_9.png"
import tarots_swords_10 from "../img/Sword_10.png"
import tarots_swords_page from "../img/Sword_Page.png"
import tarots_swords_knight from "../img/Sword_Knight.png"
import tarots_swords_queen from "../img/Sword_Queen.png"
import tarots_swords_king from "../img/Sword_King.png"

import tarots_cups_ace from "../img/Cup_Ace.png"
import tarots_cups_2 from "../img/Cup_2.png"
import tarots_cups_3 from "../img/Cup_3.png"
import tarots_cups_4 from "../img/Cup_4.png"
import tarots_cups_5 from "../img/Cup_5.png"
import tarots_cups_6 from "../img/Cup_6.png"
import tarots_cups_7 from "../img/Cup_7.png"
import tarots_cups_8 from "../img/Cup_8.png"
import tarots_cups_9 from "../img/Cup_9.png"
import tarots_cups_10 from "../img/Cup_10.png"
import tarots_cups_page from "../img/Cup_Page.png"
import tarots_cups_knight from "../img/Cup_Knight.png"
import tarots_cups_queen from "../img/Cup_Queen.png"
import tarots_cups_king from "../img/Cup_King.png"

import tarots_disks_ace from "../img/Disk_Ace.png"
import tarots_disks_2 from "../img/Disk_2.png"
import tarots_disks_3 from "../img/Disk_3.png"
import tarots_disks_4 from "../img/Disk_4.png"
import tarots_disks_5 from "../img/Disk_5.png"
import tarots_disks_6 from "../img/Disk_6.png"
import tarots_disks_7 from "../img/Disk_7.png"
import tarots_disks_8 from "../img/Disk_8.png"
import tarots_disks_9 from "../img/Disk_9.png"
import tarots_disks_10 from "../img/Disk_10.png"
import tarots_disks_page from "../img/Disk_Page.png"
import tarots_disks_knight from "../img/Disk_Knight.png"
import tarots_disks_queen from "../img/Disk_Queen.png"
import tarots_disks_king from "../img/Disk_King.png"

import tarots_00_fool from "../img/00_Fool.png"
import tarots_01_magician from "../img/01_Magician.png"
import tarots_02_priestess from "../img/02_Priestess.png"
import tarots_03_empress from "../img/03_Empress.png"
import tarots_04_emperor from "../img/04_Emperor.png"
import tarots_05_hierophant from "../img/05_Hierophant.png"
import tarots_06_lovers from "../img/06_Lovers.png"
import tarots_07_chariot from "../img/07_Chariot.png"
import tarots_08_strength from "../img/08_Strength.png"
import tarots_09_hermit from "../img/09_Hermit.png"
import tarots_10_fortune from "../img/10_Fortune.png"
import tarots_11_justice from "../img/11_Justice.png"
import tarots_12_hangedman from "../img/12_HangedMan.png"
import tarots_13_death from "../img/13_Death.png"
import tarots_14_temperance from "../img/14_Temperance.png"
import tarots_15_devil from "../img/15_Devil.png"
import tarots_16_tower from "../img/16_Tower.png"
import tarots_17_star from "../img/17_Star.png"
import tarots_18_moon from "../img/18_Moon.png"
import tarots_19_sun from "../img/19_Sun.png"
import tarots_20_judgement from "../img/20_Judgement.png"
import tarots_21_world from "../img/21_World.png"

interface InputData {
    username: string;
    year: string;
    month: string;
    date: string;
    message: string;
}

interface TarotData {
    name_jp: string;
    name_en: string;
    image: string;
    reverse?: boolean;
}

// タロットカードデッキ
const tarotDeck: TarotData[] = [
    // 大アルカナ
    { name_jp: '愚者', name_en: 'The Fool', image: tarots_00_fool },
    { name_jp: '魔術師', name_en: 'The Magician', image: tarots_01_magician },
    { name_jp: '女教皇', name_en: 'The High Priestess', image: tarots_02_priestess },
    { name_jp: '女帝', name_en: 'The Empress', image: tarots_03_empress },
    { name_jp: '皇帝', name_en: 'The Emperor', image: tarots_04_emperor },
    { name_jp: '法王', name_en: 'The Hierophant', image: tarots_05_hierophant },
    { name_jp: '恋人', name_en: 'The Lovers', image: tarots_06_lovers },
    { name_jp: '戦車', name_en: 'The Chariot', image: tarots_07_chariot },
    { name_jp: '力', name_en: 'Strength', image: tarots_08_strength },
    { name_jp: '隠者', name_en: 'The Hermit', image: tarots_09_hermit },
    { name_jp: '運命', name_en: 'Wheel of Fortune', image: tarots_10_fortune },
    { name_jp: '正義', name_en: 'Justice', image: tarots_11_justice },
    { name_jp: '吊るされた男', name_en: 'The Hanged Man', image: tarots_12_hangedman },
    { name_jp: '死神', name_en: 'Death', image: tarots_13_death },
    { name_jp: '節制', name_en: 'Temperance', image: tarots_14_temperance },
    { name_jp: '悪魔', name_en: 'The Devil', image: tarots_15_devil },
    { name_jp: '塔', name_en: 'The Tower', image: tarots_16_tower },
    { name_jp: '星', name_en: 'The Star', image: tarots_17_star },
    { name_jp: '月', name_en: 'The Moon', image: tarots_18_moon },
    { name_jp: '太陽', name_en: 'The Sun', image: tarots_19_sun },
    { name_jp: '審判', name_en: 'Judgment', image: tarots_20_judgement },
    { name_jp: '世界', name_en: 'The World', image: tarots_21_world },
    // 小アルカナ ワンド
    { name_jp: 'ワンドのエース', name_en: 'Ace of Wands', image: tarots_wands_ace },
    { name_jp: 'ワンドの2', name_en: '2 of Wands', image: tarots_wands_2 },
    { name_jp: 'ワンドの3', name_en: '3 of Wands', image: tarots_wands_3 },
    { name_jp: 'ワンドの4', name_en: '4 of Wands', image: tarots_wands_4 },
    { name_jp: 'ワンドの5', name_en: '5 of Wands', image: tarots_wands_5 },
    { name_jp: 'ワンドの6', name_en: '6 of Wands', image: tarots_wands_6 },
    { name_jp: 'ワンドの7', name_en: '7 of Wands', image: tarots_wands_7 },
    { name_jp: 'ワンドの8', name_en: '8 of Wands', image: tarots_wands_8 },
    { name_jp: 'ワンドの9', name_en: '9 of Wands', image: tarots_wands_9 },
    { name_jp: 'ワンドの10', name_en: '10 of Wands', image: tarots_wands_10 },
    { name_jp: 'ワンドのペイジ', name_en: 'Page of Wands', image: tarots_wands_page },
    { name_jp: 'ワンドのナイト', name_en: 'Knight of Wands', image: tarots_wands_knight },
    { name_jp: 'ワンドのクイーン', name_en: 'Queen of Wands', image: tarots_wands_queen },
    { name_jp: 'ワンドのキング', name_en: 'King of Wands', image: tarots_wands_king },
    // 小アルカナ ソード
    { name_jp: 'ソードのエース', name_en: 'Ace of Swords', image: tarots_swords_ace },
    { name_jp: 'ソードの2', name_en: '2 of Swords', image: tarots_swords_2 },
    { name_jp: 'ソードの3', name_en: '3 of Swords', image: tarots_swords_3 },
    { name_jp: 'ソードの4', name_en: '4 of Swords', image: tarots_swords_4 },
    { name_jp: 'ソードの5', name_en: '5 of Swords', image: tarots_swords_5 },
    { name_jp: 'ソードの6', name_en: '6 of Swords', image: tarots_swords_6 },
    { name_jp: 'ソードの7', name_en: '7 of Swords', image: tarots_swords_7 },
    { name_jp: 'ソードの8', name_en: '8 of Swords', image: tarots_swords_8 },
    { name_jp: 'ソードの9', name_en: '9 of Swords', image: tarots_swords_9 },
    { name_jp: 'ソードの10', name_en: '10 of Swords', image: tarots_swords_10 },
    { name_jp: 'ソードのペイジ', name_en: 'Page of Swords', image: tarots_swords_page },
    { name_jp: 'ソードのナイト', name_en: 'Knight of Swords', image: tarots_swords_knight },
    { name_jp: 'ソードのクイーン', name_en: 'Queen of Swords', image: tarots_swords_queen },
    { name_jp: 'ソードのキング', name_en: 'King of Swords', image: tarots_swords_king },
    // 小アルカナ カップ
    { name_jp: 'カップのエース', name_en: 'Ace of Cups', image: tarots_cups_ace },
    { name_jp: 'カップの2', name_en: '2 of Cups', image: tarots_cups_2 },
    { name_jp: 'カップの3', name_en: '3 of Cups', image: tarots_cups_3 },
    { name_jp: 'カップの4', name_en: '4 of Cups', image: tarots_cups_4 },
    { name_jp: 'カップの5', name_en: '5 of Cups', image: tarots_cups_5 },
    { name_jp: 'カップの6', name_en: '6 of Cups', image: tarots_cups_6 },
    { name_jp: 'カップの7', name_en: '7 of Cups', image: tarots_cups_7 },
    { name_jp: 'カップの8', name_en: '8 of Cups', image: tarots_cups_8 },
    { name_jp: 'カップの9', name_en: '9 of Cups', image: tarots_cups_9 },
    { name_jp: 'カップの10', name_en: '10 of Cups', image: tarots_cups_10 },
    { name_jp: 'カップのペイジ', name_en: 'Page of Cups', image: tarots_cups_page },
    { name_jp: 'カップのナイト', name_en: 'Knight of Cups', image: tarots_cups_knight },
    { name_jp: 'カップのクイーン', name_en: 'Queen of Cups', image: tarots_cups_queen },
    { name_jp: 'カップのキング', name_en: 'King of Cups', image: tarots_cups_king },
    // 小アルカナ ディスク
    { name_jp: 'ディスクのエース', name_en: 'Ace of Disks', image: tarots_disks_ace },
    { name_jp: 'ディスクの2', name_en: '2 of Disks', image: tarots_disks_2 },
    { name_jp: 'ディスクの3', name_en: '3 of Disks', image: tarots_disks_3 },
    { name_jp: 'ディスクの4', name_en: '4 of Disks', image: tarots_disks_4 },
    { name_jp: 'ディスクの5', name_en: '5 of Disks', image: tarots_disks_5 },
    { name_jp: 'ディスクの6', name_en: '6 of Disks', image: tarots_disks_6 },
    { name_jp: 'ディスクの7', name_en: '7 of Disks', image: tarots_disks_7 },
    { name_jp: 'ディスクの8', name_en: '8 of Disks', image: tarots_disks_8 },
    { name_jp: 'ディスクの9', name_en: '9 of Disks', image: tarots_disks_9 },
    { name_jp: 'ディスクの10', name_en: '10 of Disks', image: tarots_disks_10 },
    { name_jp: 'ディスクのペイジ', name_en: 'Page of Disks', image: tarots_disks_page },
    { name_jp: 'ディスクのナイト', name_en: 'Knight of Disks', image: tarots_disks_knight },
    { name_jp: 'ディスクのクイーン', name_en: 'Queen of Disks', image: tarots_disks_queen },
    { name_jp: 'ディスクのキング', name_en: 'King of Disks', image: tarots_disks_king }
];

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

export default function TarotResult() {

    const location = useLocation();
    const inputData = location.state as InputData;

    console.log(inputData);

    const threeCards = DrawCards(3);

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
                        <div className="tarot-comments"><p>まず、あなたの前に現れた逆位置のワンズの6。これは、最近のエネルギーが少し行き詰まっていることを示しています。過去には進展があったかもしれませんが、現在は一時的な停滞を感じているかもしれません。しかし、このカードはあなたが持つ情熱と意欲を再び燃やすことができることを示唆しています。</p></div>
                    </div>

                    <div className="result-tarot-report">
                        <div className="tarot-type">- 現在 -</div>
                        <div className={threeCards[1].reverse ? "tarot-card reverse" : "tarot-card"}>
                            <img src={threeCards[1].image} alt="" />
                        </div>
                        <div className="tarot-name">
                            {threeCards[1].reverse && "逆さの"}{threeCards[1].name_jp}
                        </div>
                        <div className="tarot-comments"><p>次に、カップの3が登場しました。このカードは感情と関係性に関連しており、あなたの人間関係に新たな展開が訪れる可能性を示しています。これは恋愛に関することだけでなく、友情や家族関係にも当てはまります。過去の経験から学び、感情を深めるチャンスがあるかもしれません。</p></div>
                    </div>

                    <div className="result-tarot-report">
                        <div className="tarot-type">- 未来 -</div>
                        <div className={threeCards[2].reverse ? "tarot-card reverse" : "tarot-card"}>
                            <img src={threeCards[2].image} alt="" />
                        </div>
                        <div className="tarot-name">
                            {threeCards[2].reverse && "逆さの"}{threeCards[2].name_jp}
                        </div>
                        <div className="tarot-comments"><p>最後に、力が現れました。このカードは内なる力と自己制御を象徴しています。あなたは困難な状況や試練に立ち向かう力を持っており、自分自身をコントロールすることで、成功に向かって前進することができるでしょう。このカードは、あなたの自信と決断力を強化する時期であることを意味しています。</p></div>
                    </div>
                </div>
                <div className="result-tarot-report">
                    <div className="tarot-type">- 総評 -</div>
                    <div className="tarot-comments">
                        <p>1986/2/2生まれのあなたにとって、現在は少しの停滞期かもしれませんが、内なる情熱を再燃させ、新たな感情的な展開に向けて進んでいく時期でもあります。過去の経験から学び、自己制御と自信を持って未来に向かいましょう。困難な状況にも立ち向かう力を持っていることを忘れずに、自分自身を信じて前進していくことが大切です。</p>
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