exports.handler = async (event, context) => {
    console.log("Fetching specific enterprise by name.");

    const enterprises = [
        {
            name: "ATS - Digital Dev",
            email: "recrutement@ats-digital.com",
            location: "Immeuble Zahra, Bloc A , Passage du lac Turkana 1053 • Les Berges du Lac",
            shortdescription: "Une start-up innovante offrant des services autour des nouvelles technologies...",
            description: "- CONSEIL ET PILOTAGE : nous accompagnons nos clients à faire les bons choix...",
            Images: ["https://i.ibb.co/0yMsBxT/ats-digital-dev-logo.jpg"],
            linkDin: "https://www.linkedin.com/company/ats---digital-dev/about/",
            pfeBook2023: "https://www.linkedin.com/feed/update/urn:li:activity:7123625294078304256/",
            pfeBook2024: "https://www.linkedin.com/posts/ats---digital-dev_pfe-book-2025-activity-7262400378527223808-35nM?utm_source=share&utm_medium=member_desktop",
            web: "http://www.ats-digital.com",
            long: "36.833308520806895",
            lat: "10.236281305672685",
        },
        {
            name: "ACTIA Engineering Services",
            email: "contact@actia-engineering.tn",
            location: "Technopôle El Ghazala - 1, BP99 rue Newton",
            shortdescription: "spécialisée dans la conception et le développement de solutions matérielles embarquées...",
            description: "La Division SERVICES D'INGÉNIERIE du Groupe français ACTIA est spécialisée...",
            Images: ["https://i.ibb.co/wSL6Qfh/DSC-0618.jpg", "https://i.ibb.co/qxJ6qv1/DSC-0644.jpg"],
            linkDin: "https://www.linkedin.com/company/actia-engineering-services/about/",
            pfeBook2023: "https://www.linkedin.com/posts/actia-engineering-services_pfe-book-2024safety-cybersecurity...",
            pfeBook2024: "https://www.linkedin.com/posts/souhail-hammadi_actia-pfe-book-2024-2025...",
            web: "https://lab-engineering.actia.tn/actia-engineering-services/",
            long: "36.89856776592702",
            lat: "10.18738783942121",
        },
        // Add the rest of the enterprises here...
    ];

    // Extract enterprise name from the request path
    const name = event.path.split("/").pop(); // Extract last segment from the path
    console.log(`Searching for enterprise with name: ${name}`);

    // Search for the enterprise
    const enterprise = enterprises.find((e) => e.name.toLowerCase() === name.toLowerCase());

    if (enterprise) {
        return {
            statusCode: 200,
            body: JSON.stringify(enterprise),
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: `Enterprise with name '${name}' not found.` }),
        };
    }
};
