import React from 'react'
import { 
  Calendar, BookOpen, Truck, MessageSquare, Stethoscope, ClipboardList, 
  Pill, Search, DollarSign, Clock, Briefcase, Building, Users, UserPlus, 
  UserCheck, UserX, UserMinus, PawPrint, Clipboard, BarChart2, Settings, 
  HelpCircle, FileText, Activity, Thermometer, Syringe, Droplet, Zap, 
  CreditCard, Receipt, PieChart, UserCog, Lock, Book, MessageCircle,
  Tag, Package, Download, Video, PhoneCall, Database, LayoutDashboard,
  Bell, Star, Heart, Check, Calculator, Link
} from 'lucide-react'
import { useAppContext } from '../context/AppContext'

interface MenuItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

const Sidebar = () => {
  const { selectedMenuItem, setSelectedMenuItem, setMainContent, selectedDate, setSelectedDate, selectedHeader } = useAppContext()

  const getMenuItems = (): MenuItem[] => {
    switch (selectedHeader) {
      case 'Dashboard':
        return [
          { name: 'Calendar', icon: Calendar, color: 'text-accent-orange' }, // Orange
          { name: 'eBookings', icon: BookOpen, color: 'text-accent-teal' },  // Teal
          { name: 'Records', icon: FileText, color: 'text-accent-yellow' },  // Yellow
          { name: 'Boarding', icon: Briefcase, color: 'text-primary-dark' }, // Primary
          { name: 'Communication', icon: MessageSquare, color: 'text-accent-purple' }, // Purple
          { name: 'Hospital', icon: Building, color: 'text-secondary-dark' },  // Secondary
          { name: 'Diagnostics', icon: Activity, color: 'text-accent-pink' },  // Pink
          { name: 'Work List', icon: ClipboardList, color: 'text-accent-blue' }, // Blue
          { name: 'Medications', icon: Pill, color: 'text-accent-lavender' },  // Lavender
          { name: 'Lost And Found', icon: Search, color: 'text-accent-orange' }, // Orange
          { name: 'Billing Triggers', icon: DollarSign, color: 'text-accent-yellow' }, // Yellow
          { name: 'Time Clock', icon: Clock, color: 'text-accent-teal' },  // Teal
          { name: 'Jobs', icon: Briefcase, color: 'text-primary-dark' },  // Primary
      ];
    case 'Contacts':
      return [
        { name: 'Add Contact', icon: UserPlus, color: 'text-accent-teal' },
        { name: 'All Contacts', icon: Users, color: 'text-primary-dark' },
        { name: 'Customers', icon: UserX, color: 'text-accent-yellow' },
        { name: 'Suppliers', icon: UserX, color: 'text-accent-blue' },
        { name: 'Vets', icon: UserX, color: 'text-accent-purple' },
        { name: 'Syndicates', icon: UserX, color: 'text-accent-orange' },
        { name: 'Staff', icon: UserX, color: 'text-accent-teal' },
      ];
    case 'Patients':
      return [
        { name: 'Add Patient', icon: PawPrint, color: 'text-accent-yellow' }, // Yellow for PawPrint
        { name: 'All Patients', icon: PawPrint, color: 'text-accent-teal' },
        { name: 'Active Patients', icon: PawPrint, color: 'text-accent-orange' },
        { name: 'Inactive Patients', icon: PawPrint, color: 'text-accent-blue' },
      ];
    case 'Clinical':
      return [
        { name: 'Examinations', icon: Stethoscope, color: 'text-accent-purple' },
        { name: 'Treatments', icon: Pill, color: 'text-accent-teal' },
        { name: 'Lab Results', icon: FileText, color: 'text-accent-blue' },
        { name: 'Prescriptions', icon: ClipboardList, color: 'text-primary-dark' },
      ];
    case 'Financial':
      return [
        { name: 'Invoices', icon: FileText, color: 'text-accent-yellow' },
        { name: 'Payments', icon: CreditCard, color: 'text-accent-teal' },
        { name: 'Expenses', icon: DollarSign, color: 'text-accent-pink' },
        { name: 'Reports', icon: BarChart2, color: 'text-accent-blue' },
        { name: 'Estimates', icon: BarChart2, color: 'text-accent-orange' },
        { name: 'Customer orders', icon: BarChart2, color: 'text-accent-purple' },
        { name: 'Inventory', icon: Truck, color: 'text-primary-dark' },
        { name: 'Purchase orders', icon: FileText, color: 'text-accent-yellow' },
      ];
    case 'Reporting':
      return [
        { name: 'Payment Summary', icon: Receipt, color: 'text-accent-pink' },
        { name: 'Financial Reports', icon: PieChart, color: 'text-accent-blue' },
        { name: 'Patient Statistics', icon: BarChart2, color: 'text-accent-teal' },
        { name: 'Inventory Reports', icon: Package, color: 'text-accent-orange' },
        { name: 'Staff Performance', icon: UserCog, color: 'text-primary-dark' },
      ];
    case 'Admin':
      return [
        { name: 'Products', icon: Book, color: 'text-accent-yellow' },
        { name: 'User Management', icon: Users, color: 'text-accent-blue' },
        { name: 'Roles & Permissions', icon: Lock, color: 'text-accent-pink' },
        { name: 'System Settings', icon: Settings, color: 'text-accent-purple' },
        { name: 'Audit Logs', icon: FileText, color: 'text-primary-dark' },
      ];
    case 'Help':
      return [
        { name: 'User Guide', icon: Book, color: 'text-accent-teal' },
        { name: 'FAQs', icon: HelpCircle, color: 'text-accent-yellow' },
        { name: 'Support Ticket', icon: MessageCircle, color: 'text-accent-pink' },
        { name: 'Contact Support', icon: PhoneCall, color: 'text-accent-purple' },
      ];
      default:
        return [];
      }
    };
    const menuItems = getMenuItems();
          

        
  
  const handleMenuItemClick = (name: string) => {
    setSelectedMenuItem(name);
  
    if (name === 'Add Contact' || name === 'Add Patient' || name === 'Invoices' || name === 'Products' || name === 'Payment Summary') {
      // For 'Add Contact' and 'Add Patient', we keep the main content as their parent category
      setMainContent(name === 'Add Contact' ? 'Contacts' : name === 'Add Patient' ? 'Patients' : name === 'Invoices' ? 'Financial' : name === 'Products' ? 'Admin' : 'Reporting');
    } else {
      // For all other items, we set the main content to the clicked item's name
      setMainContent(name);
    }
  }

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      days.push(
        <button
          key={i}
          onClick={() => setSelectedDate(date)}
          className={`text-center ${i === selectedDate.getDate() ? 'bg-primary text-white' : ''} hover:bg-primary-light hover:text-white`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="font-bold mb-4 text-primary">{selectedHeader}</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button 
                className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition duration-300
                            ${selectedMenuItem === item.name 
                              ? 'bg-primary text-white' 
                              : 'text-gray-700 hover:bg-neutral-background'}`}
                onClick={() => handleMenuItemClick(item.name)}
              >
                <item.icon className={`h-4 w-4 ${item.color}`}/>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {selectedHeader === 'Dashboard' && (
      <div className="mt-4">
        <h3 className="font-bold mb-2 text-primary">
          {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="grid grid-cols-7 gap-1 text-xs">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          {renderCalendar()}
        </div>
      </div>
      )}
    </aside>
  )
}

export default Sidebar
