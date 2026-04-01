
import React from 'react';
import { Phone, Wallet, Calculator, Droplets, Percent, Home, Wrench, Layers } from 'lucide-react';
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
  },
  {
    to: "/roof-estimator",
    icon: <Calculator size={14} className="mr-2" />,
    label: "Cost Estimator"
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
  },
  {
    to: "/gutter-estimator",
    icon: <Calculator size={14} className="mr-2" />,
    label: "Cost Estimator"
  }
];

export const getSkylightItems = (): DropdownItem[] => [
  {
    to: "/skylights",
    label: "Skylights Overview"
  },
  {
    to: "/skylight-estimator",
    icon: <Calculator size={14} className="mr-2" />,
    label: "Price Estimator"
  }
];

export const getServicesItems = (): DropdownItem[] => [
  {
    to: "/services",
    label: "All Services"
  },
  {
    to: "/about",
    label: "About Us"
  },
  {
    to: "/warranty",
    label: "Warranty"
  }
];
