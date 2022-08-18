import React from 'react';
import InforContact from '../components/contact/info_contact';
import FormContact from '../components/contact/form_contact';



const ContactPage = () => {
  return (
        <section className='contact_section'>
            <InforContact/>
            <FormContact/>
        </section>
    );
}
export default ContactPage