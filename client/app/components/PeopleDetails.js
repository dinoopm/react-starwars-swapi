import React from 'react'

const PeopleDetails = ({peopledetails}) => {

  console.log(peopledetails);

  let PeopleDetailsView,
      FilmsView,  
      SpeciesView,
      VehiclesView,
      StarshipsView;
    
      let people = peopledetails.peopledetails;

      if(people){			

	       PeopleDetailsView = ()=>{
	       
	           return <div className="people-grid">
							<div>
								<p><label>Name</label><span>{people.name}</span></p>
								<p><label>Height</label><span>{people.height}</span></p>
								<p><label>Mass</label><span>{people.mass}</span></p>
								<p><label>Hair Color</label><span>{people.hair_color}</span></p>        			

							</div>
							<div>        			
								<p><label>Skin Color</label><span>{people.skin_color}</span></p>
								<p><label>Birth Year</label><span>{people.birth_year}</span></p>
								<p><label>Gender</label><span>{people.gender}</span></p>
							</div> 
	        	   
	       				</div>

	       	}							

	        FilmsView = people.films.map((film,index)=>{
	        	return <div className="people-grid" key={index}>
				    		<div>
				    		 <p><label>Title</label><span>{film.title}</span></p>
				    		 <p><label>Director</label><span>{film.director}</span></p>
				    		 <p><label>Producer</label><span>{film.producer}</span></p>
				    		 <p><label>Release Date</label><span>{film.release_date}</span></p>        				    	
    						</div>
    					</div>

	        });	

	        SpeciesView = people.species.map((species,index)=>{
	        	return <div className="people-grid" key={index}>
				    		<div>
				    		 <p><label>Name</label><span>{species.name}</span></p>
				    		 <p><label>Classification</label><span>{species.classification}</span></p> 		    		       				    	
    						</div>
    					</div>

	        });	

	        StarshipsView = people.starships.map((starship,index)=>{
	        	return <div className="people-grid" key={index}>
				    		<div>
				    		 <p><label>Name</label><span>{starship.name}</span></p>
				    		 <p><label>Model</label><span>{starship.model}</span></p>
						     <p><label>Manufacturer</label><span>{starship.manufacturer}</span></p>   		    		       				    	
    						</div>
    					</div>

	        });	


	       VehiclesView = people.vehicles.map((vehicle,index)=>{
	        	return <div className="people-grid" key={index}>
				    		<div>
				    		 <p><label>Name</label><span>{vehicle.name}</span></p>
				    		 <p><label>Model</label><span>{vehicle.model}</span></p>
						     <p><label>Manufacturer</label><span>{vehicle.manufacturer}</span></p>   		    		       				    	
    						</div>
    					</div>

	        });			
	       				
          
      }
      else{

          return <p>Loading...</p>

      }	



  return (
       <div>
        <h2>People details</h2>
       	<div><PeopleDetailsView /></div>

        <h2>Films</h2>
        <div>{FilmsView}</div>

        <h2>Species</h2>
        <div>{SpeciesView}</div>

        <h2>Vehicles</h2>
        <div>{VehiclesView}</div>

        <h2>Starships</h2>
        <div>{StarshipsView}</div>                 

       </div>  

  )
}


export default PeopleDetails