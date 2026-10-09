const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);


/* TEXTO DIGITANDO */

const typingText = document.getElementById("typingText");

const typingWords = {
    pt: [
        "ESTUDANTE DE TI",
        "PROGRAMADOR C#",
        "DESENVOLVEDOR WEB",
        "DESENVOLVEDOR FUTURO",
        "ENTUSIASTA DE TECNOLOGIA"
    ],

    en: [
        "IT STUDENT",
        "C# PROGRAMMER",
        "WEB DEVELOPER",
        "FUTURE DEVELOPER",
        "TECH ENTHUSIAST"
    ],

    es: [
        "ESTUDIANTE DE TI",
        "PROGRAMADOR C#",
        "DESARROLLADOR WEB",
        "FUTURO DESARROLLADOR",
        "ENTUSIASTA DE TECNOLOGÍA"
    ]
};

let currentLanguage =
    localStorage.getItem("portfolioLanguage") || "pt";

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const words = typingWords[currentLanguage];
    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 40 : 75
    );
}

typeEffect();


/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


/* TEMA */

const themeToggle = document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const theme =
        document.body.classList.contains("light")
            ? "light"
            : "dark";

    localStorage.setItem("portfolioTheme", theme);

    playBeep(550, 0.05);
});


/* IDIOMAS */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

languageButton.addEventListener("click", () => {
    languageMenu.classList.toggle("active");
});

document.querySelectorAll("[data-language]").forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.language;

        currentLanguage = language;

        localStorage.setItem(
            "portfolioLanguage",
            language
        );

        applyLanguage(language);

        languageMenu.classList.remove("active");

        if (language === "pt") {
            showAlert("IDIOMA ALTERADO: PORTUGUÊS");
        } else if (language === "en") {
            showAlert("LANGUAGE CHANGED: ENGLISH");
        } else {
            showAlert("IDIOMA CAMBIADO: ESPAÑOL");
        }

        playBeep(700, 0.08);
    });

});


/* TRADUÇÕES */

const translations = {

    pt: {
        navCommand: "COMMAND",
        navCrew: "CREW",
        navSystems: "SYSTEMS",
        navMissions: "MISSIONS",
        navContact: "COMMUNICATION",

        heroEyebrow: "PERFIL DIGITAL DETECTADO",

        heroText:
            "Estudante de Tecnologia da Informação, desenvolvendo soluções através de programação, desenvolvimento web e projetos digitais.",

        viewMissions: "VER MISSÕES",
        contact: "CONTATO",

        aboutTitle: "SOBRE MIM",

        aboutText:
            "Meu nome é Pedro Furtado, tenho 17 anos e sou estudante de Tecnologia da Informação, atualmente cursando o segundo ano do Ensino Médio Técnico no COTEMIG.",

        aboutText2:
            "Durante minha formação, venho desenvolvendo conhecimentos em programação, desenvolvimento web e criação de projetos digitais, buscando transformar ideias em soluções funcionais e criativas.",

        aboutText3:
            "Meu objetivo profissional é continuar evoluindo na área de TI, adquirindo experiência e construindo projetos que representem minha evolução como desenvolvedor.",

        statSkills: "HABILIDADES",
        statProjects: "MISSÕES",
        statLearning: "APRENDIZADO",

        skillsTitle: "SISTEMAS",

        skillHardware:
            "Conhecimentos em hardware, software e ambientes computacionais.",

        skillCsharp:
            "Lógica de programação e desenvolvimento de aplicações utilizando C#.",

        skillHtml:
            "Estruturação de páginas e desenvolvimento de projetos para web.",

        skillJavascript:
            "Desenvolvimento de interações, funcionalidades e comportamentos dinâmicos.",

        skillGoogle:
            "Conhecimentos em ferramentas Google em nível básico e intermediário.",

        skillOffice:
            "Conhecimentos no pacote Microsoft Office 365.",

        scanTitle: "EXECUTAR SCAN DO SISTEMA",

        scanText:
            "Execute uma análise completa dos sistemas disponíveis neste terminal.",

        projectsTitle: "MISSÕES",

        projectVelox:
            "Landing page para uma loja de bicicletas, utilizando HTML, CSS e prototipação visual no Figma.",

        projectCsharp:
            "Sistema desenvolvido com C# e Windows Forms, trabalhando interfaces, lógica e funcionalidades.",

        projectWeb:
            "Desenvolvimento de páginas web utilizando HTML e CSS, explorando estrutura, design e responsividade.",

        viewMission: "VER MISSÃO",

        accessGithub: "ACESSAR BANCO →",

        contactTitle: "CONTATO",

        signalActive: "SINAL ATIVO",

        available: "DISPONÍVEL PARA COMUNICAÇÃO",

        formName: "NOME *",
        formPhone: "TELEFONE *",
        formEmail: "EMAIL *",
        formMessage: "MENSAGEM *",

        transmit: "TRANSMITIR MENSAGEM",

        footerText:
            "PORTFÓLIO DIGITAL // SISTEMA ONLINE"
    },

    en: {
        navCommand: "COMMAND",
        navCrew: "CREW",
        navSystems: "SYSTEMS",
        navMissions: "MISSIONS",
        navContact: "COMMUNICATION",

        heroEyebrow: "DIGITAL PROFILE DETECTED",

        heroText:
            "Information Technology student developing solutions through programming, web development and digital projects.",

        viewMissions: "VIEW MISSIONS",
        contact: "CONTACT",

        aboutTitle: "ABOUT ME",

        aboutText:
            "My name is Pedro Furtado, I am 17 years old and I am an Information Technology student currently attending the second year of technical high school at COTEMIG.",

        aboutText2:
            "During my education, I have been developing knowledge in programming, web development and digital projects, seeking to transform ideas into functional and creative solutions.",

        aboutText3:
            "My professional goal is to continue growing in the IT field, gaining experience and building projects that represent my development as a developer.",

        statSkills: "SKILLS",
        statProjects: "MISSIONS",
        statLearning: "LEARNING",

        skillsTitle: "SYSTEMS",

        skillHardware:
            "Knowledge of hardware, software and computing environments.",

        skillCsharp:
            "Programming logic and application development using C#.",

        skillHtml:
            "Web page structure and development of web projects.",

        skillJavascript:
            "Development of interactions, features and dynamic web behavior.",

        skillGoogle:
            "Basic and intermediate knowledge of Google tools.",

        skillOffice:
            "Knowledge of Microsoft Office 365.",

        scanTitle: "RUN SYSTEM SCAN",

        scanText:
            "Execute a complete analysis of the systems available on this terminal.",

        projectsTitle: "MISSIONS",

        projectVelox:
            "Landing page for a bicycle store using HTML, CSS and visual prototyping in Figma.",

        projectCsharp:
            "System developed with C# and Windows Forms, working with interfaces, logic and features.",

        projectWeb:
            "Web pages developed using HTML and CSS, exploring structure, design and responsiveness.",

        viewMission: "VIEW MISSION",

        accessGithub: "ACCESS DATABASE →",

        contactTitle: "CONTACT",

        signalActive: "SIGNAL ACTIVE",

        available: "AVAILABLE FOR COMMUNICATION",

        formName: "NAME *",
        formPhone: "PHONE *",
        formEmail: "EMAIL *",
        formMessage: "MESSAGE *",

        transmit: "TRANSMIT MESSAGE",

        footerText:
            "DIGITAL PORTFOLIO // SYSTEM ONLINE"
    },

    es: {
        navCommand: "COMANDO",
        navCrew: "TRIPULACIÓN",
        navSystems: "SISTEMAS",
        navMissions: "MISIONES",
        navContact: "COMUNICACIÓN",

        heroEyebrow: "PERFIL DIGITAL DETECTADO",

        heroText:
            "Estudiante de Tecnología de la Información, desarrollando soluciones mediante programación, desarrollo web y proyectos digitales.",

        viewMissions: "VER MISIONES",
        contact: "CONTACTO",

        aboutTitle: "SOBRE MÍ",

        aboutText:
            "Mi nombre es Pedro Furtado, tengo 17 años y soy estudiante de Tecnología de la Información, actualmente cursando el segundo año de educación secundaria técnica en COTEMIG.",

        aboutText2:
            "Durante mi formación, he desarrollado conocimientos en programación, desarrollo web y creación de proyectos digitales, buscando transformar ideas en soluciones funcionales y creativas.",

        aboutText3:
            "Mi objetivo profesional es seguir evolucionando en el área de TI, adquiriendo experiencia y construyendo proyectos que representen mi evolución como desarrollador.",

        statSkills: "HABILIDADES",
        statProjects: "MISIONES",
        statLearning: "APRENDIZAJE",

        skillsTitle: "SISTEMAS",

        skillHardware:
            "Conocimientos de hardware, software y entornos computacionales.",

        skillCsharp:
            "Lógica de programación y desarrollo de aplicaciones utilizando C#.",

        skillHtml:
            "Estructuración de páginas y desarrollo de proyectos web.",

        skillJavascript:
            "Desarrollo de interacciones, funcionalidades y comportamientos dinámicos.",

        skillGoogle:
            "Conocimientos básicos e intermedios de herramientas Google.",

        skillOffice:
            "Conocimientos de Microsoft Office 365.",

        scanTitle: "EJECUTAR ESCANEO DEL SISTEMA",

        scanText:
            "Ejecuta un análisis completo de los sistemas disponibles en este terminal.",

        projectsTitle: "MISIONES",

        projectVelox:
            "Landing page para una tienda de bicicletas utilizando HTML, CSS y prototipado visual en Figma.",

        projectCsharp:
            "Sistema desarrollado con C# y Windows Forms, trabajando interfaces, lógica y funcionalidades.",

        projectWeb:
            "Páginas web desarrolladas utilizando HTML y CSS, explorando estructura, diseño y responsividad.",

        viewMission: "VER MISIÓN",

        accessGithub: "ACCEDER A LA BASE →",

        contactTitle: "CONTACTO",

        signalActive: "SEÑAL ACTIVA",

        available: "DISPONIBLE PARA COMUNICACIÓN",

        formName: "NOMBRE *",
        formPhone: "TELÉFONO *",
        formEmail: "EMAIL *",
        formMessage: "MENSAJE *",

        transmit: "TRANSMITIR MENSAJE",

        footerText:
            "PORTAFOLIO DIGITAL // SISTEMA EN LÍNEA"
    }
};


/* APLICAR IDIOMA */

function applyLanguage(language) {

    document.documentElement.lang =
        language === "pt"
            ? "pt-BR"
            : language === "en"
                ? "en"
                : "es";

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent =
                translations[language][key];
        }

    });

    languageButton.textContent =
        language === "pt"
            ? "🌐 PT"
            : language === "en"
                ? "🌐 EN"
                : "🌐 ES";
}

applyLanguage(currentLanguage);


/* ANIMAÇÃO AO ROLAR */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {
    observer.observe(element);
});


/* PARALLAX */

const mainConsole =
    document.querySelector(".main-console");

document.addEventListener("mousemove", event => {

    if (window.innerWidth < 750) {
        return;
    }

    const x =
        event.clientX / window.innerWidth - 0.5;

    const y =
        event.clientY / window.innerHeight - 0.5;

    mainConsole.style.transform = `
        perspective(900px)
        rotateY(${x * 3}deg)
        rotateX(${-y * 3}deg)
    `;
});


/* RADAR */

const radar =
    document.getElementById("radar");

const radarTarget =
    document.getElementById("radarTarget");

const radarCoordinates =
    document.getElementById("radarCoordinates");

radar.addEventListener("mousemove", event => {

    const rect =
        radar.getBoundingClientRect();

    const x =
        event.clientX - rect.left;

    const y =
        event.clientY - rect.top;

    const percentX =
        Math.round((x / rect.width) * 100);

    const percentY =
        Math.round((y / rect.height) * 100);

    radarTarget.style.left =
        `${Math.min(Math.max(percentX, 5), 90)}%`;

    radarTarget.style.top =
        `${Math.min(Math.max(percentY, 5), 90)}%`;

    radarCoordinates.innerHTML =
        `TARGET: PF-017<br>
         X: ${percentX}%<br>
         Y: ${percentY}%<br>
         SIGNAL: 98%`;
});

radar.addEventListener("mouseleave", () => {

    radarTarget.style.left = "68%";
    radarTarget.style.top = "30%";

    radarCoordinates.innerHTML =
        `TARGET: PF-017<br>
         DISTANCE: 0007 KM<br>
         SIGNAL: 98%`;
});


/* CONTADORES */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting || countersStarted) {
                return;
            }

            countersStarted = true;

            counters.forEach(counter => {

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const duration = 1200;
                const step =
                    target / (duration / 20);

                const interval =
                    setInterval(() => {

                        current += step;

                        if (current >= target) {
                            current = target;
                            clearInterval(interval);
                        }

                        counter.textContent =
                            Math.floor(current);

                    }, 20);
            });
        });

    });

const statsSection =
    document.querySelector(".stats-section");

counterObserver.observe(statsSection);


/* ALERTA */

const systemAlert =
    document.getElementById("systemAlert");

const alertText =
    document.getElementById("alertText");

let alertTimeout;

function showAlert(message) {

    alertText.textContent = message;
    systemAlert.classList.add("active");

    clearTimeout(alertTimeout);

    alertTimeout = setTimeout(() => {
        systemAlert.classList.remove("active");
    }, 3000);
}


/* SCAN */

const scanButton =
    document.getElementById("scanButton");

scanButton.addEventListener("click", () => {

    scanButton.disabled = true;
    scanButton.textContent = "SCANNING...";

    playBeep(350, 0.08);

    setTimeout(() => {

        scanButton.textContent = "ANALYZING...";
        playBeep(500, 0.08);

    }, 700);

    setTimeout(() => {

        scanButton.textContent =
            "✓ SYSTEM ONLINE";

        if (currentLanguage === "pt") {
            showAlert("✓ TODOS OS SISTEMAS OPERACIONAIS");
        } else if (currentLanguage === "en") {
            showAlert("✓ ALL SYSTEMS OPERATIONAL");
        } else {
            showAlert("✓ TODOS LOS SISTEMAS OPERATIVOS");
        }

        playBeep(800, 0.12);

        setTimeout(() => {

            scanButton.disabled = false;
            scanButton.textContent = "🔍 SCAN SYSTEM";

        }, 2000);

    }, 1500);
});


/* GLITCH */

const glitchElements =
    document.querySelectorAll(".hero h1, .section-header h2");

glitchElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        element.classList.add("glitch");

        setTimeout(() => {
            element.classList.remove("glitch");
        }, 250);

    });

});


/* MODAL */

const modal =
    document.getElementById("missionModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalClose =
    document.getElementById("modalClose");

const modalConfirm =
    document.getElementById("modalConfirm");

document.querySelectorAll(".mission-button").forEach(button => {

    button.addEventListener("click", () => {

        modalTitle.textContent =
            button.dataset.title;

        modalDescription.textContent =
            button.dataset.description;

        modal.classList.add("active");

        playBeep(600, 0.08);
    });

});

function closeModal() {

    modal.classList.remove("active");
    playBeep(350, 0.05);
}

modalClose.addEventListener("click", closeModal);
modalConfirm.addEventListener("click", closeModal);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {
        closeModal();
    }

});


/* MÁSCARA DO TELEFONE */

const phoneInput =
    document.getElementById("phone");

phoneInput.addEventListener("input", event => {

    let value =
        event.target.value
            .replace(/\D/g, "")
            .substring(0, 11);

    if (value.length > 6) {

        value =
            `(${value.substring(0, 2)}) ` +
            `${value.substring(2, 7)}-` +
            `${value.substring(7)}`;

    } else if (value.length > 2) {

        value =
            `(${value.substring(0, 2)}) ` +
            value.substring(2);

    } else if (value.length > 0) {

        value = `(${value}`;
    }

    event.target.value = value;
});


/* FORMULÁRIO */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (!name || !phone || !email || !message) {

        if (currentLanguage === "pt") {
            showAlert("⚠ PREENCHA TODOS OS CAMPOS");
        } else if (currentLanguage === "en") {
            showAlert("⚠ FILL IN ALL FIELDS");
        } else {
            showAlert("⚠ COMPLETE TODOS LOS CAMPOS");
        }

        playBeep(250, 0.1);
        return;
    }

    if (currentLanguage === "pt") {
        showAlert("✓ MENSAGEM TRANSMITIDA COM SUCESSO");
    } else if (currentLanguage === "en") {
        showAlert("✓ MESSAGE TRANSMITTED SUCCESSFULLY");
    } else {
        showAlert("✓ MENSAJE TRANSMITIDO CORRECTAMENTE");
    }

    playBeep(850, 0.12);

    contactForm.reset();
});


/* GITHUB */

const githubLink =
    document.getElementById("githubLink");

githubLink.addEventListener("click", event => {

    if (githubLink.getAttribute("href") === "#") {

        event.preventDefault();

        if (currentLanguage === "pt") {
            showAlert("⚠ LINK DO GITHUB AINDA NÃO CONFIGURADO");
        } else if (currentLanguage === "en") {
            showAlert("⚠ GITHUB LINK NOT CONFIGURED");
        } else {
            showAlert("⚠ ENLACE DE GITHUB NO CONFIGURADO");
        }
    }

});


/* TERMINAL */

const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");

function terminalPrint(text, type = "") {

    const line =
        document.createElement("p");

    line.className = type;
    line.textContent = `> ${text}`;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}

terminalInput.addEventListener("keydown", event => {

    if (event.key !== "Enter") {
        return;
    }

    const command =
        terminalInput.value
            .trim()
            .toLowerCase();

    terminalInput.value = "";

    if (!command) {
        return;
    }

    terminalPrint(command.toUpperCase());

    if (command === "help") {

        terminalPrint(
            "COMMANDS: HELP / STATUS / SYSTEM / MISSIONS / CONTACT / CLEAR",
            "success"
        );

    } else if (command === "status") {

        terminalPrint(
            "ALL SYSTEMS OPERATIONAL // SIGNAL 98%",
            "success"
        );

    } else if (command === "system") {

        terminalPrint(
            "PEDRO-01 // FLIGHT COMPUTER // ONLINE",
            "success"
        );

    } else if (command === "missions") {

        terminalPrint(
            "3 MISSIONS REGISTERED // 2 COMPLETE // 1 ACTIVE",
            "success"
        );

    } else if (command === "contact") {

        terminalPrint(
            "EMAIL: pedrofurtadocastro@icloud.com",
            "success"
        );

        terminalPrint(
            "PHONE: (31) 97181-9389",
            "success"
        );

    } else if (command === "clear") {

        terminalOutput.innerHTML = "";

    } else {

        if (currentLanguage === "pt") {

            terminalPrint(
                "COMANDO NÃO RECONHECIDO. DIGITE HELP.",
                "error"
            );

        } else if (currentLanguage === "en") {

            terminalPrint(
                "COMMAND NOT RECOGNIZED. TYPE HELP.",
                "error"
            );

        } else {

            terminalPrint(
                "COMANDO NO RECONOCIDO. ESCRIBE HELP.",
                "error"
            );
        }
    }

    playBeep(500, 0.04);
});


/* SOM */

let audioContext;

function playBeep(frequency = 600, duration = 0.06) {

    try {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();
        }

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.frequency.value = frequency;
        oscillator.type = "square";

        gain.gain.setValueAtTime(
            0.03,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + duration
        );

    } catch (error) {

        console.log("Audio system unavailable.");
    }
}


/* SOM DOS BOTÕES */

document.querySelectorAll(
    "button, .retro-button, .mission-button"
).forEach(element => {

    element.addEventListener("click", () => {
        playBeep(450, 0.035);
    });

});


/* ALERTAS ALEATÓRIOS */

const systemMessages = {

    pt: [
        "✓ SISTEMA VERIFICADO",
        "✓ CONEXÃO ESTÁVEL",
        "✓ RADAR OPERACIONAL",
        "✓ BANCO DE DADOS ONLINE"
    ],

    en: [
        "✓ SYSTEM CHECK COMPLETE",
        "✓ CONNECTION STABLE",
        "✓ RADAR OPERATIONAL",
        "✓ DATABASE ONLINE"
    ],

    es: [
        "✓ SISTEMA VERIFICADO",
        "✓ CONEXIÓN ESTABLE",
        "✓ RADAR OPERATIVO",
        "✓ BASE DE DATOS EN LÍNEA"
    ]
};

function randomSystemAlert() {

    const messages =
        systemMessages[currentLanguage];

    const random =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];

    showAlert(random);
}

setInterval(randomSystemAlert, 15000);


/* MENSAGEM INICIAL */

setTimeout(() => {

    if (currentLanguage === "pt") {

        showAlert("✓ PEDRO-01 ONLINE");

    } else if (currentLanguage === "en") {

        showAlert("✓ PEDRO-01 ONLINE");

    } else {

        showAlert("✓ PEDRO-01 EN LÍNEA");
    }

}, 1500);