
import React from 'react';
import HorizontalContactForm from '@/components/shared/HorizontalContactForm';

const GetStartedForm = () => {
  return (
    <div className="get-started-form section-form">
      <HorizontalContactForm
        title="Get Started Today"
        buttonText="Request a Quote"
        formColor="red"
      />
    </div>
  );
};

export default GetStartedForm;
