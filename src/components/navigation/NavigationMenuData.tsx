
import React from 'react';
import { Phone, Wallet, Droplets, Percent, Home, Wrench, Layers, Camera } from 'lucide-react';
import { DropdownItem } from './NavDropdown';

export const getRoofingItems = (): DropdownItem[] => [
  {
    to: "/roof-replacement",
    icon: <Home size={14} className="mr-2" />,
    label: "Roof Replacement"
  },
  {
    to: "/roof-repair",
    icon: <Wrench size={14} className="mr-2" />,
    label: "Roof Repair"
  },
  {
    to: "/roof-cleaning",
    icon: <Droplets size={14} className="mr-2" />,
    label: "Roof Cleaning"
  }
];

export const getGutterItems = (): DropdownItem[] => [
  {
    to: "/gutter-replacement",
    icon: <Layers size={14} className="mr-2" />,
    label: "Gutters Replacement"
  },
  {
    to: "/gutter-repair",
    icon: <Percent size={14} className="mr-2" />,
    label: "Repair Promotion"
  }
];

export const getSkylightItems = (): DropdownItem[] => [
  {
    to: "/skylights",
    label: "Skylights Overview"
  }
];

export const getServicesItems = (): DropdownItem[] => [
  {
    to: "/services",
    label: "All Services"
  },
  {
    to: "/before-after",
    icon: <Camera size={14} className="mr-2" />,
    label: "Before & After"
  },
  {
    to: "/about",
    label: "About Us"
  },
  {
    to: "/warranty",
    label: "Warranty"
  },
  {
    to: "/blog",
    label: "Blog"
  }
];
