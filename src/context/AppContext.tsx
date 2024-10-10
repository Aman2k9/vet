import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
}

interface Appointment {
  id: string;
  time: string;
  patient: string;
  color: string;
}

interface AppContextType {
  users: User[];
  addPatient: (patient: { name: string; species: string }) => void;
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  currentView: 'day' | 'week';
  setCurrentView: (view: 'day' | 'week') => void;
  mainContent: string;
  setMainContent: (content: string) => void;
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  selectedHeader: string;
  setSelectedHeader: (header: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [users] = useState<User[]>([
    { id: '1', name: 'Dr. White' },
    { id: '2', name: 'Walk Ins' },
    { id: '3', name: 'Nurse' },
    { id: '4', name: 'Drop Off' },
    { id: '5', name: 'Surgery' },
  ]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentView, setCurrentView] = useState<'day' | 'week'>('day');
  const [mainContent, setMainContent] = useState<string>('Dashboard');
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Dashboard');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2024, 9, 2)); // October 2, 2024
  const [selectedHeader, setSelectedHeader] = useState<string>('Dashboard');

  const addPatient = (patient: { name: string; species: string }) => {
    console.log('Adding patient:', patient);
    // Implement the logic to add a patient
  };

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  return (
    <AppContext.Provider
      value={{
        users,
        addPatient,
        appointments,
        addAppointment,
        currentView,
        setCurrentView,
        mainContent,
        setMainContent,
        selectedMenuItem,
        setSelectedMenuItem,
        selectedDate,
        setSelectedDate,
        selectedHeader,
        setSelectedHeader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
