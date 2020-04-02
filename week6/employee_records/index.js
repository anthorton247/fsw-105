let employees = []

function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

Employee.prototype.printEmployeeForm = function() {
    employees.push(this)
    console.log(this)
}
let Bob = new Employee("Bob", "Lead IT", "45/hour")
let Carol = new Employee("Carol", "Department Manager", "65/hour")
let Joseph = new Employee("Joseph", "Intern", "25/hour", "Part Time")

Bob.printEmployeeForm()
Carol.printEmployeeForm()
Joseph.printEmployeeForm()
console.log(employees)