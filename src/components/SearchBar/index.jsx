import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './SearchBar.css';

/**
 * SearchBar Component
 * 
 * Barra de búsqueda que filtra productos en tiempo real
 * mientras el usuario escribe.
 * 
 * @param {string} searchTerm - Término de búsqueda actual
 * @param {function} onSearchChange - Callback cuando cambia el término de búsqueda
 * @param {string} placeholder - Texto placeholder del input
 */
const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Buscar productos por nombre, categoría o descripción..." 
}) => {
  return (
    <div className="search-bar-container mb-4">
      <InputGroup size="lg">
        <InputGroup.Text id="search-icon">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Buscar productos"
          aria-describedby="search-icon"
          className="search-input"
        />
        {searchTerm && (
          <InputGroup.Text 
            className="clear-button" 
            onClick={() => onSearchChange('')}
            role="button"
            aria-label="Limpiar búsqueda"
          >
            <i className="bi bi-x-circle-fill"></i>
          </InputGroup.Text>
        )}
      </InputGroup>
      {searchTerm && (
        <small className="text-muted mt-2 d-block">
          <i className="bi bi-info-circle me-1"></i>
          Buscando: <strong>{searchTerm}</strong>
        </small>
      )}
    </div>
  );
};

export default SearchBar;
