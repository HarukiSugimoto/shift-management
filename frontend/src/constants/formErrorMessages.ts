export const formErrorMessages = {
    required: 'この項目は必須です。',
    invalidEmail: '正しいメールアドレスを入力してください。',
    invalidPassword: 'パスワードは8文字以上の半角英数字を含めてください。',
    emptyPassword: 'パスワードを入力してください。',
    minLength: (length: number) => `${length}文字以上で入力してください。`,
    maxLength: (length: number) => `${length}文字以内で入力してください。`,
    numberPositive: '正の数を入力してください。',
    correctValue: '正しい値を入力してください。',
};
