'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faChartSimple, faFileLines } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menuItems = [
  { 
    label: 'Dashboard', 
    icon: <FontAwesomeIcon icon={faChartSimple} />,
    path: '/dashboard', 
    disabled: true 
  },
  { 
    label: 'Internships', 
    icon: <FontAwesomeIcon icon={faFileLines} />,
    path: '/internships', 
    disabled: true 
  },
  { 
    label: 'Skill Tests', 
    icon:<FontAwesomeIcon icon={faAward} />,
    path: '/skill-tests', 
    disabled: false 
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-white border-r border-t border-gray-200 fixed left-0 top-26 ">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className={`flex items-center px-4 py-2 text-lg rounded-lg ${
                item.disabled 
                  ? 'text-gray-400 cursor-not-allowed'
                  : pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.disabled ? (
                <span className="flex items-center gap-6">
                  {item.icon} {item.label}
                </span>
              ) : (
                <Link href={item.path} className="w-full flex items-center gap-6">
                  {item.icon} {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 