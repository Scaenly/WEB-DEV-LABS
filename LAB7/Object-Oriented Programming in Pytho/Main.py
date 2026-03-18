from models import Person, Student, Employee


person = Person("Ali", 19, "Almaty")
student = Student("Bakhyt", 19, "Almaty", 24031652, "KBTU")
employee = Employee("Johnson", 29, "Michigan", 13889, "General Motors", 350000)

people = [person, student, employee]

for p in people:
    print(p)
    print(p.introduce())
    print(p.work())
    print()

print(student.study())
print(employee.attend_meeting())