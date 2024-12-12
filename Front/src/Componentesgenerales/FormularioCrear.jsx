import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//redux
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Reducers/sliceProductos";

const FormularioCrear = ({ showCreate, setShowCreate }) => {
  //useRef
  const imageRef = useRef(null);
  const nombreRef = useRef(null);
  const descripcionRef = useRef(null);
  const precioRef = useRef(null);

  //Redux
  const dispatch = useDispatch();

  const handleValidateForm = () => {
    const id = Math.round(Math.random() * 10000000000000);

    if (
      imageRef.current.value == "" ||
      !imageRef.current.value.startsWith("https")
    ) {
      return alert("La imagen es obligatoria y debe ser una ruta valida");
    }

    if (nombreRef.current.value == "") {
      return alert("El Nombre  es obligatorio");
    }

    if (descripcionRef.current.value == "") {
      return alert("La discripcion es obligatoria");
    }

    if (precioRef.current.value == "" || precioRef.current.value == null) {
      return alert("El precio es obligatorio");
    }

    const producto = {
      _id: id,
      imagen: imageRef.current.value,
      nombre: nombreRef.current.value,
      descripcion: descripcionRef.current.value,
      precio: precioRef.current.value,
    };

    dispatch(addProduct(producto));
    setShowCreate(false);

    imageRef.current.value = null;
    nombreRef.current.value = null;
    descripcionRef.current.value = null;
    precioRef.current.value = null;
  };

  return (
    <>
      <Modal show={showCreate} onHide={() => setShowCreate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="mb-3">
            <Form.Label htmlFor="imagen">Imagen</Form.Label>
            <input
              type="text"
              id="imagen"
              ref={imageRef}
              className="form-control"
              placeholder="Ingrese la url de la imagen"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="titulo">Titulo</Form.Label>
            <input
              type="text"
              id="titulo"
              ref={nombreRef}
              className="form-control"
              placeholder="Ingrese el nombre"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
            <input
              type="text"
              id="descripcion"
              ref={descripcionRef}
              className="form-control"
              placeholder="Ingrese una descripcion"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="precio">Precio</Form.Label>
            <input
              type="number"
              id="precio"
              ref={precioRef}
              className="form-control"
              placeholder="Ingrese el precio"
            />
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleValidateForm}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioCrear;
