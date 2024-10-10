import React from 'react';
import {
  Stethoscope,
  LayoutDashboard,
  Users,
  PawPrint,
  Clipboard,
  DollarSign,
  BarChart2,
  Settings,
  HelpCircle,
  Search,
  Bell,
  RotateCcw,
  Printer,
  Mail,
  User,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { selectedHeader, setSelectedHeader, setSelectedMenuItem } = useAppContext();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, color: 'text-accent-orange' }, // Orange for dashboard
    { name: 'Contacts', icon: Users, color: 'text-accent-teal' },              // Teal for contacts
    { name: 'Patients', icon: PawPrint, color: 'text-accent-yellow' },         // Yellow for patients
    { name: 'Clinical', icon: Clipboard, color: 'text-accent-purple' },        // Purple for clinical
    { name: 'Financial', icon: DollarSign, color: 'text-accent-pink' },        // Pink for financial
    { name: 'Reporting', icon: BarChart2, color: 'text-accent-blue' },         // Blue for reporting
    { name: 'Admin', icon: Settings, color: 'text-secondary' },                // Secondary color for admin
    { name: 'Help', icon: HelpCircle, color: 'text-accent-lavender' },         // Lavender for help
  ];

  const handleMenuItemClick = (name: string) => {
    setSelectedHeader(name);
    setSelectedMenuItem(name);
  };

  return (
    <header className="bg-primary text-white p-2">
      <div className="flex items-center justify-between">
        {/* Clinic Name Section */}
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-6 w-6 text-accent-teal opacity-100 fill-current" /> {/* Teal fill */}
          <span className="font-bold text-xl">Chandigarh Clinic</span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`p-2 hover:bg-primary-light rounded-lg flex flex-col items-center transition duration-300 ${
                selectedHeader === item.name ? 'bg-primary-light' : ''
              }`}
              onClick={() => handleMenuItemClick(item.name)}
            >
              <item.icon className={`h-5 w-5 ${item.color} opacity-100 `} /> {/* Fully colored with fill */}
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Action Icons Section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Search className="h-5 w-5 text-accent-yellow hover:text-accent-yellow-light opacity-100 " /> {/* Yellow fill */}
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Bell className="h-5 w-5 text-accent-pink hover:text-accent-pink-light opacity-100 " /> {/* Pink fill */}
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <RotateCcw className="h-5 w-5 text-accent-teal hover:text-accent-teal-light opacity-100 " /> {/* Teal fill */}
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Printer className="h-5 w-5 text-accent-purple hover:text-accent-purple-light opacity-100 " /> {/* Purple fill */}
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Mail className="h-5 w-5 text-accent-orange hover:text-accent-orange-light opacity-100 " /> {/* Orange fill */}
          </button>

          {/* Notification and User Profile Section */}
          <div className="flex items-center">
            <span className="bg-secondary rounded-full px-2 py-1 text-xs mr-2 text-primary font-bold">
              99+
            </span>
            <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
              <User className="h-5 w-5 text-accent-blue hover:text-accent-blue-light opacity-100 fill-current" /> {/* Blue fill */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

