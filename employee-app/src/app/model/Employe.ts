export class Employee {

    empId: number;
    empName: string;
    emailId: string;
    age: number;

    constructor(empId: number, empName: string, emailId: string, age: number) {
        this.empName = empName;
        this.empId = empId;
        this.emailId = emailId;
        this.age = age;

    }

}