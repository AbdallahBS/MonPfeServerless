exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        items: [
          {   name: "Ey Tunisie", 
            email : "eyrecruit@tn.ey.com",  
            location : "Avenue Fadhel Ben Achour Centre Urbain Nord",
              shortdescription : "Travaillant dans les domaines de l'assurance, du conseil, du droit, de la stratégie, de la fiscalité et des transactions...",
              description: "EY existe pour construire un monde du travail meilleur, en contribuant à créer de la valeur à long terme pour les clients, les personnes et la société, et en renforçant la confiance dans les marchés de capitaux.Grâce aux données et à la technologie, des équipes diversifiées d'EY dans plus de 150 pays apportent leur confiance par le biais de l'assurance et aident les clients à croître, se transformer et fonctionner.Travaillant dans les domaines de l'assurance, du conseil, du droit, de la stratégie, de la fiscalité et des transactions, les équipes d'EY posent de meilleures questions pour trouver de nouvelles réponses aux problèmes complexes auxquels notre monde est confronté aujourd'hui.",
              sujet : "",
              Images : ["https://i.postimg.cc/NG784MvP/1634368965482.jpg", "https://i.postimg.cc/RZqc4L6j/2023-11-10.jpg","https://i.postimg.cc/5N4BkVx9/IMG-20211109-143837.jpg","https://i.postimg.cc/X7swRzJf/IMG-20211119-110524.jpg"], 
              linkDin : "https://www.linkedin.com/company/ernstandyoung/posts/?feedView=all" ,
              pfeBook2023:"https://www.pfebook.com/wp-content/uploads/2023/11/STAGES-PFE-BOOK-2023-2024.pdf" , 
              pfeBook2024:"",
              web:"http://www.ey.com",
           },
           {
              name: "ACTIA Engineering Services", 
              email : "",
              location : "Technopôle El Ghazala - 1, BP99 rue Newton",
              shortdescription : " spécialisée dans la conception et le développement de solutions matérielles embarquées et de services logiciels pour les secteurs de la mobilité et de l'industrie...",
              description: "La Division SERVICES D'INGÉNIERIE du Groupe français ACTIA est spécialisée dans la conception et le développement de solutions matérielles embarquées et de services logiciels pour les secteurs de la mobilité et de l'industrie.L'expertise en software et hardware de plus de 900 ingénieurs, répartis sur quatre sites autour du bassin méditerranéen – Tunis, Sfax, Toulouse et Le Caire – garantit le développement de produits et de services avec une qualité logicielle et technologique de pointe.",
              sujet : "Créée en septembre 2001, XTENSUS est une ESN spécialisée en développement de plateformes web, en exploitation de portails Internet et en édition de logiciels.",
              Images : ["https://i.postimg.cc/1XSJRCL9/2023-02-18.jpg","https://i.postimg.cc/4dVWgk2L/DSC-0618.jpg","https://i.postimg.cc/FK2T8spk/DSC-0644.jpg","https://i.postimg.cc/8CFyZrRV/DSC-0671.jpg"], 
              linkDin : "https://www.linkedin.com/company/actia-engineering-services/about/" ,
              pfeBook2023:"https://www.linkedin.com/posts/actia-engineering-services_pfe-book-2024safety-cybersecurity-activity-7128770437202796544-xO7Q/?utm_source=share&utm_medium=member_desktop" , 
              pfeBook2024:"",
              web:"https://lab-engineering.actia.tn/actia-engineering-services/",
           },
           {
              name: "ADACTIM", 
              email : "contact@actia-engineering.tn",
              location : "Technopark El Ghazela Tunis - Tunisia Tunis، 2088",
              shortdescription : "",
              description: "ADACTIM fournit des solutions IT innovantes et de haute qualité, accompagnant ses clients dans leur transformation métier et technologique grâce à son expertise internationale en Cloud et Infrastructure, intégration, Sécurité et infogérance SI.",
              Images : ["https://i.postimg.cc/wBJXt553/Adactim.png","https://i.postimg.cc/3xzjJfvP/20181213-143925.jpg","https://i.postimg.cc/4NLbjxN4/20181213-143451.jpg","https://i.postimg.cc/8z7BGgjR/20181213-143417.jpg"], 
              linkDin : "https://www.linkedin.com/company/adactis/about/" ,
              pfeBook2023:"https://www.linkedin.com/feed/update/urn:li:activity:7138187960608264192/" , 
              pfeBook2024:"",
              web:"http://www.adactim.com",
           },
          
           {
              name: "Yess Consulting", 
              email : "contact@yess-consulting.com",
              location : "Technopôle El Ghazala - 1, BP99 rue Newton, Ariana 2088",
              shortdescription : "Yess Consulting est éditeur de progiciels intégrés de gestion, spécialisé dans le développement d'ERP depuis 2014...",
              description: "Yess Consulting est un éditeur de progiciels de gestion intégrés, spécialisé dans la conception de l'ERP YessClever. Notre équipe est constituée d'experts, de consultants et ingénieurs en nouvelles technologies, qui vous aident à atteindre vos objectifs business.Nous proposons également une multitude de services qui rallient technicité, expertise, accompagnement et maintenance.",
              Images : ["https://i.postimg.cc/wv1dcvvt/2024-08-06.jpg","https://i.postimg.cc/rpnkrW8X/2024-08-06-1.jpg"], 
              linkDin : "https://www.linkedin.com/company/yessconsulting/about/" ,
              pfeBook2023:"https://drive.google.com/file/d/1VTqD8Pp87MthHrc_GgUaQDQu7Hc9z4hT/view" , 
              pfeBook2024:"",
              web:"https://yess-consulting.com/",
           },
           {
              name: "xtensus", 
              email : "",
              location : "Rue Omar Ibn Abdelaziz, B4-1, Ariana, Ennkhilet 2083",
              shortdescription : "Développement Web, Portail internet, Intranet, Extranet, Site Web, e-Commerce, Gestion de portails, CMS, GED, GMP : Gestion des Marchés Publics / Privés, GPR : Gestion de Parc Roulant, and GBO : Gestion de Bureau d'Ordre...",
              description: "Xtensus Tunisie est une société de développement Web, de Multimédia et d’exploitation de portails internet.  Elle offre un ensemble d’outil Web à ses clients dont un système de gestion électronique de documents (GED) et un système de gestion de contenu (CMS).  Son expertise se concentre sur le développement d’interfaces dynamiques, les systèmes sécurisés et intégrés, les plateformes modulaires, et les technologies avancées. Elle compte des clients de la Tunisie, du Canada et de la France.",
              sujet : "",
              Images : ["https://i.postimg.cc/FF6MmNKp/Vue-Exterieure.jpg"], 
              linkDin : "https://www.linkedin.com/company/xtensus/?originalSubdomain=tn" ,
              pfeBook2023:"https://drive.google.com/file/d/1D0sfID8IKWpY05fDbMpXa9VbQRT-HrVs/view" , 
              pfeBook2024:"",
              web:"http://www.xtensus.com",
           },
          
        ]
      })
    }
  }