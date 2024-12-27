export function ProxyFTPCDescription() {
    return (
        <div>
            <h1>
                Description :
            </h1>
            <p>
                Réaliser un proxy FTP en C qui prend en charge le mode actif côté client et le relai en mode passif au serveur.
            </p>
        </div>
    );
}



export function ProxyFTPCDetails() {
    return (
        <div>
            <h1>
                Situation :
            </h1>
            <p>
                Un utilisateur souhaitant établir une session FTP via le proxy s’identifiera en tant que nomlogin@nomserveur.
                <br />
                Le programme client établit une connexion de contrôle avec le proxy et lui transmet la commande USER nomlogin@nomserveur.
                <br />
                Cette commande permet au proxy d’établir une connexion de contrôle sur la machine de nom nomserveur et d’identifier l’utilisateur à l’aide de nomlogin.
            </p>
            <h1>
                Conditions :
            </h1>
            <p>
                - Les échanges doivent être conformes au protocole FTP
                <br />
                - Plusieurs connexions clients simultanées possibles
                <br />
                - Mode actif côté client et mode passif côté serveur
            </p>
            <h1>Commandes possibles :</h1>
            <h2>USER / PASS</h2>
            <p>
                - S'identifier sur le serveur
            </p>
            <h2>QUIT</h2>
            <p>
                - Quitter le serveur
            </p>
            <h2>PORT</h2>
            <p>
                - Se connecter en mode actif
            </p>
            <h2>FEAT</h2>
            <p>
                - Connaître les fonctionnalités du serveur
            </p>
            <h2>ls</h2>
            <p>
                - Lister les fichiers du serveur
            </p>
            <h2>pwd</h2>
            <p>
                - Connaître le répertoire courant
            </p>
            <h2>cd</h2>
            <p>
                - Changer de répertoire
            </p>
        </div>
    );
}