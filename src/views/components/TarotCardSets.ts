import tarots_wands_ace from "img/Wand_Ace.png"
import tarots_wands_2 from "img/Wand_2.png"
import tarots_wands_3 from "img/Wand_3.png"
import tarots_wands_4 from "img/Wand_4.png"
import tarots_wands_5 from "img/Wand_5.png"
import tarots_wands_6 from "img/Wand_6.png"
import tarots_wands_7 from "img/Wand_7.png"
import tarots_wands_8 from "img/Wand_8.png"
import tarots_wands_9 from "img/Wand_9.png"
import tarots_wands_10 from "img/Wand_10.png"
import tarots_wands_page from "img/Wand_Page.png"
import tarots_wands_knight from "img/Wand_Knight.png"
import tarots_wands_queen from "img/Wand_Queen.png"
import tarots_wands_king from "img/Wand_King.png"

import tarots_swords_ace from "img/Sword_Ace.png"
import tarots_swords_2 from "img/Sword_2.png"
import tarots_swords_3 from "img/Sword_3.png"
import tarots_swords_4 from "img/Sword_4.png"
import tarots_swords_5 from "img/Sword_5.png"
import tarots_swords_6 from "img/Sword_6.png"
import tarots_swords_7 from "img/Sword_7.png"
import tarots_swords_8 from "img/Sword_8.png"
import tarots_swords_9 from "img/Sword_9.png"
import tarots_swords_10 from "img/Sword_10.png"
import tarots_swords_page from "img/Sword_Page.png"
import tarots_swords_knight from "img/Sword_Knight.png"
import tarots_swords_queen from "img/Sword_Queen.png"
import tarots_swords_king from "img/Sword_King.png"

import tarots_cups_ace from "img/Cup_Ace.png"
import tarots_cups_2 from "img/Cup_2.png"
import tarots_cups_3 from "img/Cup_3.png"
import tarots_cups_4 from "img/Cup_4.png"
import tarots_cups_5 from "img/Cup_5.png"
import tarots_cups_6 from "img/Cup_6.png"
import tarots_cups_7 from "img/Cup_7.png"
import tarots_cups_8 from "img/Cup_8.png"
import tarots_cups_9 from "img/Cup_9.png"
import tarots_cups_10 from "img/Cup_10.png"
import tarots_cups_page from "img/Cup_Page.png"
import tarots_cups_knight from "img/Cup_Knight.png"
import tarots_cups_queen from "img/Cup_Queen.png"
import tarots_cups_king from "img/Cup_King.png"

import tarots_disks_ace from "img/Disk_Ace.png"
import tarots_disks_2 from "img/Disk_2.png"
import tarots_disks_3 from "img/Disk_3.png"
import tarots_disks_4 from "img/Disk_4.png"
import tarots_disks_5 from "img/Disk_5.png"
import tarots_disks_6 from "img/Disk_6.png"
import tarots_disks_7 from "img/Disk_7.png"
import tarots_disks_8 from "img/Disk_8.png"
import tarots_disks_9 from "img/Disk_9.png"
import tarots_disks_10 from "img/Disk_10.png"
import tarots_disks_page from "img/Disk_Page.png"
import tarots_disks_knight from "img/Disk_Knight.png"
import tarots_disks_queen from "img/Disk_Queen.png"
import tarots_disks_king from "img/Disk_King.png"

import tarots_00_fool from "img/00_Fool.png"
import tarots_01_magician from "img/01_Magician.png"
import tarots_02_priestess from "img/02_Priestess.png"
import tarots_03_empress from "img/03_Empress.png"
import tarots_04_emperor from "img/04_Emperor.png"
import tarots_05_hierophant from "img/05_Hierophant.png"
import tarots_06_lovers from "img/06_Lovers.png"
import tarots_07_chariot from "img/07_Chariot.png"
import tarots_08_strength from "img/08_Strength.png"
import tarots_09_hermit from "img/09_Hermit.png"
import tarots_10_fortune from "img/10_Fortune.png"
import tarots_11_justice from "img/11_Justice.png"
import tarots_12_hangedman from "img/12_HangedMan.png"
import tarots_13_death from "img/13_Death.png"
import tarots_14_temperance from "img/14_Temperance.png"
import tarots_15_devil from "img/15_Devil.png"
import tarots_16_tower from "img/16_Tower.png"
import tarots_17_star from "img/17_Star.png"
import tarots_18_moon from "img/18_Moon.png"
import tarots_19_sun from "img/19_Sun.png"
import tarots_20_judgement from "img/20_Judgement.png"
import tarots_21_world from "img/21_World.png"

export class TarotData {
    name_jp: string;
    name_en: string;
    image: string;
    reverse?: boolean;

    constructor(name_jp: string, name_en: string, image: string) {
        this.name_jp = name_jp;
        this.name_en = name_en;
        this.image = image;
        this.reverse = false;
    }

    getName(): string {
        if (this.reverse) {
            return '逆位置の' + this.name_jp;
        }
        return this.name_jp;
    }
}

// デッキからカードを指定枚数引く
export function drawCards(numOfCards: number): TarotData[] {
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

export const tarotDeck: TarotData[] = [
    // 大アルカナ
    new TarotData('愚者', 'The Fool', tarots_00_fool),
    new TarotData('魔術師', 'The Magician', tarots_01_magician),
    new TarotData('女教皇', 'The High Priestess', tarots_02_priestess),
    new TarotData('女帝', 'The Empress', tarots_03_empress),
    new TarotData('皇帝', 'The Emperor', tarots_04_emperor),
    new TarotData('法王', 'The Hierophant', tarots_05_hierophant),
    new TarotData('恋人', 'The Lovers', tarots_06_lovers),
    new TarotData('戦車', 'The Chariot', tarots_07_chariot),
    new TarotData('力', 'Strength', tarots_08_strength),
    new TarotData('隠者', 'The Hermit', tarots_09_hermit),
    new TarotData('運命', 'Wheel of Fortune', tarots_10_fortune),
    new TarotData('正義', 'Justice', tarots_11_justice),
    new TarotData('吊るされた男', 'The Hanged Man', tarots_12_hangedman),
    new TarotData('死神', 'Death', tarots_13_death),
    new TarotData('節制', 'Temperance', tarots_14_temperance),
    new TarotData('悪魔', 'The Devil', tarots_15_devil),
    new TarotData('塔', 'The Tower', tarots_16_tower),
    new TarotData('星', 'The Star', tarots_17_star),
    new TarotData('月', 'The Moon', tarots_18_moon),
    new TarotData('太陽', 'The Sun', tarots_19_sun),
    new TarotData('審判', 'Judgment', tarots_20_judgement),
    new TarotData('世界', 'The World', tarots_21_world),
    // 小アルカナ ワンド
    new TarotData('ワンドのエース', 'Ace of Wands', tarots_wands_ace),
    new TarotData('ワンドの2', '2 of Wands', tarots_wands_2),
    new TarotData('ワンドの3', '3 of Wands', tarots_wands_3),
    new TarotData('ワンドの4', '4 of Wands', tarots_wands_4),
    new TarotData('ワンドの5', '5 of Wands', tarots_wands_5),
    new TarotData('ワンドの6', '6 of Wands', tarots_wands_6),
    new TarotData('ワンドの7', '7 of Wands', tarots_wands_7),
    new TarotData('ワンドの8', '8 of Wands', tarots_wands_8),
    new TarotData('ワンドの9', '9 of Wands', tarots_wands_9),
    new TarotData('ワンドの10', '10 of Wands', tarots_wands_10),
    new TarotData('ワンドのペイジ', 'Page of Wands', tarots_wands_page),
    new TarotData('ワンドのナイト', 'Knight of Wands', tarots_wands_knight),
    new TarotData('ワンドのクイーン', 'Queen of Wands', tarots_wands_queen),
    new TarotData('ワンドのキング', 'King of Wands', tarots_wands_king),
    // 小アルカナ ソード
    new TarotData('ソードのエース', 'Ace of Swords', tarots_swords_ace),
    new TarotData('ソードの2', '2 of Swords', tarots_swords_2),
    new TarotData('ソードの3', '3 of Swords', tarots_swords_3),
    new TarotData('ソードの4', '4 of Swords', tarots_swords_4),
    new TarotData('ソードの5', '5 of Swords', tarots_swords_5),
    new TarotData('ソードの6', '6 of Swords', tarots_swords_6),
    new TarotData('ソードの7', '7 of Swords', tarots_swords_7),
    new TarotData('ソードの8', '8 of Swords', tarots_swords_8),
    new TarotData('ソードの9', '9 of Swords', tarots_swords_9),
    new TarotData('ソードの10', '10 of Swords', tarots_swords_10),
    new TarotData('ソードのペイジ', 'Page of Swords', tarots_swords_page),
    new TarotData('ソードのナイト', 'Knight of Swords', tarots_swords_knight),
    new TarotData('ソードのクイーン', 'Queen of Swords', tarots_swords_queen),
    new TarotData('ソードのキング', 'King of Swords', tarots_swords_king),
    // 小アルカナ カップ
    new TarotData('カップのエース', 'Ace of Cups', tarots_cups_ace),
    new TarotData('カップの2', '2 of Cups', tarots_cups_2),
    new TarotData('カップの3', '3 of Cups', tarots_cups_3),
    new TarotData('カップの4', '4 of Cups', tarots_cups_4),
    new TarotData('カップの5', '5 of Cups', tarots_cups_5),
    new TarotData('カップの6', '6 of Cups', tarots_cups_6),
    new TarotData('カップの7', '7 of Cups', tarots_cups_7),
    new TarotData('カップの8', '8 of Cups', tarots_cups_8),
    new TarotData('カップの9', '9 of Cups', tarots_cups_9),
    new TarotData('カップの10', '10 of Cups', tarots_cups_10),
    new TarotData('カップのペイジ', 'Page of Cups', tarots_cups_page),
    new TarotData('カップのナイト', 'Knight of Cups', tarots_cups_knight),
    new TarotData('カップのクイーン', 'Queen of Cups', tarots_cups_queen),
    new TarotData('カップのキング', 'King of Cups', tarots_cups_king),
    // 小アルカナ ディスク
    new TarotData('ディスクのエース', 'Ace of Disks', tarots_disks_ace),
    new TarotData('ディスクの2', '2 of Disks', tarots_disks_2),
    new TarotData('ディスクの3', '3 of Disks', tarots_disks_3),
    new TarotData('ディスクの4', '4 of Disks', tarots_disks_4),
    new TarotData('ディスクの5', '5 of Disks', tarots_disks_5),
    new TarotData('ディスクの6', '6 of Disks', tarots_disks_6),
    new TarotData('ディスクの7', '7 of Disks', tarots_disks_7),
    new TarotData('ディスクの8', '8 of Disks', tarots_disks_8),
    new TarotData('ディスクの9', '9 of Disks', tarots_disks_9),
    new TarotData('ディスクの10', '10 of Disks', tarots_disks_10),
    new TarotData('ディスクのペイジ', 'Page of Disks', tarots_disks_page),
    new TarotData('ディスクのナイト', 'Knight of Disks', tarots_disks_knight),
    new TarotData('ディスクのクイーン', 'Queen of Disks', tarots_disks_queen),
    new TarotData('ディスクのキング', 'King of Disks', tarots_disks_king)
];
