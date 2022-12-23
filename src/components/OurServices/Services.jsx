import React from 'react'

import { Row, Col } from "react-bootstrap"

import { allServicesShippers } from "../../data";
import { Button } from '../Buttons';

import "./styles.css";

function RigthColumn({ imagesServices, titleServices, infoServices }) {
  return (
    <Row className="justify-content-center mt-5">
      <Col xs={12} lg={4}>
        <img className='images-service' src={imagesServices} alt="" />
      </Col>
      <Col xs={12} lg={8}>
        <div className="contentInfoWrapper">
          <h1 className='title-service'>{titleServices}</h1>
          <p className='info-content'>{infoServices}</p>
          <div className="box-button">
            <Button>
              Get a Quote
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

function LeftColumn({ imagesServices, titleServices, infoServices }) {
  return (
    <Row className="justify-content-center flex-row-reverse mt-5" style={{ marginTop: "100px" }}>
      <Col xs={12} lg={4}>
        <img className='images-service' src={imagesServices} alt="" />
      </Col>
      <Col xs={12} lg={8}>
        <div className="contentInfoWrapper">
          <h1 className='title-service'>{titleServices}</h1>
          <p className='info-content'>{infoServices}</p>
          <div className="box-button">
            <Button>
              Get a Quote
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default function Services() {
  return (
    <>
      {
        allServicesShippers.map((service) => {
          {
            return service.id % 2 == 1 ?
              <RigthColumn
                key={service.id}
                imagesServices={service.imagesServices}
                titleServices={service.titleServices}
                infoServices={service.infoServices}
              /> :
              <LeftColumn
                key={service.id}
                imagesServices={service.imagesServices}
                titleServices={service.titleServices}
                infoServices={service.infoServices}
              />;
          }
        })
      }
    </>
  )
}
