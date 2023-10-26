import React from 'react'
import { BreadCrumbs } from './Breadcrumbs';
import { Foot } from './Foot';
import { MainComponent } from './MainComponent';
import {NavBar} from './NavBar'
import { SlidesBtn } from './SlidesBtn';

export const Homepage = () => {
  return (
    <>
    <NavBar/>
    <BreadCrumbs/>
    <MainComponent/>   
    <SlidesBtn/> 
    <Foot/>    
    </>
  )
}
