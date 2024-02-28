import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {


 
    const [name, setName] = useState('');
    const [email, setEmail] =useState('') ;
    const [message, setMessage] = useState(' ');
    const [phone, setphone] = useState(' ');

    const handleSubmit =(e: { preventDefault: () => void; }) =>{
      e.preventDefault();
      const Service_id='service_ol8z38n';
      const template_id = 'template_glxh3eb';
      const pukey='pIyd5ILH6N9Wn06zV';

      const templateform = {
        from_name: name,
        from_email: email,
        to_name: 'Netverse',
        message: message,
        from_phone: phone,
      };
      emailjs
      .send(Service_id,template_id,templateform,pukey)
      .then((response) => {
          console.log('SUCCESS!',response);
          setName('');
          setEmail('');
          setMessage('');
          setphone('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    

  

  return (
    <div className='w-full mt-[90px] flex gap-9 py-2 px-10 max-xl:px-15 max-md:px-5 max-lg:px-5 max-md:flex-col '>
         <div className="w-1/2 flex flex-col gap-5 font-md text-xl  max-md:w-full ">
         <span className='text-2xl  relative after:block 
            afer:content-[""]
            after:absolute
            after:w-1/3
            after:h-[3px]
            raduis-md
            after:bg-red-500
            ' >
            Contactez-nous - Siège Central de Netverse :</span>
            <span className='text-2xl  relative after:block 
            afer:content-[""]
            after:absolute
            after:w-1/3
            after:h-[3px]
            ' >
            Bienvenue au siège </span>
            <span className='max-md:text-lg'>
            central de Netverse, situé dans les bureaux 610, 6ème étage du centre de
            coworking Regus, au lot B-17 de l'immeuble New Tower 1003, Centre Urbain Nord, Tunis.
            Coordonnées :
            </span>
            <div className='flex flex-col'>
            <span className='max-md:text-lg'>  <span className='text-[#000000] font-bold'> - Téléphone Fixe : </span> 71 134 534</span>
            <span className='max-md:text-lg'> <span className='text-[#000000] font-bold'> - Téléphone Fixe :</span> 56565030 </span>
            </div>
            <span className='max-md:text-lg'>
            <span className='text-[#000000] font-bold'>- E-mail : netverse2024@gmail.com</span>
            </span>  
            <span className='max-md:text-lg'>
             <span className='text-[#000000] font-bold'> Horaires d'Ouverture : </span>
            </span>
            <span className='max-md:text-lg'>
            - Du lundi au vendredi : 9h à 17h

            </span>
            <span className='max-md:text-lg'>
            - Samedi : 9h à 13h
            </span>
            <span className='max-md:text-lg'>
            N'hésitez pas à nous contacter pendant ces heures pour toutes vos questions, commentaires ou
            préoccupations. Pour une communication instantanée, utilisez le formulaire de contact ci-dessous.
            Restez informés sur les dernières actualités de Netverse en nous suivant sur nos réseaux sociaux.
            </span>
            <span className='text-[#d23a1e] font-bold'> Nous sommes impatients de vous accueillir et de partager avec vous l'expérience Netverse.</span>

        </div>
        <div className="w-1/2 max-md:w-full max-md:text-2xl max-md:border-y border-black p-5 ">

    <form className='w-full'onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className=" pb-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Reach to Us</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 ">
            This information will be displayed  so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              votre Nom et Prenom
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset
                 ring-gray-300 focus-within:ring-2 focus-within:ring-inset
                  focus-within:ring-indigo-600 max-w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block pl-5 w-full flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="name"
                    value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Num de telephone:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset
                 ring-gray-300 focus-within:ring-2 focus-within:ring-inset
                  focus-within:ring-indigo-600 max-w-full">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block pl-5 w-full flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="phone"
                    value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                focus-within:ring-inset focus-within:ring-indigo-600 max-w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block pl-5 flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="email"
                    value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Your message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                />
              </div>

            </div>

            
          </div>
        </div>

    

      
      </div>

      <div className="mt-1 flex items-center justify-center bg-primaryy ">
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Submit
</button>
      </div>
    </form>




        </div>
    </div>
  )
}
