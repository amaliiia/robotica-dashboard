// assets/js/app.js

// Função para buscar o arquivo HTML e injetar na tela
async function loadView(viewName) {
    try {
        // 1. Busca o arquivo HTML correspondente na pasta views/
        const response = await fetch(`views/${viewName}.html`);
        const html = await response.text();

        // 2. Injeta o HTML dentro da tag <main>
        document.getElementById('main-content').innerHTML = html;

        // 3. Atualiza os botões do menu lateral para mostrar qual está ativo
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`nav-${viewName}`).classList.add('active');

    } catch (error) {
        console.error("Erro ao carregar a página: ", error);
        document.getElementById('main-content').innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
    }
}

// Lógica das abas do Painel (Você já tinha isso, adaptado para funcionar dinamicamente)
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    const tabContent = document.getElementById(`tab-${id}`);
    if (tabContent) tabContent.classList.add('active');

    if (event && event.target) event.target.classList.add('active');
}

// Carrega a view 'coleta' automaticamente assim que o index.html for aberto
window.onload = () => {
    loadView('coleta');
};