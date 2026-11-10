function UserCard({ name, city, age, email, phone }) {
  const initial = name?.trim()?.charAt(0)?.toUpperCase() || "?";

  return (
    <article className="user-card">
      <div className="card-top">
        <div className="user-avatar">
          {initial}
        </div>

        <span className="status">
          <span className="status-dot"></span>
          Active
        </span>
      </div>

      <h2>{name}</h2>
      <p className="user-location">{city}</p>

      <div className="user-details">
        <div className="detail-row">
          <span className="detail-label">Age</span>
          <span className="detail-value">{age} years</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Email</span>
          <a href={`mailto:${email}`} className="detail-value">
            {email}
          </a>
        </div>

        <div className="detail-row">
          <span className="detail-label">Phone</span>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="detail-value">
            {phone}
          </a>
        </div>
      </div>
    </article>
  );
}

export default UserCard;