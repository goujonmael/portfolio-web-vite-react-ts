import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Me.css";

export default function Me() {
  const [isIutHovered, setIsIutHovered] = useState(false);
  const [isAirbusHovered, setIsAirbusHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const constraintsRef = useRef(null);
  const { t } = useTranslation();

  return (
    <div className="borders">
      <div className="me2">
        <motion.div className="me" ref={constraintsRef}>
          <div className="me_left_container">
            <motion.div className="me_left">
              <div className="profile">
                <img
                  className={`profile_picture ${imageLoaded ? "fade-in" : ""}`}
                  src="/images/Me/me_square.jpg"
                  alt="Picture of Mael GOUJON"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="cadre" />
            </motion.div>
          </div>
          <div className="me_right_container">
            <div className="me_right">
              <motion.h2 className="name">
                GOUJON
                <br />
                Mael
              </motion.h2>
              <span className="description">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 512 512"
                          style={{ color: "var(--title2)" }}
                        >
                          <polygon points="32 192 256 64 480 192 256 320 32 192"
                            style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                          <polyline points="112 240 112 368 256 448 400 368 400 240"
                            style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                          <line x1="480" y1="368" x2="480" y2="192"
                            style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                          <line x1="256" y1="320" x2="256" y2="448"
                            style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                        </svg>

                      </td>
                      <td style={{ paddingLeft: "0.3rem" }}>
                        <span style={{ color: "var(--text)"}}>
                          {isIutHovered && (
                            <motion.div
                              animate={{
                                x: [0, 10, 20, 30, 40, 50, 55],
                                y: [-25],
                                opacity: [0, 1],
                              }}
                              transition={{
                                duration: 1,
                                type: "spring",
                                bounce: 0.6,
                                stiffness: 200,
                              }}
                              style={{
                                width: 30,
                                height: 30,
                                position: "absolute",
                                opacity: 0,
                              }}
                            >
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 512 512"
                                style={{ margin: "0 10px 0 0", color: "var(--title2)" }}
                              >
                                <polygon points="32 192 256 64 480 192 256 320 32 192"
                                  style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                                <polyline points="112 240 112 368 256 448 400 368 400 240"
                                  style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                                <line x1="480" y1="368" x2="480" y2="192"
                                  style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                                <line x1="256" y1="320" x2="256" y2="448"
                                  style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} />
                              </svg>
                            </motion.div>
                          )}
                          {t('home.about.student')}{" "}
                          <a
                            className="but"
                            href="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse"
                            onMouseEnter={() => setIsIutHovered(true)}
                            onMouseLeave={() => setIsIutHovered(false)}
                          >
                            {t('home.about.computerScience')}
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 512 512"
                          style={{ color: "var(--title2)" }}
                        >
                          <g>
                            <path fill="currentColor" d="M321.637,234.88c-22.205,0-44.402,8.47-61.349,25.417c-33.86,33.869-33.86,88.793,0,122.679l122.688-122.679   C366.037,243.349,343.832,234.88,321.637,234.88z M273.637,273.646c12.823-12.832,29.867-19.888,48-19.888   c11.654,0,22.854,2.914,32.78,8.408l-92.234,92.224C247.991,328.596,251.809,295.464,273.637,273.646z" />
                            <path fill="currentColor" d="M135.467,55.819l-79.648,79.648l146.068,146.069l79.666-79.666L135.467,55.819z M82.509,135.467l52.958-52.958   L254.864,201.87l-52.976,52.976L82.509,135.467z" />
                            <path fill="currentColor" d="M413.29,68.063L345.219,0L223.11,122.118l68.062,68.071L413.29,68.063z M326.683,129.508l-15.86-15.851   l25.944-25.944l15.851,15.842L326.683,129.508z M388.101,68.063l-24.311,24.31l-15.842-15.85l24.302-24.302L388.101,68.063z    M345.219,25.216l15.842,15.833L336.767,65.36l-15.841-15.851L345.219,25.216z M309.744,60.699l15.833,15.825l-25.926,25.952   L283.8,86.634L309.744,60.699z M248.317,122.118l24.303-24.302l15.841,15.842l-24.31,24.293L248.317,122.118z M299.633,124.83   l15.851,15.85l-24.302,24.302l-15.833-15.833L299.633,124.83z" />
                            <path fill="currentColor" d="M0.009,345.21l68.072,68.063l122.118-122.118l-68.054-68.045L0.009,345.21z M86.652,283.783l15.842,15.842   l-25.944,25.952l-15.841-15.851L86.652,283.783z M25.224,345.21l24.293-24.294l15.842,15.833L41.066,361.06L25.224,345.21z    M68.081,388.075L52.23,372.242l24.32-24.312l15.834,15.833L68.081,388.075z M103.573,352.6l-15.851-15.851l25.943-25.952   l15.842,15.851L103.573,352.6z M164.992,291.172l-24.286,24.294l-15.851-15.842l24.294-24.293L164.992,291.172z M113.665,288.442   l-15.85-15.824l24.328-24.32l15.833,15.842L113.665,288.442z" />
                            <path fill="currentColor" d="M363.422,338.522c-6.864-6.846-18.01-6.854-24.856,0c-6.89,6.864-6.89,18.019-0.017,24.882   c6.881,6.872,18.01,6.872,24.873,0C370.293,356.541,370.293,345.412,363.422,338.522z" />
                            <path fill="currentColor" d="M493.683,378.64c-5.292,27.61-18.536,53.888-39.836,75.18c-21.31,21.31-47.587,34.562-75.172,39.881   L382.194,512c31.087-5.976,60.831-20.993,84.835-44.997c24.004-24.004,39.002-53.756,44.962-84.852L493.683,378.64z" />
                            <path fill="currentColor" d="M466.433,372.277l-18.343-3.344c-3.484,19.089-12.49,37.248-27.181,51.94   c-14.701,14.692-32.877,23.714-51.949,27.225l3.361,18.325c22.608-4.124,44.313-14.92,61.77-32.377   C451.53,416.608,462.316,394.894,466.433,372.277z" />
                            <path fill="currentColor" d="M401.143,401.108c10.928-10.928,17.492-24.645,19.748-38.82l-18.396-2.949   c-1.702,10.532-6.494,20.538-14.542,28.586v0.008c-8.066,8.049-18.063,12.849-28.586,14.543l2.967,18.396   c14.157-2.265,27.866-8.829,38.792-19.757L401.143,401.108z" />
                          </g>
                        </svg>
                      </td>
                      <td style={{ paddingLeft: "0.3rem" }}>
                        <span style={{ color: "var(--text)" }}>
                          {t('home.about.internAt')}{" "}
                          <a
                            className="airbus"
                            href="https://www.airbus.com/en/products-services/space/telecommunications-and-navigation-satellites"
                            onMouseEnter={() => setIsAirbusHovered(true)}
                            onMouseLeave={() => setIsAirbusHovered(false)}
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            Airbus
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
                                <svg
                                  width={30}
                                  height={30}
                                  viewBox="0 0 512 512"
                                  style={{ color: "var(--title2)" }}
                                >
                                  <g>
                                    <path fill="currentColor" d="M321.637,234.88c-22.205,0-44.402,8.47-61.349,25.417c-33.86,33.869-33.86,88.793,0,122.679l122.688-122.679   C366.037,243.349,343.832,234.88,321.637,234.88z M273.637,273.646c12.823-12.832,29.867-19.888,48-19.888   c11.654,0,22.854,2.914,32.78,8.408l-92.234,92.224C247.991,328.596,251.809,295.464,273.637,273.646z" />
                                    <path fill="currentColor" d="M135.467,55.819l-79.648,79.648l146.068,146.069l79.666-79.666L135.467,55.819z M82.509,135.467l52.958-52.958   L254.864,201.87l-52.976,52.976L82.509,135.467z" />
                                    <path fill="currentColor" d="M413.29,68.063L345.219,0L223.11,122.118l68.062,68.071L413.29,68.063z M326.683,129.508l-15.86-15.851   l25.944-25.944l15.851,15.842L326.683,129.508z M388.101,68.063l-24.311,24.31l-15.842-15.85l24.302-24.302L388.101,68.063z    M345.219,25.216l15.842,15.833L336.767,65.36l-15.841-15.851L345.219,25.216z M309.744,60.699l15.833,15.825l-25.926,25.952   L283.8,86.634L309.744,60.699z M248.317,122.118l24.303-24.302l15.841,15.842l-24.31,24.293L248.317,122.118z M299.633,124.83   l15.851,15.85l-24.302,24.302l-15.833-15.833L299.633,124.83z" />
                                    <path fill="currentColor" d="M0.009,345.21l68.072,68.063l122.118-122.118l-68.054-68.045L0.009,345.21z M86.652,283.783l15.842,15.842   l-25.944,25.952l-15.841-15.851L86.652,283.783z M25.224,345.21l24.293-24.294l15.842,15.833L41.066,361.06L25.224,345.21z    M68.081,388.075L52.23,372.242l24.32-24.312l15.834,15.833L68.081,388.075z M103.573,352.6l-15.851-15.851l25.943-25.952   l15.842,15.851L103.573,352.6z M164.992,291.172l-24.286,24.294l-15.851-15.842l24.294-24.293L164.992,291.172z M113.665,288.442   l-15.85-15.824l24.328-24.32l15.833,15.842L113.665,288.442z" />
                                    <path fill="currentColor" d="M363.422,338.522c-6.864-6.846-18.01-6.854-24.856,0c-6.89,6.864-6.89,18.019-0.017,24.882   c6.881,6.872,18.01,6.872,24.873,0C370.293,356.541,370.293,345.412,363.422,338.522z" />
                                    <path fill="currentColor" d="M493.683,378.64c-5.292,27.61-18.536,53.888-39.836,75.18c-21.31,21.31-47.587,34.562-75.172,39.881   L382.194,512c31.087-5.976,60.831-20.993,84.835-44.997c24.004-24.004,39.002-53.756,44.962-84.852L493.683,378.64z" />
                                    <path fill="currentColor" d="M466.433,372.277l-18.343-3.344c-3.484,19.089-12.49,37.248-27.181,51.94   c-14.701,14.692-32.877,23.714-51.949,27.225l3.361,18.325c22.608-4.124,44.313-14.92,61.77-32.377   C451.53,416.608,462.316,394.894,466.433,372.277z" />
                                    <path fill="currentColor" d="M401.143,401.108c10.928-10.928,17.492-24.645,19.748-38.82l-18.396-2.949   c-1.702,10.532-6.494,20.538-14.542,28.586v0.008c-8.066,8.049-18.063,12.849-28.586,14.543l2.967,18.396   c14.157-2.265,27.866-8.829,38.792-19.757L401.143,401.108z" />
                                  </g>
                                </svg>
                              </motion.div>
                            )}
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 64 80"
                          style={{ color: "var(--title2)" }}
                        >
                          <path fill="currentColor" d="M3.024,60.782c-0.066,0.296,0.006,0.606,0.195,0.844C3.409,61.862,3.696,62,4,62h10c0.309,0,0.601-0.143,0.79-0.386  s0.255-0.562,0.179-0.861l-1.823-7.157c1.288,0.351,2.626,0.546,3.997,0.546c4.044,0,7.847-1.575,10.707-4.435  c0.188-0.188,0.293-0.442,0.293-0.707s-0.105-0.52-0.293-0.707l-9.364-9.364l2.222-2.222l-1.414-1.414l-2.222,2.222L7.85,28.293  c-0.391-0.391-1.023-0.391-1.414,0C3.575,31.153,2,34.956,2,39c0,3.669,1.308,7.131,3.684,9.879L3.024,60.782z M10.875,52.783  L12.713,60H5.248l2.109-9.443c0.038,0.032,0.079,0.061,0.117,0.093c0.087,0.072,0.177,0.139,0.266,0.21  c0.254,0.201,0.514,0.395,0.78,0.579c0.13,0.09,0.258,0.181,0.39,0.267c0.272,0.176,0.55,0.342,0.833,0.5  c0.248,0.14,0.502,0.268,0.757,0.393C10.626,52.659,10.748,52.726,10.875,52.783z M7.169,30.44l18.533,18.533  c-2.382,2.05-5.385,3.168-8.56,3.168c-1.748,0-3.444-0.34-5.013-0.987c-0.009-0.004-0.015-0.014-0.025-0.018  c-1.2-0.497-2.304-1.16-3.298-1.976C8.477,48.889,8.157,48.6,7.85,48.293c0,0-0.001-0.001-0.001-0.001  c-0.016-0.016-0.031-0.034-0.046-0.051c-0.065-0.066-0.122-0.137-0.185-0.204l-0.11-0.124c-0.003-0.003-0.006-0.004-0.009-0.007  C5.246,45.471,4,42.335,4,39C4,35.825,5.118,32.822,7.169,30.44z" />
                          <path fill="currentColor" d="M57,34H37c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h6.82l-0.667,4H40v2h4h6h4v-2h-3.153l-0.667-4H57  c2.757,0,5-2.243,5-5V39C62,36.243,59.757,34,57,34z M37,36h20c1.654,0,3,1.346,3,3v10H34V39C34,37.346,35.346,36,37,36z M48.819,60  h-3.639l0.666-4h2.307L48.819,60z M57,54h-8h-4h-8c-1.654,0-3-1.346-3-3h26C60,52.654,58.654,54,57,54z" />
                          <rect fill="currentColor" x="37.757" y="42" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.1041 42.2929)" width="8.485" height="2" />
                          <rect fill="currentColor" x="47.757" y="42" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -15.1751 49.364)" width="8.485" height="2" />
                          <rect fill="currentColor" x="50" y="18" width="2" height="2" />
                          <rect fill="currentColor" x="50" y="22" width="2" height="2" />
                          <rect fill="currentColor" x="50" y="26" width="2" height="2" />
                          <rect fill="currentColor" x="50" y="30" width="2" height="2" />
                          <rect fill="currentColor" x="12" y="18" width="2" height="2" />
                          <rect fill="currentColor" x="12" y="22" width="2" height="2" />
                          <rect fill="currentColor" x="12" y="26" width="2" height="2" />
                          <rect fill="currentColor" x="12" y="30" width="2" height="2" />
                          <path fill="currentColor" d="M5,16h4h4h4h4c0.553,0,1-0.448,1-1v-4v-1h4v7c0,0.552,0.447,1,1,1h4v3.101c-2.279,0.465-4,2.484-4,4.899  c0,0.552,0.447,1,1,1h3v4h2v-4h3c0.553,0,1-0.448,1-1c0-2.414-1.721-4.434-4-4.899V18h4c0.553,0,1-0.448,1-1v-7h4v1v4  c0,0.552,0.447,1,1,1h4h4h4h4c0.553,0,1-0.448,1-1v-4V7V3c0-0.552-0.447-1-1-1h-4h-4h-4h-4c-0.553,0-1,0.448-1,1v4v1h-4V3  c0-0.552-0.447-1-1-1H27c-0.553,0-1,0.448-1,1v5h-4V7V3c0-0.552-0.447-1-1-1h-4h-4H9H5C4.447,2,4,2.448,4,3v4v4v4  C4,15.552,4.447,16,5,16z M34.829,25h-5.658c0.413-1.164,1.525-2,2.829-2S34.416,23.836,34.829,25z M44,8h2v2h-2V8z M58,10h-2V8h2  V10z M54,10h-2V8h2V10z M50,10h-2V8h2V10z M44,12h2v2h-2V12z M48,12h2v2h-2V12z M52,12h2v2h-2V12z M58,14h-2v-2h2V14z M58,6h-2V4h2  V6z M54,6h-2V4h2V6z M50,6h-2V4h2V6z M44,4h2v2h-2V4z M28,4h8v12h-8V4z M20,10h-2V8h2V10z M16,10h-2V8h2V10z M12,10h-2V8h2V10z   M8,10H6V8h2V10z M6,12h2v2H6V12z M10,12h2v2h-2V12z M14,12h2v2h-2V12z M20,14h-2v-2h2V14z M20,6h-2V4h2V6z M16,6h-2V4h2V6z M12,6  h-2V4h2V6z M6,4h2v2H6V4z" />
                        </svg>
                      </td>
                      <td style={{ paddingLeft: "0.3rem" }}>
                        <span style={{ color: "var(--text)" }}>
                          {t('home.about.motivations')}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
