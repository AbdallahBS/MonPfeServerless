exports.handler = async (event, context) => {
    console.log("Serverless function invoked with event:", event);
    console.log("Context:", context);

    // Return directly a list instead of wrapping it in an object
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                name: "ATS - Digital Dev",
                email: "recrutement@ats-digital.com",
                location: "Immeuble Zahra, Bloc A , Passage du lac Turkana 1053 • Les Berges du Lac",
                shortdescription: "Une start-up innovante offrant des services autour des nouvelles technologies, avec une offre autour de 4 piliers :CONSEIL ET PILOTAGE,WEB & MOBILE,DATA,OPS & CYBERSECURITY",
                description: "- CONSEIL ET PILOTAGE :  nous accompagnons nos clients à faire les bons choix pour leur transformation digitale, nous les aidons à organiser et gérer la mise en œuvre du produit (applications WEB et mobile), nous les assistons à faire évoluer leur organisation numérique - WEB & MOBILE :  nous accompagnons nos clients à concevoir, à implémenter et à maintenir des plateformes WEB et des applications mobiles répondant aux besoins, performantes et scalables - DATA : nous accompagnons nos clients à mieux gérer leurs données et à tirer profit du Big Data - OPS & CYBERSECURITY : nous accompagnons nos clients dans la mise en œuvre et l’exploitation des infrastructures Cloud avec les bonnes pratiques de sécurité",
                sujet: "",
                Images: ["https://i.ibb.co/0yMsBxT/ats-digital-dev-logo.jpg"],
                linkDin: "https://www.linkedin.com/company/ats---digital-dev/about/",
                pfeBook2023: "https://www.linkedin.com/feed/update/urn:li:activity:7123625294078304256/",
                pfeBook2024: "https://www.linkedin.com/posts/ats---digital-dev_pfe-book-2025-activity-7262400378527223808-35nM?utm_source=share&utm_medium=member_desktop",
                web: "http://www.ats-digital.com",
                long: "36.833308520806895",
                lat: "10.236281305672685",
            },
            // Add more items here if needed
        ]),
    };
};
