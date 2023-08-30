import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { PersonalData, ReadingResult } from 'views/components/PersonalData';
import { TarotData, drawCards } from 'views/components/TarotCardSets';
import { tarotAI } from 'views/components/OpenAI';

import 'views/styles/views.css'
import 'views/styles/reading.css'

interface dayOption {
    key: number;
    value: string;
}

/**
 * セレクトボックスの中にオプションを生成する
 * @param {number} オプションを生成する最初の数値
 * @param {number} オプションを生成する最後の数値
 * @param {number} 現在の日付にマッチする数値
 */
const createOption = (dayOptions: dayOption[], startNum: number, endNum: number) => {
    for (let i = startNum; i <= endNum; i++) {
        dayOptions.push({ key: i, value: String(i) })
    }
}

// 日付データ
const today = new Date();
const thisYear = today.getFullYear();

// Optionの日付リスト
const yearOptions: dayOption[] = [];
const monthOptions: dayOption[] = [];
const dateOptions: dayOption[] = [];

// 初期の年月日リスト作成
createOption(yearOptions, 1900, thisYear - 1);
createOption(monthOptions, 1, 12);
createOption(dateOptions, 1, 31);

export function DivinationForm() {
    const [divinationContainer, setDivinationContainer] = useState('divination-container');
    const [readingContainer, setReadingContainer] = useState('reading-container hidding');

    // useForm関数を呼び出して各種設定を行う
    const {
        register,               // inputタグとバリデーションルールを紐づける関数
        getValues,
        handleSubmit,           // フォームのSumit Eventで呼ばれる関数
        formState: { errors },  // バリデーションエラーの情報が格納
    } = useForm<PersonalData>({ mode: 'onChange', defaultValues: { year: "1986" } });

    // Navigate関数
    const navigate = useNavigate();

    // Submit Event
    const onSubmit = async (data: PersonalData) => {
        // ローディング画面を表示
        setDivinationContainer('divination-container hidding');
        setReadingContainer('reading-container fade-in');

        // タロットカードを3枚引く
        const threeCards: TarotData[] = drawCards(3);;
        const card1 = threeCards[0].getName();
        const card2 = threeCards[1].getName();
        const card3 = threeCards[2].getName();

        // AIで占いをする非同期処理
        const divinationAsyncProc = async () => {
            // OpenAIにfunctioncallを行う
            const tarot_jsonString = await tarotAI(card1, card2, card3, data) as string;

            // jsonObjectに変換
            const tarot_jsonObject = JSON.parse(tarot_jsonString);
            console.log(tarot_jsonObject);

            // ReadingResultを作成
            const advice = tarot_jsonObject.advice as string;
            const readingResult: ReadingResult = {
                tarots: threeCards,
                interpretations: [
                    tarot_jsonObject.card1.interpretation,
                    tarot_jsonObject.card2.interpretation,
                    tarot_jsonObject.card3.interpretation
                ],
                advice: advice
            };

            navigate('/result', {
                state: readingResult
            });
        }

        // 占い実行
        divinationAsyncProc();
    }

    // selectの選択管理と初期値アイテム
    return (
        <div>
            <div className={divinationContainer}>
                <h2 className="heading">大綿津見アトイのタロット占い</h2>
                <p className="center">「Anser to Ideal」</p>
                <p className="center">理想に向かう答えを見つける手助けをします</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-block">
                        <p>名前</p>
                        <div className="form-controls">
                            <input
                                type="text"
                                className="type-input"
                                id="username"
                                {...register("username", {
                                    required: "名前を入力してください",
                                })}
                            />
                            <span className="focus-line" />
                        </div>
                        <p className="error">&nbsp;{errors.username?.message as React.ReactNode}</p>
                    </div>

                    <div className="form-block">
                        <p>生年月日</p>
                        <div className="layout-grid3">
                            <div className="form-select">
                                <select
                                    className="type-input"
                                    id="year"
                                    {...register("year")}>
                                    {yearOptions.map((item) => {
                                        return (
                                            <option key={item.key} value={item.key}>
                                                {item.value}年
                                            </option>
                                        );
                                    })}
                                </select>
                                <span className="focus-line" />
                            </div>

                            <div className="form-select">
                                <select
                                    className="type-input"
                                    id="month"
                                    {...register("month")}>
                                    {monthOptions.map((item) => {
                                        return (
                                            <option key={item.key} value={item.key}>
                                                {item.value}月
                                            </option>
                                        );
                                    })}
                                </select>
                                <span className="focus-line" />
                            </div>

                            <div className="form-select">
                                <select
                                    className="type-input"
                                    id="date"
                                    {...register("date", {
                                        validate: {
                                            message: value => {
                                                const y = Number(getValues('year'));
                                                const m = Number(getValues('month'));
                                                const d = Number(value);
                                                if (m === 2) {
                                                    if (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)) {
                                                        if (d >= 30) return "正しい日付を入力してください";
                                                    }
                                                    else {
                                                        if (d >= 29) return "正しい日付を入力してください";
                                                    }
                                                }
                                                else if (m === 4 || m === 6 || m === 9 || m === 11) {
                                                    if (d === 31) return "正しい日付を入力してください";
                                                }
                                                return;
                                            }
                                        },
                                    })}>
                                    {dateOptions.map((item) => {
                                        return (
                                            <option key={item.key} value={item.key}>
                                                {item.value}日
                                            </option>
                                        );
                                    })}
                                </select>
                                <span className="focus-line" />
                            </div>
                        </div>
                        <p className="error">&nbsp;{errors.date?.message as React.ReactNode}</p>
                    </div>

                    <div className="form-block form-double-block">
                        <p>相談内容</p>
                        <div className="form-controls">
                            <textarea
                                className="type-input"
                                id="message"
                                {...register("message", {
                                    required: "相談内容を記入してください",
                                    maxLength: { value: 100, message: "100文字以内で入力してください" }
                                })}
                            ></textarea>
                            <span className="focus-line" />
                        </div>
                        <p className="error">&nbsp;{errors.message?.message as React.ReactNode}</p>
                    </div>

                    <div>
                        <button type="submit" id="submit_button">占う</button>
                    </div>
                </form>
            </div>
            <div className={readingContainer}>
                <div id="loading-wrapper">
                    <div id="loading-text">AtoI</div>
                    <div id="loading-content"></div>
                </div>
                <div id="loading-description" className="blinking">Now Reading</div>
            </div>
        </div>
    );
}