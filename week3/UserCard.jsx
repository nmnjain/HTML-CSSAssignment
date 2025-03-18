const UserCard = ({ name, email }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md max-w-sm bg-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  