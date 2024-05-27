document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    
    startBtn.addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h1>Você ama o Theo?</h1>
            <button id="simBtn">SIM</button>
            <button id="naoBtn">NÃO</button>
        `;
        
        document.getElementById('naoBtn').addEventListener('mouseover', onMouseOver);
        document.getElementById('naoBtn').addEventListener('click', () => {
            // Aqui você pode adicionar ações caso o usuário clique em "NÃO"
        });
        
        document.getElementById('simBtn').addEventListener('click', () => {
            container.innerHTML = `
                <h1>Quer assistir um anime hoje?</h1>
                <button id="simBtn2">SIM</button>
                <button id="naoBtn2">NÃO</button>
            `;
            
            document.getElementById('naoBtn2').addEventListener('click', showErrorPage);
            document.getElementById('simBtn2').addEventListener('click', () => {
                container.innerHTML = `
                    <h1>Você ama a mamãe?</h1>
                    <button id="simBtn3">SIM</button>
                    <button id="naoBtn3">NÃO</button>
                `;

                document.getElementById('naoBtn3').addEventListener('click', showLovePage);
                document.getElementById('simBtn3').addEventListener('click', showErrorPage);

                // Adicionando evento de mouseover para trocar textos dos botões
                const simBtn3 = document.getElementById('simBtn3');
                const naoBtn3 = document.getElementById('naoBtn3');

                naoBtn3.addEventListener('mouseover', () => swapText(naoBtn3));
                naoBtn3.addEventListener('mouseout', () => swapText(naoBtn3));
                simBtn3.addEventListener('mouseover', () => swapText(simBtn3));
                simBtn3.addEventListener('mouseout', () => swapText(simBtn3));
            });
        });
    });

    // Efeito de tremor e texto piscante assim que a página carrega
    //showErrorPage(); // Remova isso daqui
});

function onMouseOver(event) {
    const naoBtn = document.getElementById('naoBtn');
    const randomX = Math.random() * (window.innerWidth - naoBtn.clientWidth);
    const randomY = Math.random() * (window.innerHeight - naoBtn.clientHeight);
    naoBtn.style.position = "absolute";
    naoBtn.style.left = randomX + 'px';
    naoBtn.style.top = randomY + 'px';
}

function showErrorPage() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="error-container">
            <h1 id="error-message">Você cometeu um erro!</h1>
            <p>Seu sistema está sendo hackeado...</p>
            <p>Por favor, aguarde enquanto corrigimos o problema...</p>
            <div class="codes" id="codes"></div>
            <div class="spinner"></div>
        </div>
    `;
    const spinner = document.querySelector('.spinner');
    spinner.classList.add('spin');

    // Adicionando efeito assustador
    setTimeout(() => {
        container.style.color = "#fff";
        document.body.style.overflow = "hidden";

        // Efeito de tela tremendo
        const initialLeftOffset = container.offsetLeft;
        const initialTopOffset = container.offsetTop;
        let shakeIntensity = 80;
        const shakeInterval = setInterval(() => {
            container.style.left = initialLeftOffset + (Math.random() * shakeIntensity - shakeIntensity / 2) + 'px';
            container.style.top = initialTopOffset + (Math.random() * shakeIntensity - shakeIntensity / 2) + 'px';
        }, 15);

        // Efeito de texto piscante
        const allElements = document.querySelectorAll('h1, p, button');
        let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Cores a piscar
        let colorIndex = 0;
        let blinkingInterval = setInterval(() => {
            allElements.forEach(element => {
                element.style.color = colors[colorIndex];
            });
            colorIndex = (colorIndex + 1) % colors.length;
        }, 50); // Reduzindo o intervalo para 50ms

        // Adicionando códigos aleatórios
        const codesContainer = document.getElementById('codes');
        const codeMessages = [
            "Fatal error: system compromised",
            "Virus detected: malware.infect()",
            "Warning: unauthorized access attempt",
            "Executing exploit code...",
            "Decrypting firewall protection...",
            "Hiding user interface...",
            "Corrupting data...",
            "Initiating self-destruct sequence...",
            "System shutdown imminent...",
            "Error 404: Page not found",
            "Error 503: Service unavailable",
            "Error 666: Hell unleashed",
            "Error 999: End of the world",
            "System alert: security breach detected",
            "Attention: virus spreading rapidly",
            "Danger: hacker gaining control",
            "Critical error: system failure",
            "Malware detected: trojan.hack",
            "Intrusion detected: hacker@192.168.0.1",
            "Firewall compromised: vulnerability exploited",
        ];

        const codesInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * codeMessages.length);
            const codeElement = document.createElement('span');
            codeElement.textContent = codeMessages[randomIndex];
            codeElement.classList.add('code');
            codesContainer.appendChild(codeElement);
            codesContainer.scrollTop = codesContainer.scrollHeight;
        }, 50); // Intervalo mais rápido para mensagens mais frequentes

        // Efeito de texto distorcido
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.textShadow = "0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f, 0 0 25px #00f, 0 0 30px #00f, 0 0 35px #00f";
        errorMessage.style.color = "#0f0"; // Mudança de cor para um verde intenso

        // Efeito de cores distorcidas
        container.style.filter = "invert(1) saturate(200%)"; // Inverte as cores e aumenta a saturação

        // Texto ilegível
        const randomText = [...errorMessage.textContent].map(char => Math.random() < 0.5 ? char : Math.random().toString(36).slice(2, 3)).join('');
        errorMessage.textContent = randomText;

        // Animações perturbadoras
        container.style.animation = "shake 0.5s infinite alternate"; // Adiciona uma animação de tremor ao container

        // Alterando entre cores de fundo branco e preto
        let isWhiteBackground = true;
        const backgroundColorInterval = setInterval(() => {
            if (isWhiteBackground) {
                document.body.style.backgroundColor = "#000";
            } else {
                document.body.style.backgroundColor = "#fff";
            }
            isWhiteBackground = !isWhiteBackground;
        }, 200); // Intervalo de mudança de cor de fundo
    }, 2000);
}

function swapText(button) {
    if (button.textContent === "SIM") {
        button.textContent = "NÃO";
    } else {
        button.textContent = "SIM";
    }
}

function showLovePage() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="love-container">
            <h1>Você é meu amor 💖</h1>
            <div id="hearts"></div>
        </div>
    `;

    const heartsContainer = document.getElementById('hearts');
    const heartEmoji = '💖';

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmoji;
        heart.style.left = Math.random() * 100 + 'vw';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
