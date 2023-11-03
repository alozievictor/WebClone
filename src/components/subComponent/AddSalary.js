import React from "react";
import style from "../../assets/css/addSalary.module.css";
import UserHeader from "components/Headers/UserHeader";
import { useForm, useFieldArray } from "react-hook-form";

function AddSalary() {
  const [SalaryStructure, SalaryGrade, Step1, Step2] = React.useState([1]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      detailsInput: [
        { SalaryStructure: "", SalaryGrade: "", Step1: "", Step2: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "detailsInput",
    rules: {},
  });

  const onSubmit = (data) => {
    // Handle form submission without Stepper
    console.log(data);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Add Basic SalaryAdd Basic Salary</h1>
        <p>Setup your company's payroll by filling the form below</p>
        <div className={style.formCont}>
          <div className="row">
            <div className="col-3 col-md-2 border py-2">
              <span>Salary Structure</span>
            </div>
            <div className="col-3 col-md-2 border py-2">
              <span>Salary Grade</span>
            </div>
            <div className="col-3 col-md-4 border py-2">
              <span>Step1</span>
            </div>
            <div className="col-3 col-md-4 border py-2">
              <span>step2</span>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-3 col-md-2 border py-2">
                  <span>Salary Structure</span>
                </div>
                <div className="col-3 col-md-2 border py-2">
                  <span>Salary Grade</span>
                </div>
                <div className="col-3 col-md-4 border py-2">
                  <span>Step1</span>
                </div>
                <div className="col-3 col-md-4 border py-2">
                  <span>step2</span>
                </div>
              </div>

              {fields.map((field, index) => {
                return (
                  <div className="row" key={field.id}>
                    <div
                      className={
                        errors.state
                          ? "form-group col-md-6 is-invalid"
                          : "form-group col-md-6"
                      }
                    >
                      <label htmlFor="state" className="form-label">
                        State <b className="text-success">*</b>
                      </label>
                      <select
                        className="form-control valid form-select"
                        required
                        id="PropertyType"
                        aria-invalid="false"
                        {...register("SalaryStructure", { required: true })}
                      >
                        <option value="">Please select</option>
                        <option value="ABUJA FCT">ABUJA FCT</option>
                        <option value="ABIA">ABIA</option>
                        <option value="ADAMAWA">ADAMAWA</option>
                        <option value="AKWA IBOM">AKWA IBOM</option>
                      </select>
                      <span
                        className="spanValid field-validation-valid"
                        data-valmsg-for="PropertyType"
                        data-valmsg-replace="true"
                      ></span>

                      {errors.SalaryStructure && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          <span className="text-danger block mt-2">
                            state is required
                          </span>
                        </div>
                      )}
                    </div>

                    <div
                      className={
                        errors.state
                          ? "form-group col-md-6 is-invalid"
                          : "form-group col-md-6"
                      }
                    >
                      <label htmlFor="state" className="form-label">
                        State <b className="text-success">*</b>
                      </label>
                      <select
                        className="form-control valid form-select"
                        required
                        id="PropertyType"
                        aria-invalid="false"
                        {...register("SalaryStructure", { required: true })}
                      >
                        <option value="">Please select</option>
                        <option value="ABUJA FCT">ABUJA FCT</option>
                        <option value="ABIA">ABIA</option>
                        <option value="ADAMAWA">ADAMAWA</option>
                        <option value="AKWA IBOM">AKWA IBOM</option>
                      </select>
                      <span
                        className="spanValid field-validation-valid"
                        data-valmsg-for="PropertyType"
                        data-valmsg-replace="true"
                      ></span>

                      {errors.SalaryStructure && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          <span className="text-danger block mt-2">
                            state is required
                          </span>
                        </div>
                      )}
                    </div>

                    {index > 0 && (
                      <i
                        className="btn bi bi-x mt-4 mt-5"
                        id="Btn"
                        onClick={() => remove(index)}
                      ></i>
                    )}
                  </div>
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSalary;
