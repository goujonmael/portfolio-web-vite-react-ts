import { motion } from 'framer-motion';
import './Welcome.css';

export default function Welcome() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='Welcome'
        >
            <motion.div>
                <motion.h2 className='hello'>
                    Bienvenue sur mon
                </motion.h2>
                <motion.h1 className='portfolio-title'>
                    Portfolio <span style={{ fontFamily: "Lato" }}>{'/>'}</span>
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}
