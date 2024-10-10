import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'
import PatientForm from './components/PatientForm'
import { useAppContext } from './context/AppContext'
import ContactForm from './components/ContactForm'
import InvoiceForm from './components/InvoiceForm';
import ProductForm from './components/ProductForm'; 
import PaymentSummary from './components/PaymentSummary';

import { Plus } from 'lucide-react'

function App() {
  const { mainContent, addPatient } = useAppContext()
  const [showPatientForm, setShowPatientForm] = React.useState(false)

  const renderContent = () => {
    switch (mainContent) {
      case 'Dashboard':
        return <div className="p-4">Dashboard content goes here.</div>
      case 'Clinical':
        return <div className="p-4">Clinical content goes here.</div>
      case 'Financial':
        return <InvoiceForm />
      case 'Reporting':
        return <PaymentSummary />
      case 'Admin':
        return <ProductForm />
      case 'Help':
        return <div className="p-4">Help content goes here.</div>
      case 'Calendar':
        return <Calendar />
      case 'Contacts':
        return <ContactForm /> 
      case 'Patients':
        return <PatientForm />   
      case 'Invoices':
        return <div className="p-4">Invoices content goes here.</div>
      default:
        return <div className="p-4">Content for {mainContent} goes here.</div>
    }
  }

  const handleAddPatient = (patient: { name: string; species: string }) => {
    addPatient(patient)
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1>{mainContent}</h1>
            {mainContent === 'Patients' && (
              <button
                onClick={() => setShowPatientForm(true)}
                className="btn flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Patient
              </button>
            )}
          </div>
          {renderContent()}
        </main>
      </div>
      {showPatientForm && (
        <PatientForm
          onClose={() => setShowPatientForm(false)}
          onAddPatient={handleAddPatient}
        />
      )}
    </div>
  )
}

export default App