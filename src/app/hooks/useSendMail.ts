import { useState } from 'react';
import axios from '@/app/libs/axios';
import { MailType } from '@/app/libs/models/model_mail';

const useSendMail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    
    const sendMail = async (mailData: MailType) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await axios.post('/mails', mailData);
            setLoading(false);
            setSuccess(response.data.message);
            return response.data;
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || 'Une erreur est survenue');
            throw err;
        }
    };

    return { sendMail, loading, error, success };
};

export default useSendMail;