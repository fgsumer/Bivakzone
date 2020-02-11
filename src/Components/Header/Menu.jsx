import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withLocalize, Translate } from 'react-localize-redux';
import globalTranslations from '../languages/data/language.json';
import { renderToStaticMarkup } from 'react-dom/server';
import LanguageToggle from '../languages/LanguageToggle';
import Map from '../MainMap/Map.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Dutch', code: 'du' },
        { name: 'French', code: 'fr' },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup },
    });

    this.props.addTranslation(globalTranslations);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="Alternative-1.png" alt="logo" style={{ height: '2rem' }} />
          {/* <Translate id="menu.title">Bivouac Zone</Translate> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                {
                  this.props.setShowFilter(true);
                }
              }}
            >
              Search
            </Nav.Link>
            <Nav.Link>Favorites</Nav.Link>
            {/* <LanguageToggle /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withLocalize(Menu);
