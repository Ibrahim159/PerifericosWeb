const templateCard = document.getElementById('template-cont').content;
const card = document.getElementById('main-container');
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('../api/hardwareExterno.json');
        const data = await res.json();
        drawComponent(data);
    } catch (error) {
        console.log(error);
    }
}

const drawComponent = (data) => {
    data.forEach(element => {
        templateCard.querySelector('h2').textContent = element.name;
        templateCard.querySelector('p').textContent = element.content;
        templateCard.querySelector('img').setAttribute('src', element.pic);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    card.appendChild(fragment);
}