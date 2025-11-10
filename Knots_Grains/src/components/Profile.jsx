import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CarpenterProfile() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStatus) {
      window.location.href = "/signup";
    }
  }, [authStatus]);

  const carpenter = {
    name: useSelector((state) => state.auth.name),
    experience: useSelector((state) => state.auth.experience),
    location: useSelector((state) => state.auth.location),
    email: useSelector((state) => state.auth.email),
    phone: useSelector((state) => state.auth.contact),
    rating: 4.8,
    specialties: ["Furniture Design", "Home Interior", "Wood Polishing"],
    bio: useSelector((state) => state.auth.bio),
    portfolio: [
      { id: 1, img: "https://source.unsplash.com/600x400/?wood,chair" },
      { id: 2, img: "https://source.unsplash.com/600x400/?carpentry,table" },
      { id: 3, img: "https://source.unsplash.com/600x400/?woodwork,sofa" },
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-orange-100 py-10 px-4 flex justify-center">
      <Card className="max-w-4xl w-full shadow-xl rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:p-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="https://source.unsplash.com/200x200/?carpenter,man"
              alt="Carpenter"
              className="rounded-full w-40 h-40 object-cover border-4 border-amber-400 shadow-md"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-amber-800">{carpenter.name}</h1>
              <p className="text-gray-700 mt-2">{carpenter.bio}</p>
              <div className="flex items-center gap-2 mt-3 text-amber-700">
                <Star className="text-yellow-500" fill="currentColor" />
                <span>{carpenter.rating} / 5.0</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-700">
            <p><strong>Experience:</strong> {carpenter.experience}</p>
            <p className="flex items-center gap-2">
              <MapPin className="text-amber-600" size={18} /> {carpenter.location}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-amber-600" size={18} /> {carpenter.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-amber-600" size={18} /> {carpenter.phone}
            </p>
          </div>

          {/* Specialties */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {carpenter.specialties.map((skill, i) => (
                <span
                  key={i}
                  className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {carpenter.portfolio.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt="Project"
                  className="rounded-xl shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          {/* ✅ Update Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate("/update-profile")}
              className="bg-amber
              -500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Update Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
