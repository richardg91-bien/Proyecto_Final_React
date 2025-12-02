// Dependencies
import React, { useState, useMemo } from 'react';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useProducts } from '../../../hooks/useProducts';
import { useCartActions } from '../../../hooks/useCartActions';
import ProductCard from '../../ProductCard';
import Spinner from '../../Spinner';
import ErrorMessage from '../../ErrorMessage';
import SEO from '../../SEO';
import SearchBar from '../../SearchBar';


const AllItems = () => {
  const { products, loading, error, refetch } = useProducts();
  const { addToCart } = useCartActions();
  
  // Estado de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  
  // Estado de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  // Filtrar productos según término de búsqueda
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }
    
    const searchLower = searchTerm.toLowerCase();
    return products.filter(product => {
      const nameMatch = product.name?.toLowerCase().includes(searchLower);
      const categoryMatch = product.category?.toLowerCase().includes(searchLower);
      const descriptionMatch = product.description?.toLowerCase().includes(searchLower);
      
      return nameMatch || categoryMatch || descriptionMatch;
    });
  }, [products, searchTerm]);
  
  // Resetear a página 1 cuando cambia la búsqueda
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  if (loading) {
    return <Spinner message="Cargando productos..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  // Calcular productos para la página actual (usando productos filtrados)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Cambiar página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generar números de página para mostrar
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <>
      <SEO
        title="Todos los Productos"
        description="Explora nuestra colección completa de productos de moda y accesorios. Encuentra lo que necesitas con la mejor calidad y precio."
        keywords="productos, catálogo, moda, ropa, accesorios, tienda online"
      />
      <div className="container-fluid py-4">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
              Todos los Productos
            </h2>
            <p className="text-center text-muted" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              {searchTerm ? (
                <>Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'} para "{searchTerm}"</>
              ) : (
                <>Mostrando {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} de {filteredProducts.length} productos</>
              )}
            </p>
          </div>
        </div>
        
        {/* Barra de búsqueda */}
        <div className="row mb-4">
          <div className="col-12 col-lg-8 mx-auto">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
          </div>
        </div>

      <div className="row">
        <div className="col-12">
          <div
            className="d-flex flex-wrap justify-content-center align-items-start"
            style={{ minHeight: '60vh' }}
          >
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-search" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                <h4 className="mt-3 text-muted">No se encontraron productos</h4>
                <p className="text-muted">
                  Intenta con otros términos de búsqueda o{' '}
                  <button 
                    className="btn btn-link p-0" 
                    onClick={() => setSearchTerm('')}
                  >
                    limpia la búsqueda
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="row mt-5">
          <div className="col-12">
            <Pagination className="justify-content-center">
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
              >
                <FaChevronLeft />
              </Pagination.Prev>

              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <Pagination.Ellipsis key={`ellipsis-${index}`} disabled />
                ) : (
                  <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Ir a página ${page}`}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </Pagination.Item>
                )
              ))}

              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Página siguiente"
              >
                <FaChevronRight />
              </Pagination.Next>
            </Pagination>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default AllItems;