import React from "react";
import { withLocalize } from "react-localize-redux";
import {Button } from 'react-bootstrap';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <ul className="selector">
    {languages.map(lang => (
      <li key={lang.code}>
        {console.log(activeLanguage)}
        <Button onClick={() => setActiveLanguage(lang.code)}>
          {lang.name}
        </Button>
      </li>
    ))}
  </ul>
);

export default withLocalize(LanguageToggle);