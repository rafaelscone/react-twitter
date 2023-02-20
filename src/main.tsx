import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './Tweet';

// Importing directly CSS
import "./global.css"

// Import SVG
import twitterLogo from './assets/logo.svg'

import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

const editUser = false;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      
      <aside className='sidebar'>
        <img className="logo" src={twitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <a href="" className='active' >
            <House weight='fill'></House>
            <span>Home</span>
          </a>
          <a href="">
            <Hash></Hash>
            <span>Explore</span>
          </a>
          <a href="">
            <Bell></Bell>
            <span>Notifications</span>
          </a>
          <a href="">
            <Envelope></Envelope>
            <span>Messages</span>
          </a>
          <a href="">
            <BookmarkSimple></BookmarkSimple>
            <span>Bookmarks</span>
          </a>
          <a href="">
            <FileText></FileText>
            <span>Lists</span>
          </a>
          <a href="">
            <User></User>
            <span>Profile</span>
          </a>
          <a href="">
            <DotsThreeCircle></DotsThreeCircle>
            <span>More</span>
          </a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>

      <div className="content">
        <main className='timeline'>
          <div className='timeline-header'></div>
          
          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/9641945?v=4" alt="Rafael Scone" />
              <textarea id="tweet" placeholder='Whats happening'></textarea>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className='separator'></div>
        </main>
      </div>

    </div>

    
  </React.StrictMode>
)
