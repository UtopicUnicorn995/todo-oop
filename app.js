const openModal = document.querySelector('.add-btn')
const addBtn = document.querySelector('.add-activity')
const modal = document.querySelector('.modal')


let tasks = [
    {
        task: "Wake up at 7am",
        isActive: false
    },
    {
        task: "Check emails",
        isActive: false
    },
    {
        task: "Sleep again",
        isActive: true
    }
]

tasks.forEach(task => {
    let li = document.createElement('li')
    let text = document.createTextNode(task["task"])
    let ul = document.querySelector('.todo-main')
    li.appendChild(text)
    if(task["isActive"] === false){
        ul.appendChild(li).classList.add('todo', 'done' )
    }
    ul.appendChild(li).classList.add('todo' )
})


// TIME FUNCTION
setInterval(function(){
    const d = new Date()
    let hour = d.getHours()
    let minute = d.getMinutes()
    document.querySelector('.hour').innerText = hour
    if(minute < 10){
        document.querySelector('.minute').innerText = "0" + minute
    }else{
        document.querySelector('.minute').innerText = minute
    }
}, 1000)

const items = document.querySelectorAll('.todo')

items.forEach(item => {
    item.addEventListener('click', () =>{
        item.classList.toggle('done')
    })
})

openModal.addEventListener('click', () => {
    modal.classList.toggle('show')
    openModal.setAttribute('disabled', true)
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    openModal.removeAttribute('disabled')
    modal.classList.toggle('show')
    
})