import { useState, useEffect } from "react";
import styles from "./ShopPage.module.css";
import { products, combos } from "../../data/products";
import {
  heatLevels,
  peppers,
  priceRanges,
  ingredients,
  pairs,
} from "../../data/productFilters";
import { RxCross2 as remove } from "react-icons/rx";
import { FaPlus as plus } from "react-icons/fa";
import { FaMinus as minus } from "react-icons/fa";
import Button from "../../components/common/Button/Buttons";
import Icon from "../../components/common/Icon/Icon";
import InfoPopup from "../../components/common/InfoPopup/InfoPopup";
import { GiHotSurface } from "react-icons/gi";

export default function ShopPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    heatLevel: [],
    peppers: [],
    pairs: [],
    ingredients: [],
    priceRange: null,
  });
  const [ingredientLevels, setIngredientLevels] = useState({
    Salt: 0,
    Garlic: 0,
    Smoke: 0,
    Sweet: 0,
    Vinegar: 0,
  });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState("featured");

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };

      if (filterType === "priceRange")
        newFilters.priceRange = newFilters.priceRange === value ? null : value;
      else {
        if (newFilters[filterType].includes(value))
          newFilters[filterType] = newFilters[filterType].filter(
            (item) => item !== value
          );
        else newFilters[filterType] = [...newFilters[filterType], value];
      }

      return newFilters;
    });
  };

  const handleIngredientChange = (ingredient, value) => {
    setIngredientLevels((prevLevels) => ({
      ...prevLevels,
      [ingredient]: +value,
    }));
  };

  const handleResetAllFilters = () => {
    setSelectedFilters({
      heatLevel: [],
      peppers: [],
      pairs: [],
      ingredients: [],
      priceRange: null,
    });

    setIngredientLevels({
      Salt: 0,
      Garlic: 0,
      Smoke: 0,
      Sweet: 0,
      Vinegar: 0,
    });
  };

  useEffect(() => {
    let result = [...products];

    if (selectedFilters.heatLevel.length > 0)
      result = result.filter((sauce) =>
        selectedFilters.heatLevel.includes(sauce.heatLevel)
      );

    if (selectedFilters.peppers.length > 0)
      result = result.filter((sauce) => {
        for (const pepper of sauce.peppers)
          if (selectedFilters.peppers.includes(pepper)) return true;
        return false;
      });

    if (selectedFilters.pairs.length > 0)
      result = result.filter((sauce) => {
        for (const pair of sauce.pairs)
          if (selectedFilters.pairs.includes(pair)) return true;
        return false;
      });

    if (selectedFilters.ingredients.length > 0)
      result = result.filter((sauce) => {
        for (const ingredient of selectedFilters.ingredients) {
          if (ingredientLevels[ingredient] === sauce.ingredients[ingredient])
            return true;
        }
        return false;
      });

    if (selectedFilters.priceRange) {
      const range = priceRanges.find(
        (range) => range.id === selectedFilters.priceRange
      );
      if (range)
        result = result.filter(
          (sauce) => sauce.price >= range.min && sauce.price < range.max
        );
    }

    if (sortBy === "low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "high") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredProducts(result);
  }, [selectedFilters, ingredientLevels, sortBy]);

  const totalSelectedFilters =
    selectedFilters.heatLevel.length +
    selectedFilters.peppers.length +
    selectedFilters.pairs.length +
    selectedFilters.ingredients.length +
    (selectedFilters.priceRange ? 1 : 0);

  return (
    <div className={styles.shopPage}>
      <div className={styles.shopContainer}>
        <aside>
          <h2>Filters</h2>
          <Filters title="Heat Level">
            {heatLevels.map((level) => (
              <div key={level} className={styles.filterOption}>
                <input
                  type="checkbox"
                  id={`heat-${level}`}
                  checked={selectedFilters.heatLevel.includes(level)}
                  onChange={() => handleFilterChange("heatLevel", level)}
                />
                <label htmlFor={`heat-${level}`}>{level}</label>
              </div>
            ))}
          </Filters>
          <Filters title="Peppers">
            {peppers.map((pepper) => (
              <div key={pepper} className={styles.filterOption}>
                <input
                  type="checkbox"
                  id={`pepper-${pepper}`}
                  checked={selectedFilters.peppers.includes(pepper)}
                  onChange={() => handleFilterChange("peppers", pepper)}
                />
                <label htmlFor={`heat-${pepper}`}>{pepper}</label>
              </div>
            ))}
          </Filters>
          <Filters title="Ingredients">
            {ingredients.map((ingredient) => (
              <div key={ingredient} className={styles.filterOption}>
                <input
                  type="checkbox"
                  id={`ingredient-${ingredient}`}
                  checked={selectedFilters.ingredients.includes(ingredient)}
                  onChange={() => handleFilterChange("ingredients", ingredient)}
                />
                <IngredientSlider
                  title={ingredient}
                  selectedFilters={selectedFilters}
                  setIngredientLevels={handleIngredientChange}
                />
              </div>
            ))}
          </Filters>
          <Filters title="Pairs With">
            {pairs.map((pair) => (
              <div key={pair} className={styles.filterOption}>
                <input
                  type="checkbox"
                  id={`pairs-${pair}`}
                  checked={selectedFilters.pairs.includes(pair)}
                  onChange={() => handleFilterChange("pairs", pair)}
                />
                <label htmlFor={`heat-${pair}`}>{pair}</label>
              </div>
            ))}
          </Filters>
          <Filters title="Price Range">
            {priceRanges.map((price) => (
              <div key={price.id} className={styles.filterOption}>
                <input
                  type="radio"
                  id={`price-${price.id}`}
                  checked={selectedFilters.priceRange === price.id}
                  onChange={() => handleFilterChange("priceRange", price.id)}
                />
                <label htmlFor={`price-${price.id}`}>{price.label}</label>
              </div>
            ))}
          </Filters>
          {totalSelectedFilters > 0 && (
            <Button
              className={styles.clearFilters}
              size={"small"}
              onClick={() => handleResetAllFilters()}
            >
              Clear All Filters
            </Button>
          )}
        </aside>
        <main className={styles.productContainer}>
          <div className={styles.topBar}>
            <div className={styles.activeFilters}>
              {totalSelectedFilters > 0 ? (
                <>
                  <span>Filters: </span>
                  {selectedFilters.heatLevel.map((level) => (
                    <span className={styles.activeFilter}>
                      <span>{level}</span>
                      <Icon
                        icon={remove}
                        size={10}
                        onClick={() => handleFilterChange("heatLevel", level)}
                      />
                    </span>
                  ))}
                  {selectedFilters.peppers.map((pepper) => (
                    <span className={styles.activeFilter}>
                      <span>{pepper}</span>
                      <Icon
                        icon={remove}
                        size={10}
                        onClick={() => handleFilterChange("peppers", pepper)}
                      />
                    </span>
                  ))}
                  {selectedFilters.pairs.map((pair) => (
                    <span className={styles.activeFilter}>
                      <span>{pair}</span>
                      <Icon
                        icon={remove}
                        size={10}
                        onClick={() => handleFilterChange("pairs", pair)}
                      />
                    </span>
                  ))}
                  {selectedFilters.ingredients.map((ingredient) => (
                    <span className={styles.activeFilter}>
                      <span>{ingredient}</span>
                      <Icon
                        icon={remove}
                        size={10}
                        onClick={() =>
                          handleFilterChange("ingredients", ingredient)
                        }
                      />
                    </span>
                  ))}
                  {selectedFilters.priceRange && (
                    <span className={styles.activeFilter}>
                      <span>
                        {
                          priceRanges.find(
                            (range) => range.id === selectedFilters.priceRange
                          ).label
                        }
                      </span>
                      <Icon
                        icon={remove}
                        size={10}
                        onClick={() =>
                          handleFilterChange(
                            "priceRange",
                            selectedFilters.priceRange
                          )
                        }
                      />
                    </span>
                  )}
                </>
              ) : (
                <span>No filters applied</span>
              )}
            </div>
            <div className={styles.sortBy}>
              <span>
                <label htmlFor="sort">Sort By </label>
                <select
                  name="sort"
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="high">Price High</option>
                  <option value="low">Price Low</option>
                  <option value="name">Name</option>
                </select>
              </span>
            </div>
          </div>
          <div className={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((sauce) => (
                <ProductCard sauce={sauce} type={"sauce"} />
              ))
            ) : (
              <div className={styles.noProducts}>
                <h4>No products match your selected filters</h4>
                <Button
                  className={styles.clearFilters}
                  size={"small"}
                  onClick={() => handleResetAllFilters()}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
      <section className={styles.combos}>
        <h2>Check out these combo deals!</h2>
        {combos.map((combo) => (
          <ProductCard sauce={combo} type={"combo"} />
        ))}
      </section>
    </div>
  );
}

const Filters = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterSection}>
      <span>
        <h4>{title}</h4>
        {isOpen ? (
          <Icon icon={minus} size={10} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <Icon icon={plus} size={10} onClick={() => setIsOpen(!isOpen)} />
        )}
      </span>
      {isOpen && children}
    </div>
  );
};

const IngredientSlider = ({ title, selectedFilters, setIngredientLevels }) => {
  const [level, setLevel] = useState(0);
  const handleChange = (newLevel) => {
    setLevel(newLevel);
    if (Math.floor(newLevel / 33) !== Math.floor(level / 33))
      setIngredientLevels(title, Math.floor(newLevel / 33));
  };

  return (
    <div key={title} className={`${styles.filterOption} ${styles.ingredient}`}>
      <label htmlFor={`ingredient-${title}`}>{title}</label>
      <input
        type="range"
        min="0"
        max="98"
        value={level}
        onChange={(e) => handleChange(e.target.value)}
        className={`${styles.ingredientSlider} ${
          selectedFilters.ingredients.includes(title) ? "" : styles.disabled
        }`}
      />
    </div>
  );
};

const ProductCard = ({ sauce, type }) => {
  return (
    <div key={sauce.id} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={sauce.imageURL} alt="" className="productImage" />
      </div>
      <InfoPopup fill="var(--background)" className={styles.infoPopup}>
        <h4>{sauce.name}</h4>
        <p>{sauce.description}</p>
        <p>
          {type === "sauce" ? (
            <>
              <strong>Peppers: </strong>
              {sauce.peppers.join(", ")}
            </>
          ) : (
            <>
              <strong>Sauces: </strong>
              {sauce.sauces.join(", ")}
            </>
          )}
        </p>
      </InfoPopup>
      <div className={styles.titleContainer}>
        <h3>{sauce.name}</h3>
        <p>${sauce.price.toFixed(2)}</p>
        <Button size={"small"}>Add to Cart</Button>
      </div>
    </div>
  );
};
