import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DoctorMap from './DoctorMap';
import jquery from 'jquery'

class DoctorProfile extends Component{

	render(){
        document.body.style.background = 'url("../images/background5.jpg") no-repeat center center fixed'
        document.body.style.backgroundSize = 'cover'

        let doctorsInfo = sessionStorage.getItem('doctors');
        var doctors = JSON.parse(doctorsInfo);//somehow we loose state - so I use localstorage
        console.log("from sessionStorage ", doctors, typeof(doctors))
		console.log(this.props);
        var doctorid = (this.props.match.params.id);
        //now we need to filter through array of doctors to filter out the one with uid
        let doctor = doctors.filter((doc, index)=>{
            return doc.id == doctorid
        })
        //we have to iterate through phone array and format each phone and then return it back
        //filtering for duplicates
        let step1 = doctor[0].phoneArray.filter((phone, index)=>{
            return phone.type !== "business_fax"
        })

        let step2 = step1.filter((phone)=>{
            return phone.type !== "business_landline"
        })

        var phones = step2.map((phone, index)=>{
            let phoneArray = []
            let number = phone.number;
            let type = phone.type;
            let capType = type.charAt(0).toUpperCase() + type.slice(1)
            let stringy =JSON.stringify(number);
            let formatted  = stringy.replace(/\D+/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
            // return (`${type}: `+formatted)
            return (`${capType} : ` + formatted)
        })
        console.log(phones)

        return(
			<div className="container profile-box z-depth-4 slide">
        
        <div className="page-header">
            <h4>{doctor[0].fullName}</h4>
        </div>
        <div className="col s12">
        <div className="row">
           
           
              
                <div className="col s6 offset-s2">
               <table>
            
            	<tbody>
                   
            	<tr>
            		<th>Practice:</th>
            		<td>{doctor[0].name}</td>
            		</tr>          
            	<tr>
                	<th>Address:</th>
   					<td>{doctor[0].visitAddress}<br />{doctor[0].city}, {doctor[0].state}<br />{doctor[0].zip}</td>
            	</tr>
            	
            	<tr>
                    <th>{(doctor[0].phoneArray.length === 1) ? ('Phone :') : ('Phones :')}</th>
                    <td>{phones.map((phone, index)=>{return <li key={index}>{phone}</li>})}</td>
            	</tr>



                
               
            	
 				</tbody>
    		</table>
            </div>
             <div className="col s3">
                <img id="drPhoto" src = {doctor[0].photo} />
            </div>
            </div>
            <div className="row">
            <div className="col s1 offset-s2">Bio:</div>
            <div className="col s7 ">
                {doctor[0].bio}
                </div>
                <div className="col s12">
            <button className="btn btn-primary" onClick={this.handleSubmit} id="change-info-btn">Change Info</button>

                </div>
            </div>
    	</div>
</div>
		)
	}
}

export default DoctorProfile;