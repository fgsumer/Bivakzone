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
        { name: 'En', code: 'en' },
        { name: 'Nl', code: 'nl' },
        { name: 'Fr', code: 'fr' },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup },
    });
    this.props.addTranslation(globalTranslations);
    this.state = {
      filterClicked: false,
    };
  }

  handleClick =() => {
      if (this.state.filterClicked) {
        this.props.setShowFilter(false);
        this.setState({
          filterClicked: false,
        });
      } else {
        this.props.setShowFilter(true);
        this.setState({
          filterClicked: true,
        });
      }
  }


  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="/Alternative-1.png" alt="logo" style={{ height: '2rem' }} />
        </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={this.handleClick}><Translate id="menu.filter">Filter</Translate></Nav.Link>
            <Nav.Link href="/favorite"><Translate id="menu.favorite">Favorites</Translate></Nav.Link>
          </Nav>
            <LanguageToggle />
      </Navbar>
    );
  }
}

export default withLocalize(Menu);
