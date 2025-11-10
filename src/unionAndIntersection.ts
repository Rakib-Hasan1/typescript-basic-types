// Union

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Show Admin Dashboard";
  } else if (role === "user") {
    return "Show User Dashboard";
  } else {
    return "Show guest Dashboard";
  }
};

console.log(getDashboard("guest"));

// Intersection &

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type ProjectManager = Employee & Manager;

const chowdhuryShaheb: ProjectManager = {
  name: "Chowdhury Shaheb",
  id: 321,
  phoneNo: "01776073928",
  designation: "Project Manager",
  teamSize: 10,
};
