class Employee {
    

    constructor(EmpName, Empid,EmpSalary) {
        this.EmpName=EmpName;
        this.Empid=Empid;
        this.#displaysalry(EmpSalary);
    
    }
    set EmpName(value){
        this._EmpName=`${value[0].toUpperCase()}${value.slice(1)}`;
    }
    get EmpName(){
        return this._EmpName;

    }
    #displaysalry(){
        return this.EmpSalary;
    }

}
const EmpInfo = new Employee("rajesh",121,50000);

console.log(EmpInfo);
