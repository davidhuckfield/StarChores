import './Prices.css';
import React from "react";
import SemiDetachedTable from "./SemiDetachedTable";
import DetachedTable from "./DetachedTable";
import AdditionalServicesTable from './AdditionalServicesTable';

function Prices() {

  return (
    <div className="Prices">
        <h1>Price Guide</h1>
      <h3>Semi Detached</h3>
      <span>
        <SemiDetachedTable />
      </span>
      
      <p>Example: Semi-detached 3-bed property with conservatory & extension clean every 8 weeks would be £25 per clean.</p>
      <p>Please note - these guide prices may vary - if your property is an unusual layout or larger/smaller than average, <br></br>please contact us to arrange a site visit at your convenience.</p>
      
      <h3>Detached</h3>
      <span>
        <DetachedTable />
      </span>
      
      <h3>Additional Services</h3>
      <span>
        <AdditionalServicesTable />
      </span>
      
      <p>Please ask for a detailed quote for first clean / restoration cleans:</p>
      <ul>
        <li>First clean – a more intensive clean for windows that have not been cleaned in the last 6 months+</li>
        <li>Restoration clean – for windows that are heavily soiled / stained and require more than a first clean.</li>
      </ul>
    </div>

  );
}

export default Prices;