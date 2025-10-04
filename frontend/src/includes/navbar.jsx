import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/*  Navbar Start  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary  navbar navbar-expand-lg w-100 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            HMS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHMS"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarHMS">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>

              {/* <!-- Patients --> */}
              <li className="nav-item dropdown">
                <Link className="nav-link " to="/about" id="patientsDropdown">
                  About
                </Link>
              </li>

              {/* <!-- Appointments --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="appointmentsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Appointments
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/bookappointment">
                      Book Appointment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/showappoinmentdata">
                      View Appointments
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Schedule Management
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Doctors --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="doctorsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Doctors
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/alldoctor">
                      View Doctors
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/doctorform">
                      Add Doctors
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/showdoctor">
                      list doctor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="doctorsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Patients
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/addPatients">
                      Add Patients
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/viewPatients">
                      View Patients
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Edit patients
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Billing --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="billingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Billing
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/billingform">
                      Create Invoice
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      View Invoices
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Payment History
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Pharmacy --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="pharmacyDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Pharmacy
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/pharmacyform">
                      Add Medicine{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Issue Medicine
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/showspharmacy">
                      Purchase Records
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Laboratory --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="labDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Laboratory
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/laboratoryform">
                      Add Test
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Test Reports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Lab History
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Reports --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="reportsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Reports
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="">
                      Patient Reports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Doctor Reports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Billing Reports
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Staff --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="staffDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Staff
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/staffform">
                      adding staff{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Shifts
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <!-- Settings --> */}
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Settings
                </Link>
              </li>
            </ul>

            {/* <!-- Logout --> */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/signupform">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}
