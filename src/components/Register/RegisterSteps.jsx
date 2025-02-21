function RegisterSteps({ currentStep }) {
    const steps = [
      'Datos Personales',
      'Contacto',
      'Cuenta',
      'Finalizar'
    ];
  
    return (
      <ul className="steps steps-horizontal w-full">
        {steps.map((step, index) => (
          <li 
            key={step}
            className={`step ${currentStep > index ? 'step-primary' : ''}`}
            data-content={currentStep > index ? "✓" : (index + 1)}
          >
            <span className="hidden sm:inline">{step}</span>
          </li>
        ))}
      </ul>
    );
  }
  
  export default RegisterSteps;