import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import { useLocation } from "react-router";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  const location = useLocation();
  const bgStyle = { backgroundColor: "#ff9933" };
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (location.pathname === "/Form") return;
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  // 여기 좀 이상한 것 같아요 - 현종.
  // React.useEffect(() => {
  //   if (location.pathname === "/Form") return;
  //   if (!navbarDimensions) return;
  //   navBottom - scrollPosition >= ref.current.offsetTop
  //     ? setIsTop(false)
  //     : setIsTop(true);
  // }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop && "navbar-white"}`}
      expand="lg"
      style={isTop ? bgStyle : bgStyle} // bgStyle 변수 적용.
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#home"}
        style={{ fontSize: "1.5rem" }}
      >
        {`${mainBody.Name}`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </NavLink>
          {repos.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#projects"}>
              Projects
            </NavLink>
          )}

          {/* 이 부분에 설문조사 페이지로 라우팅을 넣겠다. */}
          <NavLink
            className="nav-item lead"
            href={process.env.PUBLIC_URL + "/Form"}
          >
            Form
          </NavLink>

          {/* 현종 라우팅 테스트 */}
          {/* <NavLink
            className="nav-item lead"
            href={process.env.PUBLIC_URL + "/J-Page"}
          >
            J-Page
          </NavLink> */}
          {/* {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/Form"}>              
              Form
            </NavLink>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
