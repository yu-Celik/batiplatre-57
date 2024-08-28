import { IconName } from '@/app/utils/iconMap';

export const cardProcessData: {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    icon: IconName;
    chips: { icon: IconName; label: string }[];
}[] = [
        {
            id: 1,
            title: 'Consultation Initiale',
            subTitle: 'Première rencontre',
            description: 'Nous commençons par une consultation détaillée pour comprendre vos besoins et vos attentes. Nous discutons de vos objectifs, évaluons les contraintes et proposons des solutions personnalisées.',
            icon: 'CommentsOutlinedBlue',
            chips: [
                {
                    icon: 'Search',
                    label: 'Analyse'
                },
                {
                    icon: 'Comments',
                    label: 'Discussion'
                },
                {
                    icon: 'Bullseye',
                    label: 'Objectifs'
                }
            ]
        },
        {
            id: 2,
            title: 'Planification et Conception',
            subTitle: 'Planification détaillée',
            description: 'Après avoir compris vos besoins, nous passons à la phase de planification et de conception. Nous élaborons des plans détaillés et des propositions de design pour vous offrir une vision claire du projet final.',
            icon: 'PencilOutlined',
            chips: [
                {
                    icon: 'Compass',
                    label: 'Design'
                },
                {
                    icon: 'File',
                    label: 'Plans'
                },
                {
                    icon: 'LightBulb',
                    label: 'Propositions'
                }
            ]
        },
        {
            id: 3,
            title: 'Préparation et Démarrage',
            subTitle: 'Préparation du chantier',
            description: 'Avant de commencer les travaux, nous préparons le site et nous nous assurons que toutes les ressources nécessaires sont en place. Cette étape est cruciale pour garantir une exécution fluide et sans accroc.',
            icon: 'FluentEmoji',
            chips: [
                {
                    icon: 'Tools',
                    label: 'Préparation'
                },
                {
                    icon: 'Boxes',
                    label: 'Ressources'
                },
                {
                    icon: 'SiteMap',
                    label: 'Organisation'
                }
            ]
        },
        {
            id: 4,
            title: 'Exécution des Travaux',
            subTitle: 'Réalisation des travaux',
            description: 'Nos équipes de professionnels qualifiés exécutent les travaux selon les plans établis. Nous veillons à respecter les délais et les normes de qualité les plus strictes.',
            icon: 'CheckSquare',
            chips: [
                {
                    icon: 'HardHat',
                    label: 'Travaux'
                },
                {
                    icon: 'UserTie',
                    label: 'Professionnalisme'
                },
                {
                    icon: 'CheckOutlined',
                    label: 'Qualité'
                }
            ]
        },
        {
            id: 5,
            title: 'Contrôle de Qualité et Finitions',
            subTitle: 'Vérification finale',
            description: 'Une fois les travaux principaux terminés, nous effectuons un contrôle de qualité rigoureux pour nous assurer que tout est conforme à vos attentes. Nous apportons les finitions nécessaires pour un résultat impeccable.',
            icon: 'Hammer',
            chips: [
                {
                    icon: 'SearchPlus',
                    label: 'Contrôle'
                },
                {
                    icon: 'PaintBrush',
                    label: 'Finitions'
                },
                {
                    icon: 'Smile',
                    label: 'Satisfaction'
                }
            ]
        },
        {
            id: 6,
            title: 'Livraison et Suivi',
            subTitle: 'Livraison et suivi',
            description: 'Nous procédons à la livraison du projet et nous nous assurons que vous êtes entièrement satisfait. Nous restons disponibles pour tout suivi ou ajustement nécessaire après la livraison.',
            icon: 'Vaadin',
            chips: [
                {
                    icon: 'TruckOutlined',
                    label: 'Livraison'
                },
                {
                    icon: 'Sync',
                    label: 'Suivi'
                },
                {
                    icon: 'Smile',
                    label: 'Satisfaction'
                }
            ]
        },

    ];