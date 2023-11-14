const regexText = /^([a-zA-Z0-9_\-!@#$%^&*(),.?":{}|<>] ?){3,}$/
const regexTag = /^(#[A-Za-z]+)$/

export const createPostValidation = {
    isQuestionSuggestionEmpty: (text) =>{
        if(text.trim().length === 0) {
            return true
        }
        if(!regexText.test(text)){
            return true
        }
    },
    isTagsEmpty: (arr) => {
        if(arr.length === 0) {
            return true
        }
        if(arr.length > 0 ){
           arr.some((tag)=>{
            return !regexTag.test(tag)
           })
        }
    },
    isCountryEmpty: (text) => {
        if(text.trim().length === 0) {
            return true
        }
        if(!regexText.test(text)){
            return true
        }
    },
    isCityEmpty: (text) => {
        if(text.trim().length === 0) {
            return true
        }
        if(!regexText.test(text)){
            return true
        }
    },
    isAreaEmpty: (text) => {
        if(text.trim().length === 0) {
            return true
        }
        if(!regexText.test(text)){
            return true
        }
    },
    isTypeNotSelected: (flag) => {
        if(!flag === 'question' && !flag === 'suggestion') {
            return true
        }
    }
}