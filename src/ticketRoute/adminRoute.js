import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Hospital from '../Hospital/hospital';
import SideBar from '../Navbar/Sidebar';
import Overview from '../Hospital/overview';
import Revenue from '../Hospital/revenue';
import Users from '../Hospital/users';
import Tickets from '../Hospital/tickets';
import Error from '../ProtectedRoute/error'
import Enquiry from '../Hospital/enquiry';
import SettingProfile from '../Hospitaldashboard/Profile/SettingProfile'
import { Container } from 'react-bootstrap';

const AdminRoute = (props) => {
  let { } = props;
  const [inactive, setInactive] = useState(false);
  return (
    <React.Fragment>

      <SideBar
        onCollapse={(inactive) => {

          setInactive(inactive);
        }}
      />

      <div className={`side-content ${inactive ? 'inactive' : ""}`}>
        <Container fluid className="fixed py-3" style={{ position: 'fixed', marginBottom: '3rem', backgroundColor: '#525a65', width:'100%', marginTop:'-5.5px'}}>
          {/* <Row>
              <Col sm="12" className="text-center mb-3">

            </Col>
          </Row> */}
        </Container>
        <div style={{ marginTop: '5%' }}>
          <Switch>
            <Route path="/hospital" component={Hospital} exact></Route>
            <Route path="/overview" component={Overview} exact></Route>
            <Route path="/revenue" component={Revenue} exact></Route>
            <Route path="/users" component={Users} exact></Route>
            <Route path="/tickets" component={Tickets} exact></Route>
            <Route path="/enquiries" component={Enquiry} exact></Route>
            <Route path="/settings" component={SettingProfile} exact></Route>
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminRoute
