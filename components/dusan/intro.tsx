import Post from "../../interfaces/post";
import MoreStories from "../more-stories";

import { useEffect } from "react";

type Props = {
  allPosts: Post[];
};

export const Intro = ({ allPosts }: Props) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const btcLink = document.getElementById("copy-btc");
      const btcAddress = "bc1q2u0jn4hazg0sny3x5sclh05ehyrmjz43cmtnhf";
      btcLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default navigation
        navigator.clipboard
          .writeText(btcAddress)
          .then(() => {
            showTooltip(btcLink, "Copied!");
          })
          .catch((err) => {
            console.error("Failed to copy BTC address:", err);
          });
      });
      function showTooltip(link, message) {
        // Ensure the link has a relative positioning context
        if (getComputedStyle(link).position === "static") {
          link.style.position = "relative";
        }
        // Create a tooltip element using your existing tooltip class
        const tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.innerText = message;

        // Append tooltip to the link
        link.appendChild(tooltip);

        // Set opacity to 1 so it shows up (overriding the CSS default of 0)
        tooltip.style.opacity = "1";
        // Remove tooltip after 1.5 seconds
        setTimeout(() => {
          if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
          }
        }, 1500);
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="logo">
        <img className="ascii" src="/assets/logo.svg" alt="logo" />
        {/* <pre className="ascii">
░        ░░░      ░░░        ░░░      ░░░  ░░░░░░░░       ░░░       ░░░  ░░░░  ░░        ░░░      ░░░  ░░░░░░░&#10;
▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒&#10;
▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒&#10;
▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓       ▓▓▓       ▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓&#10;
▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓  ▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓&#10;
████  █████  ████  █████  █████        ██  ████████  ████  ██  ███  ███  ████  █████  █████        ██  ███████&#10;
████  ██████      ██████  █████  ████  ██        ██       ███  ████  ███      ██████  █████  ████  ██        █&#10;
        </pre> */}
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
        </div>
      </div>
    </div>
  );
};
