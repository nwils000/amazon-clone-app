import React from "react";
import { Link } from "react-router-dom";
import PokemonAdd from "./PokemonAdd";
export default function Body({ handleAddToCart }) {
  return (
    <div className="body__container">
      <PokemonAdd />
      <div className="body__images">
        <div className="body__grid a">
          <h3>Backpack</h3>
          <div className="big-sprite">
            <div className="sprite1 pexels-matheus-bertelli-2905238"></div>
          </div>
          <button
            onClick={() => handleAddToCart(0)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="body__grid b">
          <h3>Basketball Shoes</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-amar-preciado-9993287"></div>
          </div>
          <button
            onClick={() => handleAddToCart(1)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="quad-grid__wrapper c">
          <h3>Flash Sales</h3>
          <div className="body__grid quad-grid">
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-andrew-varnum-13743558"></div>
              </div>
              <h4 className="quad-grid-heading-top">Vintage Game Console</h4>
              <button
                onClick={() => handleAddToCart(2)}
                className="buy-button small-buy-button-top"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-dids-1367036"></div>
              </div>
              <h4 className="quad-grid-heading-top">Mobile Game Console</h4>
              <button
                onClick={() => handleAddToCart(3)}
                className="buy-button small-buy-button-top"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-dids-1986996"></div>
              </div>
              <h4 className="quad-grid-heading-bottom">Luggage Set</h4>
              <button
                onClick={() => handleAddToCart(4)}
                className="buy-button small-buy-button-bottom"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-kinkate-gruber-205923"></div>
              </div>
              <h4 className="quad-grid-heading-bottom">Makeup Brushes</h4>
              <button
                onClick={() => handleAddToCart(5)}
                className="buy-button small-buy-button-bottom"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="body__grid d">
          <div className="d-2">
            <h3>Sign in for the best experience</h3>
            <Link to="/sign-in">
              <button className="sign-in-securely__button">
                Sign in securely
              </button>
            </Link>
          </div>
        </div>
        <div className="quad-grid__wrapper e">
          <h3>Low Stock</h3>
          <div className="body__grid quad-grid">
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-life-of-pix-7974"></div>
              </div>
              <h4 className="quad-grid-heading-top">Laptop</h4>
              <button
                onClick={() => handleAddToCart(6)}
                className="buy-button small-buy-button-top"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-suzy-hazelwood-2533266"></div>
              </div>
              <h4 className="quad-grid-heading-top">Lipstick Kit</h4>
              <button
                onClick={() => handleAddToCart(7)}
                className="buy-button small-buy-button-top"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-luis-quintero-14174472"></div>
              </div>
              <h4 className="quad-grid-heading-bottom">Comfortable Shoes</h4>
              <button
                onClick={() => handleAddToCart(8)}
                className="buy-button small-buy-button-bottom"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-pixabay-266621"></div>
              </div>
              <h4 className="quad-grid-heading-bottom">Diamond Bracelet</h4>
              <button
                onClick={() => handleAddToCart(9)}
                className="buy-button small-buy-button-bottom"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="body__grid f">
          <h3>Fur Jacket</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-evg-kowalievska-1040173"></div>
          </div>
          <button
            onClick={() => handleAddToCart(10)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="body__grid g">
          <h3>Women's Blazer</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-godisable-jacob-794062"></div>
          </div>
          <button
            onClick={() => handleAddToCart(11)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="body__grid h">
          <h3>Golf Clubs</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-kindel-media-6573713"></div>
          </div>
          <button
            onClick={() => handleAddToCart(12)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="body__grid i flex-images">
          <div>
            <h3>Books</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-anthony--158834"></div>
            </div>
            <button
              onClick={() => handleAddToCart(13)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Tie</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-dom-j-45055"></div>
            </div>
            <button
              onClick={() => handleAddToCart(14)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Sweater</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-dom-j-45982"></div>
            </div>
            <button
              onClick={() => handleAddToCart(15)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Silver Watch</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-fernando-arcos-190819"></div>
            </div>
            <button
              onClick={() => handleAddToCart(16)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Running Shoes</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-shane-aldendorff-786003"></div>
            </div>
            <button
              onClick={() => handleAddToCart(17)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Dog Book</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-lisa-fotios-880720"></div>
            </div>
            <button
              onClick={() => handleAddToCart(18)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Tennis Shoes</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-kaique-rocha-90365"></div>
            </div>
            <button
              onClick={() => handleAddToCart(19)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="body__grid j flex-images">
          <div>
            <h3>Lamb Sweater</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-kat-smith-568022"></div>
            </div>
            <button
              onClick={() => handleAddToCart(20)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Golf Wedges</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-kindel-media-6573691"></div>
            </div>
            <button
              onClick={() => handleAddToCart(21)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Makeup Kit</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-kinkate-gruber-212236"></div>
            </div>
            <button
              onClick={() => handleAddToCart(22)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Blue Watch</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-joey-nguyn-2113994"></div>
            </div>
            <button
              onClick={() => handleAddToCart(23)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Dress Shoes</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-lukas-292999"></div>
            </div>
            <button
              onClick={() => handleAddToCart(24)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Outdoor Cap</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-marcus-murphy-1878821"></div>
            </div>
            <button
              onClick={() => handleAddToCart(25)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Skateboard</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-messala-ciulla-1018484"></div>
            </div>
            <button
              onClick={() => handleAddToCart(26)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="body__grid k">
          <h3>Outdoor Outfit</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-kristina-paukshtite-704805"></div>
          </div>
          <button
            onClick={() => handleAddToCart(27)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="quad-grid__wrapper l">
          <h3>Newly Listed</h3>
          <div className="body__grid quad-grid">
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-mark-neal-2954199"></div>
              </div>
              <h4 className="quad-grid-heading-top">Adventure Book</h4>
              <button
                onClick={() => handleAddToCart(28)}
                className="buy-button small-buy-button-top"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-ravindra-rawat-1294731"></div>
              </div>
              <h4 className="quad-grid-heading-top">Hiking Backpack</h4>
              <button
                onClick={() => handleAddToCart(29)}
                className="buy-button small-buy-button-top"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-robert-bogdan-910122"></div>
              </div>
              <h4 className="quad-grid-heading-bottom">Wallet</h4>
              <button
                onClick={() => handleAddToCart(30)}
                className="buy-button small-buy-button-bottom"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <div className="quad-grid-div ">
                <div className="sprite3 pexels-godisable-jacob-1191536"></div>
              </div>
              <h4 className="quad-grid-heading-bottom">Charm Bracelet</h4>
              <button
                onClick={() => handleAddToCart(31)}
                className="buy-button small-buy-button-bottom"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="body__grid m">
          <h3>Water Bottle</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-luis-quintero-4000090"></div>
          </div>
          <button
            onClick={() => handleAddToCart(32)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="body__grid n">
          <h3>Low Top Shoes</h3>
          <div className="quad-grid-div big-sprite">
            <div className="sprite1 pexels-aman-jakhar-2048548"></div>
          </div>
          <button
            onClick={() => handleAddToCart(33)}
            className="buy-button big-buy-button"
          >
            Add to Cart
          </button>
        </div>
        <div className="body__grid o flex-images">
          <div>
            <h3>High Top Shoes</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-mnz-1598505"></div>
            </div>
            <button
              onClick={() => handleAddToCart(34)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Casual Outfit</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-mnz-1670770"></div>
            </div>
            <button
              onClick={() => handleAddToCart(35)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Cellphone</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-mohi-syed-47261"></div>
            </div>
            <button
              onClick={() => handleAddToCart(36)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Blender</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-nicola-barts-7936980"></div>
            </div>
            <button
              onClick={() => handleAddToCart(37)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Book Series</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-pixabay-48020"></div>
            </div>
            <button
              onClick={() => handleAddToCart(38)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>Fresh Groceries</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-pixabay-264636"></div>
            </div>
            <button
              onClick={() => handleAddToCart(39)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <h3>String Bracelet</h3>
            <div className="quad-grid-div ">
              <div className="sprite2 pexels-pixabay-371285"></div>
            </div>
            <button
              onClick={() => handleAddToCart(40)}
              className="buy-button medium-buy-button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
