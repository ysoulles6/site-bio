/* =========================================
   MODAL DISCORD
========================================= */

const discordButton =
    document.getElementById("discordButton");

const socialDiscordButton =
    document.getElementById("socialDiscordButton");

const discordModal =
    document.getElementById("discordModal");

const closeDiscordModal =
    document.getElementById("closeDiscordModal");


/* FUNÇÃO PARA ABRIR O MODAL */

function abrirDiscordModal() {

    discordModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* BOTÃO PRINCIPAL */

if (discordButton) {

    discordButton.addEventListener(
        "click",
        abrirDiscordModal
    );

}


/* BOTÃO DO TOPO */

if (socialDiscordButton) {

    socialDiscordButton.addEventListener(
        "click",
        abrirDiscordModal
    );

}


/* FECHAR PELO X */

if (closeDiscordModal) {

    closeDiscordModal.addEventListener(
        "click",
        () => {

            discordModal.classList.remove("active");

            document.body.style.overflow = "";

        }
    );

}


/* FECHAR CLICANDO NO FUNDO */

if (discordModal) {

    discordModal
        .querySelector(".modal-background")
        .addEventListener(
            "click",
            () => {

                discordModal.classList.remove("active");

                document.body.style.overflow = "";

            }
        );

}


/* =========================================
   MODAL LIVE PIX
========================================= */

const livePixButton =
    document.getElementById("livePixButton");

const livePixModal =
    document.getElementById("livePixModal");

const closeLivePixModal =
    document.getElementById("closeLivePixModal");



/* ABRIR LIVE PIX */

function abrirLivePix() {

    livePixModal.classList.add("active");

    document.body.style.overflow = "hidden";

}



/* BOTÃO LIVE PIX */

livePixButton.addEventListener(
    "click",
    abrirLivePix
);



/* FECHAR */

closeLivePixModal.addEventListener(
    "click",
    () => {

        livePixModal.classList.remove("active");

        document.body.style.overflow = "";

    }
);



/* CLICAR NO FUNDO */

livePixModal
    .querySelector(".modal-background")
    .addEventListener(
        "click",
        () => {

            livePixModal.classList.remove("active");

            document.body.style.overflow = "";

        }
    );



/* =========================================
   ESC PARA FECHAR MODAIS
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            discordModal.classList.remove("active");

            livePixModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    }
);



/* =========================================
   PARTÍCULAS
========================================= */

const particles =
    document.getElementById("particles");


for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (Math.random() * 12 + 8) + "s";


    particle.style.animationDelay =
        (Math.random() * 10) + "s";


    const size =
        Math.random() * 3 + 2;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particles.appendChild(particle);

}



/* =========================================
   ANIMAÇÃO DOS ELEMENTOS
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".profile, .socials, .links, .goal-section, .business, footer"
    );


animatedElements.forEach(
    (element, index) => {

        element.style.animationDelay =
            (index * 0.08) + "s";

    }
);