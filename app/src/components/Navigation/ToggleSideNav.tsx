import { HamburgerIcon } from "../icons/HamburgerIcon";
import { useSideNavStore } from "../../store/sidenav";
export const ToggleSideNav = () => {
  const open = useSideNavStore((state) => state.open);
  const setOpen = useSideNavStore((state) => state.setOpen);

  return (
    <button className="md:hidden" onClick={() => setOpen()}>
      <HamburgerIcon />
    </button>
  );
};
