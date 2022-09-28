import { ta } from "date-fns/locale";
import { useState } from "react";

const DonationHowToSection = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className="app-container app-section-mt flex space-x-24 border-b-[1px] border-app-border pb-24">
      <div className="w-full">
        <h2 className="text-app-primary-text">
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
        <div className="inline-block border-b-[1px] border-app-border text-paragraph font-medium">
          <button
            className={`inline-block ${
              tab === 1 ? "border-b-2" : "border-none"
            } border-app-green-primary py-2 px-6  text-app-secondary-text`}
            onClick={() => setTab(1)}
          >
            Overview
          </button>
          <button
            className={`inline-block ${
              tab === 2 ? "border-b-2" : "border-none"
            } border-app-green-primary py-2 px-6 text-app-secondary-text`}
            onClick={() => setTab(2)}
          >
            Impact
          </button>
          <button
            className={`inline-block ${
              tab === 3 ? "border-b-2" : "border-none"
            } border-app-green-primary py-2 px-6 text-app-secondary-text`}
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
