import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import './Tweet.css';

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/rafaelscone.png" alt="Rafael Schenider" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Rafael Schneider</strong>
          <span>@rafaelscone</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            15
          </button>

          <button type="button">
            <ArrowsClockwise />
            30
          </button>

          <button type="button">
            <Heart />
            15
          </button>
        </div>
      </div>
    </Link>
  )
}