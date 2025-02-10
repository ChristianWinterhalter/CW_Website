const e_hour = document.querySelector('.hour')
const e_minute = document.querySelector('.minute')
const e_second = document.querySelector('.second')
const e_time = document.querySelector('.time')
const e_date = document.querySelector('.date')
const e_toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

e_toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    } else {
        html.classList.add('dark')
        e.target.innerHTML = "Light mode"
    }
})

function toggleDarkMode() {
    e_toggle.textContent = "Light Mode"
}