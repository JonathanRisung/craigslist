
function MessageBoard() {


    const Messages = [
        {
            "title" : "craigslist is hiring!",
            "message" : "The following positions are available in San Francisco: JavaScript Developer. To apply, please send a cover email highlighting your experience and interests as they relate to this position and paste your plain text resume into the body of the email with 'javascript developer' in the subject line. No attachments please.",
            "author" : "Craigslist",
            "url" : "https://www.craigslist.org/about/craigslist_is_hiring",
            "date" : "01.01.2023"
        },
        {
            "title" : "Life in the Fast Lane",
            "message" : "Investors behind scraper/spammer startup Radpad enjoyed a juicy, well-deserved $60m “exit” recently, as reported by the National Law Review:",
            "author" : "Jim Buckmaster",
            "url" : "http://blog.craigslist.org/2017/04/18/life-in-the-fast-lane/",
            "date" : "18.04.2017"
        },
        {
            "title" : "Found on CL: Best Friend",
            "message" : "We danced, we giggled, we took turns buying each other rounds, went on late night adventures to find an open pizza place. We agreed that a smart rule was only doing shots if you were drinking beer, not if you were having mixed drinks. We sat on the porch in our pajamas in the morning nursing our hangovers. She listened sympathetically while I told her a guy had broken my heart and this was the happiest I’d felt in months. By the end of the weekend, we found ourselves laughing so hard in a bar bathroom, gasping for breath and she loudly whispered, “You know what? You’re my favorite.” And I instantaneously exclaimed back, “You’re MY favorite!”",
            "author" : "Danielle Sepulveres",
            "url" : "http://blog.craigslist.org/2015/11/01/found-on-cl-best-friend/",
            "date" : "01.11.2015"
        }
        
    ];

    const CustomMessageElement = ({ title, message, author, url, date }) => {
        return (
          <div className="boardMessage">
                <a href={url}>{title}</a>
                <p>{message}</p>
                <h6>Posted: {date}, by {author}</h6>
          </div>
        );
      };


    function messagesForBoard(data) {
        return data.map((item) => {
            return (
                <div key={item.url}>
                    <CustomMessageElement 
                        title = {item.title}
                        message = {item.message}
                        author = {item.author}
                        url = {item.url}
                        date = {item.date}
                    />
                </div>
            );
        })

    }

    return (
        <div className="boardOfMessages">
            {messagesForBoard(Messages)}
        </div>
    );
}


export default MessageBoard;