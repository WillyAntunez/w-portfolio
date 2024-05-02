import { useEffect } from 'react';
import './FullLoader.scss';

interface FullLoaderProps {
    open: boolean;
    message?: string;
}

export const FullLoader = ({
    open = true,
    message = 'Loading',
}: FullLoaderProps) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        open && (
            <div className="full-loader">
                <div className="full-loader__content">
                    <div className="full-loader__spinner">
                        <img src="/assets/gif/loader.svg" alt="Loading..." />
                    </div>
                    <div className="full-loader__text">
                        {message}
                        <span className="full-loader__text-ellipsis"></span>
                    </div>
                </div>
            </div>
        )
    );
};
