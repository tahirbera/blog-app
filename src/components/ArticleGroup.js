import { Link } from "react-router-dom";
import gundem from "./gundem";
import eglence from "./eglence";
import spor from "./spor";
import { useParams } from "react-router-dom";
import popular from "./popular";

const categoryMap = {
  gundem,
  eglence,
  spor,
  // Add more categories as needed
};


export default function ArticleGroup() {
  const { kategoriadi } = useParams();
  const selectedCategory = categoryMap[kategoriadi];

  return (
    <>
      <div className="article-sec">
        <div className="left-side">
          <div className="article-list">
          {!selectedCategory && gundem.map((icer, index) => (
              <div className="article-item" key={index}>
                <div className="image">
                  <Link to={`/article/gundem/${index}`}>
                    <a >
                      <img src={icer.resim} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="small-desc">
                  <span>Euronews</span>
                  <span>21 Hour</span>
                </div>
                <div className="title">
                  <Link to={`/article/${kategoriadi}/${index}`}>
                    <a href="">{icer.title}</a>
                  </Link>
                </div>
              </div>
            ))}
            {selectedCategory && selectedCategory.map((icer, index) => (
              <div className="article-item" key={index}>
                <div className="image">
                  <Link to={`/article/${kategoriadi}/${index}`}>
                    <a>
                      <img src={icer.resim} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="small-desc">
                  <span>Euronews</span>
                  <span>21 Hour</span>
                </div>
                <div className="title">
                  <Link to={`/article/${kategoriadi}/${index}`}>
                    <a>{icer.title}</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
                  <div className="right-side">
                      <div className="popular-sec">
                          <div className="title">Popular</div>
                          <div className="popular-list">
                            {popular.map((pop, index) => (
                                <div className="popular-item">
                                <div className="top">
                                    <img src="https://static.bundle.app/newschannelicons/3084.jpg" alt=""/>
                                    <span>{pop.time}</span>
                                </div>
                                <div className="link">
                                 <a href={`article/popular/${index}`}>{pop.title}</a>
                                </div>
                            </div>
                            ))}
                              
                          </div>
                      </div>
                  </div>
              </div>
      </>
    )
  }
  