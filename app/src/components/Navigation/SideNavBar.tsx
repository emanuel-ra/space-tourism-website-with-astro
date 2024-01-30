import { useEffect } from "react";
import { useSideNavStore } from "../../store/sidenav";
export const SideNavbar = () => {
  const open = useSideNavStore((state) => state.open);
  const setOpen = useSideNavStore((state) => state.setOpen);

  useEffect(() => {
    const element = document.getElementById("sideNavBar");
    element?.classList.toggle("hidden");
  }, [open]);

  return (
    <>
      <div
        id="sideNavBar"
        className={`md:hidden w-2/3 h-dvh absolute -top-0 -right-0 bg-white/25  backdrop-blur-lg hidden transition ease-in-out
            
        `}
      >
        <section className="flex justify-end py-8 px-10">
          <button onClick={() => setOpen()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </button>
        </section>
        <ul className="px-10 flex flex-col gap-y-5 text-white font-semibold uppercase tracking-wide	">
          <SideNavbarLink url="/" label="00 Home" />
          <SideNavbarLink url="/destination" label="01 Destination" />
          <SideNavbarLink url="/crew" label="02 Crew" />
          <SideNavbarLink url="/technology" label="03 Technology" />
        </ul>
      </div>
    </>
  );
};

const SideNavbarLink = ({ url, label }: { url: string; label: string }) => {
  return (
    <>
      <li>
        <a href={url}>{label}</a>
      </li>
    </>
  );
};
