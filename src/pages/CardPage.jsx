import { UserTable } from "@/components/UserTable";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // console.log(location);
  useEffect(() => {
    //check if user data is available in state or navigate to home page
    if (location.state && location.state.firstName) {
      setLoading(false);
    } else {
      navigate("/", { replace: true });
    }
  }, []);


  const renderTable = () => {
    return (
      <>
        <h1 className="text-center text-2xl md:text-4xl">
          {location.state.firstName +
            " " +
            location.state.maidenName +
            " " +
            location.state.lastName}
        </h1>
        <div className="flex md:flex-row flex-col mt-12 border border-slate-700">
          <div className="flex justify-center py-4 md:w-2/4 w-full shrink-0 md:border-r">
            <img
              className="max-w-[50%] self-center"
              src={location.state.image}
              alt={location.state.firstName}
              loading="lazy"
            />
          </div>
          <div className="md:w-2/4 w-full">
            {!loading && <UserTable user={location.state} />}
          </div>
        </div>
      </>
    );
  };


  return (
    <div className="py-8">{loading ? <p>Loading...</p> : renderTable()}</div>
  );
};

export default CardPage;
