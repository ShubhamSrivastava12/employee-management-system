import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [employeeId, setEmployeeId] = useState(null);

  const fetchEmployees = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/employees");
    setEmployees(res.data.employees);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchEmployees();
}, []);

const addEmployee = async () => {
  try {
    await axios.post(
      "http://localhost:5000/api/employees",
      formData
    );

    fetchEmployees();
    setShowModal(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      salary: "",
    });
  } catch (err) {
    console.log(err);
  }
};

const updateEmployee = async () => {
  try {
    await axios.put(
      `http://localhost:5000/api/employees/${employeeId}`,
      formData
    );

    fetchEmployees();
    setShowModal(false);

    setIsEdit(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      salary: "",
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteEmployee = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/employees/${id}`
    );

    fetchEmployees();
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
  <div className="min-h-screen bg-slate-100 px-8 py-8">
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-4xl font-bold text-slate-800">
        Dashboard
      </h1>

      <button
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        + Add Employee
      </button>
    </div>

    {/* Employee Cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {employees.map((employee) => (
        <div
          key={employee._id}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-slate-800">
            {employee.name}
          </h2>

          <div className="mt-4 space-y-2 text-gray-600">
            <p>
              <span className="font-semibold">Designation:</span>{" "}
              {employee.designation}
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {employee.phone}
            </p>

            <p className="break-all">
              <span className="font-semibold">Email:</span>{" "}
              {employee.email}
            </p>

            <p>
              <span className="font-semibold">Salary:</span> ₹
              {employee.salary}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setEmployeeId(employee._id);
                setIsEdit(true);

                setFormData({
                  name: employee.name,
                  email: employee.email,
                  phone: employee.phone,
                  designation: employee.designation,
                  salary: employee.salary,
                });

                console.log("Selected Employee:", employee);
              }}
              className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Update
            </button>

            <button
              onClick={() => deleteEmployee(employee._id)}
              className="w-full rounded-lg bg-red-600 py-2 text-white font-semibold hover:bg-red-700 transition"
            >
              Delete Employee
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {showModal && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
    <div className="bg-white p-8 rounded-xl w-[450px] space-y-4">

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="border w-full p-2 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="border w-full p-2 rounded"
      />

      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
        className="border w-full p-2 rounded"
      />

      <input
        type="text"
        placeholder="Designation"
        value={formData.designation}
        onChange={(e) =>
          setFormData({
            ...formData,
            designation: e.target.value,
          })
        }
        className="border w-full p-2 rounded"
      />

      <input
        type="number"
        placeholder="Salary"
        value={formData.salary}
        onChange={(e) =>
          setFormData({
            ...formData,
            salary: e.target.value,
          })
        }
        className="border w-full p-2 rounded"
      />

      <div className="flex justify-end gap-4">

        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>

        <button
          onClick={isEdit ? updateEmployee : addEmployee}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {isEdit ? "Update" : "Add"}
        </button>

      </div>
    </div>
  </div>
)}

  </>
);
}

export default Dashboard;