import React from 'react';
import {Navbar, Nav}  from 'react-bootstrap';
import {withLocalize, Translate} from 'react-localize-redux';
import globalTranslations from '../languages/data/language.json';
import { renderToStaticMarkup } from "react-dom/server";
import LanguageToggle from '../languages/LanguageToggle';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: 'En', code: 'en' },
        { name: 'Du', code: 'du' },
        { name: 'Fr', code: 'fr' },
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/filter">Filter</Nav.Link>
            <Nav.Link href="/favorite">Favorites</Nav.Link>
          </Nav>
            <LanguageToggle />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withLocalize(Menu);
