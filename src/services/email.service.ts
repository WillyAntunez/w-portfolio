import { ContactFormValues } from '@components/landingSections/LandingContent/LandingContact';

interface sendMessageData {
    data: ContactFormValues;
}

export const sendMessage = async ({ data }: sendMessageData) => {
    // verify access key is set
    if (!import.meta.env.VITE_WEB3FORM_ACCESS_KEY) {
        return {
            success: false,
            message: 'access-key-not-set-error',
        };
    }

    // max 3 emails per day, use localstorage
    let emailCount = Number(localStorage.getItem('emailCount')) || 0;

    if (emailCount >= import.meta.env.VITE_MAX_DAILY_MESSAGES) {
        return {
            success: false,
            translateError: true,
            message: 'max-emails-reached-error',
        };
    }

    emailCount++;
    localStorage.setItem('emailCount', `${emailCount}`);

    // send email
    const formData = new FormData();

    const { name, email, message, reason, organization } = data;

    formData.append('name', name);
    formData.append('email', email);
    formData.append('organization', organization || 'N/A');
    formData.append('reason', reason);
    formData.append('message', message);

    formData.append(
        'access_key',
        import.meta.env.VITE_WEB3FORM_ACCESS_KEY || '',
    );

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            return {
                success: true,
                message: 'email-sent-success-message',
            };
        } else {
            console.log('Error', data);
            return {
                success: false,
                message: data.message || '',
            };
        }
    } catch (error) {
        const errorObj = error as Error;

        console.log('Error', errorObj);

        return {
            success: false,
            message: errorObj.message || '',
        };
    }
};
