
// reactstrap components
// import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="container header pb-8 pt-5 pt-md-6">
          <h1 className="h1 font-weight-bold">Dashboard</h1>
          <div className="container header-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 border card-stats mb-4 mb-xl-0 h-100 px-3 py-4 rounded bg-white" style={{width:"50%"}}>
                <div>
                  <h4 className="text-capitalize mb-0 text-dark">Head Count</h4>
                  <h1 className="h1 font-weight-bold mb-0">79</h1>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 border card-stats mb-4 mb-xl-0 h-100 px-3 py-4 rounded bg-white ">
                <div>
                  <h4 className="text-capitalize mb-0 text-dark">Wallet</h4>
                  <h1 className="h1 font-weight-bold mb-0">₦ 400.00</h1>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 border card-stats mb-4 mb-xl-0 h-100 px-3 py-4 rounded bg-white ">
                <div>
                  <h4 className="text-capitalize mb-0 text-dark">Absenteeism</h4>
                  <h1 className="h1 font-weight-bold mb-0">100.00%</h1>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 border card-stats mb-4 mb-xl-0 h-100 px-3 py-4 rounded bg-white ">
                <div>
                  <h4 className="text-capitalize mb-0 text-dark">Average Employee Tenure</h4>
                  <h1 className="h1 font-weight-bold mb-0">11.2 Year(s)</h1>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Header;
