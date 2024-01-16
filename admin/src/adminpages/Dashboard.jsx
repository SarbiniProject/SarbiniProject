import { useState } from 'react';
import './dashboard.css';
import { FaUserCircle } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Footer } from './Footer';


const DarkDashboard = () => {
  	const [frameDropdownAnchorEl, setFrameDropdownAnchorEl] = useState(null);
  	const frameDropdownOpen = Boolean(frameDropdownAnchorEl);
  	const handleFrameDropdownClick = (event) => {
    		setFrameDropdownAnchorEl(event.currentTarget);
  	};
  	const handleFrameDropdownClose = () => {
    		setFrameDropdownAnchorEl(null);
  	};
  	return (
    		<div className="dark-dashboard">
      			<section className="content">
        				<div className="horizontal-line" />
        				<div className="divider" />
        				<div className="divider1" />
        				<div className="divider2" />
        				<div className="divider3" />
        				<div className="hey-admin">
          					<div className="divider4" />
          					<h2 className="time-wise-users">Hey, Admin</h2>
          					<div className="latest-registration-users-parent">
            						<div className="latest-registration-users">
              							<div className="latest-registration-users-group">
                								<h3 className="latest-registration-users1">Latest Registration Users</h3>
                								<div className="parent">
                  									<div className="div">
                    										<div className="just-now">Just Now</div>
                    										<div className="xyz-name-parent">
                      											<b className="xyz-name">XYZ Name</b>
                      											<b className="xyz-name">xyz@gmail.com</b>
                      											<div className="from-parent">
                        												<div className="xyz-name">From</div>
                        												<b className="india">India</b>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="div1">
                    										<div className="just-now">1 minute ago</div>
                    										<div className="xyz-name-parent">
                      											<b className="xyz-name">XYZ Name</b>
                      											<b className="xyz-name">xyz@gmail.com</b>
                      											<div className="from-parent">
                        												<div className="xyz-name">From</div>
                        												<b className="india">India</b>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="div">
                    										<div className="just-now">1 hour ago</div>
                    										<div className="xyz-name-parent">
                      											<b className="xyz-name">XYZ Name</b>
                      											<b className="xyz-name">xyz@gmail.com</b>
                      											<div className="from-parent">
                        												<div className="xyz-name">From</div>
                        												<b className="india">India</b>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="div">
                    										<div className="just-now">1 day ago</div>
                    										<div className="xyz-name-parent">
                      											<b className="xyz-name">XYZ Name</b>
                      											<b className="xyz-name">xyz@gmail.com</b>
                      											<div className="from-parent">
                        												<div className="xyz-name">From</div>
                        												<b className="india">India</b>
                      											</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className="latest-registrations">
          					<div className="description-in-country">
            						<div className="ellipse-parent">
              							<div className="frame-child" />
              							<div className="usa">USA</div>
            						</div>
            						<div className="ellipse-group">
              							<div className="frame-item" />
              							<div className="usa">India</div>
            						</div>
            						<div className="ellipse-container">
              							<div className="frame-inner" />
              							<div className="usa">China</div>
            						</div>
            						<div className="ellipse-parent1">
              							<div className="ellipse-div" />
              							<div className="usa">Belarus</div>
            						</div>
            						<div className="ellipse-parent2">
              							<div className="frame-child1" />
              							<div className="usa">Ukraine</div>
            						</div>
          					</div>
          					<div className="chart">
            						<div className="bg-lines">
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child" />
              							<div className="bg-lines-child5" />
            						</div>
            						<div className="vertical-line">
              							<div className="usa">2000</div>
              							<div className="usa">1000</div>
              							<div className="usa">500</div>
              							<div className="usa">400</div>
              							<div className="usa">300</div>
              							<div className="usa">200</div>
              							<div className="usa">100</div>
            						</div>
            						<div className="horizontal-line1">
              							<div className="usa">06:00 AM</div>
              							<div className="usa">09:00 AM</div>
              							<div className="usa">12:00 AM</div>
              							<div className="usa">03:00 PM</div>
              							<div className="usa">06:00 PM</div>
              							<div className="usa">09:00 PM</div>
              							<div className="usa">12:00 PM</div>
            						</div>
          					</div>
          					<div className="description-in-country-list">
            						<div className="description-in-country1">
              							<div className="line" />
              							<div className="usa1">
                								<div className="ellipse-parent">
                  									<div className="frame-child" />
                  									<div className="usa">USA</div>
                								</div>
                								<div className="usa-inner">
                  									<div className="group">
                    										<div className="div11">37%</div>
                    										<FaArrowUp  className="iconsaxlineararrowup"  />
                  									</div>
                								</div>
              							</div>
              							<div className="line" />
              							<div className="india5">
                								<div className="ellipse-parent">
                  									<div className="frame-item" />
                  									<div className="usa">India</div>
                								</div>
                								<div className="usa-inner">
                  									<div className="group">
                    										<div className="div11">24%</div>
                                        <FaArrowUp  className="iconsaxlineararrowup"  />                  									</div>
                								</div>
              							</div>
              							<div className="line" />
              							<div className="china1">
                								<div className="ellipse-parent">
                  									<div className="frame-inner" />
                  									<div className="usa">China</div>
                								</div>
                								<div className="usa-inner">
                  									<div className="group">
                    										<div className="div11">30%</div>
                                        <FaArrowUp  className="iconsaxlineararrowup"  />                  									</div>
                								</div>
              							</div>
              							<div className="line" />
              							<div className="china3">
                								<div className="ellipse-parent">
                  									<div className="ellipse-div" />
                  									<div className="usa">Belarus</div>
                								</div>
                								<div className="usa-inner">
                  									<div className="group">
                    										<div className="div11">12%</div>
                                        <FaArrowUp  className="iconsaxlineararrowup"  />                  									</div>
                								</div>
              							</div>
              							<div className="line" />
              							<div className="china4">
                								<div className="ellipse-parent">
                  									<div className="frame-child1" />
                  									<div className="usa">Ukraine</div>
                								</div>
                								<div className="usa-inner">
                  									<div className="group">
                    										<div className="div11">18%</div>
                                        <FaArrowUp  className="iconsaxlineararrowup"  />                  									</div>
                								</div>
              							</div>
              							<div className="line" />
            						</div>
          					</div>
          					<h2 className="latest-registrations1">Latest Registrations</h2>
        				</div>
        			
        				<div className="time-wise-users-installed-app">
          					<h2 className="time-wise-users">Time wise Users Installed App</h2>
          					<div className="chart1">
            				
            						<div className="vertical-line1">
              							<div className="usa" />
              							<div className="usa">1000</div>
              							<div className="usa">500</div>
              							<div className="usa">400</div>
              							<div className="usa">300</div>
              							<div className="usa">200</div>
              							<div className="usa">100</div>
            						</div>
            						<div className="horizontal-line2">
              							<div className="usa">06:00 AM</div>
              							<div className="usa">08:00 AM</div>
              							<div className="usa">10:00 AM</div>
              							<div className="usa">12:00 AM</div>
              							<div className="usa">02:00 PM</div>
              							<div className="usa">04:00 PM</div>
              							<div className="usa">06:00 PM</div>
              							<div className="usa">08:00 PM</div>
              							<div className="usa">10:00 PM</div>
              							<div className="usa">12:00 PM</div>
            						</div>
            					
            						<div className="rectangle-parent">
              							<div className="group-child" />
              							<div className="group-item" />
              							<div className="group-inner" />
              							<div className="rectangle-div" />
              							<div className="group-child1" />
              							<div className="group-child2" />
              							<div className="group-child3" />
              							<div className="group-child4" />
              							<div className="group-child5" />
              							<div className="group-child6" />
            						</div>
          					</div>
          					<div className="users-count">
            						<div className="users-count-child" />
            						<div className="users-count1">Users Count</div>
          					</div>
        				</div>
        				<div className="users-per-country">
          					<div className="user-per-country-cards">
            						<div className="user-per-country-card">
              							<div className="india-parent">
                								<h2 className="india7">India</h2>
                								<div className="frame-parent2">
                  									<div className="ellipse-parent16">
                    										<div className="frame-inner" />
                    										<b className="xyz-name">Active 32 Users</b>
                  									</div>
                  									<div className="div31">844</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<h2 className="users-per-country1">Users Per Country</h2>

        				</div>
        				<Footer/>
      			</section>
{/* <SideBar/> */}
      			<header className="header">
        				<div className="login-button-wrapper">
          					<div className="login-button">
            						<div className="profile">
              							<b className="xyz-name">Safelet</b>
              							<FaUserCircle  className="profile-child"  />
            						</div>
          					</div>
        				</div>
      			</header>
    		</div>
        );
};

export default DarkDashboard;
