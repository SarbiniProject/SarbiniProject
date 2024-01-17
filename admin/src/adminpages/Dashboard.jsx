import { useState,useEffect } from 'react';
import './dashboard.css';
import { SideBar } from './Sidebar';
import { FaUserCircle } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Footer } from './Footer';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from "axios"
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Regions from "./Regions"

const DarkDashboard = () => {
  	const [frameDropdownAnchorEl, setFrameDropdownAnchorEl] = useState(null);
  	const frameDropdownOpen = Boolean(frameDropdownAnchorEl);
    const [users, setUsers] = useState([]);
	const [regions, setRegions] = useState([]);
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/sarbini/admin/controllers");
	  console.log("data",result.data);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error fetching data");
      setLoading(false);
    }
  };

  fetchData();
}, []);
useEffect(() => {
	const fetchData = async () => {
	  try {
		const result = await axios.get("http://localhost:3000/api/sarbini/admin/location");
		console.log("regions",result.data);
		setRegions(result.data);
		setLoading(false);
	  } catch (error) {
		console.error(error);
		setError("Error fetching data");
		setLoading(false);
	  }
	};
  
	fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 4000); 
    return () => clearInterval(intervalId);
  }, [users.length]);

const filt = (regions) => {
    const uniqueLocations = new Set();
    return regions.filter(region => {
      if (!uniqueLocations.has(region.user_location)) {
        uniqueLocations.add(region.user_location);
        return true;
      }
      return false;
    });
  };

  const handleNumber = (text) => {
    return regions.filter((el) => el.user_location.toUpperCase().includes(text.toUpperCase()));
};

const collNumber = (text) => {
    return handleNumber(text).length;
};


  const filteredRegions = filt(regions);
  console.log("filt",filteredRegions);

 console.log(users);
  	const handleFrameDropdownClick = (event) => {
    		setFrameDropdownAnchorEl(event.currentTarget);
  	};
  	const handleFrameDropdownClose = () => {
    		setFrameDropdownAnchorEl(null);
  	};
	  const getLast5UniqueValues = (arr) => {
		const uniqueValues = [...new Set(arr.reverse())];
		return uniqueValues.slice(0, Math.min(5, uniqueValues.length));
	  };
	  const LastUniqueValues=getLast5UniqueValues(users)
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
												<TransitionGroup>
      {users.map((el, i) => (
        <CSSTransition
          key={i}
          classNames="fade"
		  style={{ display: i === currentIndex ? 'block' : 'none' }}
        >
          <div className="parent">
            <div className="div">
              <div className="just-now">Just Now</div>
              <div className="xyz-name-parent">
                <b className="xyz-name">{el.user_name}</b>
                <div className="from-parent">
                  <div className="xyz-name">From</div>
                  <b className="india">{el.user_location}</b>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
 
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className="latest-registrations">
          					<div className="description-in-country">
            						<div className="ellipse-parent">
              							<div className="frame-child" />
              							<div className="usa"></div>
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
              							<div className="usa">1000</div>
              							<div className="usa">500</div>
              							<div className="usa">300</div>
              							<div className="usa">200</div>
              							<div className="usa">100</div>
              							<div className="usa">50</div>
              							<div className="usa">0</div>
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
									<div className="rectangle-parent">
              							<div className="group-child" />
              							<div className="group-item" />
              							<div className="group-inner" />
              							<div className="rectangle-div" />
              							<div className="group-child1" />
              							<div className="group-child2" />
              							<div className="group-child3" />
              						
            						</div>
          					</div>

          					<div className="description-in-country-list">
            						<div className="description-in-country1">
              							<div className="line" />
              							
										  {filteredRegions.map((el,i)=>(
											<div key={i}><div className="usa1">
											<div className="ellipse-parent">
                  								
                  									<div className="">{el.user_location}</div>
                								</div>
                								
                  									<div className="group">
														<FaArrowUp  className="iconsaxlineararrowup"  />
                    										<div className="div11">{collNumber(el.user_location)}</div>
                    										<br />
															<div className="line" />
                  									</div>
													
												
                								</div>
												</div>
										  ))}
                								
              							
										</div>
              							</div>
              							</div>
        			
        				<div className="time-wise-users-installed-app">
          					<h2 className="time-wise-users">Users Installed App Today</h2>
          					<div className="chart1">
            				
            						<div className="vertical-line1">
              							<div className="usa" />
              							<div className="usa">500</div>
              							<div className="usa">300</div>
              							<div className="usa">200</div>
              							<div className="usa">100</div>
              							<div className="usa">50</div>
              							<div className="usa">0</div>
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
          					
<Regions/>
        				</div>
        				<Footer/>
      			</section>
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




{/* export default function DarkDashboard() {
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  return (
    <Box
      sx={{
        width: '1200px',
        height: '700px',
        marginLeft: '300px',
		color:'white'
      }}
    >
	  <Typography id="input-item-number" gutterBottom>
        Orders Per Weeks
      </Typography>

      <BarChart
        height={300}
        series={series
          .slice(0, 4)
          .map((s) => ({ ...s, data: s.data.slice(0, 12) }))}
        skipAnimation={skipAnimation}
      />
      <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="skipAnimation"
        labelPlacement="end"
      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
};

const series =  [
	{
	  label: 'Week 1',
	  data: [
		2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
		1879, 626, 1635, 2177, 516, 1793, 1598,
	  ],
	},
	{
	  label: 'Week 2',
	  data: [
		2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
		910, 2430, 2300, 805, 1835, 1684, 2197,
	  ],
	},
	{
	  label: 'Week 3',
	  data: [
		1145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720, 1057,
		2000, 1716, 2253, 619, 1626, 1209, 1786,
	  ],
	},
	{
	  label: 'Week 4',
	  data: [
		2361, 979, 2430, 1768, 1913, 2342, 1868, 1319, 1038, 2139, 1691, 935, 2262,
		1580, 692, 1559, 1344, 1442, 1593, 1889,
	  ],
	}
  ].map((s) => ({ ...s, highlightScope }));
 */}
