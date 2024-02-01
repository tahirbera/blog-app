import { useParams } from "react-router-dom";
import gundem from "./gundem";
import spor from "./spor";
import eglence from "./eglence";
import popular from "./popular";
import neoldu from "./neoldu";
import dahafazla from "./dahafazla";
export default function Article() {
  const { kategoriadi, id } = useParams();
  const selectedCategory = getCategoryArray(kategoriadi);
  const selectedArticle = selectedCategory[id];
  console.log(selectedCategory)

  if (!selectedArticle) {
    // Handle the case where the article is not found (optional)
    return <div>Article not found</div>;
  }

  return (
    <>
      <div className="article-area-grid ">
        <div className="article-area-container article-item">
          <div className="article-area-header">
            <span>Bera Blog</span> | <span>{selectedArticle.time}</span> 
          </div>
          <br />
          <div>
            <h1 className="article-area-title">{selectedArticle.title}</h1>
          </div>
          <br />
          <br />
          <div>
            {selectedArticle.resim && (
              <img className="article-area-image" src={selectedArticle.resim} alt="" />
            )}
          </div>
          <div className="article-area-content">{selectedArticle.content}</div>
        </div>
            <div className="daha-fazla">
                <div className="daha-fazla-title">
                    <h3>More Article</h3>
                    <br></br>
                    {dahafazla.map((daha, index) => (
                        <><div className="article-item">
                      
                        <div className="image">
                            <a href={`/article/dahafazla/${index}`}>
                                <img src={daha.resim} alt="" />
                            </a>
                        </div>
                        <div className="small-desc">
                            <span>Euronews</span>
                            <span>{daha.time}</span>
                        </div>
                        <div className="title">
                        <a href={`/article/dahafazla/${index}`}>
{daha.title}</a>
                        </div>
                   
              </div>
              <br></br>
              </>
              
                        ))}
                    
                    

                </div>
            </div>
        </div>
        </>
    )
}

function getCategoryArray(category) {
    switch (category) {
      case "gundem":
        return gundem;
      case "spor":
        return spor;
      case "eglence":
        return eglence;
      case "popular":
        return popular;
      case "neoldu":
        return neoldu;
      case "dahafazla":
          return dahafazla;
      default:
        return [];
    }
  }