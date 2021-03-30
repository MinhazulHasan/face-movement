import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import JEEFACETRANSFERAPI from '../WebGL/jeelizFaceTransfer.module';

const Movement = () => {

    const [faceDetect, setFaceDetect] = useState("...");
    const [mouthOpen, setMouthOpen] = useState("...");
    const [mouthClose, setMouthClose] = useState("...");
    const [leftEyeOpen, setLeftEyeOpen] = useState("...");
    const [leftEyeClose, setLeftEyeClose] = useState("...");
    const [rightEyeOpen, setRightEyeOpen] = useState("...");
    const [rightEyeClose, setRightEyeClose] = useState("...");


    useEffect(() => {
        const openWebGlCamera = () => {
            JEEFACETRANSFERAPI.init({
                canvasId: 'canvasID',
                NNCPath: 'models/',
                hysteresis: 0.1,
                isMirror: true,
                callbackReady: (err) => {
                    if (err) {
                        console.log('Error');
                    }
                    else {
                        getFaceMovement();
                    }
                }
            })
        }
        openWebGlCamera();
    }, []);

    const getFaceMovement = () => {
        setInterval(() => {
            const faceMovement = JEEFACETRANSFERAPI.get_morphTargetInfluences();
            if (JEEFACETRANSFERAPI.is_detected()) {
                setFaceDetect('YES');

                const rightEye = faceMovement[8];
                const leftEye = faceMovement[9];
                const mouth = faceMovement[6];

                rightEyeStatus(rightEye);
                leftEyeStatus(leftEye);
                mouthStatus(mouth);
            }
            else {
                setFaceDetect('...');
                setMouthOpen('...');
                setMouthClose('...');
                setLeftEyeOpen('...');
                setLeftEyeClose('...');
                setRightEyeOpen('...');
                setRightEyeClose('...');
            }
        }, 1000);
    }

    const rightEyeStatus = (rightEye) => {
        if (rightEye >= 0.7) {
            setRightEyeOpen('...');
            setRightEyeClose('YES');
        }
        else {
            setRightEyeOpen('YES');
            setRightEyeClose('...');
        }
    }

    const leftEyeStatus = (leftEye) => {
        if (leftEye >= 0.7) {
            setLeftEyeOpen('...');
            setLeftEyeClose('YES');
        }
        else {
            setLeftEyeOpen('YES');
            setLeftEyeClose('...');
        }
    }

    const mouthStatus = (mouth) => {
        if (mouth >= 0.25) {
            setMouthOpen('YES');
            setMouthClose('...');
        }
        else {
            setMouthOpen('...');
            setMouthClose('YES');
        }
    }

    return (
        <Container>
            <Row className="m-3">
                <Col sm={12} md={6} lg={6}>
                    <canvas id="canvasID" className="canvasClass" />
                </Col>

                <Col sm={12} md={6} lg={6}>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td className='text-white'><h5>Face Detect</h5></td>
                                <td className='text-warning'><h5>{faceDetect}</h5></td>
                            </tr>
                            <tr>
                                <td className='text-white'><h5>Mouth Open</h5></td>
                                <td className='text-warning'><h5>{mouthOpen}</h5></td>
                            </tr>
                            <tr>
                                <td className='text-white'><h5>Mouth Close</h5></td>
                                <td className='text-warning'><h5>{mouthClose}</h5></td>
                            </tr>
                            <tr>
                                <td className='text-white'><h5>Left Eye Close</h5></td>
                                <td className='text-warning'><h5>{leftEyeClose}</h5></td>
                            </tr>
                            <tr>
                                <td className='text-white'><h5>Left Eye Open</h5></td>
                                <td className='text-warning'><h5>{leftEyeOpen}</h5></td>
                            </tr>
                            <tr>
                                <td className='text-white'><h5>Right Eye Close</h5></td>
                                <td className='text-warning'><h5>{rightEyeClose}</h5></td>
                            </tr>
                            <tr>
                                <td className='text-white'><h5>Right Eye Open</h5></td>
                                <td className='text-warning'><h5>{rightEyeOpen}</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Movement;