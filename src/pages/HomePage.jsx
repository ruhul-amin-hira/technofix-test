import AddUser from "@/components/AddUser";
import HeroSection from "@/components/HeroSection";
import UserCard from "@/components/UserCard";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { sortFiltering } from "@/lib/sorting";

const HomePage = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [select, setSelect] = useState("name");
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    //Fetching all the user
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          //  console.log("calling...");
          setUser(data.users);
          // setFilterData(data.users)
          setError(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  //Searching and sorting
  useEffect(() => {
    if (user) {
      const arr = sortFiltering(select, user);
      if (search) {
        const filter = arr.filter((el) => {
          let name = `${el.firstName} ${el.maidenName} ${el.lastName}`;
          return name.toLowerCase().includes(search.toLowerCase());
        });
        setFilterData(filter);
      } else {
        setFilterData(arr);
      }
    }
  }, [search, user, select]);

 // console.log(filterData);


 const handleSelect = (e) =>{
  if(e == select){
    return
  }
  setSelect(e)
 }



  const renderUsers = () => {
    return (
      <div className="py-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filterData &&
          filterData.map((el) => {
            return <UserCard user={el} key={el.id} />;
          })}
      </div>
    );
  };

  return (
    <div>
      <HeroSection />
      <AddUser />
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 pt-8">
        <div className="flex-grow relative">
          <Input
            type="text"
            placeholder="Search..."
            maxLength="30"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <div
              className="absolute top-0 right-0 p-2 cursor-pointer"
              onClick={() => setSearch("")}
            >
              <X />
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <p className="inline-block pr-2 text-nowrap">Sort by</p>
            <Select onValueChange={(e) => handleSelect(e) }>
              <SelectTrigger className="md:w-[180px] w-full">
                <SelectValue placeholder="Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {loading ? <p>Loading...</p> : ""}
      {error ? <p>Error. </p> : ""}
      {renderUsers()}
      {search.length > 0 && filterData.length == 0 ? (
        <p className="text-xl text-center  pb-4">No result found</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
