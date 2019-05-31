import React from "react";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPaintBrush,
  faBullhorn,
  faServer,
  faChartLine,
  faCubes
} from "@fortawesome/free-solid-svg-icons";
import highlightsContent from "./data/highlightsContent.json";
import { NotifWrapper } from "./styling/notif";
import { Content } from "./styling/content";
import { Hero } from "./styling/hero";
import { Body, BoxWrapper, Box } from "./styling/body";
import { Footer } from "./styling/footer";
import { PanelWrapper, InputWrapper } from "./styling/slidingPanel";
import logo from "./asset/logo.png";

library.add(
  faComments,
  faPaintBrush,
  faServer,
  faBullhorn,
  faChartLine,
  faCubes
);

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      notif: true,
      notifHeight: 0,
      panel: false
    };
  }

  componentDidMount() {
    const notifHeight = this.notif.clientHeight;
    this.props.cookies.get("panel")
      ? this.setState({ notifHeight, panel: false })
      : this.setState({ notifHeight, panel: true });
  }

  closePanelOnClick = () => {
    const { cookies } = this.props;
    this.setState({ panel: false });
    let d = new Date();
    d.setTime(d.getTime() + 1 * 60 * 1000);

    cookies.set("panel", false, { path: "/", expires: d });
  };

  render() {
    const { notif, notifHeight, panel } = this.state;
    console.log(this.props.cookies.get("panel"));
    return (
      <div>
        <NotifWrapper show={notif} ref={notif => (this.notif = notif)}>
          <div>
            <p>
              By accessing and using this website, you acknowledge that you have
              read and understand our <a href="#">Cookie Policy</a>,{" "}
              <a href="#">Privacy Policy</a>, and our{" "}
              <a href="#">Terms of Service</a>.
            </p>
            <button onClick={() => this.setState({ notif: !notif })}>
              Got it
            </button>
          </div>
        </NotifWrapper>
        <Content show={notif} top={notifHeight}>
          <Hero>
            <img className="logo" src={logo} alt="logo" />
            <div>
              <p className="content_1">Hello! I'm Yusri Yunus</p>
              <p className="content_2">Consult,Design, and Develop Websites</p>
              <p className="content_3">
                Have something great in mind? Feel free to cantact me. I'll help
                you to make it happen.
              </p>
              <button>LETS MAKE CONTACT</button>
            </div>
          </Hero>
          <Body>
            <div className="title">
              <p className="highlightTitle">How Can I Help You?</p>
              <p className="highlightSubTitle">
                Our work then targeted, best practices outcomes social
                innovation synergy. Venture philanthropy, revolutionary
                inclusive policymaker relief. User-centered program areas scale.
              </p>
            </div>
            <BoxWrapper>
              {highlightsContent.map((list, index) => (
                <Box key={list.id}>
                  <FontAwesomeIcon icon={list.icon} size="lg" />
                  <p className="boxTitle">{list.title}</p>
                  <p>{list.content}</p>
                </Box>
              ))}
            </BoxWrapper>
          </Body>
          <Footer>
            <p>&copy; 2019 Yusri Yunus. All rights reserved.</p>
          </Footer>
        </Content>
        <PanelWrapper panel={panel}>
          <p className="close" onClick={this.closePanelOnClick}>
            +
          </p>
          <p className="panelTitle">Get latest updates in web technologies</p>
          <p className="panelContent">
            I write articles related to web technologies, such as design trends,
            development tools, UI/UX case studies and reviews, and more. Sign up
            to my newsletter to get them all.
          </p>
          <InputWrapper>
            <input type="text" placeholder="Email addrerss" />
            <button>Count me in!</button>
          </InputWrapper>
        </PanelWrapper>
      </div>
    );
  }
}

export default withCookies(App);
