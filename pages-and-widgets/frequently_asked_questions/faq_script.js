// Bring in toggle buttons (querySelectorAll)
const faqs = document.querySelectorAll('.faq-toggle')

// Loop through nodeList (forEach)
// Add Click event (addEventListener)
// Toggle the active class on the parent node (.parentNode & classList.toggle())
faqs.forEach(faqs => {
    faqs.addEventListener('click', () => {
        // if (faqs.classList.contains('active'))
        //     faqs.parentNode.classList.remove('active')
        // else
        //     faqs.parentNode.classList.add('active')

        faqs.parentNode.classList.toggle('active')
    })
})
