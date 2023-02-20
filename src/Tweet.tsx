interface TweetProps{
    user: string,
    children: string,
    content: string,
    like?: number
}

// Creating variabel
const tweetStyles ={
    borderRadius: 8
}

export function Tweet(props: TweetProps){
    //console.log(props)
    return (
        <div className="tweet" style={tweetStyles}>
            <h3 style={{color: "red"}}>{props.user}</h3>
            <p>{props.content}</p>
            <p>{props.children}</p>
            <button>Like { props.like ?? 0}</button>
        </div>
        
    )
}