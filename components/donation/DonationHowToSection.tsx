import { ta } from "date-fns/locale";
import { useState } from "react";

const DonationHowToSection = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className="app-container app-section-mt app-section-space-x flex border-b-[1px] border-app-border pb-24 lg:flex-col lg:space-x-0 lg:space-y-12 xs:pb-16">
      <div className="w-full">
        <h2 className="text-app-primary-text xs:text-h3">
          How you can contribute to protect Earth
        </h2>
        <p className="mt-6 text-app-secondary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </div>
      <div className="w-full 2xl:w-4/5 xl:w-full">
        <div className="inline-block border-b-[1px] border-app-border text-paragraph font-medium xs:flex xs:flex-col xs:space-y-2 xs:px-12">
          <button
            className={`inline-block ${
              tab === 1 ? "border-app-green-primary " : "border-white"
            } border-b-2 py-2 px-6 text-app-secondary-text xs:border-y-2`}
            onClick={() => setTab(1)}
          >
            Overview
          </button>
          <button
            className={`inline-block ${
              tab === 2 ? "border-app-green-primary " : "border-white"
            } border-b-2 py-2 px-6 text-app-secondary-text xs:border-y-2`}
            onClick={() => setTab(2)}
          >
            Impact
          </button>
          <button
            className={`inline-block ${
              tab === 3 ? "border-app-green-primary " : "border-white"
            } border-b-2 py-2 px-6 text-app-secondary-text xs:border-y-2`}
            onClick={() => setTab(3)}
          >
            What You get
          </button>
        </div>
        <div className="mt-6 w-full text-app-secondary-text">
          <div className={`${tab === 1 ? "block" : "hidden"}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <p className="mt-4">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className={`${tab === 2 ? "block" : "hidden"}`}>
            <p>
              Consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus, mi quis viverra ornare, eros
              dolor interdum nulla, ut commodo diam libero vitae erat, Lorem
              ipsum dolor sit amet.
            </p>
            <p className="mt-4">
              Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et
              justo cursus id rutrum lorem imperdiet.
            </p>
          </div>
          <div className={`${tab === 3 ? "block" : "hidden"}`}>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p className="mt-4">
              Lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean
              faucibus nibh et justo cursus id rutrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DonationHowToSection;
