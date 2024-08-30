import { servicesData } from '@/app/data/servicesData';
import PageService from '@/app/(pages)/services/components/PageService';
import ContactSection from '@/app/components/ContactSection/RenderMobile';

type ServicePageProps = {
    params: {
        id: string;
    };
};

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
    const service = servicesData.find(service => service.id === params?.id);
    return (
        <>
            <PageService
                titleH1={service?.titleH1}
                titleH2={service?.titleH2}
                subTitle={service?.subTitle}
                description={service?.description}
                buttonText={service?.buttonText}
                href={service?.href}
                card={service?.card}
            />
            <ContactSection />
        </>
    );
};

export default ServicePage;