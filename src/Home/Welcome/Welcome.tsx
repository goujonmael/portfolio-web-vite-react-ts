import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';

export default function Welcome() {
    return (
        <motion.div className='Welcome'>
            <motion.div>
                <motion.h2 className='hello'>
                    Bienvenue sur mon
                </motion.h2>
                <motion.h1 className='portfolio-title'>
                    Portfolio <span
                        style={{ fontFamily: "Lato" }}>{'/>'}</span>
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}