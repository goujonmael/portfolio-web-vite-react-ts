import './JavaSpringBoot.css';

export function JavaSpringBootDescription() {
    return (
        <div>
            <h1>
                Description :
            </h1>
            <p>
                Le projet visait à créer une application web de suivi de formation.
                <br />
                Il s'adressait à une association accompagnant des handicapés sur la région de Toulouse.
            </p>
        </div>
    );
}




export function JavaSpringBootDetails() {
    return (
        <div>
            <h1>
                Fonctionnalités implémentées:
            </h1>
            <h2>Personnalisation des éléments des fiches</h2>
            <p>
                - Icone, texte, couleur et police de caractère.
                <img
                    src="/projects/S3B01/niveaux.png"
                    alt="Image d'une fiche de suivi de formation"
                    className="container-image"
                />
            </p>
            <h2>Évaluation du travail</h2>
            <p>
                - Par le formateur et l'apprenti.
            </p>
            <h2>Canal de discussion</h2>
            <p>
                - Messages : texte, audio et images.
            </p>
            <h2>Connexion personnelle</h2>
            <p>
                - Avec mot de passe pour le formateur
                - Avec un schéma pour l'apprenti
                <img
                    src="/projects/S3B01/connection.png"
                    alt="Image de la page de connection"
                    className="container-image"
                />
            </p>
            <h2>Gestion des utilisateurs</h2>
            <p>
                - Création, modification, suppression et archivage.
                <img
                    src="/projects/S3B01/modifUser.png"
                    alt="Image de la page de gestion des utilisateurs"
                    className="container-image"
                />
            </p>
            <h2>Évolution des éléments des fiches</h2>
            <p>
                - Ajout de nouveaux matériaux/images.
                - Modification des anciens.
                - Suppression.
            </p>
        </div>
    );
}
