import { Subject } from "rxjs";

const Stepper = new Subject();
Stepper.next(1)
export default Stepper;

