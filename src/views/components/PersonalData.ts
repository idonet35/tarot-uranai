import { TarotData } from "./TarotCardSets";

export interface PersonalData {
    username: string;
    year: string;
    month: string;
    date: string;
    message: string;
}

export interface ReadingResult {
    tarots: TarotData[];
    interpretations: string[];
    advice: string;
}