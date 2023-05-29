import EventCalendar from "./eventCalendar";
import CreatePost from "./createPost";
import CraigslistContent from "./craigslistContent";
import MessageBoard from "./messageBoard";


function Index() {
    return (
      <div className="indexBody">
        <img className="bigLogo" src="https://assets.stickpng.com/images/62017abff2f75f000484e72a.png" alt="Craigslist"/>
        <br/> <br/>

        <div className="searchBar">
          <div>🔎</div>
          <input type="text" placeholder="Search Craigslist"/>
        </div>

        <div className="rightSide">
            <h2>Craigslist Posts</h2>
            <div>
              <CraigslistContent />
            </div>
        </div>

        <div className="siteContent">
          <div className="leftSide">
            <h3>Event Calendar</h3>
            <div>
              <EventCalendar />
            </div>
            <br/>
            <div className="createPost">
              <CreatePost />
            </div>
          </div>
          <div className="messageBoard">
            <h3>Message board!</h3>
            <div>
              <MessageBoard />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Index;