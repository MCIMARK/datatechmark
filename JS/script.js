/*
DataTechMark
JavaScript principal
*/

document.addEventListener("DOMContentLoaded", () => {


console.log("DataTechMark iniciado correctamente.");


/* =====================================
   PARTÍCULAS DEL HERO
===================================== */

const particlesContainer =
    document.querySelector(".particles");


if (particlesContainer) {

    const numberOfParticles = 35;


    for (let i = 0; i < numberOfParticles; i++) {

        const particle =
            document.createElement("span");


        particle.classList.add("particle");


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDelay =
            Math.random() * 6 + "s";


        particle.style.animationDuration =
            4 + Math.random() * 6 + "s";


        particlesContainer.appendChild(particle);

    }

}
/* =====================================
   MODAL DE PROYECTOS
===================================== */

const projects = {

    cctv: {

        category: "CCTV / SEGURIDAD",

        title:
            "Sistema de videovigilancia",

        description:
            "Soluciones de videovigilancia diseñadas para mejorar la seguridad y permitir el monitoreo de hogares, negocios e instalaciones.",

        image:
            "IMAGENES/proyecto-cctv.webp",

        features: [
            "Instalación y orientación de cámaras",
            "Configuración del sistema de grabación",
            "Monitoreo local y remoto",
            "Optimización de cobertura y puntos de vigilancia"
        ]

    },


    computacion: {

        category:
            "COMPUTACIÓN",

        title:
            "Mantenimiento y optimización",

        description:
            "Diagnóstico y mantenimiento de equipos de cómputo para mejorar su rendimiento, estabilidad y vida útil.",

        image:
            "IMAGENES/proyecto-computacion.webp",

        features: [
            "Diagnóstico de hardware y software",
            "Mantenimiento preventivo",
            "Limpieza interna",
            "Actualización y optimización de componentes"
        ]

    },


    electricidad: {

        category:
            "ELECTRICIDAD",

        title:
            "Instalación eléctrica",

        description:
            "Implementación y mantenimiento de instalaciones eléctricas orientadas a seguridad, confiabilidad y correcto funcionamiento.",

        image:
            "IMAGENES/proyecto-electricidad.webp",

        features: [
            "Instalación de tableros eléctricos",
            "Protecciones y distribución",
            "Diagnóstico de fallas",
            "Adecuación de instalaciones"
        ]

    },


    automatizacion: {

        category:
            "AUTOMATIZACIÓN / IoT",

        title:
            "Sistema de control",

        description:
            "Integración de controladores, sensores y comunicaciones para desarrollar soluciones de automatización y monitoreo.",

        image:
            "IMAGENES/proyecto-automatizacion.webp",

        features: [
            "Integración de PLC y controladores",
            "Sensores y actuadores",
            "Comunicación y monitoreo",
            "Automatización de procesos"
        ]

    }

};


/* ELEMENTOS DEL MODAL */

const projectModal =
    document.querySelector("#projectModal");

const projectLinks =
    document.querySelectorAll(
        ".project-link[data-project]"
    );

const modalClose =
    document.querySelector(
        ".project-modal-close"
    );

const modalBackdrop =
    document.querySelector(
        ".project-modal-backdrop"
    );

const modalImage =
    document.querySelector(
        "#projectModalImage"
    );

const modalCategory =
    document.querySelector(
        "#projectModalCategory"
    );

const modalTitle =
    document.querySelector(
        "#projectModalTitle"
    );

const modalDescription =
    document.querySelector(
        "#projectModalDescription"
    );

const modalFeatures =
    document.querySelector(
        "#projectModalFeatures"
    );

const modalCta =
    document.querySelector(
        "#projectModalCta"
    );


/* ABRIR MODAL */

function openProjectModal(projectName) {

    const project =
        projects[projectName];

    if (!project || !projectModal) {
        return;
    }


    modalImage.src =
        project.image;

    modalImage.alt =
        project.title;

    modalCategory.textContent =
        project.category;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;


    modalFeatures.innerHTML = "";


    project.features.forEach(
        feature => {

            const item =
                document.createElement("div");

            item.classList.add(
                "project-modal-feature"
            );

            item.textContent =
                feature;

            modalFeatures.appendChild(
                item
            );

        }
    );


    projectModal.classList.add(
        "active"
    );
    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* CERRAR MODAL */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
    "aria-hidden",
    "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* EVENTOS */

projectLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();

            const projectName =
                link.dataset.project;

            openProjectModal(
                projectName
            );

        }
    );

});


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeProjectModal
    );

}


/* ESC PARA CERRAR */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProjectModal();

        }

    }
);


/* CTA */

if (modalCta) {

    modalCta.addEventListener(
        "click",
        closeProjectModal
    );

}
/* =====================================
   FORMULARIO DE CONTACTO
===================================== */

const contactForm =
    document.querySelector("#contactForm");

const contactSubmit =
    document.querySelector("#contactSubmit");

const formStatus =
    document.querySelector("#formStatus");


const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwWKbm9GLEMVv8vRGoqlHDzQ39xpotb2S1r4MQ5zWfRTOWzHdf4HId9_4Vmd4ny-Oht/exec";


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const formData =
                new FormData(contactForm);


            const data = {

                nombre:
                    formData.get("nombre"),

                correo:
                    formData.get("correo"),

                telefono:
                    formData.get("telefono"),

                servicio:
                    formData.get("servicio"),

                mensaje:
                    formData.get("mensaje")

            };


            contactSubmit.disabled =
                true;

            formStatus.className =
                "form-status";

            formStatus.textContent =
                "Enviando solicitud...";


            try {

                const response =
                    await fetch(
                        GOOGLE_SCRIPT_URL,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "text/plain;charset=utf-8"
                            },

                            body:
                                JSON.stringify(data)
                        }
                    );


                const result =
                    await response.json();


                if (!result.ok) {

                    throw new Error(
                        result.error ||
                        "No se pudo guardar la solicitud."
                    );

                }


                formStatus.className =
                    "form-status success";

                formStatus.textContent =
                    "✓ Tu solicitud fue enviada correctamente.";


                contactForm.reset();


            } catch (error) {

                console.error(error);


                formStatus.className =
                    "form-status error";

                formStatus.textContent =
                    "No pudimos enviar tu solicitud. Inténtalo nuevamente.";

            } finally {

                contactSubmit.disabled =
                    false;

            }

        }
    );

}
/* =====================================
   AÑO AUTOMÁTICO FOOTER
===================================== */

const currentYear =
    document.querySelector("#currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
/* =====================================
   MOBILE MENU
===================================== */

const menuToggle =
    document.querySelector("#menuToggle");

const mobileMenu =
    document.querySelector("#mobileMenu");

const mobileLinks =
    document.querySelectorAll(".mobile-nav a");


function closeMobileMenu() {

    if (!menuToggle || !mobileMenu) {
        return;
    }

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );
    menuToggle.setAttribute(
    "aria-label",
    "Abrir menú"
    );
}


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        const opening =
            !mobileMenu.classList.contains("active");

        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        document.body.classList.toggle(
            "menu-open",
            opening
        );

        menuToggle.setAttribute(
            "aria-expanded",
            opening ? "true" : "false"
        );
        menuToggle.setAttribute(
            "aria-label",
            opening ? "Cerrar menú" : "Abrir menú"
        );
    });


    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


    /* ESC también cierra el menú */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("active")
            ) {

                closeMobileMenu();

            }

        }
    );

}
/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});

});
