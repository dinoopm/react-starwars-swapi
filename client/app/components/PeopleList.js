 import React from 'react'

const PeopleList = ({people,location,goToPage}) => {

    let peopleListView;
    if(people.people){

	 peopleListView = people.people.results.map((people,index)=>{ 
           
            var id = people.url.match(/[0-9]/g).join('') ;

			return <a  href={"/peopledetails?people="+id} key={index}>
	        			<div className="people-grid">
							<div>
								<p><label>Name</label><span>{people.name}</span></p>
								<p><label>Height</label><span>{people.height}</span></p>
								<p><label>Mass</label><span>{people.mass}</span></p>
								<p><label>Hair Color</label><span>{people.name}</span></p>        			

							</div>
							<div>        			
								<p><label>Skin Color</label><span>{people.skin_color}</span></p>
								<p><label>Birth Year</label><span>{people.birth_year}</span></p>
								<p><label>Gender</label><span>{people.gender}</span></p>
							</div> 
	        	   
	       				</div> 
        			 </a>	  
		});
	}
	else{
		return <p>Loading...</p>
	}	

  let pageNext =  (people.people.next) ? people.people.next.split('=')[1] : null ;
  let pagePrevious =  (people.people.previous) ? people.people.previous.split('=')[1] : null ;
  
  

  return (
        <div>
  	        <h2>People List</h2>
			
			{peopleListView}

	        <div className="controls">
  				<a href="#" onClick={(event)=>{ event.preventDefault(); goToPage(pagePrevious); }}> Previous</a>
        		<a href="#" onClick={(event)=>{ event.preventDefault(); goToPage(pageNext); }}>Next </a>
     	    </div>			
		</div>

  )
}


export default PeopleList