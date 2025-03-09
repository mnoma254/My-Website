// This file contains the JavaScript code for the web application.
// It handles user interactions, manipulates the DOM, and fetches data from the JSON file.

document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayData(data) {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
            dataContainer.appendChild(div);
        });
    }

    const slideInElements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    slideInElements.forEach(element => {
        observer.observe(element);
    });
});