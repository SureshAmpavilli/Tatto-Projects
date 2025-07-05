import { useMemo, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "../components/button";
import heroImage from "../../public/vite.svg";

const ProfileBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mother Tongue");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Mother Tongue",
      options: ["Bihari", "Bengali", "Hindi Delhi", "Hindi", "Gujarati", "Kannada", "Malayalam", "Marathi", "Oriya", "Punjabi", "Rajasthani", "Tamil", "Telugu", "Hindi UP", "Hindi MP", "Konkani", "Himachali", "Haryanvi", "Assamese", "Kashmiri", "Sikkim Nepali", "Tulu"]
    },
   {
  title: "Experience",
  options: [
    "Less than 1 year",
    "1–3 years",
    "3–5 years",
    "5–10 years",
    "10+ years",
    "Retired Judge",
    "Senior Advocate",
    "Legal Consultant",
    "Law Firm Partner"
  ]
},

  {
  title: "Department",
  options: [
    "Criminal",
    "Civil",
    "Family",
    "Corporate",
    "Property",
    "IPR",           // Intellectual Property Rights
    "Cyber",
    "Tax",
    "Labour",
    "Consumer"
  ]
},


    {
      title: "City",
      options: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna"]
    },
   {
  title: "Occupation",
  options: [
    "Software",
    "Doctor",
    "CA",           // Chartered Accountant
    "Business",
    "Teacher",
    "Lawyer",
    "Govt Job",
    "Banking",
    "Architect",
    "Engineer",
    "Consultant",
    "Manager"
  ]
},

    {
      title: "State",
      options: ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "West Bengal", "Gujarat", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Punjab", "Haryana", "Bihar", "Odisha", "Kerala", "Assam"]
    },
    {
      title: "NRI",
      options: ["USA", "Canada", "UK", "Australia", "Germany", "UAE", "Singapore", "New Zealand", "Netherlands", "Sweden", "Norway", "Switzerland"]
    },
   
  ];

  const currentOptions = useMemo(() => {
    const selected = categories.find(cat => cat.title === selectedCategory);
    return selected?.options || [];
  }, [selectedCategory]);

  const filteredOptions = useMemo(() => {
    return currentOptions.filter(option =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, currentOptions]);

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary/90" />

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 bg-navy-deep/40 backdrop-blur-sm border-r border-white/10">
          <div className="p-6">
           <div className="space-y-2">
  {categories.map((category) => (
   <button
  key={category.title}
  onClick={() =>
    setSelectedCategory(
      selectedCategory === category.title ? null : category.title
    )
  }
  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-300 cursor-pointer group
    ${
      selectedCategory === category.title
        ? // Active: Light theme + Dark theme
          "bg-gray-900 !text-white/100 dark:bg-white  dark:!text-black/100"
        : // Inactive: Light theme + Dark theme
          "text-white hover:bg-black hover:text-white dark:text-white/80 dark:hover:bg-white dark:hover:text-black"
    }`}
>
  <span className="font-medium">{category.title}</span>

  <ChevronRight
    className={`h-4 w-4 transition-transform duration-300
      ${
        selectedCategory === category.title
          ? // Chevron for selected state
            "rotate-90 text-white dark:text-black"
          : // Chevron for unselected state
            "text-gray-400 group-hover:text-white dark:text-white/60 dark:group-hover:text-black"
      }`}
  />
</button>

  ))}
</div>

          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {selectedCategory ? (
            <>
              {/* Search Bar */}
            

              {/* Heading */}
             

              {/* Options Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredOptions.map((option, index) => (
                 <button
  key={`${selectedCategory}-${option}-${index}`}
  className={`
    bg-white/10 dark:bg-black/100
    backdrop-blur-sm
    rounded-lg p-4
    text-white dark:text-white
    hover:bg-black hover:scale-105 dark:hover:bg-white
    transition-all duration-300 cursor-pointer
    border border-black/10 dark:border-white/10
    hover:border-[#ff7f50]
    group animate-fadeIn
  `}
  style={{ animationDelay: `${index * 50}ms` }}
>
  <div className="font-medium group-hover:text-white dark:group-hover:text-black">
    {option}
  </div>
</button>

                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-white mb-4">Select a Category</h2>
              <p className="text-xl text-white/80">
                Choose a category from the sidebar to browse profiles
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProfileBrowser;
