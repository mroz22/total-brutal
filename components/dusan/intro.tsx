import Post from "../../interfaces/post";
import  MoreStories  from "../more-stories";

type Props = {
  allPosts: Post[];
};

export const Intro = ({ allPosts }: Props) => {
  return (
    <div className="container">
      <div className="logo">
        <pre className="ascii">
░        ░░░      ░░░        ░░░      ░░░  ░░░░░░░░       ░░░       ░░░  ░░░░  ░░        ░░░      ░░░  ░░░░░░░&#10;
▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒&#10;
▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒&#10;
▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓       ▓▓▓       ▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓&#10;
▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓  ▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓&#10;
████  █████  ████  █████  █████        ██  ████████  ████  ██  ███  ███  ████  █████  █████        ██  ███████&#10;
████  ██████      ██████  █████  ████  ██        ██       ███  ████  ███      ██████  █████  ████  ██        █&#10;
        </pre>
      </div>
      <div className="side">
        <div className="contacts">
          <p>
            <a href="mailto:studio@totalbrutal.cz" className="email-link">
              studio@totalbrutal.cz
            </a>
          </p>
          <p>
            <a href="tel:+420721761947" className="phone-link">
              +420 721 761 947
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/t0talbrutal/?utm_source=ig_web_button_share_sheet"
              className="instagram-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              @t0talbrutal
            </a>
          </p>
        </div>
        <div className="billing">
          <p>
            <a href="#" id="copy-btc">
              BTC: bc1q2u0jn4hazg0sny3x5sclh05ehyrmjz43cmtnhf
            </a>
          </p>
        </div>
      </div>
      <div className="main">
        <div className="landing-image">
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          <img
            src="images/landing.jpg"
            alt="work in progress..."
            className="gallery"
          />
        </div>
      </div>
    </div>
  );
};
