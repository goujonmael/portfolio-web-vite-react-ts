import '../Projects.css';
import LazyImage from '../../components/LazyImage/LazyImage';

export function FrameworkLaptopDescription() {
    return (
        <div>
            <h1>
                Description:
            </h1>
            <p>
                Configurations et scripts pour un environnement de travail personalisé sur mon PC Framework.
            </p>
        </div>
    );
}

export function FrameworkLaptopDetails() {
    return (
        <div>
            <h1>
                Scripts:
            </h1>
            <h2>Gestion de la batterie</h2>
            <p>Switch entre les modes de charge complète et limitée et affichage du mode selectionné via une notification.</p>
            <LazyImage className="container-image" src="/projects/FW/battery.png" alt="battery" />
            <h1>
                Configurations:
            </h1>

            <h2>Hyprland:</h2>
            <LazyImage className="container-image" src="/projects/FW/hyprland.png" alt="hyprland" />
            <p>
                - Bordures blanches pour la fenêtre active.
                <br />
                - Clavier français.
                <br />
                - 2 écrans (laptop 2880x1920@120.00Hz & externe 2560x1440@120.00Hz).
                <br />
                - Gestionnaire de fichiers = dolphin.
                <br />
                - Menu = wofi.
                <br />
                - Démarrage de waybar, discord & kdeconnect-indicator au démarrage.
            </p>
            <h2>
                Waybar:
            </h2>
            <LazyImage className="container-image" src="/projects/FW/waybar.png" alt="waybar" />
            <p>
                Left-side:
                <br />
                - Current desktop
                <br />
                - Network connexion: on-click open nmtui
                <br />
                Middle-side:
                <br />
                - CPU: temp/ usage / freq
                <br />
                - Power profile switch
                <br />
                - RAM: usage
                <br />
                - GPU: Core & Vram usages / temp
                <br />
                Right-side:
                <br />
                - Screen brightness %
                <br />
                - Sound volume %
                <br />
                - Battery %: on-click toggle to limit to 60% / 100% charge
                <br />
                - Time

            </p>

        </div>

    );
}