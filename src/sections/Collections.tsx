import { FunctionComponent } from "react";
import { DesktopFilters, MobileFilters } from "../utils/NavLinks";
import CollectionsList from "../utils/Collections"
import { Collection } from "../components/Collection";

export const Collections: FunctionComponent = () => {
  return (
    <section className="section">
      <h2 className="section_title mb-3">Our Collections</h2>
      <div className="flex max-sm:flex-col sm:justify-between">
        <div className="hidden md:flex gap-2 mb-2">
          {DesktopFilters.map((filter, index) => (
            <button key={index} className={`font-semibold px-4 py-1 rounded-md ${filter.selected ? "bg-neutral-950 text-neutral-50" : "bg-neutral-200"}`}>
              {filter.name}
            </button>
          ))}
        </div>
        <div className="md:hidden flex gap-2 mb-2">
          {MobileFilters.map((filter, index) => (
            <button key={index} className={`font-semibold px-4 py-1 rounded-md ${!filter.selected ? "bg-neutral-950 text-neutral-50" : "bg-neutral-200"}`}>
              {filter.name}
            </button>
          ))}
        </div>
        <a className="font-semibold underline">
          View More
        </a>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {CollectionsList.map((collection, index) => (
          <Collection key={index} collectionImg={collection.image} collectionName={collection.name} collectionRate={collection.rate} />
        ))}
      </div>
    </section>
  );
};
