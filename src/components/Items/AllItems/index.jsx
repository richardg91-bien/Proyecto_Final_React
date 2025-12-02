// Dependencies
import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useProducts } from '../../../hooks/useProducts';
import { useCartActions } from '../../../hooks/useCartActions';
import ProductCard from '../../ProductCard';
import Spinner from '../../Spinner';
import ErrorMessage from '../../ErrorMessage';
import SEO from '../../SEO';


const AllItems = () => {
  const { products, loading, error, refetch } = useProducts();
  const { addToCart } = useCartActions();
  
  // Estado de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return <Spinner message="Cargando productos..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

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
            Mostrando {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} de {products.length} productos
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div
            className="d-flex flex-wrap justify-content-center align-items-start"
            style={{ minHeight: '60vh' }}
          >
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
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