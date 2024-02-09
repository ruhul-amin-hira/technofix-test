import AddUser from "@/components/AddUser";
import HeroSection from "@/components/HeroSection";
import UserCard from "@/components/UserCard";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //Fetching all the user
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          // console.log(data);
          setUser(data.users);
          setError(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const renderUsers = () => {
    return (
      <div className="py-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {" "}
        {user &&
          user.map((el) => {
            return <UserCard user={el} key={el.id} />;
          })}
      </div>
    );
  };

  return (
    <div>
      <HeroSection />
      <AddUser />
      {loading ? <p>Loading...</p> : ""}
      {error ? <p>Error. </p> : ""}
      {renderUsers()}
    </div>
  );
};

export default HomePage;
