import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from '@material-ui/core';

function WelcomePage(props) {
    return (
        <div >
            <br />
            <h3>Tour in the Movies-Subscriptions Web Site:</h3>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Link href="https://www.screencast.com/t/PZZOzk6eu">Visit</Link>
                </ListGroup.Item>
            </ListGroup>
            <br /><br />

            <h3>Server side:</h3>
            <ListGroup variant="flush">
                <ListGroup.Item>Server side use Node.js with mongo DB and files </ListGroup.Item>
                <ListGroup.Item>
                <Link href="https://www.screencast.com/t/jpSI4Fb1fZxi">DB Structure</Link>
                </ListGroup.Item>
            </ListGroup>

            <br /><br />
            <h3>Client side:</h3>
            <ListGroup variant="flush">
                <ListGroup.Item>Using React</ListGroup.Item>
                <ListGroup.Item>Using style by:
                <Link href="https://material-ui.com">Material-Ui</Link>
                 &nbsp; &nbsp; and <Link href="https://react-bootstrap.github.io/" >React-Bootstrap</Link>
                </ListGroup.Item>
                <ListGroup.Item>Using <Link href="https://formik.org">Formik for building forms and validations</Link></ListGroup.Item>
                <ListGroup.Item>Using App Context and redux to save the temporary data</ListGroup.Item>
                <ListGroup.Item>Admin set permissions for login user to make operations on the site</ListGroup.Item>
                <ListGroup.Item>Admin set permissions for login user to make operations on the site</ListGroup.Item>
            </ListGroup>
            <br />
        </div>
    );
}
export default WelcomePage;
