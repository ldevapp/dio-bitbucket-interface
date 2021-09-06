import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import './UserProfile.css';

export default function index() {
    return (
        <Row className="user-profile">
            <Col xs={4} md={4} className="user-profile-image">
                <Image src="images/avatar-profile.jpg" width="100px" rounded />
            </Col>
            <Col xs={8} md={8} className="user-profile-data">
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-name">
                        Nome 
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Usuário:</b> Usupario
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Empresa:</b> Empresa
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Site:</b> Site
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Row>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                <b>Repositório</b>
                            </Col>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                <b>Followers</b>
                            </Col>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                <b>Followings</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                0
                            </Col>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                0
                            </Col>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                0
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
