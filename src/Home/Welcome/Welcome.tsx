import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO/SEO';
import ScrollHint from '../../components/ScrollHint/ScrollHint';
import './Welcome.css';

export default function Welcome() {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title={t('seo.home.title')}
                description={t('seo.home.description')}
                keywords={t('seo.home.keywords')}
                url="/"
            />
            {/* L'animation d'entrée (fade) est gérée en CSS sur .Welcome */}
            <div className='Welcome'>
                <div>
                    <h2 className='hello'>
                        {t('home.welcome.title')}
                    </h2>
                    <h1 className='portfolio-title'>
                        Portfolio <span style={{ fontFamily: "'Lato', 'Lato Fallback', sans-serif" }}>{'/>'}</span>
                    </h1>
                </div>
                <ScrollHint
                    className="welcome-scroll-hint"
                    label={t('common.scrollHint')}
                    targetId="home-about"
                />
            </div>
        </>
    );
}
