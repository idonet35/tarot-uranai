import { useForm } from 'react-hook-form';

import './DivinationForm.css'

interface InputData {
    username: string;
    birthday: string;
    message: string;
}

export default function DivinationForm() {
    // useForm関数を呼び出して各種設定を行う
    const {
        register,               // inputタグとバリデーションルールを紐づける関数
        handleSubmit,           // フォームのSumit Eventで呼ばれる関数
        formState: { errors },  // バリデーションエラーの情報が格納
    } = useForm<InputData>({ mode: 'onChange' });

    const onSubmit = (data: InputData) => {
        alert(
            `username: ${data.username}\n
            birthday: ${data.birthday}\n
            ${data.message}`
        );
    }

    return (
        <div className="divination-container">
            <h2 className="heading">UranAI</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-block">
                    <p>名前</p>
                    <div className="form-controls">
                        <input
                            type="text"
                            className="type-input"
                            id="username"
                            {...register("username", {
                                required: "ユーザ名を入力してください",
                            })}
                        />
                        <span className="focus-line" />
                    </div>
                    <p className="error">{errors.username?.message as React.ReactNode}</p>
                </div>

                <div className="form-block">
                    <p>生年月日</p>
                    <div className="form-controls">
                        <input
                            type="date"
                            className="type-input"
                            id="birthday"
                            {...register("birthday", {
                                required: "正しい日付を入力してください",
                                valueAsDate: true
                            })}
                        />
                        <span className="focus-line" />
                    </div>
                    <p className="error">{errors.birthday?.message as React.ReactNode}</p>
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
                    <p className="error">{errors.message?.message as React.ReactNode}</p>
                </div>

                <div>
                    <button type="submit" id="submit_button">占う</button>
                </div>
            </form>
        </div>
    );
}