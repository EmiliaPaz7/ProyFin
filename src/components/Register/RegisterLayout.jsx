import { useState } from 'react';
import RegisterSteps from './RegisterSteps';
import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import AccountInfoForm from './AccountInfoForm';
import RegistrationSuccess from './RegistrationSuccess';

function RegisterLayout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos personales
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    genero: '',
    // Datos de contacto
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    // Datos de cuenta
    usuario: '',
    password: '',
    confirmPassword: '',
    tipoUsuario: 'estudiante'
  });

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Registro
            </h2>
            
            <RegisterSteps currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 1 && (
                <PersonalInfoForm 
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNextStep}
                />
              )}
              {currentStep === 2 && (
                <ContactInfoForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}
              {currentStep === 3 && (
                <AccountInfoForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                />
              )}
              {currentStep === 4 && (
                <RegistrationSuccess 
                  formData={formData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLayout;