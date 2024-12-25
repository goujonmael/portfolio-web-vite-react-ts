import './StarOfLife.css';
import { motion } from 'framer-motion';

export default function StarOfLife() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <img

                className='star_of_life'
                src='/images/Home/star.svg'
                alt=''
            />
        </motion.div>
    );
}