const signIn = document.querySelector('.signin-btn')
const signUp = document.querySelector('.signup-btn')
const formBox = document.querySelector('.form-box')
const body = document.body


signUp.addEventListener('click' , () => {
    formBox.classList.add('active')
    body.classList.add('active')
})

signIn.addEventListener('click' , () => {
    formBox.classList.remove('active')
    body.classList.remove('active')
})
