import { useState } from 'react';
import axios from 'axios';


export type AddressOption = {
    label: string;
    postcode: string;
    city: string;
    main_text?: string;
    secondary_text?: string;
    main_text_matched_substrings?: { offset: number; length: number }[];
};

export const useFormApi = () => {
    const [addressOptions, setAddressOptions] = useState<AddressOption[]>([]);

    const validateAddress = async (address: string) => {
        try {
            const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${address}`, {
                headers: {
                    'Access-Control-Allow-Origin': 'localhost:3000',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
                    'Access-Control-Allow-Credentials': 'true',
                },
            });
            return response.data.features.length > 0;
        } catch (error) {
            console.error("Erreur lors de la validation de l'adresse:", error);
            return false;
        }
    };

    const sendFormData = async (data: any) => {
        try {
            const response = await axios.post('https://getform.io/f/qalovedb', data);
            console.log('Données envoyées avec succès:', response.data);
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
        }
    };

    const fetchAddress = async (query: string) => {
        try {
            const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}`);
            const addresses = response.data.features.map((feature: any) => ({
                label: feature.properties.label,
                postcode: feature.properties.postcode,
                city: feature.properties.city,
                main_text: feature.properties.name,
                secondary_text: feature.properties.context,
                main_text_matched_substrings: feature.matching_text || []
            }));
            setAddressOptions(addresses);
        } catch (error) {
            console.error("Erreur lors de la récupération de l'adresse:", error);
        }
    };

    return { validateAddress, sendFormData, fetchAddress, addressOptions, setAddressOptions };
};