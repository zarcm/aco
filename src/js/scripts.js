// This file is intentionally blank
// Use this file to add JavaScript to your project

const scriptURL = 'https://script.google.com/macros/s/AKfycbwd24OXREh2FY1vOdehkWkwC42ZCCV11jXIsY5Sncg4yVqsSb0CtsK0CkOX78HfUFsRyg/exec'

const form = document.forms['singlewebsiteform']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
