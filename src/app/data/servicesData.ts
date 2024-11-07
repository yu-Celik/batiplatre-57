import villa from "/public/villa.png";
import maçonnerie from "/public/maçonnerie/maconnerie.jpg"
import assainissement from "/public/maçonnerie/assainissement.jpg"
import soubassement from "/public/maçonnerie/soubassement.jpg"
import mur from "/public/maçonnerie/mur.jpg"
import plancheBeton from "/public/maçonnerie/planche-beton.jpg"
import toiturePrep from "/public/maçonnerie/toiture-prep.jpg"
import piscine from "/public/maçonnerie/piscine.jpg"
import terasse from "/public/maçonnerie/terasse.jpg"
import veranda from "/public/maçonnerie/veranda.avif"
import humidite from "/public/maçonnerie/humidit.avif"
import charpenteTraditionnelle from "/public/façade/charpente-traditionnelle.jpg"
import couverture from "/public/façade/couverture.jpg"
import façageFinition from "/public/façade/façage-finition.jpg"
import isolantMurExterieur from "/public/façade/meilleur-isolant-mur-exterieur-isolation-ides-avec-isolation-exterieure-des-murs.jpg"
import echafaudage from "/public/façade/batiment-construction-echafaudage.jpg"
import enduitRavalement from "/public/façade/enduit-ravalement-de-facades.jpg"
import lavage from "/public/façade/lavage.avif"
import enduitFaçade from "/public/façade/enduit-façade.webp"

export const servicesData = [
    {
        id: "maconnerie-extension",
        titleH1: "Maçonnerie et extension",
        titleH2: "Nos engagements",
        subTitle: "Promesse de qualité",
        description: [
            "Chez Bâti Plâtre 57, nous offrons des services de de débarras et de nettoyage de haute qualité pour un espace impeccable",
            "Nous offrons des solutions complètes pour le débarras et le nettoyage de vos espaces, qu'ils soient résidentiels ou commerciaux."
        ],
        buttonText: "Contactez-nous dès maintenant",
        href: "/contact",
        image: maçonnerie,
        card: [
            {
                "id": "fondations-etude-sol",
                imageUrl: maçonnerie,
                "title": "Étude de sol, terrassement et excavation",
                "description": [
                    "Étape cruciale débutant par une étude de sol approfondie pour déterminer la nature du terrain et sa capacité portante.",
                    "Préparation du terrain par terrassement et excavation pour recevoir les fondations solides sur lesquelles reposera toute la structure."
                ],
                "text": [
                    "L'étude de sol permet de déterminer la nature du terrain et sa capacité portante, guidant le choix des techniques de fondation.",
                    "Le terrassement et l'excavation préparent le terrain pour les fondations, en tenant compte des spécificités du site.",
                    "Les fondations sont conçues et réalisées en fonction des résultats de l'étude de sol et des charges prévues du bâtiment.",
                    "Nous utilisons des matériaux et techniques adaptés pour assurer la stabilité et la longévité de la construction.",
                    "Cette étape est fondamentale pour prévenir les problèmes structurels futurs et garantir la durabilité de l'ouvrage."
                ]
            },
            {
                "id": "assainissement",
                imageUrl: assainissement,
                "title": "L'assainissement",
                "description": [
                    "Étape essentielle pour garantir la salubrité et le confort de l'habitation.",
                    "Mise en place d'un système d'évacuation des eaux usées conforme aux normes en vigueur."
                ],
                "text": [
                    "L'assainissement comprend l'installation d'un système d'évacuation des eaux usées adapté au terrain et aux réglementations locales.",
                    "Nous réalisons soit un raccordement au tout-à-l'égout, soit un système d'assainissement individuel selon la configuration du site.",
                    "L'installation inclut la pose de canalisations, de regards et, si nécessaire, d'une fosse septique.",
                    "Nous veillons à la conformité du système avec les normes environnementales et sanitaires en vigueur.",
                    "Un assainissement bien conçu est crucial pour la santé des occupants et la protection de l'environnement."
                ]
            },
            {
                "id": "soubassement",
                imageUrl: soubassement,
                "title": "Le soubassement",
                "description": [
                    "Partie basse des murs située entre les fondations et le niveau du sol fini.",
                    "Étape cruciale pour protéger la maison contre l'humidité du sol et assurer une transition solide entre les fondations et les murs."
                ],
                "text": [
                    "Le soubassement est construit avec des matériaux résistants à l'humidité pour protéger la structure contre les remontées capillaires.",
                    "Nous appliquons des traitements d'étanchéité spécifiques pour renforcer la protection contre l'humidité.",
                    "Cette étape joue un rôle important dans l'isolation thermique de la maison, contribuant à son efficacité énergétique.",
                    "Le soubassement assure une transition solide et stable entre les fondations et les murs porteurs.",
                    "Sa réalisation soignée est essentielle pour la longévité et la performance énergétique de l'ensemble de la construction."
                ]
            },
            {
                "id": "elevation-murs",
                imageUrl: mur,
                "title": "L'élévation des murs",
                "description": [
                    "Étape où la maison commence véritablement à prendre forme.",
                    "Construction des murs extérieurs et intérieurs selon les plans établis, en utilisant des matériaux choisis pour leurs propriétés isolantes et leur durabilité."
                ],
                "text": [
                    "Nous construisons les murs en veillant à leur parfaite verticalité et à leur alignement, selon les plans architecturaux.",
                    "Les matériaux sont choisis pour leurs propriétés isolantes et leur durabilité (briques, parpaings, béton banché, ossature bois, etc.).",
                    "Cette phase inclut la mise en place des ouvertures pour les portes et fenêtres.",
                    "Nous intégrons les réservations nécessaires pour les différents réseaux (électricité, plomberie, etc.).",
                    "Une attention particulière est portée à la qualité de la construction pour assurer la solidité et la pérennité de la structure."
                ]
            },
            {
                "id": "realisation-planchers",
                imageUrl: plancheBeton,
                "title": "La réalisation des planchers",
                "description": [
                    "Élément essentiel pour la solidité de la structure et le confort de vie.",
                    "Réalisation de planchers adaptés à chaque niveau de la maison, du vide sanitaire aux combles."
                ],
                "text": [
                    "Nous réalisons des planchers spécifiques pour chaque niveau : plancher bas sur vide sanitaire, planchers intermédiaires, plancher haut pour les combles.",
                    "Utilisation de techniques modernes comme les planchers en béton armé, collaborants ou en bois, selon les besoins et contraintes techniques.",
                    "Une attention particulière est portée à l'isolation phonique et thermique pour optimiser le confort de l'habitat.",
                    "La conception des planchers prend en compte les charges prévues et les normes de sécurité en vigueur.",
                    "Nous veillons à l'intégration harmonieuse des réseaux (électricité, plomberie, chauffage) dans la structure des planchers."
                ]
            },
            {
                "id": "preparations-charpente",
                imageUrl: toiturePrep,
                "title": "Les préparations à la pose de la charpente",
                "description": [
                    "Étape préparatoire essentielle avant l'installation de la charpente.",
                    "Réalisation des chaînages horizontaux et préparation des points d'ancrage pour assurer la stabilité de la future toiture."
                ],
                "text": [
                    "Réalisation des chaînages horizontaux au sommet des murs pour assurer la liaison et la répartition des charges.",
                    "Préparation minutieuse des points d'ancrage de la future charpente.",
                    "Mise en place des éléments de support comme les poteaux ou les murs pignons.",
                    "Vérification rigoureuse du nivellement et de l'alignement pour garantir une pose parfaite de la charpente.",
                    "Cette étape est cruciale pour la stabilité et la durabilité de l'ensemble de la structure du toit."
                ]
            },
            {
                id: "construction-installation-piscines",
                imageUrl: piscine,
                title: "Construction et Installation de Piscines",
                description: [
                    "Experts en création d'espaces aquatiques, nous concevons et réalisons des piscines sur mesure pour sublimer votre extérieur.",
                    "Notre approche globale assure un projet clé en main, de l'étude initiale à l'entretien régulier de votre nouvelle oasis de détente."
                ],
                text: [
                    "Étude personnalisée : Nous commençons par une étude de faisabilité approfondie et concevons votre piscine sur mesure, en tenant compte de vos souhaits, de votre terrain et des contraintes réglementaires.",
                    "Préparation du terrain : Notre équipe effectue les travaux de terrassement et prépare soigneusement le terrain pour accueillir votre future piscine, assurant une base solide et durable.",
                    "Construction adaptée : Nous maîtrisons diverses techniques de construction (béton, coque, panneaux modulaires) et choisissons la plus adaptée à votre projet et à votre budget.",
                    "Revêtements de qualité : L'intérieur de votre piscine est soigneusement revêtu (liner, carrelage, enduit) pour un résultat esthétique et une étanchéité parfaite.",
                    "Systèmes de filtration performants : Nous installons des systèmes de filtration et de traitement de l'eau de pointe pour garantir une eau claire et saine en permanence.",
                    "Équipements complémentaires : Pompe à chaleur, éclairage LED, couvertures automatiques... Nous intégrons tous les équipements nécessaires pour optimiser le confort et la sécurité de votre piscine.",
                    "Aménagement paysager : Notre service inclut l'aménagement des abords de la piscine, créant un environnement harmonieux qui s'intègre parfaitement à votre jardin.",
                    "Suivi et entretien : Nous proposons un service de suivi et d'entretien régulier pour maintenir votre piscine en parfait état tout au long de l'année.",
                    "Conseils d'utilisation : Nous vous formons à l'utilisation et à l'entretien de base de votre nouvelle piscine, vous permettant d'en profiter pleinement en toute sérénité."
                ],
            },
            {
                id: "construction-renovation-terrasses",
                imageUrl: terasse,
                title: "Construction et Rénovation de Terrasses",
                description: [
                    "Experts en aménagement extérieur, nous créons et rénovons des terrasses sur mesure pour sublimer votre espace de vie en plein air.",
                    "Notre approche globale assure un projet clé en main, de la conception initiale à l'entretien régulier de votre nouvelle terrasse."
                ],
                text: [
                    "Étude personnalisée : Nous débutons par une étude de faisabilité approfondie et concevons votre terrasse sur mesure, en tenant compte de vos souhaits, de votre espace extérieur et des contraintes réglementaires.",
                    "Préparation méticuleuse : Notre équipe effectue un terrassement précis et prépare soigneusement le terrain, assurant une base solide et durable pour votre future terrasse.",
                    "Choix des matériaux : Nous vous guidons dans la sélection des matériaux les mieux adaptés à votre projet (bois, composite, pierre, carrelage) et en assurons la pose experte.",
                    "Fondations robustes : Nous créons des fondations solides pour garantir la stabilité et la longévité de votre terrasse, quel que soit le type de sol.",
                    "Sécurité et éclairage : L'installation de rampes de sécurité et d'un éclairage extérieur adapté est réalisée pour assurer confort et sécurité à toute heure.",
                    "Solutions pratiques : Nous intégrons des éléments fonctionnels comme des escaliers escamotables ou des coffrages pour optimiser l'espace et le rangement.",
                    "Rénovation experte : Pour les terrasses existantes, nous proposons des services de rénovation complète, redonnant vie et fonctionnalité à tous types de terrasses.",
                    "Suivi et entretien : Nous offrons un service de suivi et d'entretien régulier pour maintenir votre terrasse en parfait état au fil des saisons.",
                    "Conseils d'utilisation : Nous vous fournissons tous les conseils nécessaires pour l'entretien et la préservation de votre nouvelle terrasse, assurant sa longévité et son esthétique."
                ],
            },
            {
                id: "conception-installation-verandas",
                imageUrl: veranda,
                title: "Conception et Installation de Vérandas",
                description: [
                    "Experts en création d'espaces lumineux, nous concevons et installons des vérandas sur mesure pour agrandir votre espace de vie.",
                    "Notre approche personnalisée assure un projet clé en main, de la conception initiale à la finition parfaite de votre nouvelle véranda."
                ],
                text: [
                    "Conception sur mesure : Nous créons des vérandas uniques, parfaitement adaptées à vos besoins, à votre style de vie et à l'architecture de votre maison, en tenant compte de vos préférences esthétiques et fonctionnelles.",
                    "Préparation méticuleuse : Notre équipe prépare minutieusement le terrain, assurant une base solide et stable pour votre future véranda, garantissant ainsi sa longévité et sa parfaite intégration à votre habitat.",
                    "Installation experte : Nos artisans qualifiés réalisent une pose précise et soignée de votre véranda sur mesure, en veillant à chaque détail pour un résultat impeccable et durable.",
                    "Fondations robustes : Nous construisons des fondations solides, adaptées au type de sol et aux spécificités de votre projet, assurant stabilité et durabilité à votre nouvelle extension.",
                    "Confort optimal : Nous sélectionnons et installons des fenêtres, portes et systèmes de ventilation de haute qualité pour garantir un confort thermique et acoustique optimal tout au long de l'année.",
                    "Esthétique soignée : Chaque élément est choisi avec soin pour créer une harmonie parfaite entre votre véranda et le reste de votre maison, sublimant ainsi votre espace de vie.",
                    "Isolation performante : Nous utilisons des matériaux et des techniques d'isolation de pointe pour assurer une efficacité énergétique optimale de votre véranda.",
                    "Finitions personnalisées : Du choix des matériaux aux couleurs et aux détails décoratifs, nous personnalisons chaque aspect de votre véranda pour qu'elle reflète parfaitement votre style.",
                    "Conseils et suivi : Nous vous accompagnons tout au long du projet, depuis les premières esquisses jusqu'à la finalisation, en vous prodiguant des conseils d'entretien pour profiter pleinement de votre nouvelle véranda."
                ],
            },
            {
                id: "reparation-degats-eaux",
                imageUrl: humidite,
                title: "Réparation des Dégâts des Eaux",
                description: [
                    "Experts en restauration après sinistre, nous intervenons rapidement pour réparer et rénover votre habitat suite à des dégâts des eaux.",
                    "Notre approche globale assure une remise en état complète, du traitement de l'humidité à la finition esthétique."
                ],
                text: [
                    "Diagnostic précis : Nous effectuons une évaluation approfondie des dommages pour déterminer l'étendue des réparations nécessaires et établir un plan d'intervention adapté.",
                    "Assèchement et traitement anti-humidité : Nos techniques avancées d'assèchement et nos traitements contre l'humidité préviennent les dommages à long terme et la formation de moisissures.",
                    "Réparation structurelle : Nous restaurons avec expertise les structures endommagées, qu'il s'agisse de murs, plafonds ou sols, en utilisant des techniques et matériaux adaptés.",
                    "Remplacement des matériaux : Les éléments trop endommagés pour être réparés sont remplacés par des matériaux de qualité, assurant durabilité et esthétique.",
                    "Prévention des moisissures : Nous appliquons des traitements préventifs contre les moisissures et champignons pour garantir un environnement sain et durable.",
                    "Rénovation complète : Notre équipe prend en charge la réfection des enduits, la plâtrerie, la peinture et le remplacement des revêtements de sol pour une remise à neuf totale.",
                    "Gestion des assurances : Nous vous assistons dans vos démarches auprès des assurances, fournissant toute la documentation nécessaire pour faciliter la prise en charge du sinistre.",
                    "Suivi rigoureux : Nous assurons un suivi minutieux des travaux, garantissant une remise en état conforme à vos attentes et aux normes en vigueur.",
                    "Garantie de qualité : Tous nos travaux sont garantis, vous offrant la tranquillité d'esprit d'une réparation durable et professionnelle."
                ],
            },
        ]
    },
    {
        id: "menuiserie-plomberie",
        titleH1: "Menuiserie et plomberie",
        titleH2: "Nos engagements",
        menuiserieTitle: "Menuiserie",
        plomberieTitle: "Plomberie",
        subTitle: "Promesse de qualité",
        description: [
            "Chez Bâti Plâtre 57, nous offrons des services de de débarras et de nettoyage de haute qualité pour un espace impeccable",
            "Nous offrons des solutions complètes pour le débarras et le nettoyage de vos espaces, qu'ils soient résidentiels ou commerciaux."
        ],
        buttonText: "Contactez-nous dès maintenant",
        href: "/contact",
        card: [
            {
                "id": "amenagement-combles",
                imageUrl: villa,
                "title": "Aménagement de combles",
                "description": [
                    "Transformation d'espaces inutilisés en lieux de vie confortables.",
                    "Solutions complètes pour optimiser et sécuriser vos combles."
                ],
                "text": [
                    "Pose de plancher bois pour une finition robuste et esthétique, adaptée aux contraintes des combles.",
                    "Installation de planchers métalliques légers et résistants pour optimiser l'espace et la charge.",
                    "Création de cloisons en bois pour définir et isoler différents espaces dans vos combles.",
                    "Pose d'IPN (poutre en acier) pour renforcer la structure et permettre de grandes ouvertures.",
                    "Service de débarras pour préparer vos combles avant les travaux d'aménagement."
                ],
                category: 'menuiserie',
            },
            {
                "id": "menuiserie",
                imageUrl: villa,
                "title": "Menuiserie",
                "description": [
                    "Installation experte de divers types de portes.",
                    "Solutions adaptées à vos besoins fonctionnels et esthétiques."
                ],
                "text": [
                    "Pose de bloc-porte : installation complète incluant cadre et porte pour une finition parfaite.",
                    "Montage de portes standard sur charnières, adaptées à la plupart des intérieurs.",
                    "Installation de portes à galandage, coulissant dans l'épaisseur du mur pour gagner de l'espace.",
                    "Mise en place de portes doubles à deux vantaux pour les grandes ouvertures.",
                    "Installation de portes renforcées avec serrures multipoints pour une sécurité accrue."
                ],
                category: 'menuiserie',
            },
            {
                "id": "fenetres-cloisons-vitrees",
                imageUrl: villa,
                "title": "Pose de fenêtres et cloisons vitrées",
                "description": [
                    "Installation de fenêtres et cloisons vitrées de tous types.",
                    "Amélioration de la luminosité et de l'esthétique de votre espace."
                ],
                "text": [
                    "Installation de fenêtres de tous formats, adaptées à chaque configuration architecturale.",
                    "Expertise dans la pose de fenêtres en divers matériaux : bois, aluminium, PVC, etc.",
                    "Création de cloisons vitrées pour un agencement ouvert et lumineux.",
                    "Travaux de zinguerie pour assurer l'étanchéité et l'esthétique des installations.",
                    "Solutions sur mesure pour des configurations architecturales uniques ou complexes."
                ],
                category: 'menuiserie',
            },
            {
                "id": "amenagement-dressing-rangement",
                imageUrl: villa,
                "title": "Aménagement de dressing et rangement",
                "description": [
                    "Conception et réalisation de solutions de rangement personnalisées.",
                    "Optimisation de l'espace intérieur et extérieur."
                ],
                "text": [
                    "Création de dressings sur mesure adaptés à vos besoins spécifiques et à l'espace disponible.",
                    "Conception et installation de placards, étagères et systèmes de rangement intégrés.",
                    "Aménagement d'espaces de rangement extérieurs pour terrasses, jardins ou garages.",
                    "Utilisation intelligente de chaque recoin pour maximiser le potentiel de rangement.",
                    "Finitions personnalisées avec choix de matériaux et designs en harmonie avec votre décoration."
                ],
                category: 'menuiserie',
            },
            {
                id: "Pose de chauffage au sol",
                imageUrl: villa,
                title: "Pose de chauffage au sol",
                description: [
                    "Nous disposons d'un large choix de Chauffage au sol et nous l'installons soigneusement. Un équipement qui s’adapte à toutes les formes d’énergie",
                ],
                text: [
                    "Polyvalence des planchers chauffants : Compatibles avec divers systèmes de chauffage (pompe à chaleur, chaudière au fioul/gaz/bois, énergie solaire ou électricité), ils offrent une solution de confort adaptable.",
                    "Élégance et isolation du parquet : Le parquet apporte une plus-value esthétique et isolante à votre habitat. Sa personnalisation est possible grâce à un large choix d'essences de bois.",
                    "Diversité des sols souples : Nous proposons l'installation de revêtements comme le ballatum ou le vinyle, alternatives pratiques au parquet, béton ou carrelage. Très populaires dans les logements et les établissements de santé, ces sols offrent confort et facilité d'entretien.",
                    "Importance du choix : Comprendre les différences entre les types de sols est crucial pour sélectionner celui qui correspond le mieux à vos besoins et à votre style de vie.",
                ],
                category: 'plomberie',
            },
            {
                id: "chauffage-au-gaz",
                imageUrl: villa,
                title: "Chauffage au gaz",
                description: [
                    "Experts en installation et maintenance de systèmes de chauffage au gaz, nous garantissons confort et efficacité énergétique pour votre habitat.",
                    "Notre savoir-faire technique assure une solution de chauffage fiable, économique et respectueuse de l'environnement."
                ],
                text: [
                    "Installation sur mesure: Nous concevons et installons des systèmes de chauffage au gaz adaptés à vos besoins spécifiques, en tenant compte de la taille de votre logement et de vos habitudes de consommation.",
                    "Efficacité énergétique: Les chaudières à gaz modernes offrent un excellent rendement, permettant de réduire significativement votre consommation d'énergie et vos factures de chauffage.",
                    "Confort optimal: Le chauffage au gaz assure une montée en température rapide et un contrôle précis de la chaleur, garantissant un confort constant dans toutes les pièces de votre maison.",
                    "Maintenance et sécurité: Nous proposons des services de maintenance régulière pour assurer la longévité et la sécurité de votre installation, avec des contrôles rigoureux conformes aux normes en vigueur.",
                    "Options écologiques: Possibilité d'intégrer des solutions hybrides combinant gaz et énergies renouvelables pour un chauffage encore plus respectueux de l'environnement."
                ],
                category: 'plomberie',
            },
            {
                id: "Plomberie et douche à litalienne",
                imageUrl: villa,
                title: "Plomberie et douche à l'italienne",
                description: [
                    "Experts en création de douches à l'italienne, nous transformons votre salle de bain en un espace élégant et fonctionnel.",
                    "Notre savoir-faire technique garantit une installation parfaite, de l'étanchéité à la finition, pour un résultat durable et esthétique."
                ],
                text: [
                    "Travaux préparatoires : L'installation d'une douche à l'italienne implique des modifications importantes du sol existant. Nous adaptons la structure pour intégrer le receveur et les canalisations, en respectant une pente précise pour une évacuation optimale de l'eau.",
                    "Solutions adaptées : Si la configuration ne permet pas une installation de plain-pied, nous proposons des alternatives comme la surélévation du sol ou l'utilisation d'un receveur extra-plat.",
                    "Étanchéité et finition : Nous mettons en place un système d'étanchéité robuste, capable de résister aux éclaboussures et au ruissellement. La pose soignée du revêtement de sol et mural, en tenant compte de la pente et des joints, assure une finition impeccable et durable.",
                    "Installation finale : Une fois l'étanchéité et les revêtements en place, nous procédons à l'installation de la colonne de douche et des parois, complétant ainsi votre douche à l'italienne sur mesure."
                ],
                category: 'plomberie',
            },
            {
                id: "pose-de-Wc-suspendu-a-pied-ou-PMR",
                imageUrl: villa,
                title: "Pose de WC suspendu, à pied ou PMR",
                description: [
                    "Experts en installation de WC adaptés à tous les besoins, nous proposons des solutions élégantes et fonctionnelles pour votre salle de bain.",
                    "Notre savoir-faire technique garantit une pose précise et durable, que ce soit pour des WC suspendus, à pied ou aux normes PMR."
                ],
                text: [
                    "WC suspendus : Alliant esthétique moderne et facilité d'entretien, les WC suspendus offrent un gain de place appréciable. Notre expertise assure une installation solide et étanche du bâti-support.",
                    "WC à pied : Solution classique et fiable, les WC à pied conviennent à tous types d'intérieurs. Nous garantissons une pose parfaite pour un confort optimal et une longévité accrue.",
                    "WC PMR (Personnes à Mobilité Réduite) : Spécialement conçus pour répondre aux normes d'accessibilité, ces WC assurent confort et sécurité. Notre installation respecte scrupuleusement les réglementations en vigueur.",
                    "Conseils personnalisés : Nous vous guidons dans le choix du modèle le plus adapté à votre espace et vos besoins, en tenant compte des contraintes techniques et esthétiques.",
                    "Installation professionnelle : Quelle que soit votre sélection, nous assurons une pose soignée, incluant le raccordement à l'évacuation et à l'alimentation en eau, ainsi que les finitions nécessaires pour un résultat impeccable."
                ],
                category: 'plomberie',
            },


        ]
    },
    {
        id: "platrerie-isolation-interieur",
        titleH1: "Plâtrerie et isolation intérieur",
        titleH2: "Expertise en confort et esthétique",
        subTitle: "Solutions sur mesure pour votre intérieur",
        description: [
            "Chez Bâti Plâtre 57, nous sommes spécialisés dans les travaux d'isolation et de plâtrerie, Nous posons des plafonds et cloisons en plaques de plâtre (BA13) pour la création de nouveaux espaces, assurant une isolation phonique et thermique efficace. ",
            "Nous nous adaptons aux besoins des bureaux, espaces professionnels et particulier en offrant flexibilité et rapidité d'installation"
        ],
        buttonText: "Contactez-nous dès maintenant",
        href: "/contact",
        card: [
            {
                id: "faux-plafonds-suspendus",
                imageUrl: villa,
                title: "Faux Plafonds Suspendus",
                description: [
                    "Nous sommes spécialisés dans la création de faux plafonds de tous types.",
                    "Que ce soit pour une rénovation ou une construction neuve, nous vous proposons des solutions sur mesure pour embellir vos espaces intérieurs.",
                ],
                text: [
                    "Nous travaillons avec différents matériaux tels que le plâtre, le bois, le métal ou encore le PVC pour créer des faux plafonds esthétiques et fonctionnels. Que vous souhaitiez une finition lisse, structurée ou avec des éclairages intégrés, nous sommes en mesure de répondre à toutes vos demandes.",
                    "L'ossature métallique offre de nombreux avantages, tels que sa durabilité, sa résistance aux intempéries et sa capacité à supporter des charges lourdes. De plus, elle permet une grande flexibilité architecturale, offrant ainsi de nombreuses possibilités de conception.",
                    "Grâce à la mise en place de l'ossature métallique, le bâtiment pourra ensuite être complété avec d'autres éléments, tels que les murs, les planchers et la toiture, pour créer un espace fonctionnel et sécurisé."
                ],
            },
            {
                id: "doublage-et-cloison-modulaire",
                imageUrl: villa,
                title: "Doublage et cloison modulaire",
                description: [
                    "Cloison vitrée ou en panneau, nous nous adaptons aux besoins des bureaux, espaces professionnels et particuliers en offrant flexibilité et rapidité d'installation",
                ],
                text: [
                    "Une fois l'ossature en place, nous installons des panneaux en plaques de plâtre (BA13). ",
                    "De plus, elle permet une grande flexibilité architecturale, offrant ainsi de nombreuses possibilités de conception.",
                ],
            },
            {
                id: "isolation-phonique-et-thermique",
                imageUrl: villa,
                title: "Isolation Phonique et Thermique",
                description: [
                    "La pose d'isolation intérieure est une étape essentielle pour garantir le confort thermique et acoustique d'un bâtiment.",
                    "Nous utilisons des matériaux tels que la laine de roche, laine de verre, polystyrène expansé, soufflé, laine de chanvre... ",
                ],
                text: [
                    "Nous préconisons sur les plafonds des combles une isolation intérieure de minimum 240mm d'épaisseur, sur les doublages 120mm d'épaisseur pour une isolation optimale.",
                    "L'isolation intérieure permet de limiter les déperditions de chaleur en hiver et de conserver la fraîcheur en été, en créant une barrière protectrice entre l'intérieur et l'extérieur. Il existe différents types d'isolants selon le besoin.",
                    "Elle permet également de réduire les nuisances sonores provenant de l'extérieur, offrant ainsi un environnement calme et paisible à votre intérieur.",
                ],
            },
            {
                id: "installation-d-une-membrane-thermique",
                imageUrl: villa,
                title: "Installation d'une Membrane Thermique",
                description: [
                    "L'installation d'un pare-vapeur est une étape cruciale lors de la construction ou de la rénovation d'un bâtiment.",
                    "Il s'agit d'une membrane spéciale conçue pour empêcher la migration de la vapeur d'eau à travers les parois.",
                ],
                text: [
                    "Le pare-vapeur est généralement installé du côté chaud de l'isolation, afin de garantir une barrière efficace contre l'humidité. Cette étape est essentielle pour prévenir les problèmes d'humidité, tels que la condensation et la moisissure, qui peuvent endommager les matériaux de construction et nuire à la qualité de l'air intérieur.",
                    "L'installation d'un pare-vapeur nécessite une technique précise, en veillant à ce qu'il n'y ait pas de trous ou de fuites d'air qui pourraient compromettre son efficacité.",
                ],
            },

            {
                id: "pose-de-bande-calicot-et-ratissage-a-l-enduit",
                imageUrl: villa,
                title: "Pose de bande calicot et ratissage à l'enduit",
                description: [
                    "La pose de bande calicot et l'enduit de finition sont deux étapes essentielles dans le processus de finition des murs.",
                    "La bande calicot est utilisée pour renforcer les joints entre les plaques de plâtre et uniformiser la surface."
                ],
                text: [
                    "Le calicot, une bande en tissu, est utilisé pour renforcer les joints entre les plaques de plâtre afin de les rendre solides et durables. ",
                    "Une fois que le calicot est correctement posé, l'enduit de finition est appliqué sur toute la surface du mur pour le lisser et le rendre prêt à être peint ou recouvert d'un revêtement mural.",
                    "Cette étape permet également de cacher les imperfections et les irrégularités du mur. L'enduit est appliqué en plusieurs couches, en laissant sécher entre chaque couche, jusqu'à obtenir une surface parfaitement lisse et uniforme."
                ],
            },
            {
                id: "creation-de-dressing-ou-rangement-placo",
                imageUrl: villa,
                title: "Création de dressing ou rangement placo",
                description: [
                    "Que vous souhaitiez optimiser l'espace de votre chambre avec un dressing sur mesure ou ajouter une touche moderne à votre salon avec un meuble TV en placo, nous sommes là pour réaliser vos envies.",
                ],
                text: [
                    "Nous sommes fiers de notre savoir-faire artisanal et de notre service clientèle exceptionnel. ",
                    "Faites-nous confiance pour créer des dressings et meubles TV sur mesure qui répondent à toutes vos attentes.",
                    "Nous pouvons réaliser l'armature du dressing en bois ou en métal et l'enduire de placo."
                ],
            },
        ]
    },
    {
        id: "facade-isolation-ext-toiture",
        titleH1: "Façade, isolation extérieur et toiture",
        titleH2: "Engagement envers l'excellence",
        charpenteToitureTitle: "Charpente et toiture",
        façadeIsolationExtToitureTitle: "Façade",
        subTitle: "Charpente, couverture, bardage, isolation thermique, filet, crépris, peinture, lavage de façade",
        description: [
            "Chez Bâti Plâtre 57, nous sommes spécialisés dans les travaux d'isolation et de plâtrerie, offrant des solutions sur mesure pour chaque projet.",
            "Nos services assurent une isolation optimale et une finition de plâtre de haute qualité pour votre confort et sécurité."
        ],
        buttonText: "Contactez-nous dès maintenant",
        href: "/contact",
        card: [
            {
                id: "pose-de-charpente",
                imageUrl: charpenteTraditionnelle,
                title: "Pose de charpente",
                description: [
                    "Nous réalisons votre charpente dans les régles de l'art, les éléments qui la compose, leur dimensionnement et leur mise en œuvre. La charpente est un assemblage de pièce de bois qui supporte le toit."
                ],
                text: ["La charpente traditionnelle : est la charpente “de base”, telle qu’elle est construite depuis des siècles. Particulièrement solide, grâce à du bois de charpente épais, elle vous permet d’aménager les combles, grâce à une charpente haute. Elle est cependant assez coûteuse.",
                    " Vous aurez compris que le choix d’une charpente dépend à la fois de votre budget et de votre volonté d’aménager les combles ou non. Si l’aménagement des combles vous semble inutile, la pose d’une charpente fermette sera clairement le meilleur choix."
                ],
                category: 'charpente-toiture',
            },
            {
                id: "couverture-de-toiture",
                imageUrl: couverture,
                title: "Couverture de toiture",
                description: [
                    "Nous installons différents types de tuiles pour répondre à toutes vos exigences esthétiques et fonctionnelles, en utilisant des matériaux de haute qualité adaptés à chaque style."
                ],
                text: [
                    "Tuiles mécaniques : Fabriquées en terre cuite ou en béton, ces tuiles offrent une excellente résistance aux intempéries et sont faciles à poser grâce à leur système d'emboîtement.",
                    "Tuiles minérales : Composées de fibres minérales et de résines, ces tuiles légères sont idéales pour les structures qui ne peuvent supporter un poids élevé, tout en offrant une bonne isolation thermique.",
                    "Tuiles abeilles : Ces tuiles en terre cuite, reconnaissables à leur forme hexagonale, apportent un aspect unique à votre toiture tout en garantissant une bonne évacuation de l'eau.",
                    "Tuiles plates : Traditionnelles et élégantes, les tuiles plates sont souvent utilisées pour les toitures de style ancien ou historique. Elles sont principalement fabriquées en terre cuite, ce qui leur confère une grande durabilité.",
                    "Tuiles romanes : Avec leur forme arrondie caractéristique, ces tuiles en terre cuite offrent un esthétique classique et une excellente résistance aux conditions climatiques sévères.",
                    "Tuiles canal : Typiques des régions méditerranéennes, ces tuiles en terre cuite sont conçues pour capturer et évacuer efficacement l'eau de pluie, tout en contribuant à l'esthétique traditionnelle de la toiture.",
                    "Tuiles ardoises : Fabriquées à partir de roche naturelle, les tuiles ardoises sont très résistantes et offrent un look distingué et intemporel, tout en étant particulièrement adaptées aux climats froids et humides."
                ],
                category: 'charpente-toiture',
            },
            {
                id: "ravalement-de-façade-et-restauration",
                imageUrl: façageFinition,
                title: "Ravalement de façade et restauration",
                description: [
                    "Experts en rénovation de façades, nous redonnons vie et solidité à l'enveloppe de votre bâtiment.",
                    "Notre savoir-faire allie techniques traditionnelles et modernes pour des résultats durables et esthétiques."
                ],
                text: [
                    "Diagnostic approfondi : Nous commençons par une évaluation minutieuse de l'état de votre façade, identifiant les zones problématiques et les interventions nécessaires.",
                    "Réparation des fissures et maçonnerie : Nos artisans qualifiés traitent les fissures et effectuent les reprises de maçonnerie pour restaurer l'intégrité structurelle de votre façade.",
                    "Restauration de façades en pierres apparentes : Spécialistes de tous types de pierres, nous restaurons les façades en préservant leur caractère authentique, réparant les joints et remplaçant les pierres endommagées si nécessaire.",
                    "Finitions personnalisées : Nous proposons diverses finitions (talochée, grattée, ribbée, rustique) pour s'adapter à vos préférences esthétiques et au style architectural de votre bâtiment.",
                    "Respect des normes : Toutes nos interventions sont réalisées dans le strict respect des normes environnementales et de sécurité en vigueur, assurant un résultat durable et conforme.",
                    "Conseils d'experts : Nous vous guidons dans le choix des meilleures solutions pour votre façade, en tenant compte de l'exposition, du climat local et de vos contraintes budgétaires."
                ],
                category: 'façade-isolation-ext-toiture',
            },
            {
                id: "isolation-thermique-exterieure",
                imageUrl: isolantMurExterieur,
                title: "Isolation Thermique par l'Extérieur (ITE)",
                description: [
                    "Experts en isolation thermique par l'extérieur, nous optimisons l'efficacité énergétique de votre habitat tout en embellissant sa façade.",
                    "Notre approche sur mesure garantit des performances thermiques optimales et une valorisation durable de votre bien immobilier."
                ],
                text: [
                    "Diagnostic thermique précis : Nous réalisons une évaluation approfondie de votre bâtiment pour identifier les besoins spécifiques en isolation et proposer les solutions les plus adaptées.",
                    "Choix de matériaux performants : Nous vous conseillons parmi une large gamme de matériaux isolants (polystyrène expansé, laine de roche, fibres de bois, etc.) en fonction de vos exigences thermiques et écologiques.",
                    "Installation experte de l'ITE : Notre équipe qualifiée applique avec précision le système d'isolation thermique par l'extérieur, assurant une fixation parfaite des panneaux isolants et des finitions soignées.",
                    "Optimisation énergétique : L'ITE améliore significativement l'efficacité énergétique de votre bâtiment, réduisant les pertes de chaleur et vos factures d'énergie.",
                    "Protection renforcée : Notre système assure une excellente étanchéité à l'air et une protection efficace contre les intempéries, prolongeant la durée de vie de votre façade.",
                    "Finitions esthétiques : Nous proposons une large palette de finitions personnalisées pour embellir votre façade tout en préservant ses performances thermiques.",
                    "Conformité aux normes : Toutes nos interventions respectent scrupuleusement les normes environnementales et de performance énergétique en vigueur, garantissant un résultat durable et conforme.",
                    "Valorisation immobilière : L'ITE non seulement améliore le confort thermique mais augmente également la valeur de votre bien sur le marché immobilier."
                ],
                category: 'façade-isolation-ext-toiture',
            },
            {
                id: "services-pro-et-installation-d-echafaudage",
                imageUrl: echafaudage,
                title: "Services pro et installation d'échafaudage",
                description: [
                    "Experts en solutions d'accès en hauteur, nous fournissons des services d'échafaudage sûrs et efficaces pour tous types de chantiers.",
                    "Notre engagement envers la sécurité et la qualité garantit une infrastructure fiable pour vos travaux en hauteur."
                ],
                text: [
                    "Évaluation personnalisée : Nous commençons par une analyse détaillée de vos besoins spécifiques, prenant en compte la nature du chantier, la hauteur requise et les contraintes du site.",
                    "Montage et démontage experts : Notre équipe qualifiée assure un montage et un démontage sécurisés des échafaudages, respectant rigoureusement les procédures de sécurité.",
                    "Échafaudages modulaires adaptables : Nous utilisons des systèmes d'échafaudage modulaires de haute qualité, offrant flexibilité et adaptabilité à tous types de structures et de terrains.",
                    "Conformité aux normes de sécurité : Tous nos échafaudages sont conformes aux normes de sécurité les plus strictes, assurant la protection des travailleurs et du public.",
                    "Surveillance et maintenance continues : Nous assurons une surveillance régulière et un entretien proactif de l'échafaudage tout au long de la durée des travaux, garantissant stabilité et sécurité constantes.",
                    "Solutions pour accès difficiles : Notre expertise nous permet de proposer des solutions innovantes pour les sites à accès restreint ou les travaux en hauteur complexes.",
                    "Respect des délais et efficacité : Nous nous engageons à respecter les délais convenus, optimisant l'efficacité de votre chantier sans compromettre la sécurité.",
                    "Conseil et support : Notre équipe est à votre disposition pour vous conseiller sur la meilleure configuration d'échafaudage et vous assister tout au long de votre projet."
                ],
                category: 'façade-isolation-ext-toiture',
            },
            {
                id: "peinture-exterieure-enduits",
                imageUrl: enduitRavalement,
                title: "Peinture Extérieure et Enduits Décoratifs",
                description: [
                    "Experts en embellissement et protection des façades, nous sublimez l'extérieur de votre habitat avec des finitions durables et esthétiques.",
                    "Notre savoir-faire allie techniques traditionnelles et modernes pour des résultats qui résistent au temps et aux intempéries."
                ],
                text: [
                    "Préparation méticuleuse des surfaces : Nous assurons un nettoyage en profondeur, réparons les imperfections et appliquons les apprêts appropriés pour garantir une adhérence parfaite et une longévité optimale de la finition.",
                    "Peintures haute performance : Nous utilisons des peintures spécialement conçues pour l'extérieur, offrant une protection anti-UV et anti-humidité pour une durabilité accrue face aux éléments.",
                    "Choix de peintures adaptées : Notre gamme comprend des peintures acryliques, siloxanes, pliolites et autres, sélectionnées en fonction de vos besoins spécifiques et des caractéristiques de votre façade.",
                    "Finitions personnalisées : Nous proposons diverses finitions (mate, satinée, brillante) pour s'adapter à vos préférences esthétiques et au style architectural de votre bâtiment.",
                    "Protection complète : Nos services couvrent tous les éléments extérieurs : façades, volets, portes, balcons, assurant une protection uniforme et un embellissement global.",
                    "Enduits décoratifs de qualité : Nous maîtrisons l'application d'enduits minces ou épais à la chaux aérienne, de badigeons de chaux, de RPE (Revêtements Plastiques Épais) et d'enduits minéraux pour une finition authentique et durable.",
                    "Variété de textures : Nos finitions incluent des options talochées, ribbées, grattées, rustiques ou rustiques écrasées, permettant de personnaliser l'aspect de votre façade.",
                    "Palette de couleurs étendue : Nous offrons un large choix de coloris pour répondre à vos envies et s'harmoniser avec l'environnement de votre propriété.",
                    "Conseils d'experts : Notre équipe vous guide dans le choix des meilleures solutions en termes de matériaux, de couleurs et de finitions, en tenant compte de l'exposition de votre façade et de vos préférences esthétiques."
                ],
                category: 'façade-isolation-ext-toiture',
            },
            {
                id: "crépis-grésé-taloché",
                imageUrl: enduitFaçade,
                title: "Crépis, grésé, taloché",
                description: [
                    "Spécialistes des finitions murales traditionnelles, nous réalisons des crépis et enduits qui allient esthétique et protection.",
                    "Notre expertise en techniques de crépissage permet d'obtenir différentes textures adaptées à votre style architectural."
                ],
                text: [
                    "Diagnostic et préparation : Évaluation approfondie du support pour déterminer le type de crépi le plus adapté et préparation minutieuse des surfaces pour une adhérence optimale.",
                    "Crépis traditionnel : Application experte de crépis minéraux ou organiques, offrant une protection durable contre les intempéries tout en permettant aux murs de respirer.",
                    "Finition grésée : Réalisation de finitions grésées pour un aspect granuleux régulier, particulièrement adapté aux façades contemporaines.",
                    "Technique talochée : Maîtrise de la finition talochée pour un rendu plus lisse et moderne, idéal pour les façades urbaines.",
                    "Personnalisation : Large choix de granulométries et de teintes pour créer une façade unique qui s'harmonise avec votre environnement.",
                    "Respect des traditions : Utilisation de techniques ancestrales combinées aux matériaux modernes pour des résultats durables.",
                    "Protection optimale : Application d'enduits qui protègent votre façade contre l'humidité et les variations climatiques.",
                    "Finitions sur mesure : Adaptation des techniques selon vos préférences et le style architectural de votre bâtiment."
                ],
                category: 'façade-isolation-ext-toiture',
            },
            {
                id: "entretien-façade-lavage-haute-pression",
                imageUrl: lavage,
                title: "Entretiens de Façade et Lavage Haute Pression",
                description: [
                    "Experts en nettoyage et rénovation de façades, nous redonnons éclat et propreté à vos murs extérieurs.",
                    "Notre approche combine technologie moderne et respect des matériaux pour un résultat impeccable et durable."
                ],
                text: [
                    "Diagnostic initial : Évaluation détaillée de l'état de la façade et identification des traitements appropriés selon les matériaux et les types de salissures.",
                    "Nettoyage haute pression : Utilisation d'équipements professionnels avec pression ajustable pour un nettoyage efficace sans endommager les supports.",
                    "Traitement anti-mousse : Application de solutions spécifiques pour éliminer et prévenir la formation de mousses, algues et lichens.",
                    "Décontamination : Élimination des pollutions atmosphériques et des traces noires qui ternissent l'aspect de votre façade.",
                    "Protection hydrofuge : Application possible de traitements hydrofuges pour protéger durablement la façade contre l'humidité.",
                    "Respect des matériaux : Adaptation des techniques et produits selon la nature des supports (pierre, enduit, brique...).",
                    "Intervention préventive : Programmes d'entretien régulier pour maintenir la propreté et prolonger la durée de vie de votre façade.",
                    "Finitions soignées : Attention particulière portée aux détails pour un résultat homogène sur l'ensemble de la façade."
                ],
                category: 'façade-isolation-ext-toiture',
            },

        ]
    },
    {
        id: "electricite-sol-chauffant",
        titleH1: "Electricité et sol chauffant",
        titleH2: "Electricité et sol chauffant",
        subTitle: "Engagement envers l'excellence",
        description: [
            "Chez Bâti Plâtre 57, nous sommes spécialisés dans les travaux d'isolation et de plâtrerie, offrant des solutions sur mesure pour chaque projet.",
            "Nos services assurent une isolation optimale et une finition de plâtre de haute qualité pour votre confort et sécurité."
        ],
        buttonText: "Contactez-nous dès maintenant",
        href: "/contact",
        card: [
            {
                "id": "planification-conception-electrique",
                imageUrl: villa,
                "title": "Planification et conception électrique",
                "description": [
                    "Étape initiale cruciale pour une installation électrique réussie.",
                    "Comprend le repérage, le marquage, l'élaboration des schémas et l'établissement d'un plan électrique détaillé."
                ],
                "text": [
                    "Repérage et marquage précis des différents éléments de l'installation électrique.",
                    "Vérification approfondie et élaboration de schémas électriques détaillés.",
                    "Établissement d'un plan électrique complet et d'un plan de situation.",
                    "Optimisation de l'efficacité énergétique et de la sécurité dès la phase de conception.",
                    "Prise en compte des besoins spécifiques du client et des normes électriques en vigueur."
                ]
            },
            {
                "id": "preparation-infrastructure",
                imageUrl: villa,
                "title": "Préparation et mise en place des infrastructures",
                "description": [
                    "Phase d'insertion des gaines électriques et de préparation du chantier.",
                    "Adaptation de l'infrastructure pour les installations classiques ou domotiques."
                ],
                "text": [
                    "Insertion soignée des gaines électriques dans la structure du bâtiment.",
                    "Choix entre une installation classique ou domotique selon les besoins du projet.",
                    "Mise en place d'une alimentation électrique temporaire sécurisée sur le chantier.",
                    "Anticipation des besoins futurs pour une infrastructure évolutive.",
                    "Respect des normes de sécurité et d'efficacité énergétique dans la préparation de l'infrastructure."
                ]
            },
            {
                "id": "gros-oeuvre-electrique",
                imageUrl: villa,
                "title": "Travaux de gros œuvre électrique",
                "description": [
                    "Réalisation des saignées, placement des boîtes et pose des câbles.",
                    "Intégration harmonieuse de l'installation électrique dans la structure du bâtiment."
                ],
                "text": [
                    "Réalisation précise des saignées dans les murs pour le passage des câbles.",
                    "Placement stratégique des boîtes de dérivation pour faciliter les futures interventions.",
                    "Pose soignée des câbles électriques selon le plan établi.",
                    "Respect des normes de sécurité et des réglementations en vigueur.",
                    "Coordination avec les autres corps de métier pour une intégration optimale de l'installation électrique."
                ]
            },
            {
                "id": "cablage-distribution",
                imageUrl: villa,
                "title": "Câblage et distribution électrique",
                "description": [
                    "Étape cruciale de l'insertion des fils électriques dans les gaines.",
                    "Assure une distribution électrique efficace et sécurisée dans tout le bâtiment."
                ],
                "text": [
                    "Insertion méticuleuse des fils électriques dans les gaines préalablement installées.",
                    "Choix de câbles adaptés aux besoins spécifiques de chaque circuit.",
                    "Mise en place d'un système de distribution électrique efficace et bien organisé.",
                    "Vérification continue de la qualité des connexions et de l'intégrité des câbles.",
                    "Application des techniques de câblage les plus récentes pour optimiser les performances du système."
                ]
            },
            {
                "id": "installation-equipements-chauffage",
                imageUrl: villa,
                "title": "Installation des équipements et systèmes de chauffage",
                "description": [
                    "Mise en place des équipements électriques et des systèmes de chauffage spécifiques.",
                    "Intégration harmonieuse des éléments dans l'architecture existante."
                ],
                "text": [
                    "Installation et interconnexion des divers équipements électriques.",
                    "Mise en place de systèmes de chauffage avancés, y compris les planchers chauffants.",
                    "Intégration soignée des équipements dans le respect de l'esthétique du bâtiment.",
                    "Optimisation de l'efficacité énergétique de chaque équipement installé.",
                    "Configuration et test des systèmes pour assurer leur bon fonctionnement et leur synergie."
                ]
            },
            {
                "id": "finalisation-mise-en-service",
                imageUrl: villa,
                "title": "Finalisation et mise en service",
                "description": [
                    "Phase finale incluant la mise à niveau du tableau électrique et les tests de sécurité.",
                    "Assure la conformité et la sécurité de l'installation électrique."
                ],
                "text": [
                    "Remplacement ou mise à niveau du tableau électrique principal.",
                    "Vérification approfondie du fonctionnement de tous les circuits et dispositifs.",
                    "Raccordement sécurisé de l'installation à la prise de terre.",
                    "Réalisation de tests de sécurité rigoureux et certification de l'installation.",
                    "Finalisation des travaux avec un soin particulier pour les finitions esthétiques."
                ]
            }
        ]
    },
    {
        id: "peinture-pose-de-sol-carrelage",
        titleH1: "Peinture, pose de sol et carrelage",
        titleH2: "Peinture, pose de sol et carrelage",
        subTitle: "Engagement envers l'excellence",
        description: [
            "Chez Bâti Plâtre 57, nous sommes spécialisés dans les travaux d'isolation et de plâtrerie, offrant des solutions sur mesure pour chaque projet.",
            "Nos services assurent une isolation optimale et une finition de plâtre de haute qualité pour votre confort et sécurité."
        ],
        buttonText: "Contactez-nous dès maintenant",
        href: "/contact",
        card: [
            {
                "id": "preparation-surfaces-choix-materiaux",
                imageUrl: villa,
                "title": "Préparation des surfaces et choix des matériaux",
                "description": [
                    "Étape initiale cruciale pour assurer un résultat final de qualité.",
                    "Comprend le nettoyage, la réparation des surfaces et le choix des matériaux adaptés."
                ],
                "text": [
                    "Nettoyage approfondi des surfaces à traiter pour assurer une adhérence optimale.",
                    "Réparation des imperfections comme les fissures et les trous dans les murs et les sols.",
                    "Application d'apprêts adaptés selon le type de surface et le revêtement final choisi.",
                    "Évaluation de la planéité et de l'humidité du support pour les sols et carrelages.",
                    "Sélection minutieuse des matériaux (peintures, revêtements de sol, carrelages) en fonction des préférences du client, des contraintes techniques et des normes en vigueur."
                ]
            },
            {
                "id": "application-peinture-finitions-murales",
                imageUrl: villa,
                "title": "Application de la peinture et finitions murales",
                "description": [
                    "Phase d'application méthodique de la peinture sur les différentes surfaces.",
                    "Réalisation de finitions spéciales pour un rendu esthétique personnalisé."
                ],
                "text": [
                    "Application de la peinture en commençant par les plafonds, puis les murs et les boiseries.",
                    "Utilisation de techniques adaptées (rouleau, pinceau, pistolet) selon la nature de la surface et l'effet désiré.",
                    "Application de plusieurs couches si nécessaire pour un rendu optimal et une meilleure durabilité.",
                    "Réalisation de finitions spéciales comme les effets texturés ou les patines selon les souhaits du client.",
                    "Attention particulière portée aux raccords et à l'uniformité du rendu final pour un résultat professionnel."
                ]
            },
            {
                "id": "pose-parquet-flottant-stratifie",
                imageUrl: villa,
                "title": "Pose de parquet flottant et stratifié",
                "description": [
                    "Installation précise de parquet flottant ou stratifié pour un rendu esthétique et durable.",
                    "Prise en compte des spécificités du matériau et de l'environnement pour une pose optimale."
                ],
                "text": [
                    "Installation d'une sous-couche isolante adaptée au type de parquet choisi.",
                    "Pose des lames en rangées avec un décalage entre les joints pour une meilleure stabilité et esthétique.",
                    "Découpe précise des lames pour s'adapter parfaitement aux contours de la pièce.",
                    "Orientation de la pose dans le sens de la lumière pour un rendu visuel optimal.",
                    "Respect des espaces de dilatation le long des murs pour permettre les mouvements naturels du bois ou du stratifié."
                ]
            },
            {
                "id": "installation-vinyles-moquettes",
                imageUrl: villa,
                "title": "Installation de revêtements vinyles et moquettes",
                "description": [
                    "Pose soignée de revêtements souples adaptés à différents types d'espaces.",
                    "Techniques spécifiques pour assurer durabilité et confort des revêtements vinyles et moquettes."
                ],
                "text": [
                    "Préparation minutieuse du support pour garantir une surface parfaitement lisse, essentielle pour les revêtements vinyles.",
                    "Déroulage, découpe précise et collage uniforme du vinyle en respectant les spécificités du matériau.",
                    "Pour la moquette, pose d'une sous-couche si nécessaire pour améliorer le confort et l'isolation.",
                    "Tension et fixation soignées de la moquette, avec une attention particulière aux raccords et aux bordures.",
                    "Finitions méticuleuses le long des murs et autour des obstacles pour un rendu professionnel."
                ]
            },
            {
                "id": "pose-carrelage-standard-grands-formats",
                imageUrl: villa,
                "title": "Pose de carrelage standard et grands formats",
                "description": [
                    "Installation experte de carrelages de différentes tailles, des formats standard aux grandes dalles.",
                    "Techniques spécifiques pour assurer une pose parfaite et durable."
                ],
                "text": [
                    "Tracé précis des alignements et préparation soignée du support, incluant un ragréage si nécessaire.",
                    "Application du mortier-colle et pose des carreaux en respectant scrupuleusement l'alignement et l'espacement.",
                    "Utilisation de techniques spécifiques pour les grands formats (60x60, 120x60) afin d'assurer une planéité parfaite.",
                    "Emploi de croisillons et de systèmes de nivellement pour garantir un résultat impeccable.",
                    "Réalisation de coupes précises autour des obstacles (tuyaux, prises électriques) pour une finition soignée."
                ]
            },
            {
                "id": "realisation-mosaiques-finitions",
                imageUrl: villa,
                "title": "Réalisation de mosaïques et finitions",
                "description": [
                    "Création de motifs complexes et détaillés en mosaïque.",
                    "Finitions soignées pour un rendu esthétique et durable."
                ],
                "text": [
                    "Préparation méticuleuse du support et tracé précis des repères pour guider la pose de la mosaïque.",
                    "Pose minutieuse des plaques de mosaïque ou des tesselles individuelles selon le motif choisi.",
                    "Application soignée du mortier-colle en veillant à l'alignement parfait et à la régularité des joints.",
                    "Réalisation du jointoiement avec une couleur choisie pour mettre en valeur le motif de la mosaïque.",
                    "Nettoyage approfondi de la surface et application éventuelle d'un traitement protecteur pour préserver la beauté de la mosaïque."
                ]
            }
        ]
    },

];