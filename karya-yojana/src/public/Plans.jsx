

function Plans(){
    return(
        <section className="PlansSection">
        <h1 className="PlansH1" id="plans">KaryaYojana Offers:</h1><br/>
       <div className="Cusotmer-Plans">
           <div className='Plan1'>
               <h1>Free Plan</h1>
               <span>0.00 Rs/3 months</span>
               <ul>
                   <li>Unlimited Job Posts</li>
                   <li>Unlimited Resume Uploads</li>
                   <li>Basic Job Search</li>
                   <li>No One-One Interview Preparation</li>
                   <li>No CV Review Services</li>
               </ul>
           </div>
           <img src="../assests/crown.svg" id="crown" loading="lazy"/>
           <div className='Plan2'>
               <h1>Premium Plan</h1>
               <span>499.00 Rs/3 months</span>
               <ul>
                   <li>Unlimited Job Posts</li>
                   <li>Unlimited Resume Uploads</li>
                   <li>Advanced Job Search</li>
                   <li>One-One Interview Preparation</li>
                   <li>CV Review Services</li>
               </ul>
           </div>
       </div>
       <div className='Employer-Plan'>
           <h1>Ads Plan <span id="pl">*for employers</span></h1>
           <span>9,999.00 Rs/3 months</span><br/>
           <ul>
               <li>Unlimited Ads Posts</li>
               <li>Unlimited Resume Checkouts</li>
               <li>Personalized Hiring Assistance</li>
               <li>Customizable Job Listings</li>
           </ul>
       </div>
   </section>
    );
}

export default Plans