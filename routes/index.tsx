export default function Home() {
  return (
    <section class="flex flex-col mobile:w-[335px] h-fit rounded-lg">
      <div role="region" alt="Perfume" class="desktop:bg-product-desktop mobile:bg-product-mobile mobile:h-[240px] w-full bg-cover rounded-t-lg" />
      <div role="group" class="flex flex-col p-6 gap-3 bg-white rounded-b-md">
        <p class="font-sans text-2xs tracking-[.2rem] uppercase text-dark-grayish-blue">Perfume</p>
        <h1 class="font-serif text-3xl font-bold leading-[1.8rem] text-very-dark-blue">Gabrielle Essence Eau De Parfum</h1>
        <p class="font-sans text-dark-grayish-blue text-base leading-normal text-wrap">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
        </p>
        <div class="grid grid-cols-2 w-full h-fit items-center">
          <div class="text-dark-cyan font-serif text-3xl font-bold">$149.99</div>
          <div class="text-dark-grayish-blue line-through text-sm">$169.99</div>
        </div>
        <footer class="bg-dark-cyan p-3 text-center text-white rounded-md text-xs font-bold h-fit flex flex-row justify-center gap-3">
          <image alt="Cart icon" src="/icon-cart.svg" />
          <p>Add to Cart</p>
        </footer>
      </div>
    </section>
  );
}
