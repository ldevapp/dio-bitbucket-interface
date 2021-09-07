import React, {useEffect, useState} from 'react';
import useBitbucket from '../../Hooks/Bitbucker-hooks';
import {Row, Col, Image} from 'react-bootstrap';
import './UserProfile.css';

const UserProfile = () => {

    const {state, setUser, hasRepositories} = useBitbucket();

    useEffect(()=>{
        if(state.repositories.values.length > 0){
            // console.log(state.repositories.values[0])
            setUser({
                username: state.repositories.values[0].name,
                name: state.repositories.values[0].owner.display_name,
                website: state.repositories.values[0].website,
                project: state.repositories.values[0].project.name,
                avatar: state.repositories.values[0].owner.links.avatar.href
            });
        }
    }, [state.repositories]);

    return (
               
        <Row className="user-profile">
            <Col xs={4} md={4} className="user-profile-image">
                <Image src={(state.user.avatar)? state.user.avatar : 'images/avatar-profile.jpg'} width="100px" rounded />
            </Col>
            <Col xs={8} md={8} className="user-profile-data">
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-name">
                        {state.user.name} 
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Usuário:</b> {state.user.username} 
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Projeto:</b> {state.user.project} 
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Website:</b> {state.user.website} 
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="user-profile-data-info">
                        <b>Repositórios:</b> {state.repositories.size} 
                    </Col>
                </Row>
                {/* <Row>
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
                                {state.repositories.size}
                            </Col>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                0
                            </Col>
                            <Col xs={4} md={4} className="user-profile-data-info" align="center">
                                0
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
            </Col>
        </Row>
    )
};

export default UserProfile;