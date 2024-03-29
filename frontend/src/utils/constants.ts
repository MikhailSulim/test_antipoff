export const EXPERTS_BASE_URL: string = 'https://reqres.in/api/users';
export const AUTH_API_URL: string = 'https://api.sulim.yp-diploma.nomoredomains.rocks';
export const REG_EMAIL: RegExp = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
export const MOBILE_SCREEN_WIDTH: number = 590;
export const ADD_CARDS_COUNT:number = 4; 

interface Errors {
    [key: string]: string
}

export const ERRORS: Errors = {
    REQUIRED: 'Поле обязательно для заполнения',
    NAME: 'Минимальная длина имени 2 символа',
    EMAIL: 'Некорректный адрес электронной почты',
    PASSWORD: 'Минимальная длина пароля 8 символов',
    CONFIRM: 'Пароли не совпадают'
}