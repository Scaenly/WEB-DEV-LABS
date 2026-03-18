# Base class Person
class Person:
    
    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city

    # Getter method for age
    def get_age(self):
        return self.age

    # Getter method for name
    def get_name(self):
        return self.name

    # Getter method for city
    def get_city(self):
        return self.city

    # Method to introduce the person
    def introduce(self):
        return f"Hello, my name is {self.get_name()}. I am {self.get_age()} years old and I live in {self.get_city()}."

    # General work method for a person
    def work(self):
        return f"{self.get_name()} is working."

    # String representation of the Person object
    def __str__(self):
        return f"Person(name={self.get_name()}, age={self.get_age()}, city={self.get_city()})"


# Student class inherits from Person
class Student(Person):
    
    def __init__(self, name, age, city, student_id, university):
        super().__init__(name, age, city)
        self.student_id = student_id
        self.university = university

    # Getter method for student ID
    def get_student_id(self):
        return self.student_id

    # Getter method for university name
    def get_university_name(self):
        return self.university

    # Overriding the work() method to represent a student's activity
    def work(self):
        return f"{self.get_name()} is studying at {self.get_university_name()}."

    # Unique method for Student class
    def study(self):
        return f"{self.get_name()} is preparing for classes at {self.get_university_name()}."

    # String representation of the Student object
    def __str__(self):
        return f"{super().__str__()}, student_id={self.get_student_id()}, university={self.get_university_name()}"


# Employee class inherits from Person
class Employee(Person):
    
    def __init__(self, name, age, city, employee_id, company, salary):
        super().__init__(name, age, city)
        self.employee_id = employee_id
        self.company = company
        self.salary = salary

    # Getter method for employee ID
    def get_employee_id(self):
        return self.employee_id

    # Getter method for company name
    def get_company_name(self):
        return self.company

    # Getter method for salary
    def get_salary(self):
        return self.salary

    # Overriding the work() method to represent an employee's activity
    def work(self):
        return f"{self.get_name()} is working at {self.get_company_name()} and earns {self.get_salary()} dollars."

    # Unique method for Employee class
    def attend_meeting(self):
        return f"{self.get_name()} is attending a meeting at {self.get_company_name()}."

    # String representation of the Employee object
    def __str__(self):
        return f"{super().__str__()}, employee_id={self.get_employee_id()}, company={self.get_company_name()}, salary={self.get_salary()} dollars"