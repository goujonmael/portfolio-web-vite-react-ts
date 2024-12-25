import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./Me.css";
import Image from "react-image";
import { transform } from "typescript";

export default function Me() {
    const [isIutHovered, setIsIutHovered] = useState(false);
    const [isAirbusHovered, setIsAirbusHovered] = useState(false);
    const constraintsRef = useRef(null);
    return (

        <div className="me2">
            <motion.div
                className="me"
                ref={constraintsRef}
            >
                <div className="me_left">
                    <motion.div
                        className="profile"
                        initial={{ opacity: 0, transform: "rotate(0deg)" }}
                        animate={{ opacity: 1, transform: "rotate(5deg)" }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            className="profile_picture"
                            src="/images/Me/pp_shorted.jpg"
                            alt="Picture of Mael GOUJON"
                        />

                    </motion.div>
                </div>
                <div className="me_right">
                    <motion.h1 style={{ fontSize: 40, fontWeight: 700, fontFamily: "Lato", color: "var(--yellow)" }}>
                        &lt;/&gt;
                    </motion.h1>
                    <motion.h1 className="name">
                        GOUJON
                        <br />
                        Mael
                    </motion.h1>
                    <span className="description">

                        <table>
                            <tr>
                                <td>
                                    •
                                </td>
                                <td>
                                    <span>
                                        {isIutHovered && (
                                            <motion.div
                                                animate={{
                                                    x: [0, 10, 20, 30, 40, 50, 55],
                                                    y: [-25],
                                                    opacity: [0, 1],
                                                }}
                                                transition={{ duration: 1, type: "spring", bounce: 0.6, stiffness: 200 }}
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    position: "absolute",
                                                    opacity: 0,
                                                }}
                                            >
                                                <img
                                                    src="/images/Me/school.svg"
                                                    alt=" "
                                                    width={30}
                                                    height={30}
                                                />
                                            </motion.div>
                                        )}
                                        Étudiant en <a className="but" href="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse"
                                            onMouseEnter={() => setIsIutHovered(true)} onMouseLeave={() => setIsIutHovered(false)}
                                        >Informatique
                                        </a>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    •
                                </td>
                                <td>
                                    Alternant chez <a className="airbus" href="https://www.airbus.com/en/products-services/space/telecommunications-and-navigation-satellites" onMouseEnter={() => setIsAirbusHovered(true)}
                                        onMouseLeave={() => setIsAirbusHovered(false)} style={{ position: 'relative', display: 'inline-block' }}>Airbus
                                        {isAirbusHovered && (
                                            <motion.div
                                                animate={{ x: [0, 50, 0] }}
                                                transition={{ duration: 1, ease: "linear" }}
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    position: "absolute",
                                                }}
                                            >
                                                <img
                                                    src="/images/Me/satellite.svg"
                                                    alt=" "
                                                    width={30}
                                                    height={30}
                                                />
                                            </motion.div>
                                        )}
                                    </a>
                                </td>
                            </tr>
                        </table>


                    </span>

                </div>

            </motion.div>
        </div>
    )
}
