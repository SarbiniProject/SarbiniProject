import { useState,useEffect } from 'react';
import './dashboard.css';
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
import { Bar } from 'react-chartjs-2';
// import 'chartjs-adapter-react';
import { Chart, registerables } from 'chart.js';
import{ useNavigate} from "react-router-dom";
import { Line } from 'react-chartjs-2';
import {logout} from './AuthContext'
import MapComponent from "./Map"


const DarkDashboard = () => {
  	const [frameDropdownAnchorEl, setFrameDropdownAnchorEl] = useState(null);
  	const frameDropdownOpen = Boolean(frameDropdownAnchorEl);
    const [users, setUsers] = useState([]);
	const [admin, setAdmin] = useState({});
	const [regions, setRegions] = useState([]);
	const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const id=localStorage.getItem('id')
	const navigate=useNavigate()
	Chart.register(...registerables);
	 
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/sarbini/admin/controllers");
	  console.log("controllers",result.data);
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
	const fetchAdminData = async () => {
	  try {
		const result = await axios.get(`http://localhost:3000/api/sarbini/admin/${id}`);
		console.log("AdminData",result.data);
		setAdmin(result.data);
		setLoading(false);
		
	  
	  } catch (error) {
		console.error(error);
		setError("Error fetching data");
		setLoading(false);
	  }
	};
  fetchAdminData();
  }, []);


useEffect(() => {
	const fetchData = async () => {
	  try {
		const result = await axios.get("http://localhost:3000/api/sarbini/admin/loc");
		
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
    }, 9000); 
    
  }, []);

  const getLast5UniqueValues = (arr,n) => {
	const uniqueValues = [...new Set(arr.reverse())];
	return uniqueValues.slice(0, Math.min(n, uniqueValues.length));
  };
  const LastUniqueValues=getLast5UniqueValues(users,5)
  const LastUniqueValues6=getLast5UniqueValues(users,6)
  console.log("unique",LastUniqueValues);

  const handleNumber = (text) => {
	return regions.filter((el) => el.user_location.toUpperCase().includes(text.toUpperCase()));
};

const collNumber = (text) => {
	return handleNumber(text).length;
};

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
 
  const filteredRegions = filt(regions);
  



  const chartData = {
    labels: LastUniqueValues.map((el)=>el.user_location),
	datasets: [{
		label: 'Number Of Subscribers:',
		data: LastUniqueValues.map((el) => collNumber(el.user_location)),
		backgroundColor: [
		  'rgba(255, 99, 132, 0.2)',
		  'rgba(255, 159, 64, 0.2)',
		  'rgba(255, 205, 86, 0.2)',
		  'rgba(75, 192, 192, 0.2)',
		  'rgba(54, 162, 235, 0.2)',
		  'rgba(153, 102, 255, 0.2)',
		  'rgba(201, 203, 207, 0.2)'
		],
		borderColor: [
		  'rgb(255, 99, 132)',
		  'rgb(255, 159, 64)',
		  'rgb(255, 205, 86)',
		  'rgb(75, 192, 192)',
		  'rgb(54, 162, 235)',
		  'rgb(153, 102, 255)',
		  'rgb(201, 203, 207)'
		],
		borderWidth: 1
	  }]
  };


  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  function getTimeDifference(startDate) {
	const startTime = new Date(startDate);
	const endTime = new Date();
  
	if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
	  return "Invalid date format";
	}
  
	const timeDifference = Math.abs(endTime - startTime);
  
	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
	if (days === 0) {
	  return `Registered about ${hours} hours and ${minutes} minutes ago`;
	} else if (days === 1) {
	  return `Registered about ${days} day, ${hours} hours, and ${minutes} minutes ago`;
	} else if (hours === 0) {
	  return `Registered about ${minutes} minutes ago`;
	} else if (hours === 1) {
	  return `Registered about ${hours} hour and ${minutes} minutes ago`;
	} else if (minutes === 0) {
	  return "Registered just now";
	} else if (minutes === 1) {
	  return `Registered about ${minutes} minute ago`;
	}
  
	return `Registered about ${days} days, ${hours} hours, and ${minutes} minutes ago`;
  }
  const days=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']
  const usersByDays=(text)=>{
	var x=[]
	for (let i = 0; i < users.length; i++) {
		if( users[i].createdAt.includes(text)){
			x.push(users[i])	
	}
  }return x.length
  }
  const Data = {
    labels:days ,
	datasets: [{
		label: 'My First Dataset',
		data: days.map((el)=>usersByDays(el)),
		backgroundColor: [
		  'rgba(255, 99, 132, 0.2)',
		  'rgba(255, 159, 64, 0.2)',
		  'rgba(255, 205, 86, 0.2)',
		  'rgba(75, 192, 192, 0.2)',
		  'rgba(54, 162, 235, 0.2)',
		  'rgba(153, 102, 255, 0.2)',
		  'rgba(201, 203, 207, 0.2)'
		],
		borderColor: [
		  'rgb(255, 99, 132)',
		  'rgb(255, 159, 64)',
		  'rgb(255, 205, 86)',
		  'rgb(75, 192, 192)',
		  'rgb(54, 162, 235)',
		  'rgb(153, 102, 255)',
		  'rgb(201, 203, 207)'
		],
		borderWidth: 1
	  }]
  };


  const Options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

 const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const Dataa = {
  labels: months,
  datasets: [{
  label: 'Example Area Chart',
  data:  months.map((el)=>usersByDays(el)),
  backgroundColor: 'rgba(75, 192, 192, 0.2)', 
  borderColor: 'rgba(75, 192, 192, 1)', 
  borderWidth: 1,
  }]
};


	const optionss = {
	  scales: {
		x: {
		  type: 'category',
		  labels: Dataa.labels,
		},
		y: {
		  beginAtZero: true,
		}
	  }
	};

console.log("regions",regions);
  	
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
          					 <h2 className="time-wise-users">Welcome , {admin.admin_Pseudo}</h2> 
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
              <div className="just-now">{getTimeDifference(el.createdAt)}</div>
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
								<h3 className="latest-registration-users2">Latest Registrations</h3>
							  <div className='chartt'>
							  
      <Bar data={chartData} options={chartOptions} />
    </div>
          					</div>

          					<div className="description-in-country-list">
            						<div className="description-in-country1">
										  {LastUniqueValues.map((el,i)=>(
											<div key={i}><div className="usa1">
											<div className="ellipse-parent">
                  								
                  									<div className="">{el.user_location}</div>
                								</div>
                								
                  									<div className="group">
														<FaArrowUp  className="iconsaxlineararrowup"  />
                    										<div className="div11"><div>{collNumber(el.user_location)} <br /><br /></div> <div className="line" /></div>
                    										
															
                  									</div>
													
												
                								</div>
												</div>
										  ))}
                								
              							
										</div>
              							</div>
              							</div>
        			
										  <div className='charttt'>
										  <h3 className="latest-registration-users1">Registrations Per Week</h3>
      <Bar data={Data} options={Options} />
    </div>
        				<div className="users-per-country"><br /><br /><br /><br />
						<h3 className="latest-registration-users2">Subscripions Across Regions</h3>
          					
<Regions values={LastUniqueValues} regions={regions}/>
        				</div>

	<div className="area-chart-container" on>
	<h3 className="latest-registration-users3">Yearly checkout</h3>
      <Line data={Dataa} options={optionss} />
    </div>
		<Footer/>
      			</section>
      			<header className="header">
				  <div className="dropdown">
<div class="dropdown">
  <button class="dropbtn"><FaUserCircle className="profile-child_drop"  /> Profile</button>
  <div class="dropdown-content">
    <div className="topdrop" onClick={() => navigate('/Profile')}>See Profile</div><br />
    <div className="bottomdrop" onClick={() => {navigate('/');console.log("clicked");}}>LogOut</div><br />
  </div>
</div>


        				</div>
      			</header>
    		</div>
        );
};

export default DarkDashboard;




