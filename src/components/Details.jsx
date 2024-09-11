import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Details = () => {
  return (
    <div className="details">
      <h2>Marius van Staden</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint
        repellendus vel inventore officia eius id qui eveniet temporibus
        quibusdam?
      </p>
      <div className="socials">
        <ul className="flexitem">
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Details;
