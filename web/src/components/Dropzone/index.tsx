import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {FiUpload} from 'react-icons/fi';

import './styles.css'

const Dropzone= () => {

    const [selectedFiles]

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept: 'image/*'
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />             
       
        <p>
        <FiUpload />
        Imagem do Estabelecimento ...
        </p>              
    </div>
  )
}

export default Dropzone;