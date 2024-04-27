import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const LeftNav = () => {
  return (
    <nav className="hidden md:flex text-customdarkgreen fixed top-0 left-0 h-full flex flex-col font-poiretfont font-bold text-xl ml-5 mt-10">
    <div className="flex flex-col h-full gap-2" style={{ minHeight: '120px' }}>
        <a href='https://github.com/aniketsapra' target='_blank' rel="noopener noreferrer"> 
                        <GitHubIcon className="foothovertext" sx={{ fontSize: 40 }} />
        </a>
        <a href='https://www.linkedin.com/in/aniketsapra/' target='_blank' rel="noopener noreferrer"> 
                        <LinkedInIcon className="foothovertext" sx={{ fontSize: 40 }} />
        </a>
    </div>
  </nav>
  )
}

export default LeftNav
