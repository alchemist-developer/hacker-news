import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="py-1 my-1">
      <h1> Hacker News </h1>
      <p className="text-center">
        <p className="text-secondary mb-0">
          Hacker News is a social news website focusing on computer science and
          entrepreneurship.
        </p>
        <p>
          <a href={"https://news.ycombinator.com/"}>
            <small className="text-secondary">
              hacker news official website{" "}
            </small>
          </a>
          |
          <a href={"https://flowcv.me/simon"}>
            <small className="text-secondary"> @alchemist-developer</small>
          </a>
        </p>
      </p>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
