import UserCard from "./Component/UserCard";
import "./App.css";

const users = [
  {
    id: 1,
    name: "Arun Kumar",
    city: "Chennai",
    age: 25,
    email: "arun.kumar@example.com",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Priya Sharma",
    city: "Coimbatore",
    age: 23,
    email: "priya.sharma@example.com",
    phone: "+91 98765 12340",
  },
  {
    id: 3,
    name: "Rahul Raj",
    city: "Bengaluru",
    age: 27,
    email: "rahul.raj@example.com",
    phone: "+91 98765 67890",
  },
  {
    id: 4,
    name: "Divya S",
    city: "Salem",
    age: 24,
    email: "divya.s@example.com",
    phone: "+91 98765 24680",
  },
  {
    id: 5,
    name: "Karthik M",
    city: "Erode",
    age: 26,
    email: "karthik.m@example.com",
    phone: "+91 98765 13579",
  },
  {
    id: 6,
    name: "Sneha R",
    city: "Tiruppur",
    age: 22,
    email: "sneha.r@example.com",
    phone: "+91 98765 97531",
  },
];

function App() {
  return (
    <main className="app-container">
      <header className="header">
        <span className="eyebrow">REACT.JS PRACTICE</span>
        <h1>User Profiles</h1>
        <p>
          Learn how React props pass data from a
          parent component to reusable child components.
        </p>
      </header>

      <section className="user-container">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </section>

      <footer className="footer">
        Built with React components and props.
      </footer>
    </main>
  );
}

export default App;