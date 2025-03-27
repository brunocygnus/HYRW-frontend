import {useState} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@heroui/react";
import Logo from "../../assets/HYRW_Logo.png";
import {FaBars} from "react-icons/fa";
import {IoChevronDownOutline} from "react-icons/io5";
import {useNavigate, useLocation} from "react-router-dom";

export default function MainNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar className='h-20 fixed top-0 z-50 bg-white-transparent px-5 flex items-center w-full md:px-20 max-w-full'>
      <NavbarBrand>
        <div
          className='flex flex-col items-center'
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt='Orsero Cortinas'
            className='h-16 cursor-pointer'
          />
        </div>
      </NavbarBrand>

      <div className='flex lg:hidden ml-auto'>
        <Button
          isIconOnly
          variant='light'
          className='text-primary-purple'
          onPress={toggleMenu}
          aria-label='Abrir menú'
        >
          <FaBars size={24} />
        </Button>
      </div>

      {/* Menú en pantallas grandes */}
      <NavbarContent className='hidden md:w-6/12 mr-10 lg:flex gap-10 ml-auto  md:justify-between'>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent font-inter text-primary-purple hover:underline hover:underline-offset-4 md:text-base'
              >
                About Us
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className='bg-[#eee9fd] flex flex-col w-56 px-3 gap-5 py-3 rounded-md'
            aria-label='About'
          >
            <DropdownItem
              key='WhoWeAre'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
              onPress={() => navigate("/about")}
            >
              Who we Are
            </DropdownItem>
            <DropdownItem
              key='HowItWorks'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
            >
              How it Works
            </DropdownItem>
            <DropdownItem
              key='universities'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
            >
              Universities
            </DropdownItem>
            <DropdownItem
              key='investors'
              className='font-inter text-primary-purple hover:bg-secondary-pink p-2'
            >
              Investors
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent font-inter text-primary-purple hover:underline hover:underline-offset-4 md:text-base'
              >
                Our Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className='bg-[#eee9fd] flex flex-col w-56 px-3 gap-5 py-3 rounded-md'
            aria-label='Services'
          >
            <DropdownItem
              key='individual'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
              onPress={() => navigate("/services/individual")}
            >
              Individual
            </DropdownItem>
            <DropdownItem
              key='couples'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
              onPress={() => navigate("/services/couples")}
            >
              Couples Therapy
            </DropdownItem>
            <DropdownItem
              key='sex-therapy'
              className='font-inter text-primary-purple hover:bg-secondary-pink p-2'
              onPress={() => navigate("/services/sex-therapy")}
            >
              Sex Theraphy
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Button
            disableRipple
            className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-inter text-primary-purple hover:underline hover:underline-offset-4 md:text-base ${
              location.pathname === "/therapists"
                ? "underline underline-offset-4 text-primary-green"
                : ""
            }`}
            onPress={() => navigate("/therapists")}
            radius='sm'
            variant='light'
          >
            Therapists
          </Button>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent font-inter text-primary-purple hover:underline hover:underline-offset-4 md:text-base'
              >
                For Providers
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className='bg-[#eee9fd] flex flex-col w-56 px-3 gap-5 py-3 rounded-md'
            aria-label='providers'
          >
            <DropdownItem
              key='clinicians'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
              onPress={() => navigate("/join-us-as-a-clinician")}
            >
              Clinicians
              <p className='text-secondary-typo-grey -mt-1 text-sm'>
                Become a HYRW Therapy provider
              </p>
            </DropdownItem>
            <DropdownItem
              key='interns'
              className='font-inter text-primary-purple mb-2 hover:bg-secondary-pink p-2'
            >
              Interns
              <p className='text-secondary-typo-grey -mt-1 text-sm'>
                Start your Career Journey
              </p>
            </DropdownItem>

            <DropdownItem
              key='careers'
              className='font-inter text-primary-purple hover:bg-secondary-pink p-2'
            >
              <a
                href='https://studio.softr.io/applications/094e2300-4403-4f4b-8b83-a6cf249a21cd/pages/d48b77e1-e0d3-4f1d-bcf2-e4adf9342b70'
                target='blank'
              >
                Careers
                <p className='text-secondary-typo-grey -mt-1 text-sm'>
                  Join our Team
                </p>
              </a>
            </DropdownItem>
            <DropdownItem
              key='network'
              className='font-inter text-primary-purple hover:bg-secondary-pink p-2'
            >
              Join Our Network
              <p className='text-secondary-typo-grey -mt-1 text-sm'>
                For Private Practice Owner
              </p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Button
            disableRipple
            className='px-5 rounded-xl w-36 bg-primary-purple hover:bg-primary-pink font-inter text-white hover:bg-secondary-pink hover:text-primary-purple md:text-lg'
            onPress={() => navigate("/book-schedule")}
            radius='sm'
            variant='light'
          >
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Menú desplegable en pantallas pequeñas */}
      {menuOpen && (
        <div className='absolute top-16 right-2 w-1/2 bg-secondary-pink rounded-xl shadow-md lg:hidden z-100'>
          <NavbarContent className='flex flex-col items-end mr-2 p-4 gap-2'>
            <NavbarItem>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-inter font-semibold hover:text-primary-purple hover:underline hover:underline-offset-4 md:text-lg ${
                  location.pathname === "/about"
                    ? "underline underline-offset-4 text-primary-green"
                    : ""
                }`}
                onClick={() => {
                  navigate("/about");
                  setMenuOpen(false);
                }}
                radius='sm'
                variant='light'
              >
                About
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-inter font-semibold hover:text-primary-purple hover:underline hover:underline-offset-4 md:text-lg ${
                  location.pathname === "/services"
                    ? "underline underline-offset-4 text-primary-green"
                    : ""
                }`}
                onClick={() => {
                  navigate("/services");
                  setMenuOpen(false);
                }}
                radius='sm'
                variant='light'
              >
                Services
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-inter font-semibold hover:text-primary-purple hover:underline hover:underline-offset-4 md:text-lg ${
                  location.pathname === "/therapists"
                    ? "underline underline-offset-4 text-primary-green"
                    : ""
                }`}
                onClick={() => {
                  navigate("/therapists");
                  setMenuOpen(false);
                }}
                radius='sm'
                variant='light'
              >
                Therapists
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-inter font-semibold hover:text-primary-purple hover:underline hover:underline-offset-4 md:text-lg ${
                  location.pathname === "/careers"
                    ? "underline underline-offset-4 text-primary-green"
                    : ""
                }`}
                onClick={() => {
                  navigate("/careers");
                  setMenuOpen(false);
                }}
                radius='sm'
                variant='light'
              >
                Careers
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                disableRipple
                className='p-0 w-48 h-12 rounded-xl bg-primary-purple hover:bg-primary-pink font-inter text-white hover:bg-secondary-pink hover:text-primary-purple md:text-lg'
                onPress={() => navigate("/book-schedule")}
                radius='sm'
                variant='light'
              >
                Book Now
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
      )}
    </Navbar>
  );
}
