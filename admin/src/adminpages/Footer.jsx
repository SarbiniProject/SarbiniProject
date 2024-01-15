import PropTypes from "prop-types";
import React from "react";
import "../App.css";

export const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-child" />
    <div className="copyright-2023-safelet-all-parent">
        <div className="terms-of-use">Copyright @ 2023 Safelet. All rights reserved.</div>
        <div className="terms-of-use-parent">
            <b className="terms-of-use">Terms of Use</b>
            <div className="frame-child29" />
            <b className="terms-of-use">Privacy Policy</b>
        </div>
        <div className="terms-of-use">
            <span>{`Hand Crafted `}</span>
            <span className="made-with-love">{`& made with Love`}</span>
        </div>
    </div>
</div>
  );
};
export default Footer;
