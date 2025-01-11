import { User } from "lucide-react";

export default function ProfileIcon() {
  return (
    <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <span className="sr-only">View profile</span>
      <User className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
