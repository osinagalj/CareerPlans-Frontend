import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./footer.css";

export default function Footer({}) {
  const classes = useStyle();
  return (
    <>
      <div style={{ marginTop: "80px" }}></div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Company Name © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

const useStyle = makeStyles((theme) => ({
  quarter: {
    width: "300px",
    listStyle: "none",
    borderRadius: "5px",
    fontSize: "1.5rem",
    display: "inline-flex",
    flexDirection: "row",
    minHeight: "200px",
    padding: "10px",
    minHeight: "50px",
    minWidth: "1000px",
    minHeight: "70px",
  },
  footer: {
    padding: "2rem",
    backgroundColor: "#d5dde6",
    marginTop: "5rem",
    bottom: "0",

    left: "0",
    width: "100%",
    height: "6rem",
    color: "black",
  },
}));
