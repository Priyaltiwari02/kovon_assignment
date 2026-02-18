import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { NavItem, Feature, Step, FooterSection } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },

  { label: 'About', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Complete Employer Network',
    description: 'Jobs across 50+ countries.',
    icon: React.createElement(BoltIcon, { fontSize: 'large', color: 'primary' }),
  },
  {
    id: 2,
    title: 'Fully Transparent Process',
    description: 'Clear steps, fair fees, zero misinformation.',
    icon: React.createElement(VerifiedUserIcon, { fontSize: 'large', color: 'primary' }),
  },
  {
    id: 3,
    title: 'One-Stop Solution',
    description: 'Verification, training, documents, and placement in one place.',
    icon: React.createElement(GroupsIcon, { fontSize: 'large', color: 'primary' }),
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Connect Account',
    description: 'Easily link your existing data sources using our secure OAuth flow.',
  },
  {
    number: 2,
    title: 'Configure Setup',
    description: 'Customize your preferences and set up your automated workflows.',
  },
  {
    number: 3,
    title: 'Invite Team',
    description: 'Bring your colleagues onboard and assign roles and permissions.',
  },
  {
    number: 4,
    title: 'Go Live',
    description: 'Launch your project and start monitoring real-time performance.',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Cloud Solutions', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
];

export const SERVICES = [
    {
      title: "Cloud Deployment",
      description:
        "Deploy your applications globally with one-click scalable infrastructure.",
    },
    {
      title: "Real-time Analytics",
      description:
        "Monitor performance, traffic, and usage with powerful dashboards.",
    },
    {
      title: "Secure Storage",
      description:
        "Enterprise-grade encryption and secure data management solutions.",
    },
    {
      title: "Team Collaboration",
      description:
        "Work together with role-based access and live collaboration tools.",
    },
    {
      title: "Automation Tools",
      description:
        "Automate workflows and eliminate repetitive manual processes.",
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated technical assistance available anytime you need help.",
    },
  ];