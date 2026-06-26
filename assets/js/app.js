// assets/js/app.js
import { db } from './firebase.js';

// Transforma as funções em globais para funcionarem no onclick do HTML
window.loadView = async function (viewName) {
    try {
        const response = await fetch(`views/${viewName}.html`);
        const html = await response.text();
        document.getElementById('main-content').innerHTML = html;

        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`nav-${viewName}`);
        if (activeBtn) activeBtn.classList.add('active');

    } catch (error) {
        console.error("Erro ao carregar a página: ", error);
        document.getElementById('main-content').innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
    }
}

window.showTab = function (id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    const tabContent = document.getElementById(`tab-${id}`);
    if (tabContent) tabContent.classList.add('active');

    if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

window.onload = () => {
    window.loadView('coleta');
};