import EventCalendar from "./eventCalendar";
import CreatePost from "./createPost";
import CraigslistContent from "./craigslistContent";
import MessageBoard from "./messageBoard";
import logo from "./cl_logo.png";


function Index() {
    return (
      <div className="indexBody">
        <img className="bigLogo" src={logo} alt="Craigslist"/>
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