import { useState } from 'react';
import styled from 'styled-components';

const Collapsible = styled.div`
  display: ${(p) => (p.isOpen ? "block" : "none")};
`;

const SubSection = ({ name, url }) => {
  return (
    <div>
        <a href={url}>{name}</a>
    </div>
  );
};

const MainSection = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  return (
    <div className="parent">
      <div className="parent--label" onClick={handleToggle}>
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </div>
  );
};


function CraigslistContent() {

    const websiteContent = [
        {
            "type" : "main",
            "id" : "1",
            "name" : "Community",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "1.5",
                    "name" : "See all community posts",
                    "url" : "https://newyork.craigslist.org/search/ccc"
                },
                {
                    "type" : "sub",
                    "id" : "2",
                    "name" : "Activities",
                    "url" : "https://newyork.craigslist.org/search/act"
                },
                {
                    "type" : "sub",
                    "id" : "3",
                    "name" : "Artists",
                    "url" : "https://newyork.craigslist.org/search/ats"
                },
                {
                    "type" : "sub",
                    "id" : "4",
                    "name" : "Childcare",
                    "url" : "https://newyork.craigslist.org/search/kid"
                },
                {
                    "type" : "sub",
                    "id" : "5",
                    "name" : "Classes",
                    "url" : "https://newyork.craigslist.org/search/cls",
                },
                {
                    "type" : "sub",
                    "id" : "6",
                    "name" : "Events",
                    "url" : "https://newyork.craigslist.org/search/eve",
                },
                {
                    "type" : "sub",
                    "id" : "7",
                    "name" : "General",
                    "url" : "https://newyork.craigslist.org/search/com",
                },
                {
                    "type" : "sub",
                    "id" : "8",
                    "name" : "Groups",
                    "url" : "https://newyork.craigslist.org/search/grp",
                }
                
            ]
        },
        {
            "type" : "main",
            "id" : "10",
            "name" : "Services",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "8.5",
                    "name" : "See all Service posts",
                    "url" : "https://newyork.craigslist.org/search/bbb"
                },
                {
                    "type" : "sub",
                    "id" : "9",
                    "name" : "Labor/moving",
                    "url" : "https://newyork.craigslist.org/search/lbs"
                },
                {
                    "type" : "sub",
                    "id" : "10",
                    "name" : "Computer",
                    "url" : "https://newyork.craigslist.org/search/cps"
                },
                {
                    "type" : "sub",
                    "id" : "11",
                    "name" : "Financial",
                    "url" : "https://newyork.craigslist.org/search/fns"
                },
                {
                    "type" : "sub",
                    "id" : "12",
                    "name" : "Real Estate",
                    "url" : "https://newyork.craigslist.org/search/rts"
                },
                {
                    "type" : "sub",
                    "id" : "13",
                    "name" : "Lessons",
                    "url" : "https://newyork.craigslist.org/search/lss"
                },
                {
                    "type" : "sub",
                    "id" : "14",
                    "name" : "Legal",
                    "url" : "https://newyork.craigslist.org/search/lgs"
                }
            ]
        }, 
        {
            "type" : "main",
            "id" : "15",
            "name" : "For sale",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "15.5",
                    "name" : "See all sale posts",
                    "url" : "https://newyork.craigslist.org/search/sss"
                },
                {
                    "type" : "sub",
                    "id" : "16",
                    "name" : "Antiques",
                    "url" : "https://newyork.craigslist.org/search/ata"
                },
                {
                    "type" : "sub",
                    "id" : "17",
                    "name" : "Appliances",
                    "url" : "https://newyork.craigslist.org/search/ppa"
                },
                {
                    "type" : "sub",
                    "id" : "18",
                    "name" : "Garage Sale",
                    "url" : "https://newyork.craigslist.org/search/gms"
                },
                {
                    "type" : "sub",
                    "id" : "19",
                    "name" : "Cars and Trucks",
                    "url" : "https://newyork.craigslist.org/search/cta"
                },
                {
                    "type" : "sub",
                    "id" : "20",
                    "name" : "Free",
                    "url" : "https://newyork.craigslist.org/search/zip"
                }
            ]
        },
        {
            "type" : "main",
            "id" : "21",
            "name" : "Jobs",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "21.5",
                    "name" : "See all job posts",
                    "url" : "https://newyork.craigslist.org/search/jjj"
                },
                {
                    "type" : "sub",
                    "id" : "22",
                    "name" : "Software",
                    "url" : "https://newyork.craigslist.org/search/sof"
                },
                {
                    "type" : "sub",
                    "id" : "23",
                    "name" : "Education",
                    "url" : "https://newyork.craigslist.org/search/edu"
                },
                {
                    "type" : "sub",
                    "id" : "24",
                    "name" : "Art / Media / Design",
                    "url" : "https://newyork.craigslist.org/search/med"
                },
                {
                    "type" : "sub",
                    "id" : "25",
                    "name" : "Retail / Wholesale",
                    "url" : "https://newyork.craigslist.org/search/ret"
                },
                {
                    "type" : "sub",
                    "id" : "26",
                    "name" : "Etc / Misc",
                    "url" : "https://newyork.craigslist.org/search/etc"
                }

            ]
        },
        {
            "type" : "main",
            "id" : "27",
            "name" : "Housing",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "26.5",
                    "name" : "See all housing posts",
                    "url" : "https://newyork.craigslist.org/search/hhh"
                },
                {
                    "type" : "sub",
                    "id" : "27",
                    "name" : "Apartment / Housing",
                    "url" : "https://newyork.craigslist.org/search/apa"
                },
                {
                    "type" : "sub",
                    "id" : "28",
                    "name" : "Rooms wanted",
                    "url" : "https://newyork.craigslist.org/search/sha"
                },
                {
                    "type" : "sub",
                    "id" : "29",
                    "name" : "Parking / Storage",
                    "url" : "https://newyork.craigslist.org/search/prk"
                },
                {
                    "type" : "sub",
                    "id" : "30",
                    "name" : "Real estate for sale",
                    "url" : "https://newyork.craigslist.org/search/rea"
                }
            ]
        },
        {
            "type" : "main",
            "id" : "31",
            "name" : "Discussion Forums",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "31.5",
                    "name" : "See all Discussion Forums",
                    "url" : "https://forums.craigslist.org/?areaID=3"
                },
                {
                    "type" : "sub",
                    "id" : "32",
                    "name" : "Apple",
                    "url" : "https://forums.craigslist.org/?areaID=3&forumID=3232"
                },
                {
                    "type" : "sub",
                    "id" : "33",
                    "name" : "Gaming",
                    "url" : "https://forums.craigslist.org/?areaID=3&forumID=85"
                },
                {
                    "type" : "sub",
                    "id" : "34",
                    "name" : "Haiku",
                    "url" : "https://forums.craigslist.org/?areaID=3&forumID=575"
                },
                {
                    "type" : "sub",
                    "id" : "35",
                    "name" : "Help",
                    "url" : "https://forums.craigslist.org/?areaID=3&forumID=9"
                },
                {
                    "type" : "sub",
                    "id" : "36",
                    "name" : "Science",
                    "url" : "https://forums.craigslist.org/?areaID=3&forumID=96"
                }
            ]
        },
        {
            "type" : "main",
            "id" : "37",
            "name" : "Gigs",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "37.5",
                    "name" : "See all gig posts",
                    "url" : "https://newyork.craigslist.org/search/ggg"
                },
                {
                    "type" : "sub",
                    "id" : "38",
                    "name" : "Computer",
                    "url" : "https://newyork.craigslist.org/search/cpg"
                },
                {
                    "type" : "sub",
                    "id" : "39",
                    "name" : "Creative",
                    "url" : "https://newyork.craigslist.org/search/crg"
                },
                {
                    "type" : "sub",
                    "id" : "40",
                    "name" : "Crew",
                    "url" : "https://newyork.craigslist.org/search/cwg"
                },
                {
                    "type" : "sub",
                    "id" : "41",
                    "name" : "Event",
                    "url" : "https://newyork.craigslist.org/search/evg"
                },
                {
                    "type" : "sub",
                    "id" : "42",
                    "name" : "Talent",
                    "url" : "https://newyork.craigslist.org/search/tlg"
                }
            ]
        },
        {
            "type" : "main",
            "id" : "43",
            "name" : "Resumes",
            "subs" : [
                {
                    "type" : "mainsub",
                    "id" : "43.5",
                    "name" : "See posted resumes",
                    "url" : "https://newyork.craigslist.org/search/rrr"
                }
            ]
        }
    ];

    function treeRecursive(data) {
        // loop through the data
        return data.map((item) => {
          
          if (item.type === "sub") {
            return (
              <div className="subSection" key={item.id}>
                  <div>
                    <SubSection
                      name={item.name}
                      url={item.url}
                    />
                  </div>
              </div>
            );
          }

          if (item.type === "mainsub") {
            return (
                <div key={item.id} className='mainSubSection'>
                    <SubSection 
                        name={item.name}
                        url={item.url}
                    />
                </div>
            );
          }

          // if its a folder render <Folder />
          if (item.type === "main") {
            return (
                <div key={item.id} className='mainSection'>
                    <MainSection name={item.name}>
                    {/* Call the <TreeRecursive /> component with the current item.childrens */}
                        {treeRecursive(item.subs)}
                    </MainSection>
                </div>
            ); 
          }
          return null;
        });
    }



    return (
        <div className='allSections'>
            {treeRecursive(websiteContent)}
        </div>
        
    );
}

export default CraigslistContent;