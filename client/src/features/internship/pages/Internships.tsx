import React, { useState } from "react";
import { INTERNSHIP_DETAILS } from "../../../constants/Internship.const";
import InternshipCard from "../components/InternshipCard";
import Dropdown from "../../../components/ui/DropDown";
import Search from "../../../components/ui/Search";
const Internships = () => {
  const [role, setRole] = useState("Newest");

  const handleRole = () => {};
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1>{INTERNSHIP_DETAILS.HEADING}</h1>
      <p>{INTERNSHIP_DETAILS.SUBHEADING}</p>
      <div className="flex flex-col space-y-3 xl:flex-row justify-between items-center">
        <Search />
        <div className="flex  w-full items-center space-x-3 basis-5/12 justify-end">
          <p>
            <span className="font-semibold">24</span> Jobs
          </p>
          <div className="flex justify-center items-center space-x-1">
            <small className="min-w-12.5">Sort By</small>
            <Dropdown
              options={[
                { label: "Student", value: "STUDENT" },
                { label: "Mentor", value: "MENTOR" },
              ]}
              value={role}
              onChange={handleRole}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 w-full">
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
      </div>
    </div>
  );
};

export default Internships;
