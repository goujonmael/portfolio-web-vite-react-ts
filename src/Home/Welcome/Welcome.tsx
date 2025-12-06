import { motion } from 'framer-motion';
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='Welcome'
            >
                <motion.div>
                    <motion.h2 className='hello'>
                        {t('home.welcome.title')}
                    </motion.h2>
                    <motion.h1 className='portfolio-title'>
                        Portfolio <span style={{ fontFamily: "Lato" }}>{'/>'}</span>
                    </motion.h1>
                </motion.div>
                <ScrollHint
                    className="welcome-scroll-hint"
                    label={t('common.scrollHint')}
                    targetId="home-about"
                />
            </motion.div>
        </>
    );
}
