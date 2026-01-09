import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  GraduationCap,
  Users,
  User,
  Mail,
  ClipboardList,
  BadgeCheck,
  UserCog,
} from "lucide-react";
import { ReactNode } from "react";

export type UserRole = "STUDENT" | "MENTOR" | "PLACEMENT_OFFICER";

interface NavItem {
  title: string;
  path: string;
  role: UserRole[];
  icon:ReactNode;
}

export const NAVBAR_ITEMS: NavItem[] = [
  // ======================
  // STUDENT
  // ======================
  {
    title: "Dashboard",
    path: "/student/dashboard",
    role: ["STUDENT"],
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: "Internships",
    path: "/internships",
    role: ["STUDENT"],
    icon: <Briefcase size={18} />,
  },
  {
    title: "My Applications",
    path: "/applications",
    role: ["STUDENT"],
    icon: <ClipboardList size={18} />,
  },
  {
    title: "Completed",
    path: "/completed",
    role: ["STUDENT"],
    icon: <BadgeCheck size={18} />,
  },
  {
    title: "Profile",
    path: "/profile",
    role: ["STUDENT"],
    icon: <User size={18} />,
  },

  // ======================
  // MENTOR
  // ======================
  {
    title: "Dashboard",
    path: "/mentor/dashboard",
    role: ["MENTOR"],
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: "Internships",
    path: "/internships",
    role: ["MENTOR"],
    icon: <Briefcase size={18} />,
  },
  {
    title: "Mentees",
    path: "/mentees",
    role: ["MENTOR"],
    icon: <Users size={18} />,
  },
  {
    title: "Inbox",
    path: "/inbox",
    role: ["MENTOR"],
    icon: <Mail size={18} />,
  },
  {
    title: "Profile",
    path: "/profile",
    role: ["MENTOR"],
    icon: <UserCog size={18} />,
  },

  // ======================
  // PLACEMENT OFFICER
  // ======================
  
  {
    title: "Internships",
    path: "/internships",
    role: ["PLACEMENT_OFFICER"],
    icon: <Briefcase size={18} />,
  },
  {
    title: "New Internship",
    path: "/new-internship",
    role: ["PLACEMENT_OFFICER"],
    icon: <PlusCircle size={18} />,
  },
  {
    title: "Dashboard",
    path: "/placement/dashboard",
    role: ["PLACEMENT_OFFICER"],
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: "Students",
    path: "/students",
    role: ["PLACEMENT_OFFICER"],
    icon: <GraduationCap size={18} />,
  },
  {
    title: "Mentors",
    path: "/mentors",
    role: ["PLACEMENT_OFFICER"],
    icon: <Users size={18} />,
  },
];
