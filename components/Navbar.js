"use client";
import { useState } from "react"; // React useState hook for state management
import Link from "next/link"; // Next.js Link for navigation
import {
  Home,
  Shield,
  Bell,
  LayoutDashboard,
  Wallet,
  CreditCard,
  History,
  Building2,
  MessageSquare,
  Settings,
} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  
    const navigation = [
    { icon: <Home className="h-4 w-4" />, label: "Home", path: "/" },
    { icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard", path: "/dashboard" },
    { icon: <Wallet className="h-4 w-4" />, label: "Recharge", path: "/recharge" },
    { icon: <CreditCard className="h-4 w-4" />, label: "Get Number", path: "/get-number" },
    { icon: <History className="h-4 w-4" />, label: "Number History", path: "/number-history" },
    { icon: <Building2 className="h-4 w-4" />, label: "Transactions", path: "/transactions" },
    { icon: <MessageSquare className="h-4 w-4" />, label: "API Gateway", path: "/api-gateway" },
    { icon: <Settings className="h-4 w-4" />, label: "SMS Checker", path: "/sms-checker" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 via-purple-800 to-gray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-black w-full shadow-md">
      {/* Header Element */}
      <header className="container mx-auto px-4 py-3 flex items-center justify-around">
        {/* logo section */}
        <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-sky-400" />
            <h1 className="text-white tracking-tight text-lg font-bold">NINJAOTP</h1>
        </div>

        {/* Navigation Section */}
        <nav className="bg-gradient-to-r from-gray-800 via-purple-800 to-gray-900 p-4 rounded-lg shadow-lg">
            {/* Burger Icon */}
            <div className="md:hidden flex justify-between items-center">
                <button onClick={toggleMenu} className="text-white">
                    {/* Burger Icon */}
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul
                className={`${
                isOpen ? 'block' : 'hidden'
                } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 text-white`}
            >
                {navigation.map((item, index) => (
                <li key={index} className="flex items-center space-x-2 hover:bg-purple-700 p-2 rounded-md transition duration-200 ease-in-out">
                    <a href={item.path} className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                    </a>
                </li>
                ))}
            </ul>
        </nav>

        {/* Right Section with Notification Bell, Balance, and Profile */}
        <div className="md:flex md:justify-between mt-4">
                {/* Notification Bell and Balance */}
                <div className="flex items-center space-x-6 text-white">
                    <div className="relative">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-2 py-1">
                        3
                        </span>
                    </div>
                    <div className="text-sm">
                        <span>Balance:</span>
                        <span className="font-semibold">₹0</span>
                    </div>
                </div>

                {/* User Profile */}
                <div className="flex items-center mt-4 md:mt-0 space-x-4">
                    <div className="flex flex-col items-end">
                        <div className="text-white font-semibold">John Doe</div>
                        <div className="text-xs text-gray-400 bg-yellow-500 px-2 py-1 rounded-full">
                        Premium User
                        </div>
                    </div>
                </div>
            </div>
      </header>
    </div>
  );
};

export default Navbar;
