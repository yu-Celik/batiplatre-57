import HeaderImage from "(pages)/debarras-et-nettoyage/components/mobile/1.HeaderImage";
import ServiceDescription from "(pages)/debarras-et-nettoyage/components/mobile/2.ServiceDescription";
import ServiceList from "(pages)/debarras-et-nettoyage/components/mobile/3.ServiceList";
import Steps from "(pages)/debarras-et-nettoyage/components/mobile/4.Steps";
import DetailedService from "(pages)/debarras-et-nettoyage/components/mobile/5.DetailedService";
import { Container } from "@mui/material";

type Props = {}
export default function page({ }: Props) {
    return (
        <>
            <div className="sm:hidden">
                <HeaderImage />
                <ServiceDescription />
                <ServiceList />
                <Steps />
                <Container>
                    <DetailedService
                        id="debarras-de-maisons"
                        title="Débarras de maisons"
                        description="Nous débarrassons votre maison de tous les objets encombrants, en veillant à respecter vos biens et à recycler autant que possible. Nous prenons soin de votre propriété et de vos biens pour vous offrir un service de débarras de qualité."
                    />
                    <DetailedService
                        id="nettoyage-apres-travaux"
                        title="Nettoyage après travaux"
                        description="Après des travaux de rénovation, nous assurons un nettoyage en profondeur pour que votre espace soit prêt à être utilisé immédiatement. Nous utilisons des équipements de pointe et des techniques avancées pour éliminer les déchets de construction et les résidus de travaux."
                    />
                    <DetailedService
                        id="entretien-regulier"
                        title="Entretien régulier"
                        description="Nous proposons des services d&apos;entretien régulier pour maintenir vos espaces toujours propres et accueillants. Nos équipes expérimentées s&apos;occupent de la propreté de vos espaces pour vous offrir un environnement sain et agréable."
                    />
                </Container>
            </div>
        </>
    );
}