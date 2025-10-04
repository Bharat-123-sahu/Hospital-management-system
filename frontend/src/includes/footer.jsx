export default function Footer(){

    return(
    <>
    
  {/* */}
    {/* This footer is already fully responsive due to Bootstrap classes:
        - .container centers the content and provides responsive max-width.
        - .row and .col-md-4 ensures stacking on small screens and 3 columns on medium screens and up.
    */}
   <footer className="bg-dark text-light p-5 border-box">
    <div className="container">
      <div className="row">
  
        {/* */}
        {/* On screens smaller than 'md', this will take full width (col-12) */}
        <div className="col-md-4 mb-3">
          <h5>About HMS</h5>
          <p>MedCare HMS is a complete solution for managing hospital operations including patients, doctors, billing, and reports.</p>
        </div>
  
        {/* */}
        {/* On screens smaller than 'md', this will take full width (col-12) */}
        <div className="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
            <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
          </ul>
        </div>
  
        {/* */}
        {/* On screens smaller than 'md', this will take full width (col-12) */}
        <div className="col-md-4 mb-3">
          <h5>Contact Info</h5>
          <p>📍 123 Hospital Street, City Name</p>
          <p>📞 +91-9876543210</p>
          <p>📧 contact@medcarehms.com</p>
        </div>
  
      </div>
  
      <div className="text-center mt-3">
        <hr className="bg-light"></hr>
        <p className="mb-0">&copy; 2025 MedCare HMS. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  {/* */}
    
    </>
    )
}