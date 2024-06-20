import React from 'react'
import EditarCuenta from './marketplace/AccionesCuenta/editar'
import EliminarCuenta from './marketplace/AccionesCuenta/eliminar'
import AgregarCuenta from './marketplace/AccionesCuenta/agregar'
import { Disable } from './account/disable'
import EditarWallet from './marketplace/AccionesWallet/editar'
import EliminarWallet from './marketplace/AccionesWallet/eliminar'
import AgregarWallet from './marketplace/AccionesWallet/agregar'
import Replicar from './Replicar/Replicar'
import { Step1 } from './account/reactivate/step1'
import { Step2 } from './account/reactivate/step2'
import { Step3 } from './account/reactivate/step3'
import { Step4 } from './account/reactivate/step4'
import { Step5 } from './account/reactivate/step5'
import { Step6 } from './account/reactivate/step6'
import { Step7 } from './account/reactivate/step7'

export default function Modales() {
  return (
    <>
        <EditarCuenta />
          <EliminarCuenta />
          <AgregarCuenta />
          <Disable />
          <EditarWallet />
          <EliminarWallet />
          <AgregarWallet />
          <Replicar />
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
          <Step7 />
    </>
  )
}
