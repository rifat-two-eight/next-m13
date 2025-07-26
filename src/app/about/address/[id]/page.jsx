import React from "react";

const people = [
  {
    id: 1,
    name: "Rifat Hasan",
    class: "CSE 4th Year",
    pic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Ayesha Akter",
    class: "CSE 3rd Year",
    pic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Tanvir Rahman",
    class: "CSE 2nd Year",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Shyamoli Jahan",
    class: "CSE 1st Year",
    pic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const AddressDetails = ({ params }) => {
  const currentId = parseInt(params.id, 10);

  const matchedPerson = people.find((person) => person.id === currentId);

  if (!matchedPerson) {
    return (
      <div className="p-4 text-center text-red-600">
        <h2>No person found with ID: {params.id}</h2>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow">
      <img
        src={matchedPerson.pic}
        alt={matchedPerson.name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{matchedPerson.name}</h2>
      <p className="text-center text-gray-600">{matchedPerson.class}</p>
    </div>
  );
};

export default AddressDetails;
