import { Bookmark } from "lucide-react";
import GOOGLE_LOGO from "../../../assets/CIPMS_WEB_GOOGLE.svg";
import Button from '../../../components/ui/Button'
const InternshipCard = () => {
  return (
    <div className="min-w-50 shadow-lg p-2 space-y-3 rounded-lg dark:bg-dark">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={GOOGLE_LOGO} alt="company image" className="w-9 h-9" />
          <span className="flex flex-col space-y-0">
            <p className="">Google</p>
            <small className="">Chennai</small>
          </span>
        </div>
        <div>
          <Bookmark size={23} strokeWidth={1} />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col space-y-2">
        <h3>Software Engineer</h3>
        <small className="text-muted-light dark:text-muted-dark">
          $60000 - $70000
        </small>
        <div className="flex items-center flex-wrap space-x-3">
          <span className="bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 px-2 rounded-full">
            Fulltime
          </span>
          <span className="bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 px-2 rounded-full">
            Onsite
          </span>
          <span className="bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 px-2 rounded-full">
            Freshers
          </span>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <small>2 Months ago</small>
        <Button size="md" className="rounded-full" >
            Apply Now
        </Button>
      </div>
    </div>
  );
};

export default InternshipCard;
