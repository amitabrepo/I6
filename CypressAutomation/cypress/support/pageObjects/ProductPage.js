class ProductPage
{

checkOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

fillProductPageDetails(){
    console.log('product console page');
}
}
export default ProductPage;
