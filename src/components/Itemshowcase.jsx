import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";


const categories = {
  Beverages: [
    { name: "Bang Energy", img: "items/beverages/Bang_Energy.webp" },
    { name: "Canada Dry", img: "items/beverages/Bottle_Canada_Dry.webp" },
    { name: "Cherry Coke", img: "items/beverages/Bottle_Cherry.webp" },
    { name: "Coca Cola", img: "items/beverages/Bottle_Cola.webp" },
    { name: "Diet Coke", img: "items/beverages/Bottle_Diet.webp" },
    { name: "Diet Dr Pepper", img: "items/beverages/Bottle_Dr_Pepper_Diet.webp" },
    { name: "Dr Pepper", img: "items/beverages/Bottle_Dr_Pepper.webp" },
    { name: "Fanta", img: "items/beverages/Bottle_Fanta.webp" },
    { name: "Fairlife", img: "items/beverages/Fairlife.webp" },
    { name: "Minute Maid Blue Raspberry", img: "items/beverages/Minute_Maid_Blue.webp" },
    { name: "Minute Maid Lemonade", img: "items/beverages/Minute_Maid.webp" },
    { name: "Monster Energy", img: "items/beverages/Monster_Energy.webp" },
    { name: "Mountain Dew", img: "items/beverages/Mountain_Dew.webp" },
    { name: "Peace Tea", img: "items/beverages/Peace_Tea.webp" },
    { name: "Powerade Fruit Punch", img: "items/beverages/Powerade_Red.webp" },
    { name: "Powerade Lemon Lime", img: "items/beverages/Powerade_Yellow.webp" },
    { name: "Smart Water", img: "items/beverages/Smart_Water.webp" },
    { name: "Sprite", img: "items/beverages/Sprite.webp" },
    { name: "Vitamin Water", img: "items/beverages/Vitamin_Water.webp" },
    { name: "Monster Zero Ultra", img: "items/beverages/White_Monster.webp" },
  ],
  Snacks: [
    { name: "Cape Cod Chips", img: "items/snacks/CapeCod.webp" },
    { name: "Cheeto Crunch", img: "items/snacks/Cheeto_Crunch.webp" },
    { name: "Cheeto Puffs", img: "items/snacks/Cheeto_Puffs.webp" },
    { name: "Clif Bar Nut Butter", img: "items/snacks/Clif_Butter.webp" },
    { name: "Clif Bars", img: "items/snacks/Cliff_Bar.webp" },
    { name: "Clif Builders", img: "items/snacks/Cliff_Builders.webp" },
    { name: "Coffee Cakes", img: "items/snacks/Coffee_Cakes.webp" },
    { name: "Cupcakes", img: "items/snacks/Cupcakes.webp" },
    { name: "Dentyne Peppermint", img: "items/snacks/Dentyne_Peppermint.webp" },
    { name: "Dentyne Spearmint", img: "items/snacks/Dentyne_Spearmint.webp" },
    { name: "Doritos", img: "items/snacks/Doritos.webp" },
    { name: "Fritos Twists", img: "items/snacks/Fritos_Twists.webp" },
    { name: "Fruit Chews", img: "items/snacks/Fruit_Chews.webp" },
    { name: "Funyuns", img: "items/snacks/Funyuns.webp" },
    { name: "Gushers", img: "items/snacks/Gushers.webp" },
    { name: "Hershey Kisses", img: "items/snacks/Hershey_Kisses.webp" },
    { name: "Honey Bun", img: "items/snacks/Honey_Bun.webp" },
    { name: "Ice Breakers", img: "items/snacks/Ice_Breakers.webp" },
    { name: "Jack Links", img: "items/snacks/Jack_Links.webp" },
    { name: "KitKat", img: "items/snacks/KitKat.webp" },
    { name: "Lays Baked", img: "items/snacks/Lays_Baked.webp" },
    { name: "Lays Sourcream", img: "items/snacks/Lays_Sourcream.webp" },
    { name: "Mike and Ikes", img: "items/snacks/Mike_and_Ikes.webp" },
    { name: "Mini Donuts", img: "items/snacks/Mini_Donuts.webp" },
    { name: "MnM Peanut", img: "items/snacks/MnM_Peanut.webp" },
    { name: "Nature Valley Bars", img: "items/snacks/Nature_Valley.webp" },
    { name: "Planters Peanuts", img: "items/snacks/Planters.webp" },
    { name: "PopChips", img: "items/snacks/PopChips.webp" },
    { name: "Protein Bars", img: "items/snacks/Protein_Bar.webp" },
    { name: "Reeses Cups", img: "items/snacks/Reeses_Cups.webp" },
    { name: "Reeses Pieces", img: "items/snacks/Reeses_Pieces.webp" },
    { name: "Ruffles", img: "items/snacks/Ruffles.webp" },
    { name: "Snickers Mini", img: "items/snacks/Snickers_Mini.webp" },
    { name: "Snickers", img: "items/snacks/Snickers.webp" },
    { name: "Stacys Pita Chips", img: "items/snacks/Stacys_Pita_Chips.webp" },
    { name: "SunChips", img: "items/snacks/SunChips.webp" },
    { name: "Swedish Fish", img: "items/snacks/Swedish_Fish.webp" },
    { name: "Tropical Plantains", img: "items/snacks/Tropical_Plantains.webp" },
    { name: "Twizzlers", img: "items/snacks/Twizzlers.webp" },
    { name: "Volpi Snacks", img: "items/snacks/Volpi.webp" },
  ],
  Food: [
    { name: "Sausage Egg and Cheese Sandwich", img: "items/food/food1.webp" },
    { name: "Chicken Rice and Cheese Burrito", img: "items/food/food2.webp" },
    { name: "Fried Chicken Sandwich", img: "items/food/food3.webp" },
    { name: "Traditional Itallian Sub", img: "items/food/food4.webp" },
    { name: "Deli Meat Sandwich", img: "items/food/food5.webp" },
    { name: "Sausage and Pepperoni Calzone", img: "items/food/food6.webp" },
    { name: "Smoked Ham and Swiss Sub", img: "items/food/food7.webp" },
    { name: "Italian Style Sub", img: "items/food/food8.webp" },
    { name: "Chicken Caesar Wrap", img: "items/food/food9.webp" },
    { name: "Turkey Club Wrap", img: "items/food/food10.webp" },
    { name: "Chipotle Chicken Wrap", img: "items/food/food11.webp" },
    { name: "Mozzeralla Pepperoni Rolltini", img: "items/food/food12.webp" },
  ],
};

function NoScriptFallback() {
  return (
    <noscript>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {Object.entries(categories).map(([category, items]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {items.map((item, idx) => (
                <div
                  key={`${category}-noscript-${idx}`}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center"
                >
                  <div className="w-40 h-40 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-60 h-60 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </noscript>
  );
}


export default function Itemshowcase() {
  const [activeCategory, setActiveCategory] = useState("Beverages");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // update itemsPerPage responsively
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(4);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // chunk items into pages (array of pages, each page is an array of items)
  const chunkArray = (arr, size) => {
    if (!arr || size <= 0) return [];
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const items = categories[activeCategory] || [];
  const pages = chunkArray(items, itemsPerPage);
  const totalPages = Math.max(1, pages.length);

  // reset page on category or itemsPerPage change
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, itemsPerPage]);

  // read hash on load
  useEffect(() => {
    const updateCategoryFromHash = () => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        const category = Object.keys(categories).find(
          (cat) => cat.toLowerCase() === hash
        );
        if (category) setActiveCategory(category);
      }
    };

    // initialize on load
    updateCategoryFromHash();

    // listen for hash changes
    window.addEventListener("hashchange", updateCategoryFromHash);

    // cleanup listener on unmount
    return () => window.removeEventListener("hashchange", updateCategoryFromHash);
  }, []);


  // navigation
  const handlePrevious = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  const handleTabClick = (cat) => {
    setActiveCategory(cat);
    window.history.replaceState(null, "", `#${cat.toLowerCase()}`);
  };

  // touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = Math.abs(touchStartY.current - touchEndY);

    // horizontal swipe only, threshold 50px
    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentPage < totalPages - 1) {
        handleNext();
      } else if (deltaX < 0 && currentPage > 0) {
        handlePrevious();
      }
    }
  };

  return (
<>
    {/* Hide JS UI if JS is disabled */}
    <noscript>
      <style>{`
        .js-only {
          display: none !important;
        }
      `}</style>
    </noscript>
  <NoScriptFallback />
    <div className="js-only max-w-6xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex space-x-3 mb-8 overflow-x-auto">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`px-6 py-3 rounded-lg font-medium transition whitespace-nowrap ${
              activeCategory === cat
                ? "bg-red-600 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left arrow */}
        {currentPage > 0 && (
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Viewport */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track: do NOT set width = totalPages*100% here */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {/* each page is exactly the viewport width (100%) */}
            {pages.map((pageItems, pageIdx) => (
              <div
                key={pageIdx}
                className="w-full flex-shrink-0 px-2 p-4"
                style={{ width: "100%" }}
              >
                {/* grid inside the page - responsive columns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                  {pageItems.map((item, idx) => (
                    <div
                      key={`${activeCategory}-${pageIdx}-${idx}`}
                      className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
                    >
                      <div className="w-40 h-40 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-60 h-60 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                  {/* If page has fewer items than grid slots, add empty placeholders so layout looks even (optional) */}
                  {Array.from({ length: Math.max(0, itemsPerPage - pageItems.length) }).map((_, i) => (
                    <div key={`ph-${i}`} className="hidden md:block" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentPage === idx ? "bg-red-600 scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className="md:hidden text-center mt-4 text-sm text-gray-500">Swipe to browse items</div>
    </div>
</>
  );
}