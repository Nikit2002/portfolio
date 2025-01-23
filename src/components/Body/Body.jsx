import React from 'react'
import Photo__Render from '../Photo__Render/Photo__Render'
import { reveal } from '../../js/scrollHandler';
import { useEffect } from 'react';
import Diploma from '../Diploma/Diploma';
import Program__Languages from '../Program__Languages/Program__Languages';
import Portfolio from '../Portfolio/Portfolio';
import { useRef } from 'react';
import Work__Tiimeline from '../Work__Timeline/Work__Tiimeline';
import { useState } from 'react';
import Preferences from '../Preferences/Preferences';
import Pricing from '../Pricing/Pricing';
import Form from '../Form/Form';
const Body = () => {
    
  useEffect(() => {
    window.addEventListener('scroll', reveal);
  }, []);
  

  return (
    <main>
        <Photo__Render />
        <Diploma />
        <Program__Languages />
        <Portfolio />
        <Work__Tiimeline />
        <Preferences />
        <Pricing />
        <Form />
    </main>
  )
}

export default Body
