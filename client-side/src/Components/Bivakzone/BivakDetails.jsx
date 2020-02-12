import React from 'react';
import { Translate } from 'react-localize-redux';
import { Container, Button, Row, Col } from 'react-bootstrap';
import styles from './bivakdetails.module.css';

const BivakDetails = ({ bivak }) => {
  console.log(bivak.geometry.type);
  if (bivak.geometry.type === 'Polygon') {
    const firstCoordinate = bivak.geometry.coordinates[0].map(a => a[0]);
    const x = firstCoordinate.reduce((c, d) => c + d, 0) / firstCoordinate.length;

    const secondCoordinate = bivak.geometry.coordinates[0].map(a => a[1]);
    const y = secondCoordinate.reduce((c, d) => c + d, 0) / secondCoordinate.length;

    bivak.geometry.type = 'Point';
    bivak.geometry.coordinates = [x, y];
  }

  return (
    <Row>
      <Col lg={12}>
        <article className={styles.detail}>
          <h2 className={styles.hh2}>
            {bivak.properties.name.charAt(0).toUpperCase() + bivak.properties.name.slice(1)}
          </h2>
          {console.log(bivak.properties)}
          {console.log(bivak.geometry)}
          <p className={styles.paragraph}>
            {bivak.properties.name.charAt(0).toUpperCase() + bivak.properties.name.slice(1)} is
            operated by {bivak.properties.operator}.
            {bivak.properties.openfire === 'yes'
              ? ' Small campfire allowed under normal weather conditions (no dry period or strong winds) but only at the specifically designated place, not elsewhere. '
              : null}
            {bivak.properties.openfire === 'no'
              ? ' and campfire is not allowed in this bivac zone. '
              : null}
            It is for maximum {bivak.properties.capacity} people and maximum for{' '}
            {bivak.properties.maxtents} tents.
            <p>
              <br />
              <a className={styles.link} href={bivak.properties.website}>
                Learn More &#8594;{' '}
              </a>
            </p>
            {/* <span>
            location:{bivak.geometry.coordinates[0]},{bivak.geometry.coordinates[1]}
          </span> */}
          </p>
        </article>
      </Col>
    </Row>
  );
};

export default BivakDetails;
