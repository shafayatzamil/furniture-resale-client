import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Addproducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [conditionType, setConditionType] = useState("excilent");
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: e.target.name.value,
      image: e.target.image.value,
      resaleprice: e.target.resaleprice.value,
      orginalprice: e.target.orginalprice.value,
      mobile: e.target.mobile.value,
      year: e.target.year.value,
      category: e.target.category.value,
      location: e.target.location.value,
      condition: conditionType,
      description: e.target.description.value,
      seller: user.email,
    };

    const formData = new FormData();
    formData.append("image", product.image);

    // image set on server
    // const uri = `https://api.imgbb.com/1/upload/050a255cdef5edf8a718a86bedc039f4`;
    // // post method
    // fetch(uri, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imageData) => {
    //     console.log(imageData);
    //   });

    fetch("https://furniture-resale-server.vercel.app/addproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, { id: "zamil" });
          navigate("/dashboard/allproduct");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log(product);
  };
  return (
    <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Products Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              required
              placeholder="url"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
            {/* <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              // required
            /> */}
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Resale Price
            </label>
            <input
              type="text"
              name="resaleprice"
              required
              placeholder="price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Orginal price
            </label>
            <input
              type="text"
              name="orginalprice"
              required
              placeholder="Orginal price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="label inline-block w-40 mr-6 text-right font-bold text-gray-600">
              choose the condition
            </label>
            <select
              className="select select-bordered"
              value={conditionType}
              onChange={(e) => setConditionType(e.target.value)}
            >
              <option defaultValue={conditionType}> excillent</option>
              <option>good</option>
              <option>fair</option>
            </select>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Mobile No:
            </label>
            <input
              type="text"
              name="mobile"
              required
              placeholder="mobile"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              year of use :
            </label>
            <input
              type="text"
              name="year"
              required
              placeholder=" in Year"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              category of the products
            </label>
            <input
              type="text"
              name="category"
              required
              placeholder="category of the products"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Picup location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Picup location of the products"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Description
            </label>
            <input
              type="text"
              name="description"
              required
              placeholder="Description"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproducts;
