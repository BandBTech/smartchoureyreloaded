import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './elements/Navbar'
import {
  useLocation,
  Link
} from "react-router-dom";
import Profile from './pages/Profile'
import ChangePassword from './pages/ChangePassword'
import UserBoard from './pages/UserBoard'
import * as antIcon from "react-icons/ai";
import * as remixIcon from  "react-icons/ri";
import * as bsIcon from "react-icons/bs";
import * as tfIcon from "react-icons/tfi"; 
import * as cgIcon from "react-icons/cg";
import * as hiIcon from "react-icons/hi"; 
import i18next from 'i18next';
import Report from './pages/Report';
import SubAdmin from './pages/SubAdmin';
import Dashboard from './pages/Dashboard';
import SiteDetail from './pages/Site/SiteDetail';
import ChoureyOne from './pages/ChoureyOne';
import ChoureyTwo from './pages/ChoureyTwo';
import SafetyDeclaration from './pages/SafetyDeclaration';
import Disaster from './pages/Disaster';

const isSidebarOpen = false

const toggleSidbarMenu = (() => {
  console.log("ASD")
})

const adminItems = [
  [
    { id: '0', title: 'Dashboard', notifications: false, link: 'dashboard'},
    { id: '1', title: 'User Board', notifications: false, link: 'dashboard/userboard'},
    { id: '2', title: 'Menu Name', notifications: false, link: 'dashboard/menu'},
    { id: '3', title: 'Chourey 1', notifications: false, link: 'dashboard/choureyOne'},
    { id: '4', title: 'Chourey 2', notifications: false, link: 'dashboard/choureyTwo'},
    { id: '5', title: 'Disaster', notifications: false, link: 'dashboard/disaster'},
    { id: '6', title: 'Safety Declaration', notifications: false, link: 'dashboard/safetyDeclaration'},
    { id: '7', title: 'Report', notifications: false, link: 'dashboard/report'},
    { id: '8', title: 'CHOUREY Print', notifications: false, link: 'dashboard/print'},
    { id: '9', title: 'Sub Admin', notifications: false, link: 'dashboard/subAdmin'}
  ]
]

const subAdminItems = [
  [
    { id: '0', title: 'Dashboard', notifications: false },
    { id: '1', title: 'User Board', notifications: false },
    { id: '2', title: 'Menu Name', notifications: false },
    { id: '3', title: 'Chourey 1', notifications: false },
    { id: '4', title: 'Chourey 2', notifications: false },
    {  d: '5', title: 'Disaster', notifications: false },
    { id: '6', title: 'Site', notifications: false },
    { id: '7', title: 'Safety Declaration', notifications: false },
    { id: '8', title: 'Report', notifications: false },
    { id: '9', title: 'CHOUREY Print', notifications: false }
  ]
];


const MainDashboardPage = ({ selectedLink, onchange, i18next}) => {
  const [selected, setSelected] = useState('dashboard');
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState("Dashboard")

  useEffect(() => {
    if (selectedLink) {
      setSelected(selectedLink)
    }
  }, [selectedLink])

  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
        setSelected={setSelected}
        selected={selected}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
        selected={selected}
        onchange={onchange}
        i18next={i18next}
      />
    </div>
  )
}

function Sidebar({ onSidebarHide, showSidebar, setSelected, selected }) {
  
  return (
    <div className="fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 flex">
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <IconButton icon="res-react-dash-logo" className="w-10 h-10" />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-cyan-500">
            Smart Chourey
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {adminItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
      </div>
    </div>
  )
}

function MenuItem({ item: { id, title, notifications, link }, onClick, selected }) {

  let location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/'

  return (                        
      <Link to={redirect + link}>
        <div
          className={selected == link ? "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer sidebar-item-selected" : "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer sidebar-item"}
          onClick={() => onClick(link)}
        >  
          <SidebarIcons title={title} />
          <div className="block sm:hidden xl:block ml-2">{title}</div>
          <div className="block sm:hidden xl:block flex-grow" />
          {notifications && (
            <div className="flex sm:hidden xl:flex bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
              <div className="text-white text-sm">{notifications}</div>
            </div>
          )}
        </div>
      </Link>

  );
}

function GetCurrentSelected(selected) {
  if (selected.selected == 'dashboard') {
    return <Dashboard />
  } else if (selected.selected == 'dashboard/userboard') {
    return <UserBoard />
  } else if (selected.selected == 'dashboard/menu') {
    return 'menu'
  } else if (selected.selected == 'dashboard/choureyOne') {
    return <ChoureyOne />
  } else if (selected.selected == 'dashboard/choureyTwo') {
    return <ChoureyTwo />
  } else if (selected.selected == 'dashboard/disaster') {
    return <Disaster />
  } else if (selected.selected == 'dashboard/safetyDeclaration') {
    return <SafetyDeclaration />
  } else if (selected.selected == 'dashboard/report') {
    return <Report />
  } else if (selected.selected == 'dashboard/print') {
    return 'print'
  } else if (selected.selected == 'dashboard/subAdmin') {
    return <SubAdmin />
  } else if (selected.selected == 'dashboard/profile') {
    return <Profile />
  } else if (selected.selected == 'dashboard/changePassword') {
    return <ChangePassword />
  } else if (selected.selected == 'dashboard/siteDetail') {
    return <SiteDetail />
  }
}

function Content({ onSidebarHide, selected, onchange, i18next }) {

  const [currentDiv, setCurrentDiv] = useState('site')

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">.</div>
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Navbar onchange={onchange} i18next={i18next}/>
        {/* <main className='flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll'> */}
        <main className='flex-1 max-h-full p-5 overflow-hidden bg-gray-100'>
          <GetCurrentSelected selected={selected}/>
        </main>
      </div>
    </div>
  )
}

function SidebarIcons({ title }) {
  if (title == 'Dashboard') {
    return <antIcon.AiOutlineDashboard />
  } else if (title == 'User Board') {
    return <remixIcon.RiDashboardLine />
  } else if (title == 'Menu Name') {
    return <bsIcon.BsMenuButtonWideFill />
  } else if (title == 'Chourey 1') {
    return <tfIcon.TfiBlackboard />
  } else if (title == 'Chourey 2') {
    return <tfIcon.TfiBlackboard />
  } else if (title == 'Disaster') {
    return <cgIcon.CgDanger />
  } else if (title == 'Safety Declaration') {
    return <antIcon.AiOutlineSafety />
  } else if (title == 'Report') {
    return <hiIcon.HiOutlineDocumentReport />
  } else if (title == 'CHOUREY Print') {
    return <bsIcon.BsPrinter />
  } else if (title == 'Sub Admin') {
    return <remixIcon.RiUserSettingsLine />
  } 
}

function IconButton({
  onClick = () => {},
  icon = 'options',
  className = 'w-4 h-4',
}) {
  return (
    <button onClick={onClick} type="button" className={className}>
      <img
        src={`https://assets.codepen.io/3685267/${icon}.svg`}
        alt=""
        className="w-full h-full"
      />
    </button>
  );
}

export default MainDashboardPage