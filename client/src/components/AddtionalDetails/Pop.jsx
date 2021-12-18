import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./pop.css";
import popupicon from "./popupicon.svg"
import whatsupicon from "./whatsup.svg";

export const Pop = () => {
    
    const [mob_no, setMobNO] = useState("8850645962");
    

    return (
        <div >
                <div className="popup active" id="popup-1">
                    <div className="overlay"></div>
                        <div className="content">
                            <div className="close-btn" onclick="togglePopup()">×</div>

                            <div id="popup_div" className="popupdatadiv">
                                    <div>
                                        <img src={popupicon} alt="" className="popupicons"/>
                                    </div>
                                    <div>
                                        Verify your phone number
                                    </div>

                                    <div>
                                        OTP will be sent to the {mob_no}
                                    </div>

                                    <div>
                                        Enter OTP
                                    </div>

                                    <div className="optenterdiv">
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                    </div>

                                    <div className="otpbtncontinue">
                                        <Link to="/final-details">
                                            <button className="otpbtncontinuebtn">Continue</button>
                                        </Link>
                                    </div>

                                    <div className="otpresenddiv">
                                        Resend OTP
                                    </div>

                                    <div className="updatesonwhatsupotp">
                                        <div>
                                        <img src={whatsupicon} alt="" />
                                        </div>
                                        <div>
                                            Get policy updates on WhatsApp
                                        </div>
                                        <div>
                                        <input type="checkbox" checked/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                 </div>
        </div>
    )
}