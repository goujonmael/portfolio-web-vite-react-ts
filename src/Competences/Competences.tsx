import React from 'react';
import { competences } from './competences';
import './Competences.css';
import { Link } from 'react-router-dom';

export default function Competences() {
    return (
        <div>
            <h1 className="title">
                <span className="title-first-letter">C</span>ompétences
            </h1>
            <div className="description">
                <p>
                    Acquises lors de ma formation en informatique <Link className="underline" to='https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse' target="_blank">spécialité réseau et sécurité</Link>.
                </p>
                <p>
                    Le niveau 1 est acquis en première année, le niveau 2 en deuxième année etc.
                </p>
                <p>
                    Les niveaux sont communs à toutes les spécialités (développement / bases de données / réseau et sécurité).
                </p>
                <p>
                    C'est pourquoi le niveau 3 n'est atteint que pour les compétences en réseau et sécurité.
                </p>
                <p>
                    <Link className="underline" to='https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse#programme' target="_blank">Programme national de formation</Link>
                </p>
            </div>
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
