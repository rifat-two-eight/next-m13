import Link from 'next/link';
import React from 'react';

const Address = () => {
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

  return (
    <div>
      <h2>Address of about page nested</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person) => (
          <Link key={person.id} href={`/about/address/${person.id}`}>
            <div className="card cursor-pointer border p-4 rounded-xl shadow hover:shadow-lg transition">
              <img
                src={person.pic}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold text-center mt-2">{person.name}</h2>
              <p className="text-center text-gray-600">{person.class}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Address;
