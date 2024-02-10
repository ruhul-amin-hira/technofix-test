import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const UserForm = () => {
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    companyName: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    companyName: "",
  });

  const sendPostReq = (data) => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data
      }),
    })
      .then((res) => res.json())
      .then((data) =>{
        setLoading(false)
        console.log(data)
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0], // Store only the first selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    if(loading) return;
    setLoading(true)
    e.preventDefault();
    // Validate form fields
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setLoading(false)
      setErrors(newErrors);
    } else {
      // Form is valid and sending to backend
      console.log("Form data:", formData);
      sendPostReq(formData);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        companyName: "",
        image: null,
      });
      setErrors({});
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex justify-center pt-3">
      <form onSubmit={handleSubmit} className="p-2 md:w-2/4 w-full">
        <div className="grid w-full items-center gap-1.5 pb-3">
          <Label htmlFor="picture">Picture</Label>
          <Input
            id="picture"
            type="file"
            name="image"
            accept="image/*"
            className="file:bg-white"
            onChange={handleChange}
            ref={fileInputRef}
          />
        </div>

        <div className="pb-3">
          <Label>First Name:</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="text-rose-600 pt-1 inline-block">
              {errors.firstName}
            </span>
          )}
        </div>
        <div className="pb-3">
          <Label>Last Name:</Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="text-rose-600 pt-1 inline-block">
              {errors.lastName}
            </span>
          )}
        </div>
        <div className="pb-3">
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-rose-600 pt-1 inline-block">
              {errors.email}
            </span>
          )}
        </div>
        <div className="pb-3">
          <Label>Address:</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span className="text-rose-600 pt-1 inline-block">
              {errors.address}
            </span>
          )}
        </div>
        <div className="pb-3">
          <Label>Company Name:</Label>
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && (
            <span className="text-rose-600 pt-1 inline-block">
              {errors.companyName}
            </span>
          )}
        </div>
        <Button type="submit">{loading ? "Loading.." : "Submit"}</Button>
      </form>
    </div>
  );
};

export default UserForm;
