import React from 'react'
import EditarCuenta from './marketplace/AccionesCuenta/editar'
import EliminarCuenta from './marketplace/AccionesCuenta/eliminar'
import AgregarCuenta from './marketplace/AccionesCuenta/agregar'
import { Disable } from './account/disable'
import EditarWallet from './marketplace/AccionesWallet/editar'
import EliminarWallet from './marketplace/AccionesWallet/eliminar'
import AgregarWallet from './marketplace/AccionesWallet/agregar'
import Replicar from './Replicar/Replicar'

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
    </>
  )
}
