const body = document.body

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const contacts = document.querySelector('.contacts')
const contacts_btn = document.querySelector('.contact_btna')
const contacts_close = document.querySelector('.contacts_close')

contacts_btn.addEventListener('click', (e)=>{
    contacts.classList.toggle('active')
})

contacts_close.addEventListener('click', (e)=>{
    contacts.classList.remove('active')
})

var db = false
const postCopyBtn = document.querySelector('.share_text')
const alertAboutCopy = document.querySelector('.copy_alert')

async function alert(){
    if(db == false){
        db = true
        navigator.clipboard.writeText(window.location.href)
        console.log('Copied!');
        alertAboutCopy.classList.add('active')
        await sleep(2000)
        alertAboutCopy.classList.remove('active')
        db = false
    }
}
postCopyBtn.addEventListener('click', alert)