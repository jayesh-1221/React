import React from 'react';

const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Bob Smith", role: "Backend Developer", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "Carol Lee", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/3.jpg" },
];

function Team() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Our Team</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        {teamMembers.map(member => (
          <div key={member.id} style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            width: "180px",
            textAlign: "center",
            background: "#fafafa"
          }}>
            <img
              src={member.img}
              alt={member.name}
              style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
            />
            <h3 style={{ margin: "0.5rem 0" }}>{member.name}</h3>
            <p style={{ color: "#555" }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;