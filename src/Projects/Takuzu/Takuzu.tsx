import { Document, pdfjs, Page } from 'react-pdf';
import { useState } from 'react';
import '../Projects.css';


export function TakuzuDescription() {
    return (
        <div>
            <h1>
                Description :
            </h1>
            <p>
                Implémentation de différents algorithmes de résolution de takuzu en Ada.
                <br />
                Le takuzu est un jeu de logique également connu sous le nom de Binero ou Binary Puzzle.
                <br />
                Le but est de remplir une grille de 0 et de 1 en respectant certaines règles.
            </p>
        </div>
    );
}

export function TakuzuDetails() {
    return (
        <div>
            <h1>
                Règles du jeu :
            </h1>
            <p>
                - Il ne peut pas y avoir plus de deux chiffres identiques consécutifs dans une ligne ou une colonne.
                <br />
                - Chaque ligne et chaque colonne doit contenir un nombre égal de 0 et de 1.
                <br />
                - 2 lignes ou 2 colonnes ne peuvent être identiques.
            </p>
            <h1>
                Fonctionnalités :
            </h1>
            <p>
                - Résolution automatique des grilles Takuzu.
                <br />
                - Interface simple en ligne de commande.
            </p>
        </div>
    );
}