import React from 'react';
import { competences } from './competences';
import './Competences.css';

export default function Competences() {
    return (
        <div>
            <h1 className="title">
                <span className="title-first-letter">C</span>ompétences
            </h1>
            <p className="description">
                Voici les compétences acquises au cours de ma formation en informatique dans la spécialité réseau et sécurité.
            </p>
            <div className="competences">
                {competences.map((competence) => (
                    <div key={competence.id} className="competence">
                        <p className='level'>{competence.level}/3</p>
                        <h2>{competence.title}</h2>
                        <p>{competence.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
