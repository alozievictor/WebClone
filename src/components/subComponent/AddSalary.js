import style from "../../assets/css/addSalary.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import React, { useState } from "react";
import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddSalary() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    // <div className={style.container}>
    //   <div className={style.content}>
    //     <h1>Add Basic SalaryAdd Basic Salary</h1>
    //     <p>Setup your company's payroll by filling the form below</p>
    //     <div className={style.formCont}>
    //       {/* <div className="row">
    //         <div className="col-3 col-md-2 border py-2">
    //           <span>Salary Structure</span>
    //         </div>
    //         <div className="col-3 col-md-2 border py-2">
    //           <span>Salary Grade</span>
    //         </div>
    //         <div className="col-3 col-md-4 border py-2">
    //           <span>Step1</span>
    //         </div>
    //         <div className="col-3 col-md-4 border py-2">
    //           <span>step2</span>
    //         </div>
    //       </div> */}
    //       <div>
    //         <form>
    //           {/* <div className="row">
    //             <div className="col-3 col-md-2 border py-2">
    //               <span>Salary Structure</span>
    //             </div>
    //             <div className="col-3 col-md-2 border py-2">
    //               <span>Salary Grade</span>
    //             </div>
    //             <div className="col-3 col-md-4 border py-2">
    //               <span>Step1</span>
    //             </div>
    //             <div className="col-3 col-md-4 border py-2">
    //               <span>step2</span>
    //             </div>
    //           </div> */}

    //           <Table>
    //             <thead>
    //               <tr>
    //                 <th>Name</th>
    //                 <th>Email</th>
    //                 <th>Phone</th>
    //                 <th>Name</th>
    //                 <th>Email</th>
    //                 <th>Phone</th>
    //                 <th>Name</th>
    //                 <th>Email</th>
    //                 <th>Phone</th>
    //                 <th>Name</th>
    //                 <th>Email</th>
    //                 <th>Phone</th>
    //                 <th>Action</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <td className={style.td}>
    //                   <Form>
    //                     <FormGroup>
    //                       <Input
    //                         type="text"
    //                         name="name"
    //                         value={formData.name}
    //                         onChange={handleChange}
    //                         placeholder="Enter Name"
    //                       />
    //                     </FormGroup>
    //                   </Form>
    //                 </td>
    //                 <td>
    //                   <Form>
    //                     <FormGroup>
    //                       <Input
    //                         type="email"
    //                         name="email"
    //                         value={formData.email}
    //                         onChange={handleChange}
    //                         placeholder="Enter Email"
    //                       />
    //                     </FormGroup>
    //                   </Form>
    //                 </td>
    //                 <td>
    //                   <Form>
    //                     <FormGroup>
    //                       <Input
    //                         type="tel"
    //                         name="phone"
    //                         value={formData.phone}
    //                         onChange={handleChange}
    //                         placeholder="Enter Phone"
    //                       />
    //                     </FormGroup>
    //                   </Form>
    //                 </td>
    //                 <td>
    //                   <Button color="primary" onClick={handleSubmit}>
    //                     Submit
    //                   </Button>
    //                 </td>
    //               </tr>
    //               {/* Additional rows can be added similarly */}
    //             </tbody>
    //           </Table>

    //           {/* {fields.map((field, index) => {
    //             return (
    //               <div className="row" key={field.id}>
    //                 <div
    //                   className={
    //                     errors.state
    //                       ? "form-group col-md-6 is-invalid"
    //                       : "form-group col-md-6"
    //                   }
    //                 >
    //                   <label htmlFor="state" className="form-label">
    //                     State <b className="text-success">*</b>
    //                   </label>
    //                   <select
    //                     className="form-control valid form-select"
    //                     required
    //                     id="PropertyType"
    //                     aria-invalid="false"
    //                     {...register("SalaryStructure", { required: true })}
    //                   >
    //                     <option value="">Please select</option>
    //                     <option value="ABUJA FCT">ABUJA FCT</option>
    //                     <option value="ABIA">ABIA</option>
    //                     <option value="ADAMAWA">ADAMAWA</option>
    //                     <option value="AKWA IBOM">AKWA IBOM</option>
    //                   </select>
    //                   <span
    //                     className="spanValid field-validation-valid"
    //                     data-valmsg-for="PropertyType"
    //                     data-valmsg-replace="true"
    //                   ></span>

    //                   {errors.SalaryStructure && (
    //                     <div
    //                       className="invalid-feedback"
    //                       style={{ display: "block" }}
    //                     >
    //                       <span className="text-danger block mt-2">
    //                         state is required
    //                       </span>
    //                     </div>
    //                   )}
    //                 </div>

    //                 <div
    //                   className={
    //                     errors.state
    //                       ? "form-group col-md-6 is-invalid"
    //                       : "form-group col-md-6"
    //                   }
    //                 >
    //                   <label htmlFor="state" className="form-label">
    //                     State <b className="text-success">*</b>
    //                   </label>
    //                   <select
    //                     className="form-control valid form-select"
    //                     required
    //                     id="PropertyType"
    //                     aria-invalid="false"
    //                     {...register("SalaryStructure", { required: true })}
    //                   >
    //                     <option value="">Please select</option>
    //                     <option value="ABUJA FCT">ABUJA FCT</option>
    //                     <option value="ABIA">ABIA</option>
    //                     <option value="ADAMAWA">ADAMAWA</option>
    //                     <option value="AKWA IBOM">AKWA IBOM</option>
    //                   </select>
    //                   <span
    //                     className="spanValid field-validation-valid"
    //                     data-valmsg-for="PropertyType"
    //                     data-valmsg-replace="true"
    //                   ></span>

    //                   {errors.SalaryStructure && (
    //                     <div
    //                       className="invalid-feedback"
    //                       style={{ display: "block" }}
    //                     >
    //                       <span className="text-danger block mt-2">
    //                         state is required
    //                       </span>
    //                     </div>
    //                   )}
    //                 </div>

    //                 {index > 0 && (
    //                   <i
    //                     className="btn bi bi-x mt-4 mt-5"
    //                     id="Btn"
    //                     onClick={() => remove(index)}
    //                   ></i>
    //                 )}
    //               </div>
    //             );
    //           })} */}
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={style.container}>
      <div className={style.content}>
        <h1>Add Basic SalaryAdd Basic Salary</h1>
        <p>Setup your company's payroll by filling the form below</p>
        <div className={style.formCont}>
          <div>
            <form>
              <div className={style.scrollContainer}>
                <Table>
                  <thead>
                    <tr>
                      <th className={style.th}>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={style.td}>
                        <Form>
                          <FormGroup>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter Name"
                            />
                          </FormGroup>
                        </Form>
                      </td>
                      <td>
                        <Form>
                          <FormGroup>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter Email"
                            />
                          </FormGroup>
                        </Form>
                      </td>
                      <td>
                        <Form>
                          <FormGroup>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter Phone"
                            />
                          </FormGroup>
                        </Form>
                      </td>
                      <td>
                        <Button color="primary" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </td>
                    </tr>
                    {/* Additional rows can be added similarly */}
                  </tbody>
                </Table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSalary;
